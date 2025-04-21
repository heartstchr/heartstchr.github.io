(function loadGA() {
  const GA_MEASUREMENT_ID = "G-L6P0G1Y09S";

  if (window.gaInitialized) return;
  window.gaInitialized = true;

  const initGA = () => {
    if (window.gaLoaded) return; // Prevent duplicate injections
    window.gaLoaded = true;

    // Load gtag.js
    const gaScript = document.createElement("script");
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Define gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // Configure GA4
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  };

  const triggerOnce = () => {
    initGA();
    // Remove all listeners after first call
    events.forEach((event) =>
      window.removeEventListener(event, listener, { passive: true })
    );
  };

  const events = ["scroll", "mousemove", "touchstart", "keydown"];
  const listener = triggerOnce;

  const startListening = () => {
    events.forEach((event) =>
      window.addEventListener(event, listener, { once: true, passive: true })
    );

    setTimeout(() => {
      triggerOnce();
    }, 4000); // fallback
  };

  if (document.readyState === "complete") {
    startListening();
  } else {
    window.addEventListener("load", startListening);
  }
})();
