import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hotel,
  MapPinned,
  Star
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { DealExplorer } from "@/components/DealExplorer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PopularHotelSearches } from "@/components/PopularHotelSearches";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { CompleteTripSection } from "@/components/CompleteTripSection";
import { OutboundDealLink } from "@/components/OutboundDealLink";
import { ExpediaHotelCta } from "@/components/ExpediaHotelCta";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SafeImage } from "@/components/SafeImage";
import { FloridaRightNow } from "@/components/FloridaRightNow";
import { TrackedLink } from "@/components/TrackedLink";
import { TravelEssentialsBlock } from "@/components/TravelEssentialsBlock";
import { hotelDeals } from "@/data/hotelDeals";
import { getExpediaHotelLink } from "@/lib/affiliateLinks";

const featuredHotelCards = [
  { id: "orlando-family-resort-search", title: "Orlando Hotels" },
  { id: "miami-beach-hotel-search", title: "Miami Hotels" },
  { id: "tampa-waterfront-hotel-search", title: "Tampa Hotels" },
  { id: "fort-lauderdale-beach-resort-search", title: "Fort Lauderdale Hotels" }
]
  .map((card) => {
    const deal = hotelDeals.find((hotelDeal) => hotelDeal.id === card.id);
    return deal ? { ...card, deal } : null;
  })
  .filter((card): card is { id: string; title: string; deal: (typeof hotelDeals)[number] } =>
    Boolean(card)
  );

const popularExpediaSearches = [
  { label: "Orlando Hotels", destination: "orlando" },
  { label: "Miami Beach Hotels", destination: "miamiBeach" },
  { label: "Tampa Hotels", destination: "tampa" },
  { label: "Fort Lauderdale Hotels", destination: "fortLauderdale" }
];

const stats = [
  { value: "31", label: "Curated Stay Finds" },
  { value: "10", label: "Florida Markets" },
  { value: "Expedia", label: "Affiliate Hotel Search" },
  { value: "100%", label: "Current Searches" }
];

const trustChips = ["Updated Often", "Florida Focused", "Free Deal Alerts"];

const popularThisWeek = [
  ["Orlando Hotel Deals", "/orlando-hotel-deals", "Theme park and family resort searches"],
  ["Miami Beach Hotel Deals", "/miami-beach-hotel-deals", "Oceanfront stays and nightlife areas"],
  ["Tampa Hotel Deals", "/tampa-hotel-deals", "Downtown, waterfront, and Gulf access"],
  ["Florida Beach Resort Deals", "/florida-beach-resort-deals", "Coastal resort searches across Florida"],
  ["Florida Family Hotel Deals", "/florida-family-hotel-deals", "Pool, suite, and kid-friendly stays"],
  ["Florida Hotels Under $150", "/florida-hotels-under-150", "Value-focused hotel searches"]
];

const trendingHotelSearches = [
  {
    title: "Miami Beach Hotels",
    href: "/miami-beach-hotel-deals",
    tripStyle: "Oceanfront weekends",
    value: "Useful for comparing beach access, resort fees, nightlife areas, and walkable stays.",
    tag: "Beachfront Stay"
  },
  {
    title: "Orlando Family Resorts",
    href: "/orlando-family-resort-deals",
    tripStyle: "Theme park vacations",
    value: "Good starting point for pools, suites, shuttles, and family-friendly park corridors.",
    tag: "Family Friendly"
  },
  {
    title: "Tampa Waterfront Hotels",
    href: "/tampa-hotel-deals",
    tripStyle: "Bay and city stays",
    value: "Compare downtown, waterfront, cruise, and Gulf Coast access before choosing a base.",
    tag: "Waterfront Hotel"
  },
  {
    title: "Florida Beach Resorts",
    href: "/florida-beach-resort-deals",
    tripStyle: "Coastal resort searches",
    value: "Helpful for comparing Atlantic, Gulf, and island resort options across Florida.",
    tag: "Luxury Resort"
  },
  {
    title: "Hotels Near Cruise Ports",
    href: "/best-hotels-near-florida-cruise-ports",
    tripStyle: "Pre-cruise stays",
    value: "Compare port distance, parking, airport access, and transfer convenience.",
    tag: "Cruise Travelers"
  },
  {
    title: "Budget Florida Hotels",
    href: "/florida-hotels-under-150",
    tripStyle: "Value-focused trips",
    value: "Search flexible dates, practical areas, and lower-rate options while checking final fees.",
    tag: "Budget Friendly"
  }
];

