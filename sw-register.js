// Auto-update service worker registration
if ('serviceWorker' in navigator) {
    let refreshing = false;

    // Detect controller change and reload
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
            console.log('[PWA] New version activated, reloading page...');
            refreshing = true;
            window.location.reload();
        }
    });

    window.addEventListener('load', () => {
        // Clear old caches on load to ensure fresh start
        caches.keys().then(cacheNames => {
            const oldCaches = cacheNames.filter(name =>
                name.startsWith('shivpuri-local-') &&
                !name.includes('20251213-1401')
            );
            if (oldCaches.length > 0) {
                console.log('[PWA] Clearing old caches:', oldCaches);
                Promise.all(oldCaches.map(name => caches.delete(name)));
            }
        });

        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('[PWA] Service Worker registered!', registration);

                // Force immediate update check
                registration.update();

                // Check for updates every 30 seconds (more frequent)
                setInterval(() => {
                    registration.update();
                }, 30000);

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('[PWA] New service worker installing...');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('[PWA] New version available! Auto-updating...');
                            // Tell the new SW to skip waiting
                            newWorker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                });
            })
            .catch(err => console.log('[PWA] Service Worker failed:', err));
    });
}
