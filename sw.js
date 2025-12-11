const CACHE_VERSION = '20251211-2225'; // Simplified Architecture
const CACHE_NAME = `shivpuri-local-${CACHE_VERSION}`;
// 👆 Just update the timestamp above when deploying (format: YYYYMMDD-HHMM)
const ASSETS = [
    '/',
    '/index.html',
    '/transport',
    '/places',
    '/food',
    '/news',
    '/style.css',
    '/script.js',
    '/common.js',
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
                return cache.addAll(ASSETS);
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
    // 1. NETWORK ONLY for API requests (Never cache news)
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
                        cache.put(event.request, responseToCache);
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