const hotelTypeLinks = [
  ["Beach Resorts", "/florida-beach-resort-deals"],
  ["Family Hotels", "/florida-family-hotel-deals"],
  ["Budget Hotels", "/florida-budget-hotels"],
  ["Weekend Getaways", "/florida-weekend-getaway-hotels"],
  ["Oceanfront Hotels", "/florida-oceanfront-hotels"],
  ["Resorts With Pools", "/florida-resorts-with-pools"],
  ["Pet-Friendly Hotels", "/florida-pet-friendly-hotels"],
  ["Theme Park Hotels", "/florida-hotels-near-theme-parks"]
];

const editorPicks = [
  ["Best for families", "Orlando resort searches", "/orlando-family-resort-deals"],
  ["Best beach stay", "Miami Beach hotels", "/miami-beach-hotel-deals"],
  ["Best budget search", "Florida hotels under $150", "/florida-hotels-under-150"],
  ["Best weekend option", "Tampa and Clearwater stays", "/tampa-hotel-deals"],
  ["Best romantic search", "Florida Keys and Key West stays", "/key-west-hotel-deals"]
];

const planningGuides = [
  ["Best Family Resorts in Florida", "/best-family-resorts-in-florida", "Pools, suites, theme parks, beach areas, and family logistics."],
  ["Best Beach Hotels in Florida", "/best-beach-hotels-in-florida", "Oceanfront, Gulf Coast, Atlantic beach, and island stay comparisons."],
  ["Where to Stay in Miami", "/where-to-stay-in-miami", "Brickell, Downtown, Miami Beach, cruise areas, and airport stays."],
  ["Where to Stay in Orlando", "/where-to-stay-in-orlando", "Disney-area hotels, Universal corridors, I-Drive, resorts, and airport stays."],
  ["Hotels Near Florida Cruise Ports", "/best-hotels-near-florida-cruise-ports", "Miami, Fort Lauderdale, Tampa, Port Canaveral, and Jacksonville planning."],
  ["Best Time to Book Florida Hotels", "/best-time-to-book-florida-hotels", "Seasonality, events, flexible dates, and rate-change planning."]
];

const seasonalTravelIdeas = [
  ["Summer Florida Resorts", "/summer-florida-resorts"],
  ["Winter Florida Getaways", "/winter-florida-getaways"],
  ["Spring Break Hotels", "/spring-break-hotels"],
  ["Holiday Hotel Deals", "/holiday-hotel-deals"],
  ["Memorial Day Florida Hotels", "/memorial-day-florida-hotels"],
  ["Cheap Summer Hotels in Florida", "/cheap-summer-hotels-in-florida"]
];

