import { ArrowRight, MapPinned, Plane, Sailboat } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";

const tripLinks = [
  {
    title: "Find cheap Florida flights",
    href: "https://flightdealsflorida.org",
    description: "Compare flight alerts and airfare finds for Florida airports.",
    icon: Plane
  },
  {
    title: "Browse Florida cruise deals",
    href: "https://cruisedealsflorida.org",
    description: "Check cruise deals from Florida ports before or after your stay.",
    icon: Sailboat
  },
  {
    title: "Find local Florida deals",
    href: "https://localdealsflorida.org",
    description: "Add restaurants, attractions, and local savings to your trip.",
    icon: MapPinned
  }
];

export function CompleteTripSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-sand p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
          Complete Your Florida Trip
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">
          Pair your stay with the rest of the Florida Deals Hub network.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tripLinks.map((link) => {
            const Icon = link.icon;

            return (
              <TrackedLink
                key={link.href}
                href={link.href}
                label={`complete-trip:${link.title}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:border-sky-200 hover:shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-skyline text-ocean ring-1 ring-sky-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-4 block text-lg font-black text-ink">{link.title}</span>
                <span className="mt-2 block text-sm font-medium leading-6 text-slateText">
                  {link.description}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </TrackedLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
