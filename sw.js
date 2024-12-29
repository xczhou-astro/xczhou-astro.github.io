const CACHE_NAME = 'academic-website-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/content/about.md',
    '/content/publications.md',
    '/content/research.md',
    '/content/personal.md'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
}); 