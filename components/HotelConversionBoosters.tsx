"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Crown, Hotel, Mail, Plane, Sparkles, Ticket, Umbrella, WalletCards } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_COM_AFFILIATE_URL, SKYLARK_DEALS_AFFILIATE_URL, SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "@/lib/revenuePartners";

const rel = "sponsored nofollow noopener noreferrer";

function trackAffiliate(eventName: string, advertiser: string, url: string, ctaText: string) {
  const params = { affiliate_program: "awin", advertiser, cta_text: ctaText, outbound_url: url, placement: "hotel_booking_stack", page_path: window.location.pathname };
  trackEvent(eventName, params);
  trackEvent("affiliate_click", params);
  trackEvent("hotel_cta_click", params);
  trackEvent("hotel_compare_click", params);
}

export function HotelBookingStack({ destination, expediaUrl }: { destination: string; expediaUrl: string }) {
  const bestValueUrl = BOOKING_COM_AFFILIATE_URL || expediaUrl;
  const bestValuePartner = BOOKING_COM_AFFILIATE_URL ? "booking.com" : "expedia";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-sky-200 bg-skyline p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Hotel booking options</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Compare {destination.toLowerCase()} stays before you leave.</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slateText">Use these booking paths to compare value stays, premium hotels, and luxury travel options. Confirm live rates, taxes, fees, and cancellation terms with the provider.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <a className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-sky-200" href={ZENHOTELS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_zenhotels", "zenhotels", ZENHOTELS_AFFILIATE_URL, "Compare Hotel Rates")}>
            <WalletCards className="h-7 w-7 text-ocean" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">Budget option</p>
            <h3 className="mt-2 text-xl font-black text-ink">Compare with ZenHotels</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Useful for comparing value-focused stays and current room rates.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Check Budget Options <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-sky-200 bg-skyline p-6 shadow-card transition hover:-translate-y-1" href={bestValueUrl} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click", bestValuePartner, bestValueUrl, "Compare Best Value Hotels")}>
            <Hotel className="h-7 w-7 text-ocean" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">Best value</p>
            <h3 className="mt-2 text-xl font-black text-ink">{BOOKING_COM_AFFILIATE_URL ? "Compare on Booking.com" : "Compare Current Hotel Deals"}</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare location, cancellation terms, room type, and the final checkout total.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">Compare Best Value <ArrowRight className="h-4 w-4" /></span>
          </a>
          <a className="rounded-3xl border border-slate-200 bg-ink p-6 text-white shadow-soft transition hover:-translate-y-1" href={SKYLARK_DEALS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark_deals", "skylark", SKYLARK_DEALS_AFFILIATE_URL, "View Luxury Hotel Deals")}>
            <Crown className="h-7 w-7 text-gold" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-sky-200">Luxury option</p>
            <h3 className="mt-2 text-xl font-black">Skylark Luxury Hotel Deals</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/75">Compare premium Florida stays when service and hotel experience matter most.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">View Luxury Hotels <ArrowRight className="h-4 w-4" /></span>
          </a>
        </div>
        <a className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean" href={SKYLARK_HOME_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark", "skylark", SKYLARK_HOME_AFFILIATE_URL, "Plan Luxury Travel")}>
          <Sparkles className="h-4 w-4" /> Need a full luxury trip? Plan with Skylark Travel <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-xs font-bold text-slateText">Affiliate links. We may earn a commission at no extra cost to you.</p>
      </div>
    </section>
  );
}

