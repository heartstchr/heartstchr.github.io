(function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (reg) {
        // If a new version is queued, activate and reload so users never
        // linger on stale cached HTML/JS.
        reg.addEventListener("updatefound", function () {
          var newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener("statechange", function () {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              navigator.serviceWorker.ready.then(function () {
                sessionStorage.removeItem("ss_bs");
                window.location.reload(true);
              });
            }
          });
        });
      })
      .catch(function () {
        /* ignore: SW is progressive enhancement */
      });
  });
})();