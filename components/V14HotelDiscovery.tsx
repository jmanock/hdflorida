"use client";

import { ArrowRight, BedDouble, Plane, Sparkles, Ticket, Waves } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type DiscoveryItem = {
  title: string;
  copy: string;
  href: string;
  cta: string;
};

function track(item: DiscoveryItem, placement: string) {
  const payload = {
    source_page: window.location.pathname,
    target_page: item.href,
    destination: item.title,
    placement_name: placement,
    placement_type: "v14_hotel_discovery",
    cta_text: item.cta
  };

  trackEvent("internal_related_click", payload);
  trackEvent("related_guide_click", payload);
  trackEvent("cta_click", payload);
}

export function V14HotelDiscovery({ slug, destination }: { slug: string; destination: string }) {
  const isBeach = /beach|oceanfront|clearwater|key-west|keys|waterfront/.test(slug);
  const isFamily = /family|theme-park|orlando|disney|universal/.test(slug);
  const stayGuide = isBeach
    ? { title: "Florida oceanfront hotels", href: "/florida-oceanfront-hotels" }
    : isFamily
      ? { title: "Florida theme park hotels", href: "/florida-hotels-near-theme-parks" }
      : { title: "Florida budget hotels", href: "/florida-budget-hotels" };
  const items: DiscoveryItem[] = [
    {
      title: "Compare budget, value, and luxury options",
      copy: "Use the hotel comparison cards below to decide whether price, location, amenities, or comfort matters most.",
      href: "#featured-stays",
      cta: "Compare stays"
    },
    {
      title: "Add attractions near the hotel",
      copy: "A lower hotel rate only helps if the attractions, beaches, or restaurants still fit the day plan.",
      href: "https://localdealsflorida.org/best-things-to-do-in-florida",
      cta: "Find attractions"
    },
    {
      title: "Check flights before locking dates",
      copy: `Pair ${destination} hotel ideas with Florida airport and flight timing before finalizing the stay.`,
      href: "https://flightdealsflorida.org/google-flights-florida",
      cta: "Compare flights"
    },
    {
      title: stayGuide.title,
      copy: "Keep moving through related hotel guides so the stay supports the whole trip.",
      href: stayGuide.href,
      cta: "View hotel guide"
    }
  ];
  const popular: DiscoveryItem[] = [
    { title: "Clearwater Beach hotel deals", copy: "Gulf Coast family and beach stay planning.", href: "/clearwater-beach-hotel-deals", cta: "View Clearwater hotels" },
    { title: "Key West hotel deals", copy: "Island stays, Old Town, and waterfront hotel planning.", href: "/key-west-hotel-deals", cta: "View Key West hotels" },
    { title: "Pet-friendly hotels in Florida", copy: "Fees, rules, room types, and road trip stays.", href: "/florida-pet-friendly-hotels", cta: "View pet-friendly hotels" },
    { title: "Best hotels near Florida cruise ports", copy: "Pre-cruise hotels near Miami, Canaveral, Tampa, and more.", href: "/best-hotels-near-florida-cruise-ports", cta: "View port hotels" }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" aria-labelledby="v14-hotel-discovery-title">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Readers also viewed</p>
            <h2 id="v14-hotel-discovery-title" className="mt-3 text-3xl font-black tracking-normal text-ink">
              Planning a stay? Don’t forget the flight, attractions, and total fees.
            </h2>
          </div>
          <p className="text-sm font-semibold leading-7 text-slateText">
            Hotel pages convert better when the next decision is obvious: compare the stay, then check nearby attractions, flights, and package ideas.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = index === 0 ? BedDouble : index === 1 ? Ticket : index === 2 ? Plane : Sparkles;
            return (
              <a className="group rounded-3xl border border-slate-200 bg-sand p-5 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-skyline" href={item.href} key={item.href} onClick={() => track(item, "hotel_plan_rest_of_trip")}>
                <Icon className="h-6 w-6 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{item.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">{item.cta}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </a>
            );
          })}
        </div>
        <div className="mt-7 rounded-3xl bg-ink p-5 text-white">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Recently updated hotel guides</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((item, index) => (
              <a className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/15 transition hover:bg-white/18" href={item.href} key={item.href} onClick={() => track(item, "hotel_recently_updated")}>
                <Waves className={`mr-2 inline h-4 w-4 ${index === 1 ? "text-gold" : "text-sky-200"}`} aria-hidden="true" />
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
