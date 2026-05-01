export const GA_MEASUREMENT_ID = "G-MRBXKRDT4G";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventParams = {
    site: "hoteldealsflorida.org",
    source: "hotels",
    ...params
  };

  window.gtag?.("event", eventName, eventParams);
  window.dataLayer?.push({
    event: eventName,
    ...eventParams
  });
}
