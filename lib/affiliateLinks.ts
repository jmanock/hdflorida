export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";

export const expediaHotelLinks = {
  // Paste destination-specific Expedia/Awin hotel deep links here when they are
  // available. Until then, each key routes through the approved Expedia affiliate base.
  orlando: EXPEDIA_AFFILIATE_BASE,
  miami: EXPEDIA_AFFILIATE_BASE,
  miamiBeach: EXPEDIA_AFFILIATE_BASE,
  tampa: EXPEDIA_AFFILIATE_BASE,
  fortLauderdale: EXPEDIA_AFFILIATE_BASE,
  floridaKeys: EXPEDIA_AFFILIATE_BASE,
  clearwater: EXPEDIA_AFFILIATE_BASE,
  stAugustine: EXPEDIA_AFFILIATE_BASE,
  naples: EXPEDIA_AFFILIATE_BASE,
  jacksonville: EXPEDIA_AFFILIATE_BASE,
  daytonaBeach: EXPEDIA_AFFILIATE_BASE,
  sarasota: EXPEDIA_AFFILIATE_BASE,
  stPete: EXPEDIA_AFFILIATE_BASE,
  ameliaIsland: EXPEDIA_AFFILIATE_BASE,
  default: EXPEDIA_AFFILIATE_BASE
};

export type ExpediaHotelDestination = keyof typeof expediaHotelLinks;

export function getExpediaHotelLink(destination: string) {
  return expediaHotelLinks[destination as ExpediaHotelDestination] || expediaHotelLinks.default;
}
