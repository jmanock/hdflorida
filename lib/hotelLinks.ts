export const hotelSearchLinks = {
  orlandoBooking: "https://www.booking.com/searchresults.html?ss=Orlando",
  miamiBooking: "https://www.booking.com/searchresults.html?ss=Miami",
  miamiBeachBooking: "https://www.booking.com/searchresults.html?ss=Miami+Beach",
  keysBooking: "https://www.booking.com/searchresults.html?ss=Florida+Keys",
  tampaBooking: "https://www.booking.com/searchresults.html?ss=Tampa",
  stPeteBooking: "https://www.booking.com/searchresults.html?ss=St+Pete+Beach",
  fortLauderdaleBooking: "https://www.booking.com/searchresults.html?ss=Fort+Lauderdale",
  jacksonvilleBooking: "https://www.booking.com/searchresults.html?ss=Jacksonville+Florida",
  daytonaBooking: "https://www.booking.com/searchresults.html?ss=Daytona+Beach",
  stAugustineBooking: "https://www.booking.com/searchresults.html?ss=St+Augustine",
  sarasotaBooking: "https://www.booking.com/searchresults.html?ss=Sarasota",
  naplesBooking: "https://www.booking.com/searchresults.html?ss=Naples+Florida",
  clearwaterBooking: "https://www.booking.com/searchresults.html?ss=Clearwater+Beach",
  ameliaIslandBooking: "https://www.booking.com/searchresults.html?ss=Amelia+Island"
};

export type HotelBookingDestination = keyof typeof hotelSearchLinks;

export type HotelSearchUrlInput = {
  destination: HotelBookingDestination;
  category?: string;
  checkIn?: string;
  checkOut?: string;
  hotelName?: string;
};

// Booking/Awin-ready helper. Keep every Booking URL passing through this
// function so Awin deep links can be swapped in here after approval.
export function getBookingLink(url: string) {
  return url;
}

// Affiliate-ready search helper. Future Booking.com/Awin, Expedia Rapid,
// Hotels.com, Tripadvisor, or direct hotel partner URLs should be adapted here,
// not scattered across cards or page components.
export function getHotelSearchUrl({ destination, category, checkIn, checkOut, hotelName }: HotelSearchUrlInput) {
  const baseUrl = getBookingLink(hotelSearchLinks[destination]);
  const params = new URLSearchParams();

  if (hotelName) {
    params.set("label", hotelName.toLowerCase().replace(/\s+/g, "-"));
  }

  if (category) {
    params.set("stay_type", category.toLowerCase().replace(/\s+/g, "-"));
  }

  if (checkIn) {
    params.set("checkin", checkIn);
  }

  if (checkOut) {
    params.set("checkout", checkOut);
  }

  const query = params.toString();

  if (!query) {
    return baseUrl;
  }

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${query}`;
}

export function getHotelBookingUrl(destination: HotelBookingDestination, hotelName?: string) {
  return getHotelSearchUrl({ destination, hotelName });
}