const destinationClusters = [
  {
    title: "Orlando Hotel Cluster",
    links: [
      ["Orlando Hotel Deals", "/orlando-hotel-deals"],
      ["Hotels Near Theme Parks", "/florida-hotels-near-theme-parks"],
      ["Florida Family Hotel Deals", "/florida-family-hotel-deals"],
      ["Orlando Flight Deals", "https://flightdealsflorida.org"],
      ["Orlando Local Deals", "https://localdealsflorida.org"]
    ]
  },
  {
    title: "Miami Hotel Cluster",
    links: [
      ["Miami Hotel Deals", "/miami-hotel-deals"],
      ["Miami Beach Hotel Deals", "/miami-beach-hotel-deals"],
      ["Florida Oceanfront Hotels", "/florida-oceanfront-hotels"],
      ["Miami Flight Deals", "https://flightdealsflorida.org"],
      ["Miami Local Deals", "https://localdealsflorida.org"]
    ]
  },
  {
    title: "Tampa Hotel Cluster",
    links: [
      ["Tampa Hotel Deals", "/tampa-hotel-deals"],
      ["Weekend Getaway Hotels", "/florida-weekend-getaway-hotels"],
      ["Clearwater Beach Hotel Deals", "/clearwater-beach-hotel-deals"],
      ["Tampa Flight Deals", "https://flightdealsflorida.org"],
      ["Florida Cruise Deals", "https://cruisedealsflorida.org"]
    ]
  }
];

const whyItems = [
  {
    title: "Curated Florida Deals",
    description:
      "Resort, hotel, inn, and staycation searches organized for Florida travel patterns, not generic booking noise.",
    icon: CheckCircle2
  },
  {
    title: "Updated Often",
    description:
      "Designed for fresh inventory, seasonal drops, weekend windows, and easy replacement with real partner feeds.",
    icon: Clock3
  },
  {
    title: "Built for Travelers & Locals",
    description:
      "Useful for beach weekends, family park trips, resident rates, event stays, and quiet Gulf Coast escapes.",
    icon: MapPinned
  }
];

const homepageFaqs = [
  {
    question: "When is the cheapest time to book Florida hotels?",
    answer:
      "Florida hotel rates often depend on destination, season, events, day of week, and room type. Flexible weekday dates and nearby areas can help, but travelers should confirm current rates before booking."
  },
  {
    question: "Which Florida beach has the best hotels?",
    answer:
      "Miami Beach, Fort Lauderdale, Clearwater Beach, Naples, Sarasota, Daytona Beach, and the Florida Keys all have strong hotel options. The best fit depends on beach access, nightlife, family needs, fees, and budget."
  },
  {
    question: "Are Orlando resorts good for families?",
    answer:
      "Orlando resorts can be useful for families comparing pools, suites, shuttle areas, larger rooms, and theme park access. Always compare resort fees, parking, cancellation terms, and drive times."
  },
  {
    question: "Should I compare hotel fees before booking?",
    answer:
      "Yes. Resort fees, parking, taxes, breakfast, cancellation policies, beach services, and room view categories can change the final value of a hotel stay."
  }
];

