const CACHE_NAME =
  "fc-waengi-app-v1";


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

        .open(
          CACHE_NAME
        )

        .then(
          cache => {

            return cache.addAll(
              FILES_TO_CACHE
            );

          }
        )


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

        .then(
          cacheNames => {


            return Promise.all(


              cacheNames.map(
                cacheName => {


                  if (

                    cacheName !==
                    CACHE_NAME

                  ) {


                    return caches.delete(
                      cacheName
                    );


                  }


                }
              )


            );


          }
        )


    );


    self.clients.claim();


  }

);



self.addEventListener(

  "fetch",

  event => {


    event.respondWith(


      fetch(
        event.request
      )


      .then(
        response => {


          const responseCopy =
            response.clone();


          caches

            .open(
              CACHE_NAME
            )

            .then(
              cache => {


                if (

                  event.request.method ===
                  "GET"

                ) {


                  cache.put(

                    event.request,

                    responseCopy

                  );


                }


              }
            );


          return response;


        }
      )


      .catch(
        () => {


          return caches.match(
            event.request
          );


        }
      )


    );


  }

);



self.addEventListener(

  "push",

  event => {


    let message = {


      title:
        "FC Wängi 1967",


      body:
        "Es gibt Neuigkeiten beim FC Wängi.",


      url:
        "./"


    };



    if (
      event.data
    ) {


      try {


        message =
          event.data.json();


      }


      catch {


        message.body =
          event.data.text();


      }


    }



    event.waitUntil(


      self.registration
        .showNotification(


          message.title ||
          "FC Wängi 1967",


          {

            body:

              message.body ||
              "Es gibt Neuigkeiten.",


            icon:

              "./icon-512.png",


            badge:

              "./icon-512.png",


            data: {

              url:

                message.url ||
                "./"

            }

          }


        )


    );


  }

);



self.addEventListener(

  "notificationclick",

  event => {


    event.notification.close();


    event.waitUntil(


      clients.openWindow(

        event.notification.data.url ||
        "./"

      )


    );


  }

);
