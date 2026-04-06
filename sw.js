const CACHE = 'babysleep-v4';  // bump version to force old cache to clear
const ASSETS = [
  '/babysleep/',
  '/babysleep/index.html',
  '/babysleep/manifest.json',
  '/babysleep/icon-192.png',
  '/babysleep/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/babysleep/index.html')))
  );
});
