// ============================================
// SERVICE WORKER - Offline Caching
// ============================================

const CACHE_NAME = 'presenter-v2';

// Core assets to cache immediately on install
// Using relative paths to work on both localhost and GitHub Pages subdirectories
const CORE_ASSETS = [
  './',
  './index.html',
  './decks/decks.json',
  'https://cdn.jsdelivr.net/npm/marked@4.3.0/marked.min.js'
];

// Icon assets to cache
const ICON_ASSETS = [
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png'
];

// ============================================
// INSTALL EVENT - Cache core assets
// ============================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching core assets');
      return cache.addAll(CORE_ASSETS);
    }).then(() => {
      // Skip waiting makes the new SW active immediately
      return self.skipWaiting();
    })
  );
});

// ============================================
// ACTIVATE EVENT - Clean up old caches
// ============================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches if the name doesn't match current
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// ============================================
// FETCH EVENT - Serve from cache, fallback to network
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other protocols
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Skip requests to different origins (CDN, etc)
  if (url.origin !== self.location.origin && !url.href.includes('cdn.jsdelivr.net')) {
    return;
  }

  // Strategy: Cache First for assets, Network First for HTML and API
  let strategy;

  if (url.pathname.includes('/decks/')) {
    // Deck content: Network First (always get latest)
    strategy = networkFirst(request);
  } else if (url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname === '') {
    // HTML: Network First (for updates)
    strategy = networkFirst(request);
  } else if (url.pathname.includes('/icons/') || url.pathname.includes('.js') || url.pathname.includes('.css')) {
    // Static assets: Cache First (fast loading)
    strategy = cacheFirst(request);
  } else {
    // Everything else: Network First with cache fallback
    strategy = networkFirst(request);
  }

  event.respondWith(strategy);
});

// ============================================
// CACHING STRATEGIES
// ============================================

// Cache First: Check cache first, if miss, go to network
// Best for: Static assets that rarely change (CSS, JS, images)
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    console.log('[SW] Cache hit:', request.url);
    return cached;
  }

  console.log('[SW] Cache miss, fetching:', request.url);
  const response = await fetch(request);

  // Cache the new response for future use
  if (response.ok) {
    cache.put(request, response.clone());
  }

  return response;
}

// Network First: Try network first, if fail, use cache
// Best for: Dynamic content (HTML, API calls, deck content)
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  try {
    console.log('[SW] Fetching from network:', request.url);
    const response = await fetch(request);

    // Cache successful responses
    if (response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.log('[SW] Network failed, using cache:', request.url);

    if (cached) {
      return cached;
    }

    // Return a custom offline fallback for HTML requests
    if (request.destination === 'document') {
      return new Response(
        '<html><body><h1>Offline</h1><p>You are currently offline. Please check your connection.</p></body></html>',
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    throw error;
  }
}

// ============================================
// MESSAGE HANDLER - For manual cache updates
// ============================================
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data === 'CACHE_NEW_CONTENT') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CORE_ASSETS);
      })
    );
  }
});
