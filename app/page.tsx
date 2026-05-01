import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  Clock3,
  Hotel,
  MapPinned,
  Plane,
  Sailboat,
  Sparkles,
  Star,
  TicketPercent,
  Waves
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { DealExplorer } from "@/components/DealExplorer";
import { NewsletterForm } from "@/components/NewsletterForm";
import { hotelDeals } from "@/data/hotelDeals";

const featuredDeals = hotelDeals.slice(0, 3);

const stats = [
  { value: "31", label: "Curated Stay Finds" },
  { value: "10", label: "Florida Markets" },
  { value: "4", label: "Search Partners" },
  { value: "100%", label: "Current Searches" }
];

const trustChips = ["Updated Often", "Florida Focused", "Free Deal Alerts"];

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

const sisterSites = [
  {
    title: "Florida Flight Deals",
    description: "Cheap airfare alerts for Florida airports and warm-weather routes.",
    href: "https://flightdealsflorida.org",
    icon: Plane
  },
  {
    title: "Florida Cruise Deals",
    description: "Cruise savings from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville.",
    href: "https://cruisedealsflorida.org",
    icon: Sailboat
  },
  {
    title: "Local Florida Deals",
    description: "Restaurants, attractions, weekend plans, and local Florida finds.",
    href: "https://localdealsflorida.org",
    icon: Sparkles
  },
  {
    title: "Florida Deals Hub",
    description: "The parent network for Florida flights, hotels, cruises, and local savings.",
    href: "https://floridadealshub.com",
    icon: Building2
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Florida Hotel Deals",
            url: "https://hoteldealsflorida.org",
            description:
              "Find Florida hotel deals including beach resorts, family hotels, luxury stays, weekend getaways, and staycation rates.",
            publisher: {
              "@type": "Organization",
              name: "Florida Deals Hub"
            }
          })
        }}
      />
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-sand">
          <div className="absolute inset-0 -z-10">
            <Image
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
                  View Hotel Deals
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#alerts"
                  className="btn btn-secondary px-6"
                >
                  Get Alerts
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
              <div className="relative h-52 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85"
                  alt="Resort pool and hotel lounge chairs"
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
                  Featured Stay
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-ink shadow-sm">
                  Weekend availability
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-ocean">Orlando</p>
                  <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">
                    Orlando Family Resort
                  </h2>
                  <p className="mt-2 text-sm font-bold text-slateText">
                    Pool / Family / Near parks
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black uppercase text-slate-400">From</p>
                  <p className="text-3xl font-black text-gold">Rates</p>
                  <p className="text-xs font-black text-slate-500">vary by date</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Pool", "Family", "Near parks"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-sand p-3 text-center text-xs font-black text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

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
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
                <Star className="h-4 w-4" aria-hidden="true" />
                Featured stays
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
                Featured Florida stays worth checking today.
              </h2>
            </div>
            <Link href="#deals" className="inline-flex items-center gap-2 text-sm font-black text-ocean">
              Browse all stays
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredDeals.map((deal) => (
              <article
                key={deal.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.image_alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink shadow-sm">
                    {deal.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-black text-ocean">{deal.city}</p>
                  <h3 className="mt-1 text-xl font-black text-ink">{deal.hotel_name}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slateText">{deal.description}</p>
                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-2xl font-black text-gold">{deal.price}</p>
                      <p className="text-xs font-black uppercase text-slate-500">{deal.dates}</p>
                    </div>
                    <Link
                      href={deal.booking_url}
                      className="btn btn-primary btn-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {deal.cta_label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DealExplorer />

        <section id="alerts" className="relative overflow-hidden bg-ink">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.24),transparent_26rem),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.18),transparent_24rem)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 text-white sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-gold">
                <Bell className="h-4 w-4" aria-hidden="true" />
                Hotel deal alerts
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
                Get Florida Hotel Deals Delivered
              </h2>
              <p className="mt-4 max-w-xl text-lg font-medium leading-8 text-white/74">
                Join free alerts for beach resorts, family hotels, weekend getaways, and Florida
                staycation deals.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/15">
                <TicketPercent className="h-4 w-4 text-gold" aria-hidden="true" />
                No spam. 100% free alerts for fresh Florida hotel deals.
              </p>
            </div>
            <div className="self-center rounded-3xl border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur">
              <NewsletterForm />
            </div>
          </div>
        </section>

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

        <section className="border-y border-slate-200 bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
                <Waves className="h-4 w-4" aria-hidden="true" />
                Explore More Florida Deals
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
                One trusted network for Florida travel and local savings.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {sisterSites.map((site) => {
                const Icon = site.icon;

                return (
                  <Link
                    key={site.title}
                    href={site.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-ink ring-1 ring-slate-200 transition group-hover:bg-skyline group-hover:text-ocean">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-black text-ink">{site.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-slateText">
                      {site.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">
                      Explore
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm font-medium text-slateText">
            © 2026 Florida Hotel Deals. Part of Florida Deals Hub.
          </p>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slateText"
          >
            {[
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Sitemap", "/sitemap.xml"],
              ["Sister Sites", "https://floridadealshub.com"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-ocean">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
