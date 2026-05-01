"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { HotelDeal } from "@/lib/types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (event: "event", eventName: string, eventParams: Record<string, string>) => void;
  }
}

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
    const eventParams = {
      page: pageContext,
      destination: deal.city,
      category: deal.category,
      outbound_url: deal.booking_url
    };

    window.gtag?.("event", "deal_click", eventParams);
    window.dataLayer?.push({
      event: "deal_click",
      ...eventParams
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
