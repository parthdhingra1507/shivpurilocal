/**
 * Shivpuri Local - Community Forum
 * Diagnostic Version
 */

const firebaseConfig = {
    apiKey: "AIzaSyC-EUvVO-Pv_HpqXKdTQ_bL2DLMMVS0eGY",
    authDomain: "shivpurilocal.firebaseapp.com",
    projectId: "shivpurilocal",
    storageBucket: "shivpurilocal.firebasestorage.app",
    messagingSenderId: "763757178444",
    appId: "1:763757178444:web:6e27a1b2f2bd11d47c4ee9",
    measurementId: "G-DB24PP475M"
};

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
        console.log('[Forum] Initializing...');

        // Check if Firebase is loaded
        if (typeof firebase === 'undefined') {
            console.error('[Forum] Firebase not loaded');
            this.showError('Forum is temporarily unavailable. Please try again later.');
            return;
        }

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.auth = firebase.auth();
        this.db = firebase.firestore();

        // Enable offline persistence
        this.db.enablePersistence()
            .catch((err) => {
                if (err.code == 'failed-precondition') {
                    console.log('Persistence failed: Multiple tabs open');
                } else if (err.code == 'unimplemented') {
                    console.log('Persistence not supported by browser');
                }
            });

        // Check for Redirect Result (for Google Login)
        this.auth.getRedirectResult().then((result) => {
            if (result.user) {
                console.log('Redirect Login Success:', result.user.uid);
                this.showToast('Welcome back! You can now post.');
                this.syncUserWithDB(result.user);
            }
        }).catch((error) => {
            console.error('Redirect Login Error:', error);
            if (error.code === 'auth/unauthorized-domain') {
                this.showError('Login Failed: Domain not authorized. Add to Firebase Console.');
            } else {
                this.showToast('Login failed: ' + error.message);
            }
        });

        // Setup event listeners
        this.setupEventListeners();

        // Check auth state
        this.auth.onAuthStateChanged(user => {
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

        // Load posts
        this.loadPosts();
    },

    // Sync user with SQL DB
    async syncUserWithDB(user) {
        const isLocal = window.location.hostname === 'localhost';
        const API_URL = isLocal ? '/api/user/sync' : 'https://shivpurilocal-backend.onrender.com/api/user/sync';

        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                })
            });
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

        if (this.currentUser || this.isGuest) {
            const name = this.currentUser?.displayName || 'Guest User';
            const photo = this.currentUser?.photoURL;

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

    // Login with Google
    async loginWithGoogle() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({ prompt: 'select_account' });
            await this.auth.signInWithRedirect(provider);
        } catch (error) {
            console.error('Google login error:', error);
            this.showToast('Could not start login: ' + error.message);
        }
    },

    // Login as guest
    async loginAsGuest() {
        try {
            await this.auth.signInAnonymously();
            this.hideLoginModal();
            this.showToast('Posting as Guest');
        } catch (error) {
            console.error('Guest login error:', error);
            if (error.code === 'auth/operation-not-allowed') {
                this.showError('Guest Login Disabled. Enable "Anonymous" in Firebase Console.');
            } else {
                this.showToast('Guest login failed: ' + error.message);
            }
        }
    },

    // Logout
    async logout() {
        try {
            await this.auth.signOut();
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
        const user = this.auth.currentUser;
        if (!user) {
            this.showLoginModal();
            return;
        }

        const category = document.getElementById('post-category').value;
        const title = document.getElementById('post-title').value.trim();
        const content = document.getElementById('post-content').value.trim();
        const isAnonymous = document.getElementById('post-anonymous').checked;

        if (!category || !content) {
            this.showToast('Please fill in category and content');
            return;
        }

        const submitBtn = document.getElementById('submit-post-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Posting...';

        try {
            const post = {
                category: category,
                title: title || null,
                content: content,
                authorId: user.uid,
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

            const docRef = await this.db.collection('forum_posts').add(post);
            console.log('Post published with ID:', docRef.id);

            // Clear form
            document.getElementById('post-category').value = '';
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
            document.getElementById('post-anonymous').checked = false;

            this.showToast('Post published! 🎉');

        } catch (error) {
            console.error('Post error:', error);
            if (error.code === 'permission-denied') {
                this.showError('Permission Denied: Check Firestore rules.');
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

        try {
            if (this.unsubscribe) this.unsubscribe();

            // Real-time listener
            this.unsubscribe = this.db.collection('forum_posts')
                .orderBy('createdAt', 'desc')
                .limit(50)
                .onSnapshot(snapshot => {
                    this.posts = [];
                    snapshot.forEach(doc => {
                        this.posts.push({ id: doc.id, ...doc.data() });
                    });
                    this.filterPosts();
                }, error => {
                    console.error('Snapshot error:', error);
                    if (error.message.includes('index')) {
                        const link = error.message.match(/https:\/\/console\.firebase\.google\.com[^\s]+/);
                        if (link) {
                            this.showError('Database indexing required. <a href="' + link[0] + '" target="_blank">Click here to fix.</a>');
                        }
                    } else {
                        this.showError('Could not load posts. Please refresh.');
                    }
                });

        } catch (error) {
            console.error('Load error:', error);
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
        const timeAgo = this.getTimeAgo(post.createdAt?.toDate());
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
        if (!this.currentUser) {
            this.showLoginModal();
            return;
        }
        const userId = this.currentUser.uid;
        const postRef = this.db.collection('forum_posts').doc(postId);
        try {
            const doc = await postRef.get();
            if (!doc.exists) return;

            const post = doc.data();
            const likedBy = post.likedBy || [];
            const isLiked = likedBy.includes(userId);

            if (isLiked) {
                await postRef.update({
                    likes: firebase.firestore.FieldValue.increment(-1),
                    likedBy: firebase.firestore.FieldValue.arrayRemove(userId)
                });
            } else {
                await postRef.update({
                    likes: firebase.firestore.FieldValue.increment(1),
                    likedBy: firebase.firestore.FieldValue.arrayUnion(userId)
                });
            }
        } catch (error) {
            console.error('Like error:', error);
        }
    },

    // Share post
    sharePost(postId) {
        const url = `${window.location.origin}/forum#${postId}`;
        if (navigator.share) {
            navigator.share({ title: 'Shivpuri Local Forum', url: url });
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
                    <h3>Error</h3>
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
        toast.style.cssText = 'background:var(--gray-900); color:white; padding:0.75rem 1.5rem; border-radius:8px; margin-bottom:0.5rem; animation:slideIn 0.3s ease;';
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

// Initialization patterns
window.addEventListener('page-loaded', (e) => {
    if (e.detail.page === '/forum') ForumApp.init();
});

if (document.readyState !== 'loading') {
    const p = window.location.pathname;
    if (p === '/forum' || p === '/forum.html') ForumApp.init();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const p = window.location.pathname;
        if (p === '/forum' || p === '/forum.html') ForumApp.init();
    });
}


