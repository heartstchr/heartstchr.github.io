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

    // Function to get cookie by name
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
      const expires = new Date(Date.now() + days*864e5).toUTCString();
      document.cookie = `${name}=${value}; path=/; expires=${expires}`;
    }

    // Set cookie if ?dev=1 is in URL
    const urlParams = new URLSearchParams(window.location.search);
    const isDevInUrl = urlParams.get('dev') === '1';
    if (isDevInUrl) {
      setCookie('traffic_type', 'internal', 365);
    }

    // Read cookie
    const trafficType = getCookie('traffic_type') || 'external';

    // GA4 init
    gtag('js', new Date());

    gtag('config', GA_MEASUREMENT_ID, {
      'send_page_view': true,
      'traffic_type': trafficType
    });
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
