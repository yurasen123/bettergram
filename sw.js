const CACHE_NAME = 'bettergram-v14';
const PROGRESS_CACHE_NAME = 'bettergram-state-v1';
const ASSETS_TO_CACHE = [
  './',
  './styles.css',
  './app.js',
  './levels.js',
  './translations.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon.png'
];

// Helper to remove WebKit's redirected flag.
// Safari strictly forbids Service Workers from returning responses with `redirected: true`
// for navigation requests, throwing: "Response served by service worker has redirections".
async function cleanResponse(response) {
  if (!response || !response.redirected) {
    return response;
  }
  const body = await response.blob();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ASSETS_TO_CACHE);
      // Pre-cache index.html using the clean root response to avoid Cloudflare Pages 308 redirect
      const rootResponse = await cache.match('./');
      if (rootResponse) {
        const body = await rootResponse.blob();
        await cache.put('./index.html', new Response(body, {
          status: rootResponse.status,
          statusText: rootResponse.statusText,
          headers: rootResponse.headers
        }));
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== PROGRESS_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;
  if (url.pathname.includes('__bettergram_state__')) return;

  event.respondWith(
    (async () => {
      // 1. Try cache match
      let cachedResponse = await caches.match(event.request);

      // If navigating to index.html or root and not matched directly
      if (!cachedResponse && event.request.mode === 'navigate') {
        cachedResponse = (await caches.match('./')) || (await caches.match('./index.html'));
      }

      if (cachedResponse) {
        cachedResponse = await cleanResponse(cachedResponse);

        // Stale-while-revalidate: update cache in background
        event.waitUntil(
          fetch(event.request)
            .then(async (networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const cleaned = await cleanResponse(networkResponse);
                const cache = await caches.open(CACHE_NAME);
                await cache.put(event.request, cleaned);
              }
            })
            .catch(() => {})
        );

        return cachedResponse;
      }

      // 2. Fetch from network
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.status === 200) {
          const cleaned = await cleanResponse(networkResponse);
          const responseToCache = cleaned.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, responseToCache);
          return cleaned;
        }
        return await cleanResponse(networkResponse);
      } catch (error) {
        if (event.request.mode === 'navigate') {
          const fallback = (await caches.match('./')) || (await caches.match('./index.html'));
          if (fallback) {
            return await cleanResponse(fallback);
          }
        }
        throw error;
      }
    })()
  );
});
