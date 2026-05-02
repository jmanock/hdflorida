import type { HotelPlaceTrustData } from "@/lib/types";

const updatedAt = "2026-05-02";

export const fallbackHotelPlaceData: Record<string, HotelPlaceTrustData> = {
  "orlando-family-resort-search": {
    name: "Orlando theme park area resorts",
    address: "International Drive / Lake Buena Vista area",
    city: "Orlando",
    neighborhood: "Theme park corridor",
    latitude: 28.424,
    longitude: -81.469,
    source: "fallback",
    updated_at: updatedAt
  },
  "miami-beach-hotel-search": {
    name: "Miami Beach oceanfront hotels",
    address: "South Beach and Mid-Beach hotel districts",
    city: "Miami Beach",
    neighborhood: "Miami Beach",
    latitude: 25.7907,
    longitude: -80.13,
    source: "fallback",
    updated_at: updatedAt
  },
  "florida-keys-weekend-search": {
    name: "Florida Keys waterfront stays",
    address: "Key Largo to Key West island corridor",
    city: "Florida Keys",
    neighborhood: "Island resorts and inns",
    latitude: 24.5551,
    longitude: -81.78,
    source: "fallback",
    updated_at: updatedAt
  },
  "tampa-waterfront-hotel-search": {
    name: "Tampa waterfront hotels",
    address: "Downtown Tampa and Tampa Riverwalk area",
    city: "Tampa",
    neighborhood: "Downtown waterfront",
    latitude: 27.9506,
    longitude: -82.4572,
    source: "fallback",
    updated_at: updatedAt
  },
  "fort-lauderdale-beach-resort-search": {
    name: "Fort Lauderdale beach resorts",
    address: "A1A and Fort Lauderdale Beach area",
    city: "Fort Lauderdale",
    neighborhood: "Beachfront / Las Olas",
    latitude: 26.1224,
    longitude: -80.1373,
    source: "fallback",
    updated_at: updatedAt
  },
  "jacksonville-riverfront-search": {
    name: "Jacksonville riverfront hotels",
    address: "Downtown Jacksonville and St. Johns River area",
    city: "Jacksonville",
    neighborhood: "Downtown riverfront",
    latitude: 30.3322,
    longitude: -81.6557,
    source: "fallback",
    updated_at: updatedAt
  },
  "daytona-oceanfront-search": {
    name: "Daytona Beach oceanfront hotels",
    address: "Atlantic Avenue and Daytona Beach boardwalk area",
    city: "Daytona Beach",
    neighborhood: "Oceanfront / boardwalk",
    latitude: 29.2108,
    longitude: -81.0228,
    source: "fallback",
    updated_at: updatedAt
  },
  "st-augustine-historic-inn-search": {
    name: "St. Augustine historic inns",
    address: "Historic District and bayfront area",
    city: "St. Augustine",
    neighborhood: "Historic District",
    latitude: 29.9012,
    longitude: -81.3124,
    source: "fallback",
    updated_at: updatedAt
  },
  "sarasota-lido-resort-search": {
    name: "Sarasota beach resorts",
    address: "Lido Key, Siesta Key, and downtown Sarasota areas",
    city: "Sarasota",
    neighborhood: "Gulf beach corridor",
    latitude: 27.3364,
    longitude: -82.5307,
    source: "fallback",
    updated_at: updatedAt
  },
  "naples-boutique-retreat-search": {
    name: "Naples Gulf Coast retreats",
    address: "Naples beachfront and downtown hotel areas",
    city: "Naples",
    neighborhood: "Gulf Coast / downtown",
    latitude: 26.142,
    longitude: -81.7948,
    source: "fallback",
    updated_at: updatedAt
  },
  "clearwater-gulf-search": {
    name: "Clearwater Beach Gulf hotels",
    address: "Clearwater Beach and Pier 60 area",
    city: "Clearwater Beach",
    neighborhood: "Gulf beachfront",
    latitude: 27.9775,
    longitude: -82.8276,
    source: "fallback",
    updated_at: updatedAt
  }
};

const cityFallbacks: Record<string, HotelPlaceTrustData> = {
  Orlando: fallbackHotelPlaceData["orlando-family-resort-search"],
  Miami: fallbackHotelPlaceData["miami-beach-hotel-search"],
  "Florida Keys": fallbackHotelPlaceData["florida-keys-weekend-search"],
  "Tampa Bay": fallbackHotelPlaceData["tampa-waterfront-hotel-search"],
  "Fort Lauderdale": fallbackHotelPlaceData["fort-lauderdale-beach-resort-search"],
  Jacksonville: fallbackHotelPlaceData["jacksonville-riverfront-search"],
  "Daytona Beach": fallbackHotelPlaceData["daytona-oceanfront-search"],
  "St. Augustine": fallbackHotelPlaceData["st-augustine-historic-inn-search"],
  Sarasota: fallbackHotelPlaceData["sarasota-lido-resort-search"],
  Naples: fallbackHotelPlaceData["naples-boutique-retreat-search"]
};

export function getFallbackPlaceData(dealId: string, city: string) {
  return fallbackHotelPlaceData[dealId] ?? cityFallbacks[city];
}