export function CompareHotelOptions({ destination, expediaUrl }: { destination: string; expediaUrl: string }) {
  const bestValueUrl = BOOKING_COM_AFFILIATE_URL || expediaUrl;
  const options = [
    {
      label: "Budget Option",
      headline: "Keep the final checkout total low",
      body: "Compare taxes, parking, breakfast, cancellation rules, and room location before choosing the lowest nightly rate.",
      href: ZENHOTELS_AFFILIATE_URL,
      advertiser: "zenhotels",
      eventName: "affiliate_click_zenhotels",
      cta: "Compare Budget Hotels",
      icon: WalletCards
    },
    {
      label: "Best Value Option",
      headline: "Balance location, fees, and flexibility",
      body: "Use this path when you want a practical stay with fewer surprises at checkout and a realistic location for the trip.",
      href: bestValueUrl,
      advertiser: BOOKING_COM_AFFILIATE_URL ? "booking.com" : "expedia",
      eventName: "affiliate_click",
      cta: "Compare Best Value Stays",
      icon: Hotel
    },
    {
      label: "Family-Friendly Option",
      headline: "Prioritize pools, room layout, and attractions",
      body: "Check family amenities, parking, breakfast, pool hours, and travel time to beaches, parks, or cruise ports.",
      href: expediaUrl,
      advertiser: "expedia",
      eventName: "affiliate_click",
      cta: "Compare Family Hotels",
      icon: Umbrella
    },
    {
      label: "Luxury Option",
      headline: "Compare premium Florida hotel experiences",
      body: "Use Skylark when the trip calls for a higher-touch stay, upgraded service, or luxury hotel planning.",
      href: SKYLARK_DEALS_AFFILIATE_URL,
      advertiser: "skylark",
      eventName: "affiliate_click_skylark_deals",
      cta: "View Luxury Hotel Deals",
      icon: Crown
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Compare hotel options</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-ink">Choose the right {destination.toLowerCase()} for the way you travel.</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <a
                key={option.label}
                className="rounded-3xl border border-slate-200 bg-sand p-5 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-skyline"
                href={option.href}
                target="_blank"
                rel={rel}
                onClick={() => trackAffiliate(option.eventName, option.advertiser, option.href, option.cta)}
              >
                <Icon className="h-6 w-6 text-ocean" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">{option.label}</p>
                <h3 className="mt-2 text-lg font-black leading-6 text-ink">{option.headline}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slateText">{option.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean">{option.cta}<ArrowRight className="h-4 w-4" /></span>
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-xs font-bold text-slateText">Affiliate links. We may earn a commission at no extra cost to you. Confirm live prices, fees, and availability with the provider.</p>
      </div>
    </section>
  );
}

export function StickyHotelCtas({ destination, expediaUrl }: { destination: string; expediaUrl: string }) {
  return (
    <aside className="fixed bottom-3 left-3 right-3 z-40 mx-auto flex max-w-lg gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-soft backdrop-blur md:hidden">
      <a className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-ocean px-3 text-center text-sm font-black text-white" href={expediaUrl} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click", "expedia", expediaUrl, `Compare ${destination}`)}>
        Compare Florida Hotel Deals
      </a>
      <a className="flex min-h-12 items-center justify-center rounded-xl bg-ink px-4 text-sm font-black text-white" href="#alerts">
        Get Alerts
      </a>
    </aside>
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
            <a key={label} href={href} className="group rounded-3xl border border-slate-200 bg-sand p-5 transition hover:border-sky-200 hover:bg-skyline" onClick={() => {
              const params = { item_title: label, outbound_url: href, page_path: window.location.pathname };
              trackEvent("related_guide_click", params);
              trackEvent("continue_planning_click", params);
              if (href.startsWith("https://")) trackEvent("cross_site_click", params);
            }}>
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
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, visible]);
  if (!visible || dismissed) return null;
  return <aside className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-xl rounded-3xl border border-sky-200 bg-white p-5 shadow-soft md:bottom-4"><button className="absolute right-4 top-3 text-sm font-black text-slateText" type="button" onClick={() => setDismissed(true)}>Close</button><p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Get New Florida Deals Every Week</p><h2 className="mt-2 pr-12 text-xl font-black text-ink">Hotel ideas, flight routes, cruise add-ons, and local deals.</h2><a className="mt-4 inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-black text-white" href="#alerts" onClick={() => setDismissed(true)}><Mail className="h-4 w-4" />Join free alerts</a></aside>;
}
