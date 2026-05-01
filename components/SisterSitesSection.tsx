import Link from "next/link";
import { ArrowRight, Building2, Plane, Sailboat, Sparkles, Waves } from "lucide-react";

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

export function SisterSitesSection() {
  return (
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
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
