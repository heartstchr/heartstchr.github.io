/* Stack Seekers service worker - cache version-busting */
const CACHE_NAME = "stackseekers-v1";
const OFFLINE_CACHE = "app-shell";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== OFFLINE_CACHE && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).catch(() =>
        caches.match(event.request).then((r) => r || Response.error())
      )
    );
    return;
  }

  if (url.pathname === "/version.json") {
    event.respondWith(fetch(event.request, { cache: "no-store" }));
    return;
  }
});