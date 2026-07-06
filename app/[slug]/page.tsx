import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Home, MapPin, Minus, Search, Ticket, Umbrella } from "lucide-react";
import { AffiliateGearLink } from "@/components/AffiliateGearLink";
import { DealCard } from "@/components/DealCard";
import { OutboundDealLink } from "@/components/OutboundDealLink";
import { ExpediaHotelCta } from "@/components/ExpediaHotelCta";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { CompareHotelOptions, ExitNewsletterCapture, HotelBookingStack, HotelContinuePlanningGuides, StickyHotelCtas } from "@/components/HotelConversionBoosters";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CompleteTripSection } from "@/components/CompleteTripSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RevenueCtaCard } from "@/components/RevenueCtaCard";
import { TransferBookingCard } from "@/components/TransferBookingCard";
import { TravelEssentialsBlock } from "@/components/TravelEssentialsBlock";
import { TravelBookingCard } from "@/components/TravelBookingCard";
import { ConversionScrollAnalytics, QuickDealCard, RecommendedPartnerCard } from "@/components/ConversionCards";
import { V14HotelDiscovery } from "@/components/V14HotelDiscovery";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SafeImage } from "@/components/SafeImage";
import { TrackedLink } from "@/components/TrackedLink";
import {
  getDealsForSeoPage,
  getFaqsForSeoPage,
  getSeoPageLabel,
  seoLandingPageMap,
  seoLandingPages
} from "@/data/seoPages";
import { hotelPiscifunGearPicks } from "@/lib/affiliate/piscifunLinks";
import { getExpediaHotelLink } from "@/lib/affiliateLinks";
import { SITE_URL } from "@/lib/siteConstants";
import { conversionSlugs, transferAndTravelSlugs } from "@/lib/revenuePartners";

type SeoPageParams = {
  slug: string;
};

type JsonLdSchema = {
  "@type": string;
  [key: string]: unknown;
};

const seoPageDestinationMap: Record<string, string> = {
  "orlando-hotel-deals": "orlando",
  "miami-hotel-deals": "miami",
  "miami-beach-hotel-deals": "miamiBeach",
  "tampa-hotel-deals": "tampa",
  "fort-lauderdale-hotel-deals": "fortLauderdale",
  "florida-keys-hotel-deals": "floridaKeys",
  "key-west-hotel-deals": "keyWest",
  "daytona-beach-hotel-deals": "daytonaBeach",
  "st-augustine-hotel-deals": "stAugustine",
  "sarasota-hotel-deals": "sarasota",
  "naples-hotel-deals": "naples",
  "clearwater-beach-hotel-deals": "clearwater",
  "florida-beach-resort-deals": "miamiBeach",
  "florida-family-hotel-deals": "orlando",
  "florida-weekend-getaway-hotels": "miamiBeach",
  "florida-luxury-hotel-deals": "naples",
  "florida-budget-hotel-deals": "orlando",
  "florida-romantic-hotels": "naples",
  "florida-budget-hotels": "orlando",
  "florida-pet-friendly-hotels": "sarasota",
  "florida-hotels-near-theme-parks": "orlando",
  "florida-oceanfront-hotels": "miamiBeach",
  "florida-resorts-with-pools": "orlando",
  "florida-resident-hotel-deals": "orlando",
  "orlando-family-resort-deals": "orlando",
  "florida-hotels-under-150": "orlando",
  "best-areas-to-stay-in-orlando": "orlando",
  "where-to-stay-in-miami-beach": "miamiBeach",
  "best-florida-beach-hotels-guide": "miamiBeach",
  "orlando-resort-guide": "orlando",
  "florida-family-resort-guide": "orlando",
  "how-to-find-cheap-hotels-in-florida": "orlando",
  "best-time-to-book-florida-hotels": "miamiBeach",
  "florida-resort-fees-guide": "miamiBeach",
  "hotel-vs-resort-florida": "orlando",
  "best-weekend-hotel-getaways-florida": "miamiBeach",
  "miami-vs-miami-beach-hotels": "miamiBeach",
  "orlando-resorts-vs-international-drive-hotels": "orlando",
  "beach-resorts-vs-budget-hotels-florida": "miamiBeach",
  "family-hotels-vs-romantic-hotels-florida": "orlando",
  "miami-vs-fort-lauderdale-hotels": "fortLauderdale",
  "best-family-resorts-in-florida": "orlando",
  "best-beach-hotels-in-florida": "miamiBeach",
  "where-to-stay-in-miami": "miami",
  "where-to-stay-in-orlando": "orlando",
  "best-hotels-near-florida-cruise-ports": "miami",
  "budget-hotels-in-florida": "orlando",
  "luxury-florida-resorts": "naples",
  "weekend-getaway-hotels": "miamiBeach",
  "best-waterfront-hotels-in-florida": "fortLauderdale",
  "miami-vs-orlando-hotels": "miami",
  "beach-resort-vs-theme-park-resort": "orlando",
  "budget-hotel-vs-luxury-resort": "naples",
  "downtown-vs-beachfront-hotel": "miamiBeach",
  "hotel-vs-vacation-rental-in-florida": "orlando",
  "summer-florida-resorts": "clearwater",
  "winter-florida-getaways": "floridaKeys",
  "spring-break-hotels": "miamiBeach",
  "holiday-hotel-deals": "orlando",
  "memorial-day-florida-hotels": "clearwater",
  "cheap-summer-hotels-in-florida": "orlando",
  "florida-resort-packing-guide": "orlando",
  "beach-vacation-essentials": "miamiBeach",
  "editorial-policy": "orlando",
  "how-hotel-pricing-works": "orlando"
};

const popularExpediaSearches = [
  { label: "Orlando Hotels", destination: "orlando" },
  { label: "Miami Beach Hotels", destination: "miamiBeach" },
  { label: "Tampa Hotels", destination: "tampa" },
  { label: "Fort Lauderdale Hotels", destination: "fortLauderdale" }
];

