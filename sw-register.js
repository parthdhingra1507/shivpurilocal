/**
 * Service Worker Registration - Auto-Update System
 * Aggressively checks for updates and forces refresh
 */

if ('serviceWorker' in navigator) {
    let refreshing = false;
    let updateCheckInterval = null;

    // Detect controller change and reload page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
            console.log('[PWA] New version activated! Reloading...');
            refreshing = true;
            window.location.reload();
        }
    });

    window.addEventListener('load', () => {
        // Clear ALL old caches on page load
        if ('caches' in window) {
            caches.keys().then(cacheNames => {
                console.log('[PWA] Clearing all caches for fresh start...');
                return Promise.all(cacheNames.map(name => caches.delete(name)));
            });
        }

        // Register service worker
        navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
            .then(registration => {
                console.log('[PWA] Service Worker registered');

                // Force immediate update check
                registration.update();

                // Check for updates every 10 seconds (aggressive)
                updateCheckInterval = setInterval(() => {
                    registration.update().catch(() => { });
                }, 10000);

                // Also check when page becomes visible
                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'visible') {
                        registration.update().catch(() => { });
                    }
                });

                // Handle new service worker found
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('[PWA] New service worker found! Installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // New content available - force update NOW
                                console.log('[PWA] New version ready! Activating...');
                                newWorker.postMessage({ type: 'SKIP_WAITING' });
                            } else {
                                // First install
                                console.log('[PWA] First install complete');
                            }
                        }
                    });
                });

                // If there's already a waiting worker, activate it
                if (registration.waiting) {
                    console.log('[PWA] Waiting worker found, activating...');
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
            })
            .catch(err => console.error('[PWA] Registration failed:', err));
    });

    // Also check for updates when coming back online
    window.addEventListener('online', () => {
        navigator.serviceWorker.ready.then(registration => {
            registration.update();
        });
    });
}

// Version check via meta tag (optional - for debugging)
window.APP_VERSION = new Date().toISOString();
console.log('[App] Version:', window.APP_VERSION);
