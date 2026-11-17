/* =========================================
   FC WÄNGI 1967 SERVICE WORKER
   Version 2026.11.17-5.9-push
========================================= */

const CACHE_NAME = "fc-waengi-app-v10-push";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if(event.data?.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if(requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if(response && response.status === 200){
          const shellUrls = APP_SHELL.map(path => new URL(path, self.location.href).href);
          if(shellUrls.includes(event.request.url)){
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if(cached) return cached;
        if(event.request.mode === "navigate") return caches.match("./index.html");
        throw new Error("Offline und keine Cache-Datei vorhanden.");
      })
  );
});

importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDFBoXvU05fwbB4_u-QxX6RtOQiwAerGG8",
  authDomain: "fc-waengi-1967.firebaseapp.com",
  projectId: "fc-waengi-1967",
  storageBucket: "fc-waengi-1967.firebasestorage.app",
  messagingSenderId: "625120624112",
  appId: "1:625120624112:web:62277738190781734bf135"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(async payload => {
  try{
    const title =
      payload?.data?.title ||
      payload?.notification?.title ||
      "FC Wängi 1967";

    const body =
      payload?.data?.body ||
      payload?.notification?.body ||
      "";

    const url =
      payload?.data?.url ||
      "https://skeller652.github.io/FC-W-ngi-1967/";

    const tag =
      payload?.data?.tag ||
      "fcw-push";

    await self.registration.showNotification(title,{
      body,
      icon:"./icon-512.png",
      badge:"./icon-512.png",
      data:{url},
      tag,
      renotify:true
    });
  }catch(error){
    console.error("[FCW Service Worker] Push-Anzeige fehlgeschlagen:",error);
  }
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  const targetUrl =
    event.notification?.data?.url ||
    "https://skeller652.github.io/FC-W-ngi-1967/";

  event.waitUntil((async () => {
    const windows = await clients.matchAll({
      type:"window",
      includeUncontrolled:true
    });

    for(const client of windows){
      try{
        const clientUrl=new URL(client.url);
        const target=new URL(targetUrl);
        if(clientUrl.origin===target.origin){
          await client.navigate(targetUrl);
          return client.focus();
        }
      }catch(_error){}
    }

    return clients.openWindow(targetUrl);
  })());
});
