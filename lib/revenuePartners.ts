export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";
export const EXPEDIA_GENERAL_AFFILIATE_URL = "https://expedia.com/affiliates/expedia-home.DHcy34V";
export const ZENHOTELS_AFFILIATE_URL = "http://www.awin1.com/cread.php?awinmid=115208&awinaffid=2881665";
export const SKYLARK_HOME_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=564694&mid=106305&awinaffid=2881665&linkid=4324767&clickref=";
export const SKYLARK_DEALS_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=564694&mid=106305&awinaffid=2881665&linkid=4324766&clickref=";
export const BOOKING_COM_AFFILIATE_URL = process.env.NEXT_PUBLIC_BOOKING_COM_AFFILIATE_URL ?? "";
export const transferAndTravelSlugs = new Set([
  "florida-budget-hotels", "florida-oceanfront-hotels", "clearwater-beach-hotel-deals",
  "florida-road-trip-hotels", "best-budget-hotels-on-florida-road-trips", "affordable-hotels-near-florida-attractions",
  "florida-hotels-near-theme-parks", "key-west-hotel-deals", "orlando-family-resort-deals"
]);
export const conversionSlugs = new Set(["florida-budget-hotels", "florida-oceanfront-hotels", "clearwater-beach-hotel-deals", "florida-road-trip-hotels", "best-budget-hotels-on-florida-road-trips", "affordable-hotels-near-florida-attractions", "florida-pet-friendly-hotels"]);
export const getTransferAffiliateUrl = (site: string, slug: string) =>
  `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
