// Morello PWA Service Worker
const CACHE_NAME = 'morello-v4';
const ASSETS = [
  '/MORELLO-PROFORMA-GENERATOR/',
  '/MORELLO-PROFORMA-GENERATOR/index.html',
  '/MORELLO-PROFORMA-GENERATOR/imgs.js',
  '/MORELLO-PROFORMA-GENERATOR/catalog.js',
];

// Install: cache core assets
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: clean old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', function(e) {
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        if(response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(e.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        return caches.match(e.request).then(function(cached){
          return cached || caches.match('/MORELLO-PROFORMA-GENERATOR/index.html');
        });
      })
  );
});
