export type DealBadge =
  | "Hot Deal"
  | "Weekend"
  | "Beach"
  | "Family"
  | "Luxury"
  | "Limited Time"
  | "Resident Deal";

export type HotelDeal = {
  id: string;
  hotel_name: string;
  city: string;
  category: string;
  price: string;
  savings: string;
  description: string;
  dates: string;
  badge: DealBadge;
  booking_url: string;
  image: string;
};
