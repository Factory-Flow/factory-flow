export const GA_MEASUREMENT_ID = "G-MBRSNLKTMD";

export const initializeAnalytics = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (!GA_MEASUREMENT_ID) {
    return;
  }

  if (document.getElementById("ga-script")) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.id = "ga-script";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
