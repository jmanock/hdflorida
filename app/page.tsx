import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CheckCircle2,
  Clock3,
  Hotel,
  MapPinned,
  Sailboat,
  Plane,
  Sparkles
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { DealExplorer } from "@/components/DealExplorer";
import { NewsletterForm } from "@/components/NewsletterForm";

const whyItems = [
  {
    title: "Curated Florida Deals",
    description: "Hand-picked hotel, resort, inn, and staycation offers across Florida's strongest travel markets.",
    icon: CheckCircle2
  },
  {
    title: "Updated Often",
    description: "Built around fresh deal drops, rotating seasonal savings, and easy-to-refresh inventory.",
    icon: Clock3
  },
  {
    title: "Built for Travelers & Locals",
    description: "Useful for beach weekends, family trips, resident rates, event stays, and quick escapes.",
    icon: MapPinned
  }
];

const sisterSites = [
  {
    title: "Florida Cruise Deals",
    description: "Port Canaveral, Miami, Tampa, Fort Lauderdale, and Jacksonville cruise savings.",
    href: "https://example.com/florida-cruise-deals",
    icon: Sailboat
  },
  {
    title: "Florida Flight Deals",
    description: "Flight alerts for Florida airports, weekend fares, and warm-weather escapes.",
    href: "https://example.com/florida-flight-deals",
    icon: Plane
  },
  {
    title: "Local Florida Deals",
    description: "Restaurant, attraction, event, and local savings for residents and visitors.",
    href: "https://example.com/local-florida-deals",
    icon: Sparkles
  }
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
              alt="Florida beach with turquoise water"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/52 to-ocean-700/20" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_25rem] lg:px-8">
            <div className="max-w-3xl pt-8 text-white">
              <p className="inline-flex items-center gap-2 rounded bg-white/15 px-3 py-2 text-sm font-black uppercase tracking-[0.16em] ring-1 ring-white/25 backdrop-blur">
                <Hotel className="h-4 w-4" aria-hidden="true" />
                Florida stays, daily savings
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Find the Best Hotel Deals in Florida
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                Daily savings on beach resorts, family hotels, weekend getaways, and Florida
                staycations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#deals"
                  className="rounded bg-sun-400 px-6 py-3 text-center font-black text-ink shadow-lg transition hover:bg-sun-500"
                >
                  View Hotel Deals
                </Link>
                <Link
                  href="#alerts"
                  className="rounded bg-white/12 px-6 py-3 text-center font-black text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
                >
                  Get Deal Alerts
                </Link>
              </div>
            </div>

            <aside className="mb-10 rounded border border-white/25 bg-white/92 p-5 shadow-soft backdrop-blur lg:mb-0">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-ocean-700">
                Deal coverage
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700">
                {[
                  "Orlando",
                  "Miami",
                  "Fort Lauderdale",
                  "Tampa / St. Pete",
                  "Jacksonville",
                  "Florida Keys",
                  "Daytona Beach",
                  "Naples",
                  "Sarasota",
                  "St. Augustine"
                ].map((market) => (
                  <span key={market} className="rounded bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                    {market}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <DealExplorer />

        <section id="alerts" className="bg-ink">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 text-white sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-sun-400">
                <Bell className="h-4 w-4" aria-hidden="true" />
                Hotel deal alerts
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Get Florida Hotel Deals Delivered
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/74">
                Sign up for alerts on resorts, weekend getaways, family hotels, and staycation
                deals.
              </p>
            </div>
            <div className="self-center">
              <NewsletterForm />
              <p className="mt-4 text-sm leading-6 text-white/58">
                Development signup UI only. Connect to your email platform when the production list
                is ready.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {whyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-ocean-600" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-ink">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-ocean-700">
                Sister sites
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink">
                Part of the Florida travel savings family.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {sisterSites.map((site) => {
                const Icon = site.icon;

                return (
                  <Link
                    key={site.title}
                    href={site.href}
                    className="group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ocean-200 hover:shadow-soft"
                  >
                    <Icon className="h-8 w-8 text-ocean-600" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-black text-ink">{site.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{site.description}</p>
                    <span className="mt-5 inline-block text-sm font-black text-ocean-700 group-hover:text-ocean-600">
                      Visit site
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
          <p className="text-sm text-slate-500">
            © 2026 Florida Hotel Deals. Mock development build for Florida travel savings.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-600">
            {["About", "Contact", "Privacy", "Terms", "Sister Sites"].map((item) => (
              <Link key={item} href="#" className="hover:text-ocean-700">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
