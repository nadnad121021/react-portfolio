const CACHE_NAME = "my-app-cache-v1";
const OFFLINE_URL = "/offline.html";

// Add the files you want to cache
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/offline.html",
  "/assets/font-awesome/css/all.css",
  // Add other static assets like CSS/JS/images if needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // activate immediately
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim(); // take control of all pages
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((response) => {
        if (response) return response;
        if (event.request.mode === "navigate") {
          return caches.match(OFFLINE_URL);
        }
      })
    )
  );
});
