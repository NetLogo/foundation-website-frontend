declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/* gtag.js runs inside the Partytown worker, which only forwards dataLayer.push
   (astro.config.mjs). Pushing an arguments object matches how gtag.js itself
   queues commands, so the worker treats it as a gtag call. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  if (!Array.isArray(window.dataLayer)) return;
  (function () {
    window.dataLayer!.push(arguments);
  } as (...args: unknown[]) => void)("event", name, params);
}
