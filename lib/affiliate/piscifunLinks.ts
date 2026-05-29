export type PiscifunGearPick = {
  title: string;
  description: string;
  category: string;
  destinationOrUseCase: string;
  affiliateUrl: string;
  imageUrl: string;
  imageAlt: string;
  bestForTags: string[];
  advertiser?: "piscifun" | "tidewe";
};

const piscifunHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=89509&awinaffid=2881665";
const tideWeHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=78182&awinaffid=2881665";

export const hotelPiscifunGearPicks: PiscifunGearPick[] = [
  {
    title: "Florida Resort Outdoor Gear",
    description:
      "Outdoor and fishing gear ideas for travelers packing for resort pools, beach walks, piers, parks, and warm Florida evenings.",
    category: "Travel Gear Recommendations",
    destinationOrUseCase: "resort and beach packing",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-resort-placeholder.svg",
    imageAlt: "Outdoor gear ideas for Florida resort and beach hotel stays",
    bestForTags: ["Beach Hotels", "Resort Stays", "Outdoor Days"]
  },
  {
    title: "Beach & Fishing Day Essentials",
    description:
      "A useful starting point for browsing compact fishing and outdoor accessories before a hotel stay near Florida beaches or cruise ports.",
    category: "Florida Fishing Essentials",
    destinationOrUseCase: "beach hotel and fishing trip gear",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-resort-placeholder.svg",
    imageAlt: "Fishing and beach gear for Florida hotel trips",
    bestForTags: ["Fishing Trips", "Beach Days", "Cruise Ports"],
    advertiser: "piscifun"
  },
  {
    title: "Florida Camping & Cabin Gear",
    description:
      "Outdoor apparel, rain gear, waterproof boots, and bags for Florida cabin weekends, camping add-ons, and wet-weather hotel trips.",
    category: "Travel Gear Recommendations",
    destinationOrUseCase: "camping, cabins, and rain gear",
    affiliateUrl: tideWeHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-resort-placeholder.svg",
    imageAlt: "Outdoor rain gear for Florida cabin and camping hotel trips",
    bestForTags: ["Camping", "Rain Gear", "Cabin Trips"],
    advertiser: "tidewe"
  }
];
