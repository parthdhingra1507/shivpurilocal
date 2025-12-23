// Theme Toggle Logic
const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;

// Initialize Theme
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark-mode');
    if (darkToggle) darkToggle.textContent = '☀️';
}

if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        const isDark = html.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        darkToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// Language Toggle Connector (Connects UI button to i18n system)
const langToggle = document.getElementById('lang-toggle');
if (langToggle && window.i18n) {
    langToggle.addEventListener('click', () => {
        window.i18n.toggle();
    });
}

// PWA Install Logic
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', () => {
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
                // Optionally hide the button after install
                installBtn.style.display = 'none';
            });
        });
    }
});

// Optionally hide button if app is installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installBtn) installBtn.style.display = 'none';
    logAnalyticsEvent('pwa_install', { platform: navigator.platform });
});

// ===================================
// ANALYTICS
// ===================================
function getSessionId() {
    let sid = sessionStorage.getItem('analytics_sid');
    if (!sid) {
        sid = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('analytics_sid', sid);
    }
    return sid;
}

async function logAnalyticsEvent(eventType, metadata = {}) {
    // Only log if not localhost (unless testing)
    // Use relative path for Vercel
    const API_URL = '/api/analytics/log';

    try {
        const currentUser = (typeof firebase !== 'undefined') ? firebase.auth().currentUser : null;

        let utm = {};
        try {
            const storedUtm = localStorage.getItem('utm_params');
            if (storedUtm) utm = JSON.parse(storedUtm);
        } catch (e) { }

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventType: eventType,
                userId: currentUser ? currentUser.uid : null,
                sessionId: getSessionId(),
                utm_source: utm.utm_source || null,
                utm_medium: utm.utm_medium || null,
                utm_campaign: utm.utm_campaign || null,
                metadata: JSON.stringify({
                    url: window.location.pathname,
                    referrer: document.referrer,
                    lang: typeof currentLang !== 'undefined' ? currentLang : 'en',
                    ...metadata
                })
            })
        });
    } catch (e) {
        // Silent fail for analytics
        if (isLocal) console.error('Analytics error:', e);
    }
}

// Track Page View
window.addEventListener('load', () => {
    // Small delay to ensure auth state might be ready (though usually it's async)
    setTimeout(() => {
        logAnalyticsEvent('page_view');
    }, 1000);
});

// ===================================
// SWIPE NAVIGATION
// ===================================
(function initSwipeNavigation() {
    // Page order for navigation
    const pages = [
        '/',
        '/transport',
        '/places',
        '/food',
        '/news',
        '/forum'
    ];

    // Get current page index
    function getCurrentPageIndex() {
        let currentPath = window.location.pathname;
        // Normalize path
        if (currentPath === '' || currentPath === '/index.html') currentPath = '/';
        // Remove .html extension if present
        currentPath = currentPath.replace('.html', '');

        const index = pages.findIndex(p => p === currentPath);
        return index >= 0 ? index : 0;
    }

    // Navigate to page
    function navigateToPage(index) {
        if (index >= 0 && index < pages.length) {
            window.location.href = pages[index];
        }
    }

    // Touch handling
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const minSwipeDistance = 80; // Minimum swipe distance in pixels
    const maxVerticalDistance = 100; // Max vertical movement to still count as horizontal swipe

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Check if it's a horizontal swipe (not vertical scroll)
        if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < maxVerticalDistance) {
            const currentIndex = getCurrentPageIndex();

            if (deltaX < 0) {
                // Swipe LEFT - go to NEXT page
                navigateToPage(currentIndex + 1);
            } else {
                // Swipe RIGHT - go to PREVIOUS page
                navigateToPage(currentIndex - 1);
            }
        }
    }

    console.log('[Swipe Nav] Initialized - Swipe left/right to navigate');
})();

// ===================================
// UTM TRACKING
// ===================================
(function captureUTMParams() {
    try {
        const params = new URLSearchParams(window.location.search);
        const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        const captured = {};
        let hasUtm = false;

        utmFields.forEach(field => {
            if (params.has(field)) {
                captured[field] = params.get(field);
                hasUtm = true;
            }
        });

        // If UTM params found, store them (overwrite previous session if new ones found)
        if (hasUtm) {
            // Add timestamp
            captured['utm_timestamp'] = new Date().toISOString();
            localStorage.setItem('utm_params', JSON.stringify(captured));
            console.log('[UTM] Captured:', captured);
        }
    } catch (e) {
        console.error('Error capturing UTM:', e);
    }
})();
