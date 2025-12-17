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

        // Setup event listeners
        this.setupEventListeners();

        // Check auth state
        this.auth.onAuthStateChanged(user => {
            if (user) {
                this.currentUser = user;
                this.isGuest = user.isAnonymous;
                this.updateAuthUI();
            } else {
                // Check for stored guest session
                const guestSession = localStorage.getItem('forum_guest');
                if (guestSession) {
                    this.isGuest = true;
                    this.currentUser = { displayName: 'Guest User', photoURL: null };
                }
                this.updateAuthUI();
            }
        });

        // Load posts
        this.loadPosts();
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
            await this.auth.signInWithPopup(provider);
            this.hideLoginModal();
            this.showToast('Welcome! You can now post.');
        } catch (error) {
            console.error('Google login error:', error);
            this.showToast('Login failed. Please try again.');
        }
    },

    // Login as guest
    loginAsGuest() {
        this.isGuest = true;
        this.currentUser = { displayName: 'Guest User', photoURL: null };
        localStorage.setItem('forum_guest', 'true');
        this.updateAuthUI();
        this.hideLoginModal();
        this.showToast('Posting as Guest');
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
        // Check if logged in
        if (!this.currentUser && !this.isGuest) {
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
                authorId: this.currentUser?.uid || 'guest',
                authorName: isAnonymous ? 'Anonymous' : (this.currentUser?.displayName || 'Guest User'),
                authorPhoto: isAnonymous ? null : (this.currentUser?.photoURL || null),
                isAnonymous: isAnonymous,
                isGuest: this.isGuest,
                likes: 0,
                likedBy: [],
                replies: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await this.db.collection('forum_posts').add(post);

            // Clear form
            document.getElementById('post-category').value = '';
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
            document.getElementById('post-anonymous').checked = false;

            this.showToast('Post published! 🎉');

            // Reload posts
            this.loadPosts();

        } catch (error) {
            console.error('Post error:', error);
            this.showToast('Failed to post. Please try again.');
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
            // Real-time listener
            this.db.collection('forum_posts')
                .orderBy('createdAt', 'desc')
                .limit(50)
                .onSnapshot(snapshot => {
                    this.posts = [];
                    snapshot.forEach(doc => {
                        this.posts.push({ id: doc.id, ...doc.data() });
                    });
                    this.filterPosts();
                }, error => {
                    console.error('Posts load error:', error);
                    this.showError('Could not load posts. Please refresh.');
                });

        } catch (error) {
            console.error('Posts load error:', error);
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
