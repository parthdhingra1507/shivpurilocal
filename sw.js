const CACHE_VERSION = '20251213-1401'; // Fixed asset caching and chrome-extension errors
const CACHE_NAME = `shivpuri-local-${CACHE_VERSION}`;
// 👆 Just update the timestamp above when deploying (format: YYYYMMDD-HHMM)
const ASSETS = [
    '/',
    '/index.html',
    '/transport.html',
    '/places.html',
    '/food.html',
    '/news.html',
    '/style.css',
    '/common.js',
    '/i18n.js',
    '/router.js',
    '/transport.js',
    '/places.js',
    '/food.js',
    '/news.js',
    '/manifest.json',
    '/social-preview.png'
];

// Install Event
self.addEventListener('install', (event) => {
    console.log('[SW] Installing version:', CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching assets');
                // Use addAll with error handling
                return cache.addAll(ASSETS).catch((err) => {
                    console.error('[SW] Failed to cache some assets:', err);
                    // Continue anyway - don't block installation
                });
            })
            .then(() => self.skipWaiting()) // Force activate immediately
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating version:', CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Claiming clients');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Listen for skip waiting message
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[SW] Received SKIP_WAITING message');
        self.skipWaiting();
    }
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    // Skip non-HTTP(S) requests (chrome-extension://, etc.)
    if (!event.request.url.startsWith('http')) {
        return;
    }

    // NETWORK ONLY for API requests (Never cache news)
    if (event.request.url.includes('/api/')) {
        return; // Fallback to browser default (Network)
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then((response) => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        // Double-check URL scheme before caching
                        if (event.request.url.startsWith('http')) {
                            cache.put(event.request, responseToCache).catch((err) => {
                                console.warn('[SW] Failed to cache:', event.request.url, err);
                            });
                        }
                    });
                    return response;
                });
            })
            .catch(() => {
                // Return offline page if available
                return caches.match('/');
            })
    );
});
