/**
 * Shivpuri Local - Community Forum
 * Using Firebase for auth and real-time database
 */

// Firebase Configuration - Replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyC-EUvVO-Pv_HpqXKdTQ_bL2DLMMVS0eGY",
    authDomain: "shivpurilocal.firebaseapp.com",
    projectId: "shivpurilocal",
    storageBucket: "shivpurilocal.firebasestorage.app",
    messagingSenderId: "763757178444",
    appId: "1:763757178444:web:6e27a1b2f2bd11d47c4ee9",
    measurementId: "G-DB24PP475M"
};

// Profanity filter - basic list (expand as needed)
const PROFANITY_LIST = [
    'badword1', 'badword2', // Add actual words to filter
    // Hindi profanity
    'गाली1', 'गाली2'
];

const ForumApp = {
    // State
    currentUser: null,
    isGuest: false,
    currentCategory: 'all',
    posts: [],
    db: null,
    auth: null,
    unsubscribe: null,
    authUnsubscribe: null,  // Track auth listener
    initialized: false,      // Prevent double initialization

    // Category info
    categories: {
        general: { icon: '💬', label: 'General', labelHi: 'सामान्य' },
        help: { icon: '❓', label: 'Help', labelHi: 'सहायता' },
        events: { icon: '📢', label: 'Events', labelHi: 'कार्यक्रम' },
        marketplace: { icon: '🛒', label: 'Buy/Sell', labelHi: 'खरीदें/बेचें' },
        traffic: { icon: '🚗', label: 'Traffic', labelHi: 'यातायात' },
        jobs: { icon: '💼', label: 'Jobs', labelHi: 'नौकरी' }
    },

    // Initialize
    init() {
        console.log('[Forum] Initializing...', this.initialized ? '(already initialized)' : '(first time)');

        // If already initialized, just refresh UI with current auth state
        if (this.initialized) {
            console.log('[Forum] Already initialized, refreshing UI only');
            this.setupEventListeners();
            this.updateAuthUI();
            this.loadPosts();
            return;
        }

        // Initialize Sentry (only once)
        if (typeof Sentry !== 'undefined' && !window._sentryInitialized) {
            Sentry.init({
                dsn: "https://8922a1eb759c408c9c777c151d72b12f@o4510554243334144.ingest.de.sentry.io/4510554785120336",
                tracesSampleRate: 1.0,
            });
            window._sentryInitialized = true;
            console.log('[Forum] Sentry initialized');
        }

        // Check if Firebase is loaded
        if (typeof firebase === 'undefined') {
            console.error('[Forum] Firebase not loaded');
            this.showError('Forum is temporarily unavailable. Please try again later.');
            return;
        }

        // Initialize Firebase (only once)
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('[Forum] Firebase app initialized');
        }

        this.auth = firebase.auth();
        this.db = firebase.firestore();

        // Set auth persistence to LOCAL - survives browser restarts
        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                console.log('[Forum] Auth persistence set to LOCAL');
            })
            .catch((error) => {
                console.error('[Forum] Auth persistence error:', error);
            });

        // Enable offline persistence for Firestore (only once)
        this.db.enablePersistence()
            .catch((err) => {
                if (err.code == 'failed-precondition') {
                    console.log('[Forum] Firestore persistence failed: Multiple tabs open');
                } else if (err.code == 'unimplemented') {
                    console.log('[Forum] Firestore persistence not supported by browser');
                }
            });

        // Check for Redirect Result (for Google Login fallback)
        this.auth.getRedirectResult().then((result) => {
            if (result.user) {
                console.log('[Forum] Redirect Login Success:', result.user.email);
                this.currentUser = result.user;
                this.isGuest = result.user.isAnonymous;
                this.updateAuthUI();
                this.hideLoginModal();
                this.showToast('Welcome, ' + (result.user.displayName || 'User') + '!');
                this.syncUserWithDB(result.user);
            }
        }).catch((error) => {
            if (error.code === 'auth/unauthorized-domain') {
                console.error('[Forum] Redirect Login Error:', error);
                this.showError('Login Failed: Domain not authorized. Add to Firebase Console.');
            }
            // Silently ignore other errors (normal when no redirect happened)
        });

        // Setup event listeners
        this.setupEventListeners();

        // Setup auth state listener (only once)
        if (this.authUnsubscribe) {
            this.authUnsubscribe(); // Clean up any existing listener
        }

        this.authUnsubscribe = this.auth.onAuthStateChanged(user => {
            console.log('[Forum] Auth state changed:', user ? (user.isAnonymous ? 'Guest' : user.email) : 'Signed out');
            if (user) {
                this.currentUser = user;
                this.isGuest = user.isAnonymous;
                this.updateAuthUI();

                // Sync user with SQL DB
                if (!user.isAnonymous) {
                    this.syncUserWithDB(user);
                }
            } else {
                this.currentUser = null;
                this.isGuest = false;
                this.updateAuthUI();
            }
        });

        // Mark as initialized
        this.initialized = true;

        // Load posts
        this.loadPosts();
    },

    // Sync user with SQL DB
    async syncUserWithDB(user) {
        // Use relative URL for both local and Vercel deployment
        const API_URL = '/api/user/sync';

        try {
            console.log('[Forum] Syncing user to DB...', user.email);
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                })
            });

            const data = await res.json();
            console.log('[Forum] Sync result:', data);

            if (res.ok) {
                // Optional: ensure we know it worked
                // this.showToast('Account synced'); 
            } else {
                console.error('[Forum] Sync failed:', data);
            }
        } catch (error) {
            console.error('User sync error:', error);
        }
    },

    // Setup event listeners
    setupEventListeners() {
        // Category tabs
        const tabs = document.querySelectorAll('.cat-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentCategory = tab.dataset.category;
                this.filterPosts();
            });
        });

        // New post form
        const form = document.getElementById('new-post-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitPost();
            });
        }

        // Login modal
        const closeModal = document.getElementById('close-login-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => this.hideLoginModal());
        }

        // Google login
        const googleBtn = document.getElementById('google-login-btn');
        if (googleBtn) {
            googleBtn.addEventListener('click', () => this.loginWithGoogle());
        }

        // Guest login
        const guestBtn = document.getElementById('guest-login-btn');
        if (guestBtn) {
            guestBtn.addEventListener('click', () => this.loginAsGuest());
        }

        // Close modal on outside click
        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.hideLoginModal();
            });
        }
    },

    // Update auth UI
    updateAuthUI() {
        const container = document.getElementById('auth-container');
        if (!container) return;

        // Use Firebase's current user as source of truth
        const user = this.currentUser || this.auth?.currentUser;
        const isLoggedIn = !!user;

        console.log('[Forum] Updating auth UI, user:', user?.email || user?.uid || 'none', 'isGuest:', this.isGuest);

        if (isLoggedIn) {
            const name = user.displayName || (user.isAnonymous ? 'Guest User' : 'User');
            const photo = user.photoURL;

            container.innerHTML = `
                <div class="auth-user-info">
                    <div class="auth-avatar">
                        ${photo ? `<img src="${photo}" alt="${name}">` : '👤'}
                    </div>
                    <span class="auth-name">${name}</span>
                </div>
                <button class="auth-logout-btn" onclick="ForumApp.logout()">Logout</button>
            `;
        } else {
            container.innerHTML = `
                <span style="color: var(--gray-600);">Join the discussion</span>
                <button class="auth-login-btn" onclick="ForumApp.showLoginModal()">Login / Sign Up</button>
            `;
        }
    },

    // Show login modal
    showLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.add('active');
    },

    // Hide login modal
    hideLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.remove('active');
    },

    // Login with Google - Try popup first, fallback to redirect
    async loginWithGoogle() {
        console.log('[Forum] Starting Google Login...');
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            // Try popup first (works better on most browsers)
            const result = await this.auth.signInWithPopup(provider);
            console.log('[Forum] Google popup login success:', result.user.email);

            // Explicitly set state
            this.currentUser = result.user;
            this.isGuest = false;

            // Update UI immediately
            this.updateAuthUI();
            this.hideLoginModal();
            this.showToast('Welcome, ' + (result.user.displayName || result.user.email) + '!');
            this.syncUserWithDB(result.user);
        } catch (error) {
            console.error('[Forum] Google popup error:', error.code, error.message);

            // Handle specific errors
            if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
                // Fallback to redirect
                console.log('[Forum] Popup blocked/closed, trying redirect...');
                this.showToast('Redirecting to Google login...');
                try {
                    await this.auth.signInWithRedirect(provider);
                } catch (redirectError) {
                    console.error('[Forum] Redirect also failed:', redirectError);
                    this.showToast('Login failed. Please try again.');
                }
            } else if (error.code === 'auth/unauthorized-domain') {
                this.showError('Login failed: This domain is not authorized. Please contact admin to add this domain to Firebase Console.');
            } else if (error.code === 'auth/cancelled-popup-request') {
                // User clicked login multiple times, ignore
                console.log('[Forum] Multiple popup requests, ignoring...');
            } else {
                this.showToast('Login failed: ' + error.message);
            }
        }
    },

    // Login as guest (Anonymous Firebase Auth)
    async loginAsGuest() {
        console.log('[Forum] Starting Guest Login...');
        try {
            const result = await this.auth.signInAnonymously();
            console.log('[Forum] Guest login success, UID:', result.user.uid);
            this.currentUser = result.user;
            this.isGuest = true;
            this.hideLoginModal();
            this.updateAuthUI();
            this.showToast('You are now posting as Guest');
        } catch (error) {
            console.error('[Forum] Guest login error:', error.code, error.message);
            if (error.code === 'auth/operation-not-allowed') {
                this.showError('Guest Login is disabled. Admin needs to enable "Anonymous" sign-in in Firebase Console > Authentication > Sign-in method.');
            } else if (error.code === 'auth/admin-restricted-operation') {
                this.showError('Guest Login is restricted. Please contact admin.');
            } else {
                this.showToast('Guest login failed: ' + error.message);
            }
        }
    },

    // Logout
    async logout() {
        try {
            await this.auth.signOut();
            localStorage.removeItem('forum_guest');
            this.currentUser = null;
            this.isGuest = false;
            this.updateAuthUI();
            this.showToast('Logged out');
        } catch (error) {
            console.error('Logout error:', error);
        }
    },

    // Check profanity
    containsProfanity(text) {
        const lowerText = text.toLowerCase();
        return PROFANITY_LIST.some(word => lowerText.includes(word.toLowerCase()));
    },

    // Submit new post
    async submitPost() {
        // Ensure accurate auth state
        const user = this.auth.currentUser;

        if (!user) {
            this.showLoginModal();
            return;
        }

        const category = document.getElementById('post-category').value;
        const title = document.getElementById('post-title').value.trim();
        const content = document.getElementById('post-content').value.trim();
        const isAnonymous = document.getElementById('post-anonymous').checked;

        // Validation
        if (!category) {
            this.showToast('Please select a category');
            return;
        }

        if (!content) {
            this.showToast('Please write something');
            return;
        }

        // Profanity check
        if (this.containsProfanity(content) || this.containsProfanity(title)) {
            this.showToast('Please remove inappropriate language');
            return;
        }

        // Disable submit button
        const submitBtn = document.getElementById('submit-post-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Posting...';

        try {
            const post = {
                category: category,
                title: title || null,
                content: content,
                authorId: user.uid, // Strict UID usage
                authorName: isAnonymous ? 'Anonymous' : (user.displayName || 'Guest User'),
                authorPhoto: isAnonymous ? null : (user.photoURL || null),
                isAnonymous: isAnonymous,
                isGuest: user.isAnonymous,
                likes: 0,
                likedBy: [],
                replies: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            console.log('Attemping to post:', post);
            await this.db.collection('forum_posts').add(post);

            // Clear form
            document.getElementById('post-category').value = '';
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
            document.getElementById('post-anonymous').checked = false;

            this.showToast('Post published! 🎉');

        } catch (error) {
            console.error('FAILED to post. Error:', error);
            console.error('Error Code:', error.code);
            console.error('Error Message:', error.message);

            if (error.code === 'permission-denied') {
                this.showError('Posting failed: Permission Denied. Are you logged in?');
            } else {
                this.showToast('Failed to post: ' + error.message);
            }
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Post</span> →';
        }
    },

    // Load posts from Firestore
    async loadPosts() {
        const container = document.getElementById('posts-container');
        if (!container) return;

        container.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Loading discussions...</p>
            </div>
        `;

        try {
            // Unsubscribe from previous listener if exists
            if (this.unsubscribe) {
                this.unsubscribe();
            }

            // Real-time listener with metadata changes to handle "vanishing" posts
            this.unsubscribe = this.db.collection('forum_posts')
                .orderBy('createdAt', 'desc')
                .limit(50)
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {
                    const hasPendingWrites = snapshot.metadata.hasPendingWrites;
                    const fromCache = snapshot.metadata.fromCache;
                    console.log(`[Forum] Snapshot: ${snapshot.size} docs, cache: ${fromCache}, pending: ${hasPendingWrites}`);

                    this.posts = [];
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        const docMeta = doc.metadata;

                        // Handle documents with pending writes (newly created posts)
                        if (docMeta.hasPendingWrites || !data.createdAt) {
                            // Use current time for posts that haven't synced yet
                            data.createdAt = { toDate: () => new Date() };
                            console.log(`[Forum] Doc ${doc.id} has pending writes, using local time`);
                        }

                        this.posts.push({ id: doc.id, ...data });
                    });

                    // Always render, even during pending state - prevents "vanishing"
                    this.filterPosts();
                }, error => {
                    console.error('[Forum] Posts load error:', error.code, error.message);
                    if (error.code === 'failed-precondition') {
                        this.showError('Database index required. Please contact admin.');
                    } else if (error.code === 'permission-denied') {
                        this.showError('Permission denied. Firestore rules may need updating.');
                    } else {
                        this.showError('Could not load posts. Please refresh.');
                    }
                });

        } catch (error) {
            console.error('[Forum] Posts load error:', error);
            this.showError('Could not load posts. Please refresh.');
        }
    },

    // Filter posts by category
    filterPosts() {
        const filtered = this.currentCategory === 'all'
            ? this.posts
            : this.posts.filter(p => p.category === this.currentCategory);

        this.renderPosts(filtered);
    },

    // Render posts
    renderPosts(posts) {
        const container = document.getElementById('posts-container');
        if (!container) return;

        if (!posts || posts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">💬</div>
                    <h3>No discussions yet</h3>
                    <p>Be the first to start a conversation!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = posts.map(post => this.renderPostCard(post)).join('');

        // Add like button listeners
        container.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const postId = btn.dataset.postId;
                this.toggleLike(postId);
            });
        });
    },

    // Render single post card
    renderPostCard(post) {
        const cat = this.categories[post.category] || { icon: '💬', label: post.category };

        // Handle potential null date from serverTimestamp() during local sync
        let timeAgo = 'Just now';
        try {
            if (post.createdAt) {
                timeAgo = this.getTimeAgo(post.createdAt.toDate());
            }
        } catch (e) {
            console.error('Date error:', e);
        }

        const isLiked = post.likedBy?.includes(this.currentUser?.uid);

        return `
            <article class="post-card">
                <div class="post-card-header">
                    <div class="post-author">
                        <div class="post-avatar">
                            ${post.authorPhoto ? `<img src="${post.authorPhoto}" alt="">` : '👤'}
                        </div>
                        <div class="post-author-info">
                            <span class="post-author-name">${post.authorName || 'Anonymous'}</span>
                            <div class="post-meta">
                                <span class="post-category-badge">${cat.icon} ${cat.label}</span>
                                <span>•</span>
                                <span>${timeAgo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ${post.title ? `<h3 class="post-title">${this.escapeHtml(post.title)}</h3>` : ''}
                <p class="post-content">${this.escapeHtml(post.content)}</p>
                <div class="post-actions">
                    <button class="post-action-btn like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        ${isLiked ? '❤️' : '🤍'} ${post.likes || 0}
                    </button>
                    <button class="post-action-btn" onclick="ForumApp.sharePost('${post.id}')">
                        📤 Share
                    </button>
                </div>
            </article>
        `;
    },

    // Toggle like
    async toggleLike(postId) {
        if (!this.currentUser && !this.isGuest) {
            this.showLoginModal();
            return;
        }

        const userId = this.currentUser?.uid || 'guest_' + Date.now();
        const postRef = this.db.collection('forum_posts').doc(postId);

        try {
            const doc = await postRef.get();
            if (!doc.exists) return;

            const post = doc.data();
            const likedBy = post.likedBy || [];
            const isLiked = likedBy.includes(userId);

            if (isLiked) {
                // Unlike
                await postRef.update({
                    likes: firebase.firestore.FieldValue.increment(-1),
                    likedBy: firebase.firestore.FieldValue.arrayRemove(userId)
                });
            } else {
                // Like
                await postRef.update({
                    likes: firebase.firestore.FieldValue.increment(1),
                    likedBy: firebase.firestore.FieldValue.arrayUnion(userId)
                });
            }
        } catch (error) {
            console.error('Like error:', error);
            this.showToast('Could not update like');
        }
    },

    // Share post
    sharePost(postId) {
        const url = `${window.location.origin}/forum#${postId}`;

        if (navigator.share) {
            navigator.share({
                title: 'Shivpuri Local Forum',
                text: 'Check out this discussion on Shivpuri Local',
                url: url
            });
        } else {
            navigator.clipboard.writeText(url);
            this.showToast('Link copied!');
        }
    },

    // Get relative time
    getTimeAgo(date) {
        if (!date) return 'Just now';

        const seconds = Math.floor((new Date() - date) / 1000);

        if (seconds < 60) return 'Just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
        if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

        return date.toLocaleDateString();
    },

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // Show error
    showError(message) {
        const container = document.getElementById('posts-container');
        if (container) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    <h3>Something went wrong</h3>
                    <p>${message}</p>
                    <button onclick="ForumApp.loadPosts()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--gray-900); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        Retry
                    </button>
                </div>
            `;
        }
    },

    // Show toast
    showToast(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            background: var(--gray-900);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            animation: slideIn 0.3s ease;
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Initialize on page load
window.addEventListener('page-loaded', (e) => {
    if (e.detail.page === '/forum') {
        ForumApp.init();
    }
});

// Direct load check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const path = window.location.pathname;
        if (path === '/forum' || path === '/forum.html') {
            ForumApp.init();
        }
    });
} else {
    const path = window.location.pathname;
    if (path === '/forum' || path === '/forum.html') {
        ForumApp.init();
    }
}