const globalRelatedHotelSearches = [
  "orlando-hotel-deals",
  "miami-beach-hotel-deals",
  "tampa-hotel-deals",
  "fort-lauderdale-hotel-deals",
  "florida-keys-hotel-deals",
  "florida-beach-resort-deals",
  "florida-family-hotel-deals",
  "florida-hotels-under-150",
  "florida-weekend-getaway-hotels",
  "florida-oceanfront-hotels"
];

const priorityHotelCluster = [
  "florida-budget-hotels",
  "florida-oceanfront-hotels",
  "florida-hotels-near-theme-parks",
  "clearwater-beach-hotel-deals",
  "florida-pet-friendly-hotels",
  "key-west-hotel-deals",
  "florida-resorts-with-pools",
  "orlando-family-resort-deals",
  "st-augustine-hotel-deals"
];

function HotelFeatureTable({ slug }: { slug: string }) {
  const isBeach = /oceanfront|beach|clearwater|key-west|keys/.test(slug);
  const isFamily = /family|theme-park|orlando|budget/.test(slug);
  const rows = [
    ["Budget / practical stay", "Sometimes", isBeach ? "Usually nearby" : "Varies", "Often easier", isFamily ? "Strong fit" : "Varies", "Property specific"],
    ["Best-value hotel", "Common", isBeach ? "Direct or short walk" : "Varies", "Check final fee", "Often", "Selected rooms"],
    ["Luxury resort", "Usually", isBeach ? "Often direct" : "Destination dependent", "Often valet or paid", "Amenities vary", "Limited policies"]
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
        <div className="border-b border-slate-200 bg-sand p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Hotel feature comparison</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Compare the amenities that change the real value of a stay.</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[64rem] border-collapse text-left">
            <thead className="bg-white text-sm font-black text-ink">
              <tr>
                {["Hotel type", "Pool", "Beach access", "Parking", "Family friendly", "Pet friendly"].map((heading) => (
                  <th className="border-b border-slate-200 px-4 py-4" key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm font-semibold leading-6 text-slateText">
              {rows.map((row) => (
                <tr className="border-t border-slate-200" key={row[0]}>
                  {row.map((cell, index) => (
                    <td className={`px-4 py-4 ${index === 0 ? "bg-sand font-black text-ink" : ""}`} key={`${row[0]}-${index}`}>
                      <span className="inline-flex items-center gap-2">
                        {index > 0 ? (cell === "Varies" || cell.includes("specific") || cell.includes("Selected") || cell.includes("Limited") ? <Minus className="h-4 w-4 text-amber-600" /> : <Check className="h-4 w-4 text-ocean" />) : null}
                        {cell}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="px-6 py-4 text-xs font-bold leading-5 text-slateText">Features vary by property, room type, season, and policy. Confirm amenities, fees, and availability with the booking source.</p>
      </div>
    </section>
  );
}

function InlineHotelAlerts() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 rounded-3xl bg-ink p-6 text-white shadow-soft sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Florida hotel deal alerts</p>
          <h2 className="mt-2 text-2xl font-black">Watch beach, budget, family, and resort stay ideas.</h2>
          <p className="mt-2 text-sm font-semibold text-slate-300">Free alerts. No spam. Rates and availability may change.</p>
        </div>
        <Link className="btn btn-gold min-h-12 shrink-0 px-6" href="#alerts">Get Hotel Deal Alerts</Link>
      </div>
    </section>
  );
}

function HotelQuickAnswer({ destinationLabel }: { destinationLabel: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="hotel-quick-answer-title">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-sky-200 bg-skyline p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Quick answer</p>
          <h2 id="hotel-quick-answer-title" className="mt-3 text-3xl font-black tracking-normal text-ink">
            Compare the room, the fees, and what you need after check-in.
          </h2>
          <ul className="mt-5 grid gap-3 text-sm font-semibold leading-6 text-slateText">
            <li>• Start with location, parking, resort fees, cancellation terms, and beach or attraction access.</li>
            <li>• Budget hotels can work well for road trips, airport nights, and short stays when fees are clear.</li>
            <li>• Oceanfront and resort stays are easier to compare when pools, beach access, and family amenities are visible.</li>
            <li>• Pair {destinationLabel.toLowerCase()} with nearby activities, flights, and vacation package ideas before booking.</li>
            <li>• Recheck final taxes, fees, and policies with the booking source because hotel prices can change quickly.</li>
          </ul>
          <p className="mt-5 text-sm font-black text-ink">
            Best for: travelers comparing total stay cost, family amenities, beach access, parking, and nearby attractions.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Plan the rest of the trip</p>
          <div className="mt-5 grid gap-3">
            <Link className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="#featured-stays">
              Compare featured stays
            </Link>
            <Link className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="#hotel-faq">
              Read hotel FAQ
            </Link>
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="https://flightdealsflorida.org/cheap-flights-to-florida-guide">
              Find flights to Florida
            </a>
            <a className="rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink transition hover:bg-skyline hover:text-ocean" href="https://localdealsflorida.org/best-things-to-do-in-florida">
              Find Florida attractions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type HotelGuideProfile = {
  stayTypes: string;
  bestFor: string;
  areas: string;
  attractions: string;
  rateDrivers: string;
  confirm: string;
};

const hotelGuideProfiles: Record<string, HotelGuideProfile> = {
  "orlando-hotel-deals": {
    stayTypes: "family resorts, suite hotels, theme park area stays, and practical weekend hotels",
    bestFor: "families planning Disney or Universal days, road trippers, convention travelers, and Florida locals looking for a Central Florida staycation",
    areas: "Lake Buena Vista, International Drive, the Universal area, Disney-area corridors, and airport hotels for quick arrivals",
    attractions: "Walt Disney World, Universal Orlando, SeaWorld, ICON Park, outlet shopping, and major convention venues",
    rateDrivers: "school breaks, park events, holiday weekends, conventions, and room types with shuttles or resort amenities",
    confirm: "parking fees, shuttle schedules, breakfast details, cancellation windows, resort fees, and drive times to the parks"
  },
  "miami-hotel-deals": {
    stayTypes: "downtown hotels, airport stays, luxury towers, beach-adjacent hotels, and weekend city stays",
    bestFor: "travelers comparing nightlife, restaurants, cruise connections, beaches, airport convenience, and South Florida staycations",
    areas: "Brickell, Downtown Miami, Wynwood, Coconut Grove, Miami International Airport, and nearby Miami Beach",
    attractions: "Biscayne Bay, museums, nightlife districts, shopping, cruise terminals, beaches, and major South Florida events",
    rateDrivers: "cruise weekends, Art Week, holidays, winter travel, festivals, and proximity to the beach or bay",
    confirm: "resort or destination fees, valet costs, neighborhood fit, commute times, cancellation terms, and final taxes"
  },
  "miami-beach-hotel-deals": {
    stayTypes: "oceanfront hotels, boutique stays, resort-style properties, and weekend beach hotels",
    bestFor: "beach travelers, couples, nightlife trips, warm-weather weekends, and visitors who want to compare resort-style amenities before booking",
    areas: "South Beach, Mid-Beach, North Beach, Collins Avenue, Ocean Drive, and quieter blocks near the water",
    attractions: "the beach, Art Deco Historic District, Lincoln Road, nightlife, restaurants, spas, and waterfront paths",
    rateDrivers: "winter demand, holidays, major events, room view, beach access, resort fees, and weekend travel patterns",
    confirm: "resort fees, beach chair policies, parking, cancellation terms, taxes, and whether the room is truly oceanfront or nearby"
  },
  "tampa-hotel-deals": {
    stayTypes: "downtown hotels, waterfront stays, airport hotels, St. Pete-area options, and Clearwater Beach searches",
    bestFor: "event weekends, business trips, beach add-ons, family visits, cruise travelers, and Tampa Bay staycations",
    areas: "Downtown Tampa, Water Street, Ybor City, Westshore, St. Pete, and Clearwater Beach",
    attractions: "Amalie Arena, Busch Gardens, the Riverwalk, cruise terminals, museums, Gulf beaches, and dining districts",
    rateDrivers: "concerts, sports, conventions, Gasparilla season, cruise dates, beach weekends, and waterfront demand",
    confirm: "parking costs, bridge travel times, cancellation terms, resort fees, beach distance, and whether the stay is closer to Tampa or the Gulf"
  },
  "fort-lauderdale-hotel-deals": {
    stayTypes: "beach resorts, marina hotels, Las Olas stays, airport hotels, and weekend getaway properties",
    bestFor: "travelers who want beach access, boating, cruise connections, nightlife, and a slightly calmer South Florida base",
    areas: "Fort Lauderdale Beach, Las Olas, the marina district, Port Everglades, Hollywood, and airport corridors",
    attractions: "the beach, water taxis, Las Olas Boulevard, Port Everglades, boating, restaurants, and nearby arts venues",
    rateDrivers: "cruise departures, boat shows, winter travel, spring weekends, beachfront location, and room view",
    confirm: "parking, beach access, resort fees, airport or port distance, cancellation rules, and taxes before checkout"
  },
  "florida-keys-hotel-deals": {
    stayTypes: "island resorts, waterfront inns, boutique stays, marina hotels, and family-friendly Keys properties",
    bestFor: "long weekends, couples trips, fishing or boating trips, family island stays, and relaxed Florida road trips",
    areas: "Key Largo, Islamorada, Marathon, Duck Key, Big Pine Key, and Key West",
    attractions: "waterfront dining, snorkeling, marinas, state parks, fishing, sunset spots, and the Overseas Highway",
    rateDrivers: "winter travel, holidays, island events, waterfront access, parking, minimum stays, and limited room supply",
    confirm: "island location, parking, resort or marina fees, cancellation rules, pet policies, and whether the stay fits your driving route"
  },
  "clearwater-beach-hotel-deals": {
    stayTypes: "Gulf resorts, family beach hotels, waterfront stays, and Tampa Bay vacation hotels",
    bestFor: "families, beach weekends, sunset trips, spring breaks, and travelers comparing Gulf Coast access",
    areas: "Clearwater Beach, Sand Key, nearby Dunedin, St. Pete Beach, and Tampa Bay approaches",
    attractions: "Pier 60, Gulf beaches, boat tours, waterfront dining, aquariums, parks, and sunset spots",
    rateDrivers: "spring travel, holidays, weather, beach proximity, resort amenities, and weekend demand",
    confirm: "parking, resort fees, beach walk time, cancellation rules, taxes, and whether the property is on the island or nearby"
  },
  "florida-beach-resort-deals": {
    stayTypes: "oceanfront resorts, Gulf Coast hotels, Atlantic beach stays, family resorts, and luxury coastal properties",
    bestFor: "travelers comparing beaches across Florida instead of committing to one city too early",
    areas: "Miami Beach, Fort Lauderdale, Clearwater Beach, Sarasota, Naples, Daytona Beach, Amelia Island, and the Florida Keys",
    attractions: "beaches, waterfront dining, marinas, spas, family attractions, state parks, and coastal downtowns",
    rateDrivers: "season, weather, holidays, beach access, resort fees, room views, and event weekends",
    confirm: "final taxes, resort fees, cancellation terms, parking, beach services, and whether the rate includes the amenities you expect"
  },
  "florida-family-hotel-deals": {
    stayTypes: "suite hotels, pool resorts, kid-friendly beach stays, theme park hotels, and practical family lodging",
    bestFor: "families comparing room layouts, pools, breakfast, parking, attraction access, and flexible dates",
    areas: "Orlando, Clearwater Beach, Sarasota, St. Augustine, the Florida Keys, and other family-friendly Florida markets",
    attractions: "theme parks, beaches, aquariums, museums, historic districts, water activities, and walkable dining areas",
    rateDrivers: "school breaks, holiday travel, weekends, room size, resort amenities, and proximity to attractions",
    confirm: "occupancy limits, bed setup, parking, breakfast, cancellation rules, resort fees, and distance to the main family activities"
  },
  "florida-weekend-getaway-hotels": {
    stayTypes: "beach hotels, city stays, island inns, waterfront properties, and quick staycation hotels",
    bestFor: "travelers planning short trips, flexible weekends, local escapes, and easy Florida drive-to getaways",
    areas: "Miami, Fort Lauderdale, Tampa Bay, Daytona Beach, the Florida Keys, Clearwater Beach, and Gulf Coast towns",
    attractions: "beaches, restaurants, nightlife, marinas, museums, historic districts, festivals, and waterfront parks",
    rateDrivers: "Friday and Saturday demand, events, weather, holiday weekends, cancellation flexibility, and last-minute availability",
    confirm: "check-in times, parking, weekend minimums, taxes, cancellation rules, and how close the hotel is to the main reason for the trip"
  },
  "florida-hotels-under-150": {
    stayTypes: "value hotels, practical road trip stays, budget beach options, airport hotels, and affordable family searches",
    bestFor: "travelers who want to compare lower-rate options while still checking location, policies, and total trip cost",
    areas: "Orlando, Jacksonville, Daytona Beach, Tampa Bay, Sarasota, airport corridors, and inland alternatives near beach markets",
    attractions: "theme parks, beaches, event venues, universities, airports, road trip stops, and family attractions",
    rateDrivers: "weekday demand, local events, seasonality, distance from the beach, cancellation flexibility, and room type",
    confirm: "taxes, parking, breakfast, cancellation terms, neighborhood fit, fees, and whether the final price still fits the budget"
  },
  "jacksonville-hotel-deals": {
    stayTypes: "riverfront hotels, beach-area stays, airport hotels, Amelia Island options, and value-focused Northeast Florida lodging",
    bestFor: "road trippers, event travelers, beach visitors, families, and guests comparing downtown access with quieter coastal routes",
    areas: "Downtown Jacksonville, the riverfront, Jacksonville Beach, airport corridors, Southside, and Amelia Island alternatives",
    attractions: "riverfront events, beaches, museums, shopping, sports venues, universities, and Northeast Florida road trip stops",
    rateDrivers: "sports weekends, concerts, university events, beach demand, holidays, and airport or interstate convenience",
    confirm: "parking, neighborhood fit, beach distance, cancellation terms, taxes, and whether the stay is closer to downtown or the coast"
  },
  "daytona-beach-hotel-deals": {
    stayTypes: "oceanfront hotels, boardwalk stays, event weekend hotels, family beach options, and practical value stays",
    bestFor: "beach weekends, racing events, road trips, family getaways, and travelers comparing Atlantic Coast hotel value",
    areas: "Daytona Beach oceanfront, the boardwalk area, Speedway corridors, Ormond Beach, and nearby inland value routes",
    attractions: "Daytona International Speedway, the beach, boardwalk, concerts, water activities, and Atlantic Coast road trip stops",
    rateDrivers: "race weekends, concerts, holidays, beach weather, oceanfront location, and room view",
    confirm: "parking, beach access, event proximity, taxes, cancellation rules, and whether the rate fits the final trip cost"
  },
  "st-augustine-hotel-deals": {
    stayTypes: "historic inns, boutique hotels, family stays, beach-side lodging, and walkable old-city hotels",
    bestFor: "couples, history-focused weekends, family road trips, boutique hotel shoppers, and travelers comparing old-city access",
    areas: "the historic district, Anastasia Island, St. Augustine Beach, Vilano Beach, and nearby road trip corridors",
    attractions: "historic sites, old-city streets, beaches, museums, restaurants, waterfront areas, and seasonal festivals",
    rateDrivers: "holiday weekends, festivals, school breaks, historic district proximity, beach access, and boutique inventory",
    confirm: "parking, walkability, cancellation terms, taxes, beach distance, and whether the property style fits the trip"
  },
  "naples-hotel-deals": {
    stayTypes: "luxury resorts, boutique retreats, Gulf Coast hotels, staycation properties, and polished beach-area stays",
    bestFor: "couples, spa weekends, Gulf Coast beach travelers, premium staycation searches, and quieter resort trips",
    areas: "downtown Naples, beach corridors, Fifth Avenue South, North Naples, and nearby Gulf Coast resort areas",
    attractions: "Gulf beaches, dining, shopping, golf, spas, nature areas, and calm coastal weekend plans",
    rateDrivers: "winter season, holidays, beach proximity, resort amenities, room type, and premium weekend demand",
    confirm: "resort fees, parking, beach distance, cancellation terms, taxes, and whether amenities are included"
  },
  "key-west-hotel-deals": {
    stayTypes: "Key West guesthouses, boutique inns, island resorts, waterfront stays, and walkable old-town hotels",
    bestFor: "couples trips, island weekends, nightlife visits, waterfront escapes, and travelers comparing limited Key West inventory",
    areas: "Old Town, Duval Street, the waterfront, Truman Annex, Stock Island, and nearby Lower Keys alternatives",
    attractions: "sunset spots, waterfront dining, Duval Street, marinas, historic sites, beaches, and island tours",
    rateDrivers: "winter demand, festivals, holidays, minimum stays, waterfront location, parking, and limited room supply",
    confirm: "parking, island location, resort fees, cancellation rules, taxes, and whether the hotel is walkable to your plans"
  },
  "florida-romantic-hotels": {
    stayTypes: "boutique inns, beach resorts, spa hotels, waterfront rooms, and couples-friendly weekend stays",
    bestFor: "anniversary trips, quiet beach weekends, spa stays, walkable dining, and couples comparing property atmosphere",
    areas: "Naples, Miami Beach, Key West, St. Augustine, Sarasota, Fort Lauderdale, and the Florida Keys",
    attractions: "sunsets, beaches, restaurants, spas, historic districts, waterfront areas, and scenic island drives",
    rateDrivers: "weekends, holidays, room view, resort amenities, beach proximity, and limited boutique inventory",
    confirm: "resort fees, parking, cancellation terms, room type, taxes, and whether the location matches the trip mood"
  },
  "florida-budget-hotels": {
    stayTypes: "value hotels, airport stays, road trip lodging, budget beach alternatives, and practical family hotel searches",
    bestFor: "travelers prioritizing total trip cost, flexible dates, simple amenities, and useful locations over resort extras",
    areas: "Orlando, Jacksonville, Tampa Bay, Daytona Beach, Sarasota, Miami airport corridors, and inland routes near beaches",
    attractions: "theme parks, beaches, airports, sports venues, universities, event centers, and road trip stops",
    rateDrivers: "weekday timing, events, distance from beaches or parks, breakfast, cancellation flexibility, and parking",
    confirm: "taxes, fees, parking, breakfast, neighborhood fit, cancellation rules, and final checkout total"
  },
  "florida-pet-friendly-hotels": {
    stayTypes: "pet-friendly city hotels, beach-area stays, extended-stay hotels, road trip lodging, and family-friendly options",
    bestFor: "travelers bringing pets on Florida road trips, beach weekends, longer visits, or flexible staycations",
    areas: "Sarasota, Jacksonville, Orlando, Daytona Beach, Tampa Bay, St. Augustine, and pet-friendly coastal corridors",
    attractions: "walkable districts, parks, beaches with pet rules, road trip stops, outdoor dining, and family attractions",
    rateDrivers: "pet room availability, cleaning fees, season, weekend demand, and location near parks or beaches",
    confirm: "pet fees, size limits, breed rules, deposits, room availability, parking, taxes, and cancellation terms"
  },
  "florida-hotels-near-theme-parks": {
    stayTypes: "theme park area hotels, Orlando resorts, family suites, pool hotels, and attraction-focused lodging",
    bestFor: "families planning Disney, Universal, SeaWorld, or multi-attraction Central Florida trips",
    areas: "Lake Buena Vista, International Drive, Universal Orlando corridors, Disney-area hotels, and Orlando resort zones",
    attractions: "Walt Disney World, Universal Orlando, SeaWorld, ICON Park, outlet shopping, and family dining areas",
    rateDrivers: "school breaks, park events, holidays, shuttle access, room size, and proximity to attractions",
    confirm: "parking, shuttle details, resort fees, breakfast, cancellation terms, taxes, and drive times"
  },
  "florida-oceanfront-hotels": {
    stayTypes: "oceanfront hotels, waterfront resorts, beach-view rooms, coastal inns, and family beach properties",
    bestFor: "travelers who want the beach to be central to the trip and need to compare true oceanfront access",
    areas: "Miami Beach, Fort Lauderdale, Clearwater Beach, Daytona Beach, Amelia Island, Sarasota, Naples, and the Keys",
    attractions: "beaches, waterfront dining, marinas, boardwalks, spas, sunset spots, and coastal parks",
    rateDrivers: "view type, beach access, resort fees, holiday demand, winter season, and premium weekends",
    confirm: "whether the hotel is truly oceanfront, beach fees, parking, taxes, cancellation rules, and included amenities"
  },
  "florida-resorts-with-pools": {
    stayTypes: "pool resorts, family hotels, beach resorts, Orlando villa properties, and staycation-friendly hotels",
    bestFor: "families, resort weekends, warm-weather getaways, and travelers who plan to spend time at the property",
    areas: "Orlando, Clearwater Beach, Sarasota, Naples, Fort Lauderdale, the Florida Keys, and Tampa Bay",
    attractions: "theme parks, beaches, waterfront dining, resort amenities, family activities, and local attractions",
    rateDrivers: "pool amenities, season, resort fees, school breaks, weekend demand, and room type",
    confirm: "pool hours, resort fees, parking, cancellation rules, taxes, occupancy limits, and whether amenities are open during your stay"
  }
};

function getHotelGuideCopy(pageSlug: string, destinationLabel: string) {
  const profile = hotelGuideProfiles[pageSlug] ?? {
    stayTypes: "curated hotel searches, resort options, weekend stays, and practical Florida lodging",
    bestFor: "travelers comparing current hotel options by destination, trip style, budget, and flexible dates",
    areas: "nearby hotel districts, beach areas, downtown corridors, attraction zones, and convenient airport or road trip routes",
    attractions: "beaches, restaurants, events, family attractions, waterfront areas, and local Florida experiences",
    rateDrivers: "season, weekends, events, holidays, room type, location, and cancellation flexibility",
    confirm: "final taxes, fees, parking, cancellation terms, location, and current availability with the booking source"
  };

  return [
    `${destinationLabel} helps travelers compare ${profile.stayTypes}. The goal is to give you a practical starting point for current hotel searches, not a fixed-price claim that may be stale by the time you book.`,
    `This page is especially useful for ${profile.bestFor}. Compare areas such as ${profile.areas}, then weigh the hotel location against the places you expect to spend the most time.`,
    `Nearby trip drivers can include ${profile.attractions}. Rates may move around ${profile.rateDrivers}, so flexible dates and nearby neighborhoods can make a meaningful difference when comparing hotels.`,
    `Before booking, confirm ${profile.confirm}. Hotel rates and availability may change quickly, but a clearer comparison makes it easier to choose a stay that fits the trip.`
  ];
}

function getPageHeroCta(slug: string, destinationLabel: string) {
  const ctas: Record<string, string> = {
    "orlando-hotel-deals": "Compare Orlando Hotels",
    "orlando-family-resort-deals": "Compare Orlando Family Resorts",
    "miami-hotel-deals": "Compare Miami Hotels",
    "miami-beach-hotel-deals": "View Miami Beach Stays",
    "tampa-hotel-deals": "Find Tampa Hotels",
    "fort-lauderdale-hotel-deals": "Browse Fort Lauderdale Hotels",
    "florida-keys-hotel-deals": "Browse Florida Keys Stays",
    "key-west-hotel-deals": "Compare Key West Hotels",
    "clearwater-beach-hotel-deals": "View Clearwater Beach Stays",
    "florida-beach-resort-deals": "Compare Beach Resorts",
    "florida-family-hotel-deals": "Find Family-Friendly Hotels",
    "florida-weekend-getaway-hotels": "Browse Weekend Stays",
    "florida-luxury-hotel-deals": "Compare Luxury Stays",
    "florida-budget-hotel-deals": "View Budget Hotels",
    "florida-romantic-hotels": "Compare Romantic Hotels",
    "florida-budget-hotels": "View Budget Hotels",
    "florida-pet-friendly-hotels": "Compare Pet-Friendly Hotels",
    "florida-hotels-near-theme-parks": "Compare Theme Park Hotels",
    "florida-oceanfront-hotels": "Compare Oceanfront Hotels",
    "florida-resorts-with-pools": "Compare Pool Resorts",
    "florida-hotels-under-150": "Browse Budget Hotel Searches",
    "best-areas-to-stay-in-orlando": "Compare Orlando Hotels",
    "where-to-stay-in-miami-beach": "View Miami Beach Stays",
    "best-florida-beach-hotels-guide": "Compare Beach Hotels",
    "orlando-resort-guide": "Compare Orlando Resorts",
    "florida-family-resort-guide": "Find Family Resorts",
    "how-to-find-cheap-hotels-in-florida": "Browse Budget Hotel Searches",
    "best-time-to-book-florida-hotels": "Compare Florida Hotels",
    "florida-resort-fees-guide": "Compare Resort Hotels",
    "hotel-vs-resort-florida": "Compare Hotels and Resorts",
    "best-weekend-hotel-getaways-florida": "Browse Weekend Stays",
    "miami-vs-miami-beach-hotels": "Compare Miami Beach Hotels",
    "orlando-resorts-vs-international-drive-hotels": "Compare Orlando Hotels",
    "beach-resorts-vs-budget-hotels-florida": "Compare Beach Resorts",
    "family-hotels-vs-romantic-hotels-florida": "Compare Family Hotels",
    "miami-vs-fort-lauderdale-hotels": "Compare Fort Lauderdale Hotels",
    "best-family-resorts-in-florida": "Explore Family Resort Options",
    "best-beach-hotels-in-florida": "Search Beach Hotels",
    "where-to-stay-in-miami": "Browse Miami Hotels",
    "where-to-stay-in-orlando": "Compare Orlando Resorts",
    "best-hotels-near-florida-cruise-ports": "Search Cruise Port Hotels",
    "budget-hotels-in-florida": "View Budget Hotel Options",
    "luxury-florida-resorts": "Compare Luxury Resorts",
    "weekend-getaway-hotels": "Search Weekend Rates",
    "best-waterfront-hotels-in-florida": "Explore Waterfront Hotels",
    "miami-vs-orlando-hotels": "Compare Miami and Orlando Hotels",
    "beach-resort-vs-theme-park-resort": "Compare Resort Options",
    "budget-hotel-vs-luxury-resort": "Compare Hotel Prices",
    "downtown-vs-beachfront-hotel": "Compare Hotel Locations",
    "hotel-vs-vacation-rental-in-florida": "Search Florida Hotels",
    "summer-florida-resorts": "Explore Summer Resorts",
    "winter-florida-getaways": "Search Winter Getaways",
    "spring-break-hotels": "Search Spring Break Hotels",
    "holiday-hotel-deals": "Search Holiday Hotel Options",
    "memorial-day-florida-hotels": "Search Weekend Rates",
    "cheap-summer-hotels-in-florida": "Browse Budget Summer Hotels",
    "florida-resort-packing-guide": "Compare Resort Hotels",
    "beach-vacation-essentials": "Search Beach Hotels",
    "editorial-policy": "Search Florida Hotels",
    "how-hotel-pricing-works": "Compare Hotel Prices"
  };

  return ctas[slug] ?? `Compare ${destinationLabel} Hotels`;
}

export function generateStaticParams(): SeoPageParams[] {
  return seoLandingPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<SeoPageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = seoLandingPageMap.get(resolvedParams.slug);

  if (!page) {
    return {};
  }

  const url = `https://hoteldealsflorida.org/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "Florida Hotel Deals",
      type: "website",
      images: [
        {
          url: page.image,
          width: 1400,
          height: 900,
          alt: page.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [
        {
          url: page.image,
          alt: page.imageAlt
        }
      ]
    }
  };
}

export default async function SeoLandingPage({
  params
}: {
  params: Promise<SeoPageParams>;
}) {
  const resolvedParams = await params;
  const page = seoLandingPageMap.get(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const deals = getDealsForSeoPage(page);
  const faqs = getFaqsForSeoPage(page);
  const inferredDestinationKey = page.slug.includes("key-west")
    ? "keyWest"
    : page.slug.includes("clearwater")
      ? "clearwater"
      : page.slug.includes("destin") || page.slug.includes("panama-city")
        ? "clearwater"
        : page.slug.includes("siesta") || page.slug.includes("sarasota")
          ? "sarasota"
          : page.slug.includes("naples")
            ? "naples"
            : page.slug.includes("fort-lauderdale")
              ? "fortLauderdale"
              : page.slug.includes("orlando") || page.slug.includes("disney") || page.slug.includes("universal")
                ? "orlando"
                : page.slug.includes("beach")
                  ? "miamiBeach"
                  : "orlando";
  const destinationKey = seoPageDestinationMap[page.slug] ?? inferredDestinationKey;
  const destinationLink = getExpediaHotelLink(destinationKey);
  const destinationLabel = page.h1.replace(" Deals", "");
  const heroCtaLabel = getPageHeroCta(page.slug, destinationLabel);
  const showGearPicks = /packing|essentials|beach|resort|camping|cabin|rain-gear/.test(page.slug);
  const guideCopy = getHotelGuideCopy(page.slug, destinationLabel);
  const showTransferAndTravel = transferAndTravelSlugs.has(page.slug);
  const showConversionCards = conversionSlugs.has(page.slug);
  const isPriorityHotelPage = priorityHotelCluster.includes(page.slug);
  const isLuxuryLeanPage = /oceanfront|resort|pool|luxury|key-west|beach/.test(page.slug);
  const relatedPages = page.related
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((relatedPage): relatedPage is NonNullable<typeof relatedPage> => Boolean(relatedPage));
  const relatedSearchCandidates = [
    { label: "Hotel Deals Home", href: "/" },
    ...priorityHotelCluster
      .filter((slug) => slug !== page.slug)
      .map((slug) => ({ label: getSeoPageLabel(slug), href: `/${slug}` })),
    ...relatedPages.map((relatedPage) => ({
      label: getSeoPageLabel(relatedPage.slug),
      href: `/${relatedPage.slug}`
    })),
    ...globalRelatedHotelSearches
      .filter((slug) => slug !== page.slug && !page.related.includes(slug))
      .map((slug) => ({
        label: getSeoPageLabel(slug),
        href: `/${slug}`
      }))
  ];
  const seenRelatedHrefs = new Set<string>();
  const relatedSearchLinks = relatedSearchCandidates
    .filter((link) => {
      if (seenRelatedHrefs.has(link.href)) return false;
      seenRelatedHrefs.add(link.href);
      return true;
    })
    .slice(0, 10);
  const readersAlsoPlanned = [
    { label: "Find Florida attractions", href: "https://localdealsflorida.org/best-things-to-do-in-florida" },
    { label: "Compare Florida flights", href: "https://flightdealsflorida.org/cheap-flights-to-florida-guide" },
    { label: "Plan vacation packages", href: "https://floridadealshub.com/vacation-packages" },
    { label: "Check weekend cruises", href: "https://cruisedealsflorida.org/weekend-cruises-from-florida" },
    { label: "Review hotel feature tables", href: "#hotel-faq" }
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Florida Hotel Deals",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: `${SITE_URL}/${page.slug}`
      }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.h1} featured hotel searches`,
    itemListElement: deals.map((deal, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: deal.hotel_name,
      url: deal.booking_url
    }))
  };
  const articleSchema =
    page.pageKind === "guide"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.description,
          image: page.image,
          author: {
            "@type": "Organization",
            name: "Florida Deals Hub"
          },
          publisher: {
            "@type": "Organization",
            name: "Florida Deals Hub"
          },
          dateModified: "2026-06-22",
          mainEntityOfPage: `${SITE_URL}/${page.slug}`
        }
      : null;
  const pageSchemas = ([breadcrumbSchema, faqSchema, itemListSchema, articleSchema] as Array<JsonLdSchema | null>).filter(
    (schema): schema is JsonLdSchema => Boolean(schema)
  );

  return (
    <>
      <ReadingProgressBar />
      {pageSchemas.map((schema) => (
        <script
          key={String(schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      <SiteHeader />
      <main>
        {showConversionCards ? <ConversionScrollAnalytics /> : null}
        {isPriorityHotelPage ? <ExitNewsletterCapture /> : null}
        <StickyHotelCtas destination={destinationLabel} expediaUrl={destinationLink} />
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm font-bold text-slateText sm:px-6 lg:px-8"
        >
          <Link href="/" className="hover:text-ocean">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/" className="hover:text-ocean">
            Florida Hotel Deals
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{page.h1}</span>
        </nav>

        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
          <div className="absolute inset-0 -z-10">
            <SafeImage
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/38" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(245,158,11,0.18),transparent_22rem)]" />
          </div>

          <div className="mx-auto grid min-h-[34rem] max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-ocean shadow-sm backdrop-blur"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Florida Hotel Deals
              </Link>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-ocean">
                {page.eyebrow}
              </p>
              <div className="mt-4">
                <FreshnessBadge />
              </div>
              <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black tracking-normal text-ink sm:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slateText">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ExpediaHotelCta
                  href={destinationLink}
                  destination={destinationLabel}
                  label={heroCtaLabel}
                  pageContext={`${page.slug}-hero`}
                  className="btn btn-primary px-6"
                >
                  {heroCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ExpediaHotelCta>
                <Link href="#featured-stays" className="btn btn-secondary px-6">
                  View Hotel Options
                </Link>
                <Link href="#alerts" className="btn btn-secondary px-6">
                  Get Alerts
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/80 bg-white/92 p-6 shadow-soft backdrop-blur">
              <Search className="h-8 w-8 text-ocean" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-black text-ink">Current stay options</h2>
              <p className="mt-3 font-medium leading-7 text-slateText">{page.details}</p>
              <div className="mt-5 grid gap-3 text-sm font-black text-ink">
                {["Compare hotel options", "See availability", "Hotel rates may change"].map((item) => (
                  <span key={item} className="rounded-2xl border border-slate-200 bg-sand px-4 py-3">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <HotelQuickAnswer destinationLabel={destinationLabel} />
        <V14HotelDiscovery slug={page.slug} destination={destinationLabel} />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Compare before booking
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                How to find the right {destinationLabel.toLowerCase()}.
              </h2>
            </div>
            <div className="space-y-4 font-medium leading-7 text-slateText">
              {guideCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {page.guideSections?.map((section) => (
                <div key={section.heading} className="pt-2">
                  <h3 className="text-lg font-black leading-7 text-ink">{section.heading}</h3>
                  <p className="mt-2">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InlineHotelAlerts />

        {page.comparisonRows?.length ? (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <div className="border-b border-slate-200 bg-sand p-6 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                  Hotel comparison
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                  Quick comparison before you book.
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[44rem] border-collapse text-left">
                  <thead className="bg-white text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <th className="border-b border-slate-200 px-5 py-4">Factor</th>
                      <th className="border-b border-slate-200 px-5 py-4">Option A</th>
                      <th className="border-b border-slate-200 px-5 py-4">Option B</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium leading-6 text-slateText">
                    {page.comparisonRows.map((row) => (
                      <tr key={row.factor} className="odd:bg-sand/50">
                        <th className="border-b border-slate-200 px-5 py-4 font-black text-ink">
                          {row.factor}
                        </th>
                        <td className="border-b border-slate-200 px-5 py-4">{row.optionA}</td>
                        <td className="border-b border-slate-200 px-5 py-4">{row.optionB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        {isPriorityHotelPage ? <CompareHotelOptions destination={destinationLabel} expediaUrl={destinationLink} /> : null}
        <HotelFeatureTable slug={page.slug} />
        {isPriorityHotelPage ? <HotelBookingStack destination={destinationLabel} expediaUrl={destinationLink} /> : null}
        <TravelEssentialsBlock destination={destinationLabel} luxury={isLuxuryLeanPage} />

        {page.gallery?.length ? (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Destination gallery
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                Picture the stay before comparing rates.
              </h2>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {page.gallery.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
                  <div className="relative aspect-[4/3] bg-sand">
                    <SafeImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-bold leading-6 text-slateText">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section id="featured-stays" className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Featured hotel searches
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Useful Florida stay deals to check today.
            </h2>
            <p className="mt-4 font-medium leading-7 text-slateText">
              These cards link through Expedia where current rates, availability, fees, and
              booking terms can be reviewed directly.
            </p>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Updated regularly. Rates may change.
            </p>
            <AffiliateDisclosure className="mt-3 max-w-2xl" />
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-sand px-5 py-4 text-sm font-bold leading-6 text-slateText">
            Hotel rates can change quickly. Compare options, check cancellation policies, and
            confirm taxes or fees with the booking source before booking.
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} pageContext={page.slug} />
            ))}
          </div>
        </section>

        {showGearPicks ? (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                  Florida travel gear picks
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
                  Useful outdoor gear for hotel and resort trips.
                </h2>
              </div>
              <AffiliateDisclosure className="max-w-md" />
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {hotelPiscifunGearPicks.map((item) => (
                <AffiliateGearLink key={item.title} item={item} ctaText={item.advertiser === "tidewe" ? "Browse TideWe Outdoor Gear" : "Shop Outdoor Gear"} />
              ))}
            </div>
          </section>
        ) : null}

        <section id="hotel-faq" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Compare Hotels Before You Book
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Check current {destinationLabel.toLowerCase()} prices on Expedia.
            </h2>
            <p className="mt-3 max-w-3xl font-medium leading-7 text-slateText">
              Compare multiple hotels instantly, review current availability, and confirm the final
              price before booking. Prices may change by date, room type, and demand.
            </p>
            <AffiliateDisclosure className="mt-3 max-w-2xl" />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ExpediaHotelCta
                href={destinationLink}
                destination={destinationLabel}
                label="Compare Hotel Prices"
                pageContext={page.slug}
                category="Hotel Search"
                className="btn btn-primary px-6"
              >
                Compare Hotel Prices
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ExpediaHotelCta>
              <ExpediaHotelCta
                href={destinationLink}
                destination={destinationLabel}
                label={heroCtaLabel}
                pageContext={page.slug}
                category="Hotel Search"
                className="btn btn-secondary px-6"
              >
                {heroCtaLabel}
              </ExpediaHotelCta>
            </div>
            <p className="mt-3 text-xs font-bold text-slate-500">
              Free cancellation and no booking fees are available on many stays.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Related Hotel Searches
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Keep comparing Florida hotel options.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedSearchLinks.map((relatedLink) => (
                <Link
                  key={relatedLink.href}
                  href={relatedLink.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
                >
                  {relatedLink.label}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-skyline p-5">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Readers also planned</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {readersAlsoPlanned.map((item) => (
                  <TrackedLink className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-ink transition hover:text-ocean" href={item.href} label={item.label} eventName="related_guide_click" key={item.href}>
                    {item.label}
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Hotel Deal FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Quick answers before you compare rates.
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-sand p-5">
                  <h3 className="text-lg font-black text-ink">{faq.question}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slateText">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Find Your Stay in Florida
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Popular Florida hotel searches on Expedia.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {popularExpediaSearches.map((search) => (
                <ExpediaHotelCta
                  key={search.destination}
                  href={getExpediaHotelLink(search.destination)}
                  destination={search.label}
                  label={`Compare ${search.label}`}
                  pageContext={page.slug}
                  category="Hotel Search"
                  className="btn btn-secondary justify-center px-5"
                >
                  {search.label}
                </ExpediaHotelCta>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold text-slate-500">
              Compare multiple hotels instantly. Prices and availability may change.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <RevenueCtaCard eyebrow="Attractions" headline="Plan activities near your hotel" benefits={["Compare theme parks, tours, and local attractions", "Build a practical activity day before booking"]} href="https://localdealsflorida.org" cta="Find Florida Activities" icon={<Ticket className="h-5 w-5" />} />
            <RevenueCtaCard eyebrow="Vacation packages" headline="Turn the stay into a complete Florida trip" benefits={["Compare family, beach, and weekend packages", "Connect hotels with flights and attractions"]} href="https://floridadealshub.com/vacation-packages" cta="Explore Vacation Packages" icon={<Umbrella className="h-5 w-5" />} />
            <RevenueCtaCard eyebrow="Destination planning" headline="Choose the right Florida area" benefits={["Compare destination guides and nearby experiences", "Check transportation and trip timing"]} href="https://floridadealshub.com/destinations" cta="Browse Florida Destinations" icon={<MapPin className="h-5 w-5" />} />
          </div>
        </section>
        <HotelContinuePlanningGuides />
        {showConversionCards ? <section className="bg-white px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2"><QuickDealCard /><RecommendedPartnerCard /></div></section> : null}
        {showTransferAndTravel ? <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2"><TransferBookingCard slug={page.slug} /><TravelBookingCard /></div></section> : null}
        <CompleteTripSection />
        <NewsletterSection />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
