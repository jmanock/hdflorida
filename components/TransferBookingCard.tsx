"use client";
import { ArrowRight, Car } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getTransferAffiliateUrl } from "@/lib/revenuePartners";

export function TransferBookingCard({ slug }: { slug: string }) {
  const href = getTransferAffiliateUrl("hoteldealsflorida.org", slug);
  return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"><Car className="h-7 w-7 text-ocean" /><p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-ocean">Arrival planning</p><h3 className="mt-2 text-2xl font-black text-ink">Flying Into Florida?</h3><p className="mt-3 text-sm font-semibold leading-6 text-slateText">Compare airport-to-hotel transfer options and confirm pickup details before arrival.</p><a className="btn btn-secondary mt-6 px-5" href={href} target="_blank" rel="nofollow sponsored noopener noreferrer" onClick={() => trackEvent("transfer_click", { affiliate: "airport_transfer_portal", category: "airport_transfer", component_type: "TransferBookingCard", placement: "travel_booking_section", partner: "airport_transfer_portal", page: window.location.pathname, page_path: window.location.pathname, outbound_url: href })}>Compare Airport Transfers <ArrowRight className="h-4 w-4" /></a><p className="mt-3 text-xs font-bold leading-5 text-slateText">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p></article>;
}
