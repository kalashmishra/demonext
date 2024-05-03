const installEvent = () => {
  self.addEventListener('install', () => {
    console.log('The service worker is installed!!!!');
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('The service worker is activated!!!');
  });
};

activateEvent();


const cacheName = 'test-cache';

self.addEventListener('fetch', (event) => {
event.respondWith(
  caches.match(event.request).then((cachedResponse) => {
    return cachedResponse || fetch(event.request).then((response) => {
      return caches.open(cacheName).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    });
  })
);
});







