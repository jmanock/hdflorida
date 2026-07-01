export type TravelEssentialItem = {
  title: string;
  description: string;
  cta: string;
  affiliateUrl: string;
  advertiser: "nomatic" | "bedsure" | "zenhotels" | "skylark" | "bookafly";
  category: string;
};

export const NOMATIC_METHOD_LUGGAGE_URL =
  "https://www.awin1.com/awclick.php?gid=532276&mid=90033&awinaffid=2881665&linkid=4060932";
export const NOMATIC_TRAVEL_BAGS_SALE_URL =
  "https://www.awin1.com/awclick.php?gid=532276&mid=90033&awinaffid=2881665&linkid=4060937";
export const BEDSURE_URL =
  "https://www.awin1.com/awclick.php?gid=532727&mid=40882&awinaffid=2881665&linkid=4064760";
export const BOOKAFLY_PRIVATE_RATES_URL =
  "https://www.awin1.com/awclick.php?gid=604783&mid=125562&awinaffid=2881665&linkid=4775555&clickref=";

export const hotelTravelEssentials: TravelEssentialItem[] = [
  {
    title: "Luggage for hotel hopping",
    description: "Once the hotel is picked, the next thing travelers forget is the gear: luggage, comfort items, and a bag for beach or park days.",
    cta: "Compare Travel Luggage",
    affiliateUrl: NOMATIC_METHOD_LUGGAGE_URL,
    advertiser: "nomatic",
    category: "luggage"
  },
  {
    title: "Beach and park day bag",
    description: "A good travel bag helps when a hotel day turns into a beach walk, theme park visit, or late checkout gap.",
    cta: "View Travel Bags",
    affiliateUrl: NOMATIC_TRAVEL_BAGS_SALE_URL,
    advertiser: "nomatic",
    category: "travel_bags"
  },
  {
    title: "Private hotel rate backup",
    description: "Before you lock the stay, compare a private-rate hotel path in case your first choice changes price.",
    cta: "Check Private Hotel Rates",
    affiliateUrl: BOOKAFLY_PRIVATE_RATES_URL,
    advertiser: "bookafly",
    category: "hotel_booking"
  },
  {
    title: "Hotel-room comfort reminder",
    description: "Planning a family, resort, pet-friendly, or longer hotel stay? A small comfort setup can make the room feel easier after long Florida days.",
    cta: "Browse Hotel Comfort Picks",
    affiliateUrl: BEDSURE_URL,
    advertiser: "bedsure",
    category: "travel_comfort"
  }
];
