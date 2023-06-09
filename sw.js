self.importScripts('smetre.js');
var cacheName = 'sociometre';
var appShellFiles = [
  'index.html',
  'smetre.css',
  'smetre.js',
  'plotly-sociometre.min.js',
  'plotly-locale-fr.js',
  'logoUFICT.png',
  'cc.png',
  'qrcodesmetre.png'
];
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(appShellFiles);
      })
    );
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
        return r || fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
});
