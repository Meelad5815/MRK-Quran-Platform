self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('mrk-quran-v1').then((cache) => cache.addAll(['/'])));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request);
    })
  );
});
