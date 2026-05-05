export const EXPEDIA_DEFAULT_AFFILIATE_LINK = "https://expedia.com/affiliate/2Wbjdi2";

export const expediaHotelLinks = {
  // Replace these destination URLs with Expedia affiliate deep links as they
  // become available from the Expedia/Awin tools.
  orlando: "https://www.expedia.com/Hotel-Search?destination=Orlando",
  miami: "https://www.expedia.com/Hotel-Search?destination=Miami",
  miamiBeach: "https://www.expedia.com/Hotel-Search?destination=Miami%20Beach",
  tampa: "https://www.expedia.com/Hotel-Search?destination=Tampa",
  fortLauderdale: "https://www.expedia.com/Hotel-Search?destination=Fort%20Lauderdale",
  floridaKeys: "https://www.expedia.com/Hotel-Search?destination=Florida%20Keys",
  clearwater: "https://www.expedia.com/Hotel-Search?destination=Clearwater%20Beach",
  stAugustine: "https://www.expedia.com/Hotel-Search?destination=St.%20Augustine",
  naples: "https://www.expedia.com/Hotel-Search?destination=Naples%2C%20Florida",
  jacksonville: "https://www.expedia.com/Hotel-Search?destination=Jacksonville%2C%20Florida",
  daytonaBeach: "https://www.expedia.com/Hotel-Search?destination=Daytona%20Beach",
  sarasota: "https://www.expedia.com/Hotel-Search?destination=Sarasota",
  stPete: "https://www.expedia.com/Hotel-Search?destination=St.%20Pete%20Beach",
  ameliaIsland: "https://www.expedia.com/Hotel-Search?destination=Amelia%20Island",
  default: EXPEDIA_DEFAULT_AFFILIATE_LINK
};

export type ExpediaHotelDestination = keyof typeof expediaHotelLinks;

export function getExpediaHotelLink(destination: string) {
  return expediaHotelLinks[destination as ExpediaHotelDestination] || expediaHotelLinks.default;
}
