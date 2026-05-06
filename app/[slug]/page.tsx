import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Home, Search } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import { OutboundDealLink } from "@/components/OutboundDealLink";
import { ExpediaHotelCta } from "@/components/ExpediaHotelCta";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CompleteTripSection } from "@/components/CompleteTripSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getDealsForSeoPage,
  getFaqsForSeoPage,
  getSeoPageLabel,
  seoLandingPageMap,
  seoLandingPages
} from "@/data/seoPages";
import { getExpediaHotelLink } from "@/lib/affiliateLinks";
import { SITE_URL } from "@/lib/siteConstants";

type SeoPageParams = {
  slug: string;
};

const seoPageDestinationMap: Record<string, string> = {
  "orlando-hotel-deals": "orlando",
  "miami-hotel-deals": "miami",
  "miami-beach-hotel-deals": "miamiBeach",
  "tampa-hotel-deals": "tampa",
  "fort-lauderdale-hotel-deals": "fortLauderdale",
  "florida-keys-hotel-deals": "floridaKeys",
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
  "florida-resident-hotel-deals": "orlando",
  "orlando-family-resort-deals": "orlando",
  "florida-hotels-under-150": "orlando"
};

const popularExpediaSearches = [
  { label: "Orlando Hotels", destination: "orlando" },
  { label: "Miami Beach Hotels", destination: "miamiBeach" },
  { label: "Tampa Hotels", destination: "tampa" },
  { label: "Fort Lauderdale Hotels", destination: "fortLauderdale" }
];

function getPageHeroCta(slug: string, destinationLabel: string) {
  const ctas: Record<string, string> = {
    "orlando-hotel-deals": "Compare Orlando Hotels",
    "orlando-family-resort-deals": "Compare Orlando Family Resorts",
    "miami-hotel-deals": "Compare Miami Hotels",
    "miami-beach-hotel-deals": "View Miami Beach Stays",
    "tampa-hotel-deals": "Find Tampa Hotels",
    "fort-lauderdale-hotel-deals": "Browse Fort Lauderdale Hotels",
    "florida-keys-hotel-deals": "Browse Florida Keys Stays",
    "clearwater-beach-hotel-deals": "View Clearwater Beach Stays",
    "florida-beach-resort-deals": "Compare Beach Resorts",
    "florida-family-hotel-deals": "Find Family-Friendly Hotels",
    "florida-weekend-getaway-hotels": "Browse Weekend Stays",
    "florida-luxury-hotel-deals": "Compare Luxury Stays",
    "florida-budget-hotel-deals": "View Budget Hotels",
    "florida-hotels-under-150": "Browse Budget Hotel Searches"
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
      description: page.description
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
  const destinationKey = seoPageDestinationMap[page.slug] ?? "orlando";
  const destinationLink = getExpediaHotelLink(destinationKey);
  const destinationLabel = page.h1.replace(" Deals", "");
  const heroCtaLabel = getPageHeroCta(page.slug, destinationLabel);
  const relatedPages = page.related
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((relatedPage): relatedPage is NonNullable<typeof relatedPage> => Boolean(relatedPage));
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

  return (
    <>
      {[breadcrumbSchema, faqSchema, itemListSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      <SiteHeader />
      <main>
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
            <Image
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
              <p>
                Start by comparing stay style, neighborhood, cancellation policy, and final taxes
                or fees for each hotel search. Rates can shift by season, event weekends, beach
                weather, school breaks, and day of week, so checking several nearby options is
                often more useful than relying on one listed rate.
              </p>
              <p>
                Use these curated Florida hotel searches to narrow the trip quickly, then confirm
                current availability with the booking source. Families may care most about pools,
                suites, breakfast, parking, and attraction access, while weekend travelers often
                compare walkable areas, waterfront locations, nightlife, beach access, and resort
                fees before choosing a stay.
              </p>
              <p>
                For {destinationLabel.toLowerCase()}, it helps to think about the trip first:
                theme park days, beach time, restaurant weekends, airport convenience, family room
                layouts, or a quiet staycation can point you toward very different hotel areas.
                Nearby attractions and event calendars can also affect availability, especially
                during holidays, school breaks, festivals, conventions, and peak beach weekends.
              </p>
              <p>
                Before booking, compare the room type, cancellation window, taxes, resort or
                parking fees, check-in policies, and distance from the places you plan to visit.
                Hotel rates may change quickly, but a clear comparison makes it easier to choose a
                stay that fits the trip instead of clicking the first result.
              </p>
            </div>
          </div>
        </section>

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

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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
              <Link
                href="/"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
              >
                Hotel Deals Home
                <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/${relatedPage.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
                >
                  {getSeoPageLabel(relatedPage.slug)}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
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

        <CompleteTripSection />
        <NewsletterSection />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
