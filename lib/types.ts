export type DealBadge =
  | "Hot Deal"
  | "Weekend"
  | "Beach"
  | "Family"
  | "Luxury"
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
  image_alt: string;
  cta_label: string;
  value_label: string;
  why_this_stay: string;
  best_for: string[];
  place?: HotelPlaceTrustData;
};

export type HotelPlaceTrustData = {
  place_id?: string;
  name?: string;
  address?: string;
  city?: string;
  neighborhood?: string;
  rating?: number;
  review_count?: number;
  latitude?: number;
  longitude?: number;
  official_website?: string;
  photo_reference?: string;
  source: "fallback" | "google_places";
  updated_at?: string;
};
