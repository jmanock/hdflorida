import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Home, Search } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SisterSitesSection } from "@/components/SisterSitesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getDealsForSeoPage,
  getSeoPageLabel,
  seoLandingPageMap,
  seoLandingPages
} from "@/data/seoPages";

type SeoPageParams = {
  slug: string;
};

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
  const relatedPages = page.related
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((relatedPage): relatedPage is NonNullable<typeof relatedPage> => Boolean(relatedPage));

  return (
    <>
      <SiteHeader />
      <main>
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
              <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black tracking-normal text-ink sm:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slateText">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#featured-stays" className="btn btn-primary px-6">
                  View Current Hotel Deals
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                {["Check current rates", "See availability", "Hotel rates may change"].map((item) => (
                  <span key={item} className="rounded-2xl border border-slate-200 bg-sand px-4 py-3">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="featured-stays" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Featured hotel searches
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Useful Florida stay deals to check today.
            </h2>
            <p className="mt-4 font-medium leading-7 text-slateText">
              These cards link to real hotel search and booking pages where current rates,
              availability, fees, and booking terms can be reviewed directly.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} pageContext={page.slug} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Related hotel pages
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

        <NewsletterSection />
        <SisterSitesSection />
      </main>
      <SiteFooter />
    </>
  );
}