export default function Home() {
  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageFaqSchema)
        }}
      />
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
          <div className="absolute inset-0 -z-10">
            <SafeImage
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
              alt="Premium Florida resort pool beside palm trees"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/36" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(245,158,11,0.18),transparent_22rem)]" />
          </div>

          <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_28rem] lg:px-8">
            <div className="max-w-3xl pt-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-ocean shadow-sm backdrop-blur">
                <Hotel className="h-4 w-4" aria-hidden="true" />
                Florida Deals Hub hotel network
              </p>
              <div className="mt-4">
                <FreshnessBadge />
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-normal text-ink sm:text-6xl lg:text-7xl">
                Find the Best Hotel Deals in Florida
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slateText sm:text-xl">
                Beach resorts, family stays, weekend escapes, luxury getaways, and hidden hotel
                deals across Florida.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#deals"
                  className="btn btn-primary px-6"
                >
                  Search Florida Hotels
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#alerts"
                  className="btn btn-secondary px-6"
                >
                  Get Hotel Alerts
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-white/78 px-4 py-2 text-sm font-black text-ink shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="h-4 w-4 text-ocean" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-md rounded-3xl border border-white/80 bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="rounded-2xl bg-ink p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-200">Hotel comparison snapshot</p>
                <h2 className="mt-2 text-2xl font-black">Compare the complete stay</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">A useful hotel search goes beyond the headline nightly rate.</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["Location", "Travel time to the places you plan to visit"],
                  ["Total cost", "Taxes, resort fees, parking, and add-ons"],
                  ["Flexibility", "Cancellation terms and date-specific availability"],
                ].map(([label, detail]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-sand p-4"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-ocean">{label}</p>
                    <p className="mt-1 text-sm font-bold leading-5 text-slateText">{detail}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <FloridaRightNow />

        <section aria-label="Hotel deal stats" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-3xl font-black text-ink">{stat.value}</p>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-slateText">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Popular this week
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
                Popular Florida Hotel Searches This Week
              </h2>
              <p className="mt-3 max-w-2xl font-medium leading-7 text-slateText">
                Popular searches from Florida travelers. Rates and availability may change by date.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularThisWeek.map(([label, href, description]) => (
              <TrackedLink
                key={href}
                href={href}
                label={`popular-this-week:${label}`}
                eventName="destination_click"
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
              >
                <span className="text-lg font-black text-ink">{label}</span>
                <span className="mt-2 block text-sm font-medium leading-6 text-slateText">
                  {description}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">
                  Explore search
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </TrackedLink>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Trending Hotel Searches
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Search by destination, trip style, and hotel intent.
            </h2>
            <p className="mt-3 font-medium leading-7 text-slateText">
              These are practical Florida hotel searches travelers use when comparing where to stay,
              what fees to check, and which area fits the trip.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trendingHotelSearches.map((search) => (
              <TrackedLink
                key={search.href}
                href={search.href}
                label={`trending:${search.title}`}
                eventName="destination_click"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
              >
                <span className="rounded-full border border-slate-200 bg-sand px-3 py-1 text-xs font-black text-ink">
                  {search.tag}
                </span>
                <span className="mt-4 block text-xl font-black text-ink">{search.title}</span>
                <span className="mt-1 block text-sm font-black uppercase tracking-[0.12em] text-ocean">
                  {search.tripStyle}
                </span>
                <span className="mt-3 block text-sm font-medium leading-6 text-slateText">
                  {search.value}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                  Explore hotel search
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </TrackedLink>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Hotel types
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                Compare stays by trip style.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {hotelTypeLinks.map(([label, href]) => (
                  <TrackedLink
                    key={href}
                    href={href}
                    label={`hotel-type:${label}`}
                    eventName="destination_click"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </TrackedLink>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Editor&apos;s Picks
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                Useful starting points for Florida stays.
              </h2>
              <div className="mt-6 grid gap-3">
                {editorPicks.map(([label, title, href]) => (
                  <TrackedLink
                    key={href}
                    href={href}
                    label={`editors-pick:${title}`}
                    eventName="guide_click"
                    className="group rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-sky-200 hover:text-ocean"
                  >
                    <span className="block text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                      {label}
                    </span>
                    <span className="mt-1 flex items-center justify-between gap-3 text-sm font-black text-ink group-hover:text-ocean">
                      {title}
                      <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Hotel Planning Guides
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                Go beyond the hotel card before you book.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {planningGuides.map(([label, href, description]) => (
                  <TrackedLink
                    key={href}
                    href={href}
                    label={`planning-guide:${label}`}
                    eventName="guide_click"
                    className="group rounded-2xl border border-slate-200 bg-sand p-4 transition hover:border-sky-200 hover:bg-skyline"
                  >
                    <span className="block text-base font-black text-ink group-hover:text-ocean">
                      {label}
                    </span>
                    <span className="mt-2 block text-sm font-medium leading-6 text-slateText">
                      {description}
                    </span>
                  </TrackedLink>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                Seasonal Travel Ideas
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                Plan around Florida&apos;s travel calendar.
              </h2>
              <div className="mt-6 grid gap-3">
                {seasonalTravelIdeas.map(([label, href]) => (
                  <TrackedLink
                    key={href}
                    href={href}
                    label={`seasonal:${label}`}
                    eventName="guide_click"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:text-ocean"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
                <Star className="h-4 w-4" aria-hidden="true" />
                Featured hotels
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
                Featured Florida hotels worth comparing today.
              </h2>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-slate-500">
                Updated regularly. Rates may change.
              </p>
              <AffiliateDisclosure className="mt-3 max-w-2xl" />
            </div>
            <Link href="#deals" className="inline-flex items-center gap-2 text-sm font-black text-ocean">
              Browse all stays
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {featuredHotelCards.map(({ deal, title }) => (
              <article
                key={deal.id}
                className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft md:grid-cols-[minmax(18rem,42%)_minmax(0,1fr)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3] md:self-start">
                  <SafeImage
                    src={deal.image}
                    alt={deal.image_alt}
                    fill
                    sizes="(min-width: 1280px) 21vw, (min-width: 768px) 42vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
                    {deal.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-black text-ocean">{deal.city}</p>
                  <h3 className="mt-1 text-xl font-black text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slateText">{deal.description}</p>
                  <div className="mt-5 space-y-4 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {deal.best_for.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-sand px-3 py-1 text-xs font-black text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-sand p-4">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                        Compare
                      </p>
                      <p className="mt-1 text-lg font-black leading-7 text-ink">{deal.value_label}</p>
                      <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                        Why consider it
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-slateText">
                        {deal.why_this_stay}
                      </p>
                      <p className="mt-3 text-xs font-bold leading-5 text-slate-500">
                        Rates may change. Taxes and resort fees may apply.
                      </p>
                    </div>
                    <OutboundDealLink
                      deal={deal}
                      pageContext="homepage-featured"
                      className="btn btn-primary w-full px-5"
                    >
                      {deal.cta_label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </OutboundDealLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Compare Popular Hotel Destinations
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Jump straight to current Expedia hotel options.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {popularExpediaSearches.map((search) => (
                <ExpediaHotelCta
                  key={search.destination}
                  href={getExpediaHotelLink(search.destination)}
                  destination={search.label}
                  label={`Compare ${search.label}`}
                  pageContext="homepage"
                  category="Hotel Search"
                  className="btn btn-primary justify-center px-5"
                >
                  {search.label}
                </ExpediaHotelCta>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold text-slate-500">
              Rates may change. Confirm taxes, fees, and cancellation terms with the booking source.
            </p>
          </div>
        </section>

        <DealExplorer />

        <PopularHotelSearches />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Destination clusters
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Build a Florida trip around the hotel market you care about.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {destinationClusters.map((cluster) => (
              <article key={cluster.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="text-xl font-black text-ink">{cluster.title}</h3>
                <div className="mt-5 grid gap-3">
                  {cluster.links.map(([label, href]) => (
                    <TrackedLink
                      key={href}
                      href={href}
                      label={`destination-cluster:${label}`}
                      eventName="destination_click"
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
                    >
                      {label}
                      <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </TrackedLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Why trust this site?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              A Florida hotel discovery resource, not a list of random links.
            </h2>
            <p className="mt-4 max-w-4xl font-medium leading-7 text-slateText">
              Florida Hotel Deals is part of the Florida Deals Hub network. We organize Florida
              hotel searches by destination, stay type, budget, and trip intent so visitors can
              compare options faster. Hotel rates may change, availability varies, resort fees and
              taxes may apply, and current details should always be confirmed with the booking
              source before booking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Updated regularly", "Rates may change", "Availability varies", "Compare before booking"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-sand px-4 py-2 text-sm font-black text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Hotel FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
              Common questions before comparing Florida stays.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {homepageFaqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-black leading-7 text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slateText">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CompleteTripSection />

        <TravelEssentialsBlock destination="Florida" />

        <NewsletterSection />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {whyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-ocean ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-ink">{item.title}</h2>
                  <p className="mt-3 font-medium leading-7 text-slateText">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <SisterSitesSection />
      </main>

      <SiteFooter />
    </>
  );
}
