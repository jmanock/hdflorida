"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Hotel, Mail, Plane, Sparkles, Ticket, Umbrella } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { SKYLARK_DEALS_AFFILIATE_URL, SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";

const rel = "sponsored nofollow noopener noreferrer";

function trackAffiliate(eventName: string, advertiser: string, url: string, ctaText: string) {
  const params = { affiliate_program: "awin", advertiser, cta_text: ctaText, outbound_url: url, placement: "hotel_booking_stack", page_path: window.location.pathname };
  trackEvent(eventName, params);
  trackEvent("affiliate_click", params);
}

export function HotelBookingStack({ destination }: { destination: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-sky-200 bg-skyline p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Hotel booking options</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Compare {destination.toLowerCase()} stays before you leave.</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">Use these booking paths to compare value stays, premium hotels, and luxury travel options. Confirm live rates, taxes, fees, and cancellation terms with the provider.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <a className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" href={ZENHOTELS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_zenhotels", "zenhotels", ZENHOTELS_AFFILIATE_URL, "Compare Hotel Rates")}>
            <Hotel className="h-7 w-7 text-ocean" />
            <h3 className="mt-4 text-xl font-black text-ink">ZenHotels</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare hotel rates for Florida stays and destination trips.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Compare Hotel Rates <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-slate-200 bg-ink p-6 text-white shadow-soft transition hover:-translate-y-1" href={SKYLARK_HOME_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark", "skylark", SKYLARK_HOME_AFFILIATE_URL, "Plan Luxury Travel")}>
            <Sparkles className="h-7 w-7 text-gold" />
            <h3 className="mt-4 text-xl font-black">Skylark Luxury Travel</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/75">Use this for premium Florida trips and luxury planning.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">Plan Luxury Travel <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" href={SKYLARK_DEALS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark_deals", "skylark", SKYLARK_DEALS_AFFILIATE_URL, "View Luxury Hotel Deals")}>
            <Umbrella className="h-7 w-7 text-ocean" />
            <h3 className="mt-4 text-xl font-black text-ink">Luxury hotel deals</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare curated luxury hotel offers when the stay is the trip anchor.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">View Luxury Hotel Deals <ArrowRight className="h-4 w-4" /></span>
          </a>
        </div>
        <p className="mt-4 text-xs font-bold text-slateText">Affiliate links. We may earn a commission at no extra cost to you.</p>
      </div>
    </section>
  );
}

export function HotelContinuePlanningGuides() {
  const guides = [
    ["Find Attractions", "https://localdealsflorida.org/best-things-to-do-in-florida", Ticket],
    ["Explore Vacation Packages", "https://floridadealshub.com/vacation-packages", Umbrella],
    ["Compare Florida Flights", "https://flightdealsflorida.org/google-flights-vs-skyscanner-for-florida-routes", Plane],
    ["Browse Local Deals", "https://localdealsflorida.org", Ticket]
  ] as const;
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Continue planning your Florida trip</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Next steps after choosing a hotel.</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {guides.map(([label, href, Icon]) => (
            <a key={label} href={href} className="group rounded-3xl border border-slate-200 bg-sand p-5 transition hover:border-sky-200 hover:bg-skyline" onClick={() => trackEvent("related_guide_click", { item_title: label, outbound_url: href, page_path: window.location.pathname })}>
              <Icon className="h-6 w-6 text-ocean" />
              <h3 className="mt-4 text-lg font-black text-ink">{label}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean">Plan this step <ArrowRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExitNewsletterCapture() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progress >= 0.7 && !dismissed && !visible) {
        setVisible(true);
        trackEvent("newsletter_signup", { trigger: "scroll_70", page_path: window.location.pathname });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, visible]);
  if (!visible || dismissed) return null;
  return <aside className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-3xl border border-sky-200 bg-white p-5 shadow-soft"><button className="absolute right-4 top-3 text-sm font-black text-slateText" type="button" onClick={() => setDismissed(true)}>Close</button><p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Get New Florida Deals Every Week</p><h2 className="mt-2 pr-12 text-xl font-black text-ink">Hotel ideas, flight routes, cruise add-ons, and local deals.</h2><a className="mt-4 inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-black text-white" href="#alerts" onClick={() => setDismissed(true)}><Mail className="h-4 w-4" />Join free alerts</a></aside>;
}
