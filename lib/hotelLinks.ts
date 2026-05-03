export const hotelSearchLinks = {
  orlandoBooking:
    "https://www.booking.com/searchresults.html?ss=Orlando%2C+Florida%2C+United+States",
  orlandoExpedia: "https://www.expedia.com/Hotel-Search?destination=Orlando%2C%20Florida",
  miamiBooking:
    "https://www.booking.com/searchresults.html?ss=Miami+Beach%2C+Florida%2C+United+States",
  miamiExpedia: "https://www.expedia.com/Hotel-Search?destination=Miami%2C%20Florida",
  keysBooking:
    "https://www.booking.com/searchresults.html?ss=Florida+Keys%2C+Florida%2C+United+States",
  keysTripadvisor: "https://www.tripadvisor.com/Search?q=Florida%20Keys%20hotels",
  tampaBooking:
    "https://www.booking.com/searchresults.html?ss=Tampa%2C+Florida%2C+United+States",
  stPeteExpedia: "https://www.expedia.com/Hotel-Search?destination=St.%20Petersburg%2C%20Florida",
  fortLauderdaleBooking:
    "https://www.booking.com/searchresults.html?ss=Fort+Lauderdale%2C+Florida%2C+United+States",
  jacksonvilleBooking:
    "https://www.booking.com/searchresults.html?ss=Jacksonville%2C+Florida%2C+United+States",
  daytonaBooking:
    "https://www.booking.com/searchresults.html?ss=Daytona+Beach%2C+Florida%2C+United+States",
  stAugustineBooking:
    "https://www.booking.com/searchresults.html?ss=St.+Augustine%2C+Florida%2C+United+States",
  sarasotaBooking:
    "https://www.booking.com/searchresults.html?ss=Sarasota%2C+Florida%2C+United+States",
  naplesBooking:
    "https://www.booking.com/searchresults.html?ss=Naples%2C+Florida%2C+United+States",
  clearwaterHotels:
    "https://www.hotels.com/Hotel-Search?destination=Clearwater%20Beach%2C%20Florida",
  ameliaTripadvisor: "https://www.tripadvisor.com/Search?q=Amelia%20Island%20hotels"
};

export type HotelBookingDestination = keyof typeof hotelSearchLinks;

export type HotelSearchUrlInput = {
  destination: HotelBookingDestination;
  category?: string;
  checkIn?: string;
  checkOut?: string;
  hotelName?: string;
};

// Affiliate-ready helper. Swap mapped URLs for tracked partner URLs when
// Booking, Expedia Rapid, Hotels.com, or Tripadvisor programs are connected.
export function getHotelSearchUrl({ destination, category, checkIn, checkOut, hotelName }: HotelSearchUrlInput) {
  const baseUrl = hotelSearchLinks[destination];
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
