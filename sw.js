
const CACHE_NAME = 'horoscope-app-v1';

// Install event: Cache all essential assets
self.addEventListener('install', (event) => {
  // Pre-caching is not aggressive to allow for CDN updates.
  // The main pages are cached for an instant shell load.
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const assets = ['/', '/index.html', '/vite.svg'];

      // Attempt to cache the PWA manifest. During a production build Vite
      // fingerprints the manifest file (e.g. `/assets/manifest-xxxx.webmanifest`).
      // Fetching `/manifest.webmanifest` will follow any redirect to the hashed
      // file so we cache the final response URL to ensure offline availability.
      try {
        const response = await fetch('/manifest.webmanifest');
        if (response.ok) {
          const manifestPath = response.url.replace(self.location.origin, '');
          assets.push(manifestPath);
          await cache.put(manifestPath, response.clone());
        }
      } catch (err) {
        console.error('Failed to cache manifest', err);
      }

      await cache.addAll(assets);
    })()
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Serve from network first, falling back to cache.
// This ensures content is up-to-date while providing offline support.
self.addEventListener('fetch', (event) => {
  // Do not cache API calls to Google
  if (event.request.url.includes('generativelanguage.googleapis.com')) {
    return event.respondWith(fetch(event.request));
  }

  // Use a stale-while-revalidate strategy for other assets.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Check if we received a valid response to cache
        if (networkResponse && networkResponse.status === 200) {
             const responseToCache = networkResponse.clone();
             caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
             });
        }
        return networkResponse;
      }).catch(error => {
          console.error('Fetch failed; returning cached response if available.', error);
          // If fetch fails and we have a cached response, the cachedResponse will be returned.
          // If not, the error propagates.
      });

      // Return cached response immediately if available, and fetch update in background.
      return cachedResponse || fetchPromise;
    })
  );
});
