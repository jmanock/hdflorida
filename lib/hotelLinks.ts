export const hotelSearchLinks = {
  orlandoBooking: "https://www.expedia.com/Hotel-Search?destination=Orlando",
  miamiBooking: "https://www.expedia.com/Hotel-Search?destination=Miami",
  miamiBeachBooking: "https://www.expedia.com/Hotel-Search?destination=Miami%20Beach",
  keysBooking: "https://www.expedia.com/Hotel-Search?destination=Florida%20Keys",
  tampaBooking: "https://www.expedia.com/Hotel-Search?destination=Tampa",
  stPeteBooking: "https://www.expedia.com/Hotel-Search?destination=St.%20Pete%20Beach",
  fortLauderdaleBooking: "https://www.expedia.com/Hotel-Search?destination=Fort%20Lauderdale",
  jacksonvilleBooking: "https://www.expedia.com/Hotel-Search?destination=Jacksonville%2C%20Florida",
  daytonaBooking: "https://www.expedia.com/Hotel-Search?destination=Daytona%20Beach",
  stAugustineBooking: "https://www.expedia.com/Hotel-Search?destination=St.%20Augustine",
  sarasotaBooking: "https://www.expedia.com/Hotel-Search?destination=Sarasota",
  naplesBooking: "https://www.expedia.com/Hotel-Search?destination=Naples%2C%20Florida",
  clearwaterBooking: "https://www.expedia.com/Hotel-Search?destination=Clearwater%20Beach",
  ameliaIslandBooking: "https://www.expedia.com/Hotel-Search?destination=Amelia%20Island"
};

export type HotelBookingDestination = keyof typeof hotelSearchLinks;

export type HotelSearchUrlInput = {
  destination: HotelBookingDestination;
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

export function getHotelBookingUrl(destination: HotelBookingDestination, hotelName?: string) {
  return getHotelSearchUrl({ destination, hotelName });
}
