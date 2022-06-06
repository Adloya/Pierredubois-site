// self.addEventListener("install", e => {
//     e.waitUntil(
//         caches.open("static").then(cache => {
//             return cache.addAll(["./", "./src/css/main.css", "./src/js/pages.js", "./assets/images/logo192.png", "./assets/images/logo512.png", "./assets/images/logoPdubois-full.png"]);
//         })
//     )
// })

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/css/main.css", "./src/js/pages.js", "./assets/images/logo192.png", "./assets/images/logo512.png", "./assets/images/logoPdubois-full.png"]);
        }) || caches.match(e.request).then(response => {
            console.log(response)
            return response || fetch(e.request);
        })
    )
})