export * from "./analyticsContract";
import { trackEvent as sharedTrackEvent } from "./analyticsContract";
export const trackEvent = sharedTrackEvent;
