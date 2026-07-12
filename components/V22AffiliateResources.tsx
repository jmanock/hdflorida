"use client";

import { getTransferAffiliateUrl, SKYLARK_DEALS_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";

type Resource = {
  partner: string;
  creativeId: string;
  category: string;
  title: string;
  copy: string;
  cta: string;
  merchantId: string;
  href: string;
};

function trackAffiliateClick(resource: Resource, slug: string, placement: string) {
  const analyticsWindow = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  };
  const payload = {
    partner: resource.partner,
    creative_id: resource.creativeId,
    category: resource.category,
    site: "hoteldealsflorida",
    route: `/${slug}`,
    placement,
    cta_text: resource.cta,
    network: "AWIN",
    merchant_id: resource.merchantId,
    component_type: "V22AffiliateResources"
  };

  analyticsWindow.gtag?.("event", "affiliate_click", payload);
  analyticsWindow.dataLayer?.push({ event: "affiliate_click", ...payload });
}

export function V22AffiliateResources({ destination, luxury, slug }: { destination: string; luxury: boolean; slug: string }) {
  const hotelResource: Resource = luxury
    ? {
        partner: "Skylark",
        merchantId: "106305",
        creativeId: "skylark-hotel-deals",
        category: "luxury_hotels",
        title: "Compare luxury stay options",
        copy: `Use this only after checking ${destination} location, fees, cancellation terms, and room fit.`,
        cta: "Compare luxury hotel deals",
        href: SKYLARK_DEALS_AFFILIATE_URL
      }
    : {
        partner: "Zen Hotels",
        merchantId: "115208",
        creativeId: "zenhotels-homepage",
        category: "hotels",
        title: "Check hotel availability",
        copy: `Compare current ${destination} stay options after reviewing location, fees, and amenities.`,
        cta: `Compare ${destination} hotel options`,
        href: ZENHOTELS_AFFILIATE_URL
      };

  const resources: Resource[] = [
    hotelResource,
    {
      partner: "Airport Transfer Portal",
      merchantId: "124434",
      creativeId: "airport-transfer-portal-default",
      category: "airport_transfers",
      title: "Plan airport pickup",
      copy: "If the hotel is not walkable from transit, compare airport transfer timing before the final booking step.",
      cta: "Compare airport transfers",
      href: getTransferAffiliateUrl("hoteldealsflorida", slug)
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="v22-hotel-affiliate-title">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Booking resources</p>
        <h2 id="v22-hotel-affiliate-title" className="mt-2 text-2xl font-black tracking-normal text-ink">
          Review the stay and arrival details together.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              className="rounded-3xl border border-slate-200 bg-sand p-5 transition hover:-translate-y-1 hover:border-ocean"
              href={resource.href}
              key={resource.creativeId}
              onClick={() => trackAffiliateClick(resource, slug, "v22_hotel_booking_resources")}
              rel="sponsored noopener noreferrer"
              target="_blank"
            >
              <h3 className="text-lg font-black text-ink">{resource.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slateText">{resource.copy}</p>
              <span className="mt-4 inline-flex text-sm font-black text-ocean">{resource.cta}</span>
            </a>
          ))}
        </div>
        <p className="mt-5 text-xs font-bold leading-5 text-slateText">
          Affiliate disclosure: some booking-resource links may earn Florida Hotel Deals a commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
