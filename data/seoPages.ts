import { hotelDeals } from "@/data/hotelDeals";

export type SeoLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  details: string;
  image: string;
  imageAlt: string;
  dealIds: string[];
  related: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "orlando-hotel-deals",
    title: "Orlando Hotel Deals | Family Resorts, Theme Park Hotels & Weekend Stays",
    description:
      "Find Orlando hotel deals including family resorts, theme park area hotels, weekend stays, and Florida staycation options near Disney, Universal, and International Drive.",
    h1: "Orlando Hotel Deals",
    eyebrow: "Central Florida stays",
    intro:
      "Browse Orlando hotel deals for family trips, theme park weekends, and Central Florida staycations. Compare current rates, featured hotel searches, and useful stay options near Orlando's most popular attractions.",
    details:
      "Orlando hotel rates may change quickly around school breaks, events, and park weekends, so these curated hotel finds focus on flexible searches where travelers can check availability before booking.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Family resort pool and hotel balconies for Orlando hotel deals",
    dealIds: [
      "orlando-family-resort-search",
      "orlando-resident-suite-search",
      "orlando-luxury-villas-search",
      "orlando-under-150-search",
      "sarasota-family-suite-search"
    ],
    related: [
      "orlando-family-resort-deals",
      "florida-family-hotel-deals",
      "florida-hotels-under-150",
      "florida-weekend-getaway-hotels"
    ],
    faqs: [
      {
        question: "Where should I stay in Orlando for theme parks?",
        answer:
          "Many visitors compare hotels around Lake Buena Vista, International Drive, Universal Orlando, and the theme park corridor because those areas can reduce drive time and make family logistics easier."
      },
      {
        question: "Are Orlando hotel rates cheaper on weekdays?",
        answer:
          "Weekday rates can be lower than peak weekends, but school breaks, conventions, holidays, and park events can change pricing quickly. Check current rates before booking."
      },
      {
        question: "What areas are best for family hotel stays?",
        answer:
          "Families often look for suite-style hotels, pool resorts, breakfast options, parking, and shuttle access near Disney, Universal, International Drive, or Lake Buena Vista."
      },
      {
        question: "Do Orlando hotel rates change often?",
        answer:
          "Yes. Orlando hotel rates may change based on park demand, event calendars, room type, cancellation terms, and availability."
      }
    ]
  },
  {
    slug: "miami-hotel-deals",
    title: "Miami Hotel Deals | Beach Hotels, Luxury Stays & Weekend Getaways",
    description:
      "Find Miami hotel deals including beach hotels, luxury stays, weekend getaways, and current hotel rates across Miami and South Florida.",
    h1: "Miami Hotel Deals",
    eyebrow: "South Florida stays",
    intro:
      "Explore Miami hotel deals for beach trips, downtown weekends, luxury stays, airport overnights, and South Florida staycations. Use these current hotel searches to compare live rates and availability.",
    details:
      "Miami pricing often shifts by neighborhood, event calendar, and beach proximity. These featured stays point to useful search pages so visitors can review current offers before choosing a hotel.",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Miami Beach skyline and waterfront hotels for Miami hotel deals",
    dealIds: [
      "miami-beach-hotel-search",
      "miami-brickell-weekend-search",
      "miami-airport-budget-search",
      "miami-luxury-spa-search"
    ],
    related: [
      "miami-beach-hotel-deals",
      "florida-luxury-hotel-deals",
      "florida-weekend-getaway-hotels",
      "fort-lauderdale-hotel-deals"
    ]
  },
  {
    slug: "miami-beach-hotel-deals",
    title: "Miami Beach Hotel Deals | Oceanfront Hotels, Resorts & Weekend Stays",
    description:
      "Find Miami Beach hotel deals including oceanfront hotels, beach resorts, luxury stays, and weekend hotel searches near South Beach and Mid-Beach.",
    h1: "Miami Beach Hotel Deals",
    eyebrow: "Beach hotel searches",
    intro:
      "Compare Miami Beach hotel deals for oceanfront weekends, resort stays, nightlife trips, and warm-weather getaways. These featured hotel searches make it easier to check current rates near the beach.",
    details:
      "Beachfront rooms and resort-style hotels can vary widely by date, so this page favors live booking searches and current stay options instead of fixed-price claims.",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Miami skyline and beach hotel district for Miami Beach hotel deals",
    dealIds: [
      "miami-beach-hotel-search",
      "miami-luxury-spa-search",
      "miami-brickell-weekend-search",
      "fort-lauderdale-beach-resort-search"
    ],
    related: [
      "miami-hotel-deals",
      "florida-beach-resort-deals",
      "florida-luxury-hotel-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "tampa-hotel-deals",
    title: "Tampa Hotel Deals | Waterfront Hotels, Downtown Stays & Beach Trips",
    description:
      "Find Tampa hotel deals including waterfront hotels, downtown stays, St. Pete getaways, Clearwater Beach hotels, and current Tampa Bay hotel rates.",
    h1: "Tampa Hotel Deals",
    eyebrow: "Tampa Bay stays",
    intro:
      "Browse Tampa hotel deals for downtown events, waterfront stays, St. Pete weekends, and Clearwater Beach trips. Compare current hotel searches across the Tampa Bay area.",
    details:
      "Tampa Bay works for city breaks, beach weekends, and quick staycations. These current stay options help travelers check availability across Tampa, St. Pete, and nearby Gulf beaches.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Premium waterfront hotel lobby for Tampa hotel deals",
    dealIds: [
      "tampa-waterfront-hotel-search",
      "clearwater-gulf-search",
      "st-pete-art-hotel-search",
      "tampa-budget-search"
    ],
    related: [
      "clearwater-beach-hotel-deals",
      "florida-beach-resort-deals",
      "florida-budget-hotel-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "fort-lauderdale-hotel-deals",
    title: "Fort Lauderdale Hotel Deals | Beach Resorts, Marina Hotels & Weekend Stays",
    description:
      "Find Fort Lauderdale hotel deals including beach resorts, marina hotels, weekend stays, and current hotel searches near Las Olas and the ocean.",
    h1: "Fort Lauderdale Hotel Deals",
    eyebrow: "Beach and marina stays",
    intro:
      "Find Fort Lauderdale hotel deals for beach weekends, marina views, Las Olas dining trips, and South Florida staycations. Compare current rates through useful hotel search pages.",
    details:
      "Fort Lauderdale is especially strong for travelers who want beach access without losing city dining and marina energy. Hotel rates may change by event and weekend demand.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Beach resort pool and palm trees for Fort Lauderdale hotel deals",
    dealIds: [
      "fort-lauderdale-beach-resort-search",
      "fort-lauderdale-marina-search",
      "fort-lauderdale-resident-search",
      "miami-beach-hotel-search"
    ],
    related: [
      "miami-hotel-deals",
      "florida-beach-resort-deals",
      "florida-resident-hotel-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "jacksonville-hotel-deals",
    title: "Jacksonville Hotel Deals | Riverfront, Beach & Value Stays",
    description:
      "Find Jacksonville hotel deals including riverfront hotels, beach-area stays, value hotels, and current hotel searches across Northeast Florida.",
    h1: "Jacksonville Hotel Deals",
    eyebrow: "Northeast Florida stays",
    intro:
      "Browse Jacksonville hotel deals for riverfront weekends, beach routes, event stays, and Northeast Florida road trips. Compare current hotel searches before booking.",
    details:
      "Jacksonville gives travelers room to choose between downtown, beach, airport, and Amelia Island-style coastal stays. These links point to current hotel searches where rates and availability can be checked.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern city hotel exterior for Jacksonville hotel deals",
    dealIds: [
      "jacksonville-riverfront-search",
      "jacksonville-budget-search",
      "amelia-island-beach-search",
      "st-augustine-family-lodge-search"
    ],
    related: [
      "st-augustine-hotel-deals",
      "florida-budget-hotel-deals",
      "florida-beach-resort-deals",
      "florida-hotels-under-150"
    ]
  },
  {
    slug: "florida-keys-hotel-deals",
    title: "Florida Keys Hotel Deals | Resorts, Inns & Island Getaways",
    description:
      "Find Florida Keys hotel deals including island resorts, boutique inns, waterfront stays, and weekend getaway options from Key Largo to Key West.",
    h1: "Florida Keys Hotel Deals",
    eyebrow: "Island stay searches",
    intro:
      "Find Florida Keys hotel deals for island resorts, waterfront inns, family stays, and weekend getaways from Key Largo to Key West. Compare current rates and availability before planning your trip.",
    details:
      "The Keys are popular for long weekends, winter escapes, and special occasions. Hotel rates may change sharply by island and season, so these featured hotel searches keep the next step practical.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Turquoise Florida Keys coastline for island hotel deals",
    dealIds: [
      "florida-keys-weekend-search",
      "key-west-inn-search",
      "keys-family-resort-search",
      "miami-beach-hotel-search"
    ],
    related: [
      "florida-beach-resort-deals",
      "florida-weekend-getaway-hotels",
      "florida-luxury-hotel-deals",
      "florida-family-hotel-deals"
    ]
  },
  {
    slug: "daytona-beach-hotel-deals",
    title: "Daytona Beach Hotel Deals | Oceanfront Hotels & Weekend Stays",
    description:
      "Find Daytona Beach hotel deals including oceanfront hotels, boardwalk stays, weekend getaways, and current hotel searches near the beach and speedway.",
    h1: "Daytona Beach Hotel Deals",
    eyebrow: "Atlantic beach stays",
    intro:
      "Browse Daytona Beach hotel deals for oceanfront trips, boardwalk weekends, event stays, and affordable beach getaways. Check current rates and availability by date.",
    details:
      "Daytona hotel demand can shift around racing, concerts, holidays, and beach weekends. These curated hotel finds help travelers compare live options without relying on fixed-price claims.",
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Wide Atlantic beach for Daytona Beach hotel deals",
    dealIds: [
      "daytona-oceanfront-search",
      "daytona-weekend-search",
      "orlando-under-150-search",
      "st-augustine-family-lodge-search"
    ],
    related: [
      "florida-beach-resort-deals",
      "florida-weekend-getaway-hotels",
      "florida-budget-hotel-deals",
      "st-augustine-hotel-deals"
    ]
  },
  {
    slug: "st-augustine-hotel-deals",
    title: "St. Augustine Hotel Deals | Historic Inns, Boutique Hotels & Family Stays",
    description:
      "Find St. Augustine hotel deals including historic inns, boutique hotels, family stays, and current hotel searches near the old city and beaches.",
    h1: "St. Augustine Hotel Deals",
    eyebrow: "Historic Florida stays",
    intro:
      "Search St. Augustine hotel deals for historic inns, boutique hotels, family-friendly stays, and walkable old-city weekends. Compare current rates before choosing your dates.",
    details:
      "St. Augustine is a strong fit for couples, families, road trips, and history-focused weekends. Current stay options can vary between the historic district, beach side, and nearby routes.",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Boutique inn bedroom for St. Augustine hotel deals",
    dealIds: [
      "st-augustine-historic-inn-search",
      "st-augustine-family-lodge-search",
      "st-augustine-luxury-search",
      "jacksonville-riverfront-search"
    ],
    related: [
      "jacksonville-hotel-deals",
      "florida-family-hotel-deals",
      "florida-luxury-hotel-deals",
      "daytona-beach-hotel-deals"
    ]
  },
  {
    slug: "sarasota-hotel-deals",
    title: "Sarasota Hotel Deals | Beach Resorts, Family Suites & Gulf Coast Stays",
    description:
      "Find Sarasota hotel deals including beach resorts, family suites, value stays, and current hotel searches near Siesta Key, Lido Key, and downtown Sarasota.",
    h1: "Sarasota Hotel Deals",
    eyebrow: "Gulf Coast stays",
    intro:
      "Browse Sarasota hotel deals for Gulf Coast beach trips, family suites, arts weekends, and relaxed Florida staycations. Compare current hotel searches near Siesta Key, Lido Key, and downtown.",
    details:
      "Sarasota hotel demand often follows beach season, arts events, and weekend travel. These featured stays help visitors check rates and availability directly with booking/search partners.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sarasota resort pool and lounge area for Gulf Coast hotel deals",
    dealIds: [
      "sarasota-lido-resort-search",
      "sarasota-family-suite-search",
      "sarasota-under-150-search",
      "naples-boutique-retreat-search"
    ],
    related: [
      "florida-beach-resort-deals",
      "florida-family-hotel-deals",
      "naples-hotel-deals",
      "florida-hotels-under-150"
    ]
  },
  {
    slug: "naples-hotel-deals",
    title: "Naples Hotel Deals | Luxury Resorts, Boutique Stays & Gulf Getaways",
    description:
      "Find Naples hotel deals including luxury resorts, boutique retreats, Gulf Coast stays, staycation options, and current hotel searches.",
    h1: "Naples Hotel Deals",
    eyebrow: "Premium Gulf stays",
    intro:
      "Find Naples hotel deals for luxury resorts, boutique retreats, quiet Gulf Coast weekends, and Florida staycations. Compare current rates and featured hotel searches before booking.",
    details:
      "Naples is well suited for polished coastal trips, spa weekends, and calm beach getaways. Hotel rates may change by season, so these links help visitors check live availability.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury resort pool for Naples hotel deals",
    dealIds: [
      "naples-boutique-retreat-search",
      "naples-resident-rate-search",
      "sarasota-lido-resort-search",
      "miami-luxury-spa-search"
    ],
    related: [
      "sarasota-hotel-deals",
      "florida-luxury-hotel-deals",
      "florida-resident-hotel-deals",
      "florida-beach-resort-deals"
    ]
  },
  {
    slug: "clearwater-beach-hotel-deals",
    title: "Clearwater Beach Hotel Deals | Gulf Resorts & Family Beach Stays",
    description:
      "Find Clearwater Beach hotel deals including Gulf resorts, family beach stays, weekend getaways, and current hotel searches near the sand.",
    h1: "Clearwater Beach Hotel Deals",
    eyebrow: "Gulf beach searches",
    intro:
      "Browse Clearwater Beach hotel deals for Gulf resort stays, family beach trips, sunset weekends, and Tampa Bay vacations. Check current rates and availability by date.",
    details:
      "Clearwater Beach is a favorite for families and quick Gulf Coast trips, and availability can shift around holidays and weekends. These searches point to current hotel options.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Clearwater Beach resort walkway and palm trees for Gulf hotel deals",
    dealIds: [
      "clearwater-gulf-search",
      "tampa-waterfront-hotel-search",
      "st-pete-art-hotel-search",
      "sarasota-lido-resort-search"
    ],
    related: [
      "tampa-hotel-deals",
      "florida-beach-resort-deals",
      "florida-family-hotel-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "florida-beach-resort-deals",
    title: "Florida Beach Resort Deals | Oceanfront Hotels & Coastal Getaways",
    description:
      "Find Florida beach resort deals including oceanfront hotels, coastal weekend stays, family resorts, and luxury beach getaways.",
    h1: "Florida Beach Resort Deals",
    eyebrow: "Oceanfront hotel searches",
    intro:
      "Compare Florida beach resort deals for oceanfront hotels, Gulf Coast escapes, Atlantic beach weekends, and luxury coastal stays. Use these current hotel searches to check rates by date.",
    details:
      "Beach resort pricing can move quickly with weather, holidays, and events. This page collects useful coastal hotel searches across Florida so visitors can compare current stay options.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Florida beach resort pool and palms for oceanfront hotel deals",
    dealIds: [
      "miami-beach-hotel-search",
      "fort-lauderdale-beach-resort-search",
      "clearwater-gulf-search",
      "sarasota-lido-resort-search",
      "daytona-oceanfront-search",
      "amelia-island-beach-search"
    ],
    related: [
      "miami-beach-hotel-deals",
      "florida-keys-hotel-deals",
      "clearwater-beach-hotel-deals",
      "florida-luxury-hotel-deals"
    ],
    faqs: [
      {
        question: "What are the best Florida beach areas for resort deals?",
        answer:
          "Miami Beach, Fort Lauderdale, Clearwater Beach, Sarasota, Daytona Beach, Naples, and the Florida Keys are strong starting points for beach resort searches."
      },
      {
        question: "Are beach resort rates cheaper off-season?",
        answer:
          "Beach resort rates may be lower outside peak holiday and winter travel periods, but weather, events, and weekends can still move prices."
      },
      {
        question: "Should I book directly or compare rates first?",
        answer:
          "Compare rates first so you can review room types, fees, cancellation policies, resort fees, and availability across booking sites and hotel websites."
      },
      {
        question: "Do Florida beach resort deals change often?",
        answer:
          "Yes. Availability varies by beach area, season, weekend demand, and room type, so it is smart to check current rates before booking."
      }
    ]
  },
  {
    slug: "florida-family-hotel-deals",
    title: "Florida Family Hotel Deals | Resorts, Suites & Kid-Friendly Stays",
    description:
      "Find Florida family hotel deals including resorts, suites, kid-friendly hotels, pool resorts, and weekend family stay options.",
    h1: "Florida Family Hotel Deals",
    eyebrow: "Kid-friendly stay searches",
    intro:
      "Find Florida family hotel deals for resorts, suites, pool hotels, beach trips, theme park weekends, and easy staycation plans. Compare current rates and family-friendly availability.",
    details:
      "Family stays often need more than a low rate: pools, room layouts, breakfast options, parking, and location all matter. These curated hotel finds focus on useful searches for family trips.",
    image: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Family-friendly resort pool for Florida family hotel deals",
    dealIds: [
      "orlando-family-resort-search",
      "clearwater-gulf-search",
      "sarasota-family-suite-search",
      "st-augustine-family-lodge-search",
      "keys-family-resort-search"
    ],
    related: [
      "orlando-family-resort-deals",
      "orlando-hotel-deals",
      "florida-beach-resort-deals",
      "florida-hotels-under-150"
    ]
  },
  {
    slug: "florida-weekend-getaway-hotels",
    title: "Florida Weekend Getaway Hotels | Beach Trips, City Stays & Island Escapes",
    description:
      "Find Florida weekend getaway hotels including beach trips, city stays, island escapes, and current weekend hotel searches across Florida.",
    h1: "Florida Weekend Getaway Hotels",
    eyebrow: "Weekend stay options",
    intro:
      "Browse Florida weekend getaway hotels for quick beach trips, city breaks, island escapes, and local staycations. Check current rates before locking in a weekend plan.",
    details:
      "Weekend hotel rates may change fast, especially around events, holidays, and popular beach dates. These featured hotel searches help visitors move from inspiration to availability.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sunny Florida beach for weekend getaway hotel searches",
    dealIds: [
      "florida-keys-weekend-search",
      "miami-brickell-weekend-search",
      "fort-lauderdale-marina-search",
      "daytona-weekend-search",
      "clearwater-gulf-search"
    ],
    related: [
      "florida-keys-hotel-deals",
      "miami-hotel-deals",
      "fort-lauderdale-hotel-deals",
      "florida-beach-resort-deals"
    ]
  },
  {
    slug: "florida-luxury-hotel-deals",
    title: "Florida Luxury Hotel Deals | Resorts, Spa Hotels & Premium Stays",
    description:
      "Find Florida luxury hotel deals including beach resorts, spa hotels, premium city stays, boutique retreats, and current luxury hotel searches.",
    h1: "Florida Luxury Hotel Deals",
    eyebrow: "Premium stay searches",
    intro:
      "Search Florida luxury hotel deals for beach resorts, spa hotels, boutique retreats, and premium city stays. Compare current offers and availability before choosing dates.",
    details:
      "Luxury hotel value depends on timing, location, room type, amenities, and cancellation terms. These current hotel searches help travelers compare premium stays without unsupported savings claims.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury hotel suite for Florida luxury hotel deals",
    dealIds: [
      "miami-luxury-spa-search",
      "naples-boutique-retreat-search",
      "orlando-luxury-villas-search",
      "st-augustine-luxury-search",
      "tampa-waterfront-hotel-search"
    ],
    related: [
      "miami-hotel-deals",
      "naples-hotel-deals",
      "florida-beach-resort-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "florida-budget-hotel-deals",
    title: "Florida Budget Hotel Deals | Value Hotels & Affordable Stay Searches",
    description:
      "Find Florida budget hotel deals including value hotels, affordable weekend stays, airport hotels, and current rate searches across Florida.",
    h1: "Florida Budget Hotel Deals",
    eyebrow: "Value stay searches",
    intro:
      "Find Florida budget hotel deals for practical road trips, airport overnights, affordable beach weekends, and value-focused staycations. Compare current rates by city and date.",
    details:
      "Budget-friendly hotels can vary by day of week and local demand. These current hotel searches help travelers look for practical options while confirming rates directly with booking partners.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Simple modern hotel room for Florida budget hotel deals",
    dealIds: [
      "jacksonville-budget-search",
      "miami-airport-budget-search",
      "tampa-budget-search",
      "sarasota-under-150-search",
      "orlando-under-150-search"
    ],
    related: [
      "florida-hotels-under-150",
      "jacksonville-hotel-deals",
      "tampa-hotel-deals",
      "orlando-hotel-deals"
    ]
  },
  {
    slug: "florida-resident-hotel-deals",
    title: "Florida Resident Hotel Deals | Staycation Rates & Local Hotel Searches",
    description:
      "Find Florida resident hotel deals including staycation hotel searches, local getaway options, beach escapes, and current Florida hotel rates.",
    h1: "Florida Resident Hotel Deals",
    eyebrow: "Staycation searches",
    intro:
      "Browse Florida resident hotel deals for staycations, quick beach escapes, family weekends, and local resort breaks. Check current rate rules before booking.",
    details:
      "Resident rates and local offers can vary by hotel and may require eligibility at check-in. These featured stays point to current hotel searches where terms can be reviewed.",
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Resort balcony and coast for Florida resident hotel deals",
    dealIds: [
      "orlando-resident-suite-search",
      "fort-lauderdale-resident-search",
      "naples-resident-rate-search",
      "clearwater-gulf-search"
    ],
    related: [
      "orlando-hotel-deals",
      "fort-lauderdale-hotel-deals",
      "naples-hotel-deals",
      "florida-weekend-getaway-hotels"
    ]
  },
  {
    slug: "orlando-family-resort-deals",
    title: "Orlando Family Resort Deals | Pool Hotels, Suites & Theme Park Stays",
    description:
      "Find Orlando family resort deals including pool hotels, suites, theme park area stays, and current family hotel searches near Disney, Universal, and International Drive.",
    h1: "Orlando Family Resort Deals",
    eyebrow: "Theme park family stays",
    intro:
      "Compare Orlando family resort deals for pool hotels, suite-style stays, theme park weekends, and Central Florida vacations. Check current rates near popular Orlando attractions.",
    details:
      "Families often need space, location, shuttle options, and easy meals as much as a good rate. These searches focus on current stay options that work well for Orlando family trips.",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Orlando resort villa and pool for family resort deals",
    dealIds: [
      "orlando-family-resort-search",
      "orlando-luxury-villas-search",
      "orlando-resident-suite-search",
      "orlando-under-150-search",
      "sarasota-family-suite-search"
    ],
    related: [
      "orlando-hotel-deals",
      "florida-family-hotel-deals",
      "florida-hotels-under-150",
      "florida-resident-hotel-deals"
    ]
  },
  {
    slug: "florida-hotels-under-150",
    title: "Florida Hotels Under $150 | Value Hotel Searches & Affordable Stays",
    description:
      "Find Florida hotels under $150 searches, value hotels, affordable stay options, and current budget hotel rates across popular Florida destinations.",
    h1: "Florida Hotels Under $150",
    eyebrow: "Affordable hotel searches",
    intro:
      "Search Florida hotels under $150 by comparing current value stays across popular destinations. Rates may change, so use these hotel searches to check live availability before booking.",
    details:
      "Affordable hotel options can depend on travel dates, neighborhood, events, and cancellation terms. These curated hotel finds are built for travelers who want useful budget-focused search starting points.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Clean hotel room for Florida hotels under 150 searches",
    dealIds: [
      "jacksonville-riverfront-search",
      "daytona-oceanfront-search",
      "st-pete-art-hotel-search",
      "orlando-under-150-search",
      "sarasota-under-150-search",
      "tampa-budget-search"
    ],
    related: [
      "florida-budget-hotel-deals",
      "orlando-hotel-deals",
      "daytona-beach-hotel-deals",
      "jacksonville-hotel-deals"
    ]
  }
];

export const seoLandingPageMap = new Map(seoLandingPages.map((page) => [page.slug, page]));

export function getDealsForSeoPage(page: SeoLandingPage) {
  const selected = page.dealIds
    .map((id) => hotelDeals.find((deal) => deal.id === id))
    .filter((deal): deal is (typeof hotelDeals)[number] => Boolean(deal));

  return selected.length >= 3 ? selected : hotelDeals.slice(0, 4);
}

export function getSeoPageLabel(slug: string) {
  const page = seoLandingPageMap.get(slug);
  return page?.h1 ?? slug.replace(/-/g, " ");
}

export function getFaqsForSeoPage(page: SeoLandingPage) {
  if (page.faqs?.length) {
    return page.faqs;
  }

  return [
    {
      question: `How should I use ${page.h1.toLowerCase()} searches?`,
      answer:
        "Start by comparing current hotel searches, then review the final rate, fees, cancellation terms, and location details directly on the booking site before reserving."
    },
    {
      question: "Do hotel rates change often?",
      answer:
        "Yes. Florida hotel rates can change based on season, weekends, events, holidays, room type, and availability. Always check current rates before booking."
    },
    {
      question: "Should I book directly or compare rates first?",
      answer:
        "Comparing rates first is useful because booking sites and hotel websites may show different room types, fees, policies, and availability for the same destination."
    },
    {
      question: `What makes ${page.h1.toLowerCase()} useful?`,
      answer: page.details
    }
  ];
}
