if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(function(registration){
        console.log("Service Worker Registered");
        console.log(registration);
    }).catch((err) =>{
        console.log("Service Worker Failed to Register\n", err);
    })
}