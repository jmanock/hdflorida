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
    trackEvent("deal_click", {
      page: pageContext,
      destination: deal.city,
      category: deal.category,
      outbound_url: deal.booking_url
    });
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
