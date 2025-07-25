const CACHE_NAME = 'mimarket-cache-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['/', '/index.html', '/style.css', '/app.js', '/products.json', '/manifest.json']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));