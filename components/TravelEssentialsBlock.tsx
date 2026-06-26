"use client";

import { useEffect } from "react";
import { ArrowRight, Bed, BriefcaseBusiness, Crown, Hotel } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { SKYLARK_DEALS_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";
import { hotelTravelEssentials, type TravelEssentialItem } from "@/lib/travelEssentials";

const rel = "sponsored nofollow noopener noreferrer";

function eventForAdvertiser(advertiser: TravelEssentialItem["advertiser"]) {
  if (advertiser === "nomatic") return "affiliate_click_nomatic";
  if (advertiser === "bedsure") return "affiliate_click_bedsure";
  if (advertiser === "zenhotels") return "affiliate_click_zenhotels";
  if (advertiser === "skylark") return "affiliate_click_skylark_deals";
  return "travel_essentials_click";
}

export function TravelEssentialsBlock({ destination, luxury = false }: { destination: string; luxury?: boolean }) {
  const bookingItem: TravelEssentialItem = luxury
    ? {
        title: "Luxury hotel backup search",
        description: "For oceanfront, resort, or higher-comfort trips, compare premium hotel options before finalizing the stay.",
        cta: "View Luxury Hotel Deals",
        affiliateUrl: SKYLARK_DEALS_AFFILIATE_URL,
        advertiser: "skylark",
        category: "luxury_hotels"
      }
    : {
        title: "Hotel rate backup search",
        description: "If your first hotel choice changes price, keep a second booking path ready before the trip gets close.",
        cta: "Compare Hotel Rates",
        affiliateUrl: ZENHOTELS_AFFILIATE_URL,
        advertiser: "zenhotels",
        category: "hotel_booking"
      };
  const items = [...hotelTravelEssentials, bookingItem];

  useEffect(() => {
    trackEvent("travel_essentials_view", { page_type: "hotel", destination, page_path: window.location.pathname, item_count: items.length });
  }, [destination, items.length]);

  function trackClick(item: TravelEssentialItem) {
    const params = {
      affiliate_program: "awin",
      advertiser: item.advertiser,
      category: item.category,
      cta_text: item.cta,
      destination,
      item_title: item.title,
      outbound_url: item.affiliateUrl,
      page_type: "hotel",
      page_path: window.location.pathname
    };
    trackEvent("travel_essentials_click", params);
    trackEvent(eventForAdvertiser(item.advertiser), params);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="travel-essentials-title">
      <div className="rounded-3xl border border-slate-200 bg-skyline p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Travel essentials</p>
        <h2 id="travel-essentials-title" className="mt-3 text-3xl font-black tracking-normal text-ink">Don’t forget what goes around the hotel stay.</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">
          Once the {destination.toLowerCase()} hotel is picked, pack for beach days, pool time, park days, and a backup booking path.
        </p>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.advertiser === "bedsure" ? Bed : item.advertiser === "zenhotels" ? Hotel : item.advertiser === "skylark" ? Crown : BriefcaseBusiness;
            return (
              <a key={`${item.advertiser}-${item.title}`} href={item.affiliateUrl} target="_blank" rel={rel} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" onClick={() => trackClick(item)}>
                <Icon className="h-7 w-7 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slateText">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">{item.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-xs font-bold text-slateText">Some links may be sponsored. We may earn a commission if you book or buy through them.</p>
      </div>
    </section>
  );
}
