/* =========================================
   FC WÄNGI 1967 SERVICE WORKER
   Version 2026.09.02-2
========================================= */

const CACHE_NAME = "fc-waengi-app-v7";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
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
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
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

importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDFBoXvU05fwbB4_u-QxX6RtOQiwAerGG8",
  authDomain: "fc-waengi-1967.firebaseapp.com",
  projectId: "fc-waengi-1967",
  storageBucket: "fc-waengi-1967.firebasestorage.app",
  messagingSenderId: "625120624112",
  appId: "1:625120624112:web:62277738190781734bf135"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("[FCW Service Worker] Push empfangen:", payload);
});
