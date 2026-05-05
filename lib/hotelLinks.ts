import { getExpediaHotelLink, type ExpediaHotelDestination } from "@/lib/affiliateLinks";

export type HotelAffiliateDestination = Exclude<ExpediaHotelDestination, "default">;

export type HotelSearchUrlInput = {
  destination: HotelAffiliateDestination;
  category?: string;
  checkIn?: string;
  checkOut?: string;
  hotelName?: string;
};

// Affiliate-ready search helper. Future Booking.com, Expedia deep links,
// Hotels.com, Tripadvisor, or direct hotel partner URLs should be adapted here,
// not scattered across cards or page components.
export function getHotelSearchUrl({ destination }: HotelSearchUrlInput) {
  return getExpediaHotelLink(destination);
}

export function getHotelAffiliateUrl(destination: HotelAffiliateDestination, hotelName?: string) {
  return getHotelSearchUrl({ destination, hotelName });
}
