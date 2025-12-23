/**
 * Shivpuri Local - Authentication Module
 * Shared across all pages for global login in nav bar
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

const AuthApp = {
    currentUser: null,
    isGuest: false,
    auth: null,
    db: null,
    initialized: false,

    async init() {
        if (this.initialized) return;

        // Check if Firebase is loaded (SDKs must be in HTML)
        if (typeof firebase === 'undefined') {
            console.warn('[Auth] Firebase SDKs not found');
            return;
        }

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.auth = firebase.auth();
        this.db = firebase.firestore();

        // Setup auth state listener
        this.auth.onAuthStateChanged(user => {
            console.log('[Auth] State changed:', user ? (user.isAnonymous ? 'Guest' : user.email) : 'Signed out');
            this.currentUser = user;
            this.isGuest = user ? user.isAnonymous : false;
            this.updateNavAuthUI();

            // Dispatch event for other components (like Forum)
            const event = new CustomEvent('auth-state-changed', { detail: { user, isGuest: this.isGuest } });
            window.dispatchEvent(event);

            if (user && !user.isAnonymous) {
                this.syncUserWithDB(user);
            }
        });

        // Setup Global Event Listeners for Login Buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('#nav-login-btn') || e.target.closest('.trigger-login')) {
                this.showLoginModal();
            }
        });

        // Initialize Modal Listeners
        this.setupModalListeners();

        this.initialized = true;
    },

    setupModalListeners() {
        const closeModal = document.getElementById('close-login-modal');
        if (closeModal) closeModal.onclick = () => this.hideLoginModal();

        const googleBtn = document.getElementById('google-login-btn');
        if (googleBtn) googleBtn.onclick = () => this.loginWithGoogle();

        const guestBtn = document.getElementById('guest-login-btn');
        if (guestBtn) guestBtn.onclick = () => this.loginAsGuest();

        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.onclick = (e) => {
                if (e.target === modal) this.hideLoginModal();
            };
        }
    },

    updateNavAuthUI() {
        const containers = document.querySelectorAll('.nav-auth-container');
        const user = this.currentUser;

        containers.forEach(container => {
            if (user) {
                const name = user.displayName || (user.isAnonymous ? 'Guest' : 'User');
                const photo = user.photoURL;

                container.innerHTML = `
                    <div class="nav-user-info" title="${name}">
                        <div class="nav-avatar">
                            ${photo ? `<img src="${photo}" alt="">` : '👤'}
                        </div>
                        <span class="nav-user-name">${name.split(' ')[0]}</span>
                        <button class="nav-logout-btn" onclick="AuthApp.logout()">✕</button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <button id="nav-login-btn" class="nav-login-btn">
                        Login
                    </button>
                `;
            }
        });
    },

    showLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.add('active');
    },

    hideLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.remove('active');
    },

    async loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await this.auth.signInWithPopup(provider);
            this.hideLoginModal();
        } catch (error) {
            console.error('Google Login Error', error);
            if (error.code === 'auth/popup-blocked') {
                await this.auth.signInWithRedirect(provider);
            }
        }
    },

    async loginAsGuest() {
        try {
            await this.auth.signInAnonymously();
            this.hideLoginModal();
        } catch (error) {
            console.error('Guest Login Error', error);
        }
    },

    async logout() {
        try {
            await this.auth.signOut();
        } catch (error) {
            console.error('Logout error', error);
        }
    },

    async syncUserWithDB(user) {
        const API_URL = '/api/user/sync';
        try {
            let utm = {};
            const storedUtm = localStorage.getItem('utm_params');
            if (storedUtm) utm = JSON.parse(storedUtm);

            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    utm_source: utm.utm_source || null,
                    utm_medium: utm.utm_medium || null,
                    utm_campaign: utm.utm_campaign || null
                })
            });
        } catch (e) { }
    }
};

// Auto-init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AuthApp.init());
} else {
    AuthApp.init();
}
