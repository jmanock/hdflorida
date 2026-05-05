export const hotelSearchLinks = {
  orlando: "https://www.expedia.com/Hotel-Search?destination=Orlando",
  miami: "https://www.expedia.com/Hotel-Search?destination=Miami",
  miamiBeach: "https://www.expedia.com/Hotel-Search?destination=Miami%20Beach",
  floridaKeys: "https://www.expedia.com/Hotel-Search?destination=Florida%20Keys",
  tampa: "https://www.expedia.com/Hotel-Search?destination=Tampa",
  stPete: "https://www.expedia.com/Hotel-Search?destination=St.%20Pete%20Beach",
  fortLauderdale: "https://www.expedia.com/Hotel-Search?destination=Fort%20Lauderdale",
  jacksonville: "https://www.expedia.com/Hotel-Search?destination=Jacksonville%2C%20Florida",
  daytonaBeach: "https://www.expedia.com/Hotel-Search?destination=Daytona%20Beach",
  stAugustine: "https://www.expedia.com/Hotel-Search?destination=St.%20Augustine",
  sarasota: "https://www.expedia.com/Hotel-Search?destination=Sarasota",
  naples: "https://www.expedia.com/Hotel-Search?destination=Naples%2C%20Florida",
  clearwater: "https://www.expedia.com/Hotel-Search?destination=Clearwater%20Beach",
  ameliaIsland: "https://www.expedia.com/Hotel-Search?destination=Amelia%20Island"
};

export type HotelAffiliateDestination = keyof typeof hotelSearchLinks;

export type HotelSearchUrlInput = {
  destination: HotelAffiliateDestination;
  category?: string;
  checkIn?: string;
  checkOut?: string;
  hotelName?: string;
};

// Expedia affiliate helper. Keep every Expedia URL passing through this
// function so destination deep links can be supported later in one place.
export function getExpediaLink(url: string) {
  void url;
  const baseAffiliate = "https://expedia.com/affiliate/2Wbjdi2";
  return baseAffiliate;
}

// Affiliate-ready search helper. Future Booking.com, Expedia deep links,
// Hotels.com, Tripadvisor, or direct hotel partner URLs should be adapted here,
// not scattered across cards or page components.
export function getHotelSearchUrl({ destination }: HotelSearchUrlInput) {
  return getExpediaLink(hotelSearchLinks[destination]);
}

export function getHotelAffiliateUrl(destination: HotelAffiliateDestination, hotelName?: string) {
  return getHotelSearchUrl({ destination, hotelName });
}
