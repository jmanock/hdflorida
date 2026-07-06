"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BedDouble, CheckCircle2, Compass, Plane, Search, Sparkles, Ticket, Umbrella } from "lucide-react";
import { hotelTravelEssentials } from "@/lib/travelEssentials";
import { BOOKING_COM_AFFILIATE_URL, SKYLARK_DEALS_AFFILIATE_URL, SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL, getTransferAffiliateUrl } from "@/lib/revenuePartners";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const rel = "sponsored noopener noreferrer";

function track(event: string, payload: Record<string, string | number>) {
  const data = {
    source_site: "hoteldealsflorida.org",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...payload
  };
  window.gtag?.("event", event, data);
  window.dataLayer?.push({ event, ...data });
}

function destinationFromSlug(slug: string) {
  if (slug.includes("orlando") || slug.includes("theme-park")) return "Orlando";
  if (slug.includes("miami")) return "Miami";
  if (slug.includes("clearwater")) return "Clearwater Beach";
  if (slug.includes("key-west") || slug.includes("keys")) return "Key West";
  if (slug.includes("tampa")) return "Tampa";
  if (slug.includes("oceanfront") || slug.includes("beach")) return "Florida beaches";
  return "Florida";
}

export function FloridaIntelligenceEngine({ slug }: { slug: string }) {
  const [stage, setStage] = useState("Comparing");
  const destination = destinationFromSlug(slug);
  const essentials = useMemo(() => hotelTravelEssentials.slice(0, 3), []);
  const bookingLinks = [
    ["Budget option", ZENHOTELS_AFFILIATE_URL, "Compare practical stays and backup rates before the room you want changes price.", "zenhotels"],
    ["Best value", BOOKING_COM_AFFILIATE_URL || ZENHOTELS_AFFILIATE_URL, "Check a mainstream booking path for cancellation terms, fees, and current room options.", "booking"],
    ["Luxury option", SKYLARK_DEALS_AFFILIATE_URL || SKYLARK_HOME_AFFILIATE_URL, "Use for special trips, resort stays, and premium hotel planning.", "skylark"]
  ];
  const progress = [
    ["Destination chosen", true],
    ["Hotel short list built", true],
    ["Flight or drive plan checked", false],
    ["Attractions picked", false],
    ["Transportation planned", false],
    ["Deal alerts joined", false]
  ] as const;
  const percent = Math.round((progress.filter(([, done]) => done).length / progress.length) * 100);
  const recommendations = [
    ["Nearby attractions", "Add tours, theme parks, beaches, or rainy-day plans near the hotel.", "https://localdealsflorida.org/best-things-to-do-in-florida", "Find attractions", "attractions"],
    ["Flights to match the stay", "Compare airport timing before hotel cancellation windows close.", "https://flightdealsflorida.org/cheap-flights-to-florida-guide", "Compare flights", "flights"],
    ["Vacation packages", "Turn the stay into a complete Florida trip with activities and transportation.", "https://floridadealshub.com/vacation-packages", "Build package", "packages"],
    ["Airport transfer", "Flying in? Reserve the ride from airport to hotel before arrival day.", getTransferAffiliateUrl("hoteldealsflorida", slug), "Plan transfer", "transportation"]
  ];
  const seasonal = [
    ["Summer", "Compare pools, parking, shade, and indoor backup activities."],
    ["Fall", "Football weekends and festivals can shift rates near event areas."],
    ["Winter", "Beach and snowbird demand can tighten inventory in South Florida."],
    ["Spring", "Spring break makes cancellation rules and location matter more."]
  ];
  const searches = ["Florida oceanfront hotels", "Florida budget hotels", "Hotels near Disney", "Clearwater beach hotels", "Key West hotel deals"];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="hotel-intelligence-title">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Florida Intelligence Engine</p>
            <h2 id="hotel-intelligence-title" className="mt-3 text-3xl font-black tracking-normal text-ink">
              Continue planning your {destination} stay.
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">
              Hotel shoppers usually need the next layer: activities, flights, transportation, and a clearer booking path.
            </p>
          </div>
          <div className="rounded-2xl bg-skyline px-5 py-4 text-sm font-black text-ink">Trip planning: {percent}% complete</div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-sand p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Trip Planning Progress</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-ocean" style={{ width: `${percent}%` }} /></div>
            <div className="mt-5 grid gap-3">
              {progress.map(([item, done]) => (
                <div className="flex items-center gap-3 text-sm font-bold text-ink" key={item}>
                  <CheckCircle2 className={`h-5 w-5 ${done ? "text-ocean" : "text-slate-300"}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-black text-white" href="https://floridadealshub.com/vacation-packages" onClick={() => track("trip_progress_click", { cta_text: "Finish Planning", destination })}>
              Finish Planning <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recommendations.map(([title, description, href, label, category]) => {
              const isAffiliate = category === "transportation";
              return (
                <a className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:bg-skyline" href={href} target={isAffiliate ? "_blank" : undefined} rel={isAffiliate ? rel : undefined} key={title} onClick={() => track(isAffiliate ? "affiliate_click" : "recommendation_click", { cta_text: label, category, destination, outbound_url: href })}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-ocean">{category}</p>
                  <h3 className="mt-3 text-lg font-black text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">{label}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Where are you in planning?</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Dreaming", "Comparing", "Booking", "Preparing", "Traveling"].map((item) => (
                <button className={`rounded-full px-4 py-2 text-sm font-black transition ${stage === item ? "bg-ink text-white" : "bg-sand text-ink hover:bg-skyline"}`} key={item} type="button" onClick={() => { setStage(item); track("planning_stage_change", { destination, category: item.toLowerCase() }); }}>
                  {item}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-slateText">
              {stage === "Booking" ? "Check taxes, fees, cancellation rules, parking, and nearby activities before committing." : stage === "Preparing" ? "Plan transfer timing, attraction tickets, packing, and late checkout gaps." : "Compare the area, hotel type, and total trip cost before narrowing the stay."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-sand p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Booking options</p>
            <div className="mt-4 grid gap-3">
              {bookingLinks.map(([title, href, copy, advertiser]) => (
                <a className="rounded-2xl bg-white p-4 text-sm font-bold text-ink transition hover:text-ocean" href={href} target="_blank" rel={rel} key={title} onClick={() => track("affiliate_click", { advertiser, category: "hotel_booking", cta_text: title, outbound_url: href })}>
                  <span className="block font-black">{title}</span>
                  <span className="mt-1 block text-xs leading-5 text-slateText">{copy}</span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold leading-5 text-slateText">Some links may be sponsored. Confirm rates, fees, and policies with the booking source.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Search this topic</p>
            <div className="mt-4 grid gap-2">
              {searches.map((item) => (
                <a className="inline-flex items-center gap-2 rounded-2xl bg-sand px-4 py-3 text-sm font-black text-ink hover:bg-skyline hover:text-ocean" href={`/search?q=${encodeURIComponent(item)}`} key={item} onClick={() => track("search_suggestion_click", { cta_text: item, destination })}>
                  <Search className="h-4 w-4" /> {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-skyline p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Seasonal intelligence</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {seasonal.map(([title, copy]) => (
                <div className="rounded-2xl bg-white p-4" key={title}>
                  <p className="font-black text-ink">{title}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Travel feed</p>
            <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slateText">
              <p className="flex gap-2"><BedDouble className="h-5 w-5 text-ocean" /> Watch resort fees, parking, and cancellation rules.</p>
              <p className="flex gap-2"><Ticket className="h-5 w-5 text-ocean" /> Pair hotels with attractions before choosing the area.</p>
              <p className="flex gap-2"><Plane className="h-5 w-5 text-ocean" /> Airport choice can change the best hotel zone.</p>
              <p className="flex gap-2"><Umbrella className="h-5 w-5 text-ocean" /> Beach trips need weather-aware backup plans.</p>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {essentials.map((item) => (
            <a className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200" href={item.affiliateUrl} target="_blank" rel={rel} key={item.title} onClick={() => track("travel_essential_click", { advertiser: item.advertiser, category: item.category, cta_text: item.cta, outbound_url: item.affiliateUrl })}>
              <Sparkles className="h-6 w-6 text-ocean" />
              <h3 className="mt-3 text-lg font-black text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
