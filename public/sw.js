const CACHE = 'vita-v1';
const SHELL = ['./','./index.html','./css/app.css','./js/app.js','./js/player.js','./js/ambient.js','./js/narrator.js','./js/practices.js','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // navigations -> app shell (SPA)
  if (req.mode === 'navigate') { e.respondWith(caches.match('./index.html').then(r=>r||fetch(req))); return; }
  // data/sessions -> network first, fall back to cache
  if (/\/(data|sessions|voices)\//.test(url.pathname)) {
    e.respondWith(fetch(req).then(r=>{ const cc=r.clone(); caches.open(CACHE).then(c=>c.put(req,cc)); return r; }).catch(()=>caches.match(req)));
    return;
  }
  // shell assets -> cache first
  e.respondWith(caches.match(req).then(r=>r||fetch(req)));
});
