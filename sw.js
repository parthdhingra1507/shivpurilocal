/**
 * Service Worker - Auto-updating Version
 * Cache version is auto-generated from deploy time
 */

// Auto-generated version - updates with each deployment
const CACHE_VERSION = 'v' + Date.now();  // Will be replaced by build time
const CACHE_NAME = `shivpuri-local-${CACHE_VERSION}`;

// Core assets to cache (but with network-first strategy)
const CORE_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json'
];

// Assets that change frequently - use network-first
const DYNAMIC_ASSETS = [
    '/transport.html',
    '/places.html',
    '/food.html',
    '/news.html',
    '/forum.html',
    '/common.js',
    '/i18n.js',
    '/router.js',
    '/transport.js',
    '/places.js',
    '/food.js',
    '/news.js',
    '/forum.js',
    '/forum.css'
];

// Install Event - Minimal caching, let network-first handle updates
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    // Skip waiting immediately - don't wait for old SW to die
    self.skipWaiting();
});

// Activate Event - Clean up ALL old caches immediately
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating, cleaning all old caches...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Delete ALL caches to ensure fresh content
                    console.log('[SW] Deleting cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            console.log('[SW] Taking control of all clients');
            return self.clients.claim();
        })
    );
});

// Listen for skip waiting message from page
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[SW] Received SKIP_WAITING, activating now');
        self.skipWaiting();
    }

    // Force refresh all clients when requested
    if (event.data && event.data.type === 'REFRESH_ALL') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => client.navigate(client.url));
        });
    }
});

// Fetch Event - NETWORK FIRST for everything (ensures freshness)
self.addEventListener('fetch', (event) => {
    // Skip non-HTTP(S) requests
    if (!event.request.url.startsWith('http')) {
        return;
    }

    // Skip API requests entirely - let browser handle
    if (event.request.url.includes('/api/')) {
        return;
    }

    // NETWORK FIRST strategy - always try to get fresh content
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // Got fresh response - return it
                // Optionally cache for offline (but we prioritize freshness)
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open('offline-cache').then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Network failed - try cache as fallback for offline support
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Last resort - return cached homepage
                    return caches.match('/');
                });
            })
    );
});
