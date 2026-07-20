export const GA_MEASUREMENT_ID = "G-MRBXKRDT4G";
export * from "./analyticsContract";
import { trackEvent as sharedTrackEvent } from "./analyticsContract";
export const trackEvent = sharedTrackEvent;
