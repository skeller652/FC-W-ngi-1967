importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);


// ================================
// FIREBASE
// ================================

firebase.initializeApp({

  apiKey:
    "AIzaSyDEBoXvug5fwbB4_u-QxX6RtOQiwAerGG8",

  authDomain:
    "fc-waengi-1967.firebaseapp.com",

  projectId:
    "fc-waengi-1967",

  storageBucket:
    "fc-waengi-1967.firebasestorage.app",

  messagingSenderId:
    "625120624112",

  appId:
    "1:625120624112:web:62277738190781734bf135"

});


const messaging =
  firebase.messaging();



// ================================
// CACHE
// ================================

const CACHE_NAME =
  "fc-waengi-app-v2";


const FILES_TO_CACHE = [

  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./icon-512.png"

];



self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches
        .open(CACHE_NAME)

        .then(cache => {

          return cache.addAll(
            FILES_TO_CACHE
          );

        })

    );

    self.skipWaiting();

  }
);



self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches
        .keys()

        .then(cacheNames => {

          return Promise.all(

            cacheNames.map(
              cacheName => {

                if (
                  cacheName !== CACHE_NAME
                ) {

                  return caches.delete(
                    cacheName
                  );

                }

              }
            )

          );

        })

    );

    self.clients.claim();

  }
);



// ================================
// OFFLINE
// ================================

self.addEventListener(
  "fetch",
  event => {

    if (
      event.request.method !== "GET"
    ) {

      return;

    }


    event.respondWith(

      fetch(event.request)

        .then(response => {

          const copy =
            response.clone();


          caches
            .open(CACHE_NAME)

            .then(cache => {

              cache.put(
                event.request,
                copy
              );

            });


          return response;

        })


        .catch(() => {

          return caches.match(
            event.request
          );

        })

    );

  }
);



// ================================
// FIREBASE BACKGROUND PUSH
// ================================

messaging.onBackgroundMessage(
  payload => {

    console.log(
      "FCW Push empfangen:",
      payload
    );


    const title =
      payload.notification?.title ||
      "FC Wängi 1967";


    const options = {

      body:

        payload.notification?.body ||
        "Es gibt Neuigkeiten beim FC Wängi.",


      icon:
        "./icon-512.png",


      badge:
        "./icon-512.png",


      data: {

        url:

          payload.data?.url ||
          "./"

      }

    };


    return self.registration
      .showNotification(
        title,
        options
      );

  }
);



// ================================
// PUSH ANKLICKEN
// ================================

self.addEventListener(
  "notificationclick",
  event => {

    event.notification.close();


    const targetUrl =

      event.notification
        .data?.url ||

      "./";


    event.waitUntil(

      clients
        .matchAll({

          type: "window",

          includeUncontrolled: true

        })

        .then(
          windowClients => {

            for (
              const client
              of windowClients
            ) {

              if (
                "focus" in client
              ) {

                client.navigate(
                  targetUrl
                );

                return client.focus();

              }

            }


            if (
              clients.openWindow
            ) {

              return clients
                .openWindow(
                  targetUrl
                );

            }

          }
        )

    );

  }
);
