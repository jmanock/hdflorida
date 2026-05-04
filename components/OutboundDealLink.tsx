"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import type { HotelDeal } from "@/lib/types";

export function OutboundDealLink({
  deal,
  pageContext,
  className,
  children
}: {
  deal: HotelDeal;
  pageContext: string;
  className: string;
  children: ReactNode;
}) {
  function trackDealClick() {
    const eventMetadata = {
      page: pageContext,
      provider: "booking",
      destination: deal.city,
      hotel_name: deal.hotel_name,
      category: deal.category,
      price_text: deal.price,
      outbound_url: deal.booking_url,
      page_path: window.location.pathname
    };

    trackEvent("deal_click", eventMetadata);
    trackEvent("hotel_booking_click", eventMetadata);
  }

  return (
    <Link
      href={deal.booking_url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackDealClick}
    >
      {children}
    </Link>
  );
}
