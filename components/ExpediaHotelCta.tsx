"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function ExpediaHotelCta({
  href,
  destination,
  label,
  pageContext,
  category,
  priceText,
  className,
  children
}: {
  href: string;
  destination: string;
  label: string;
  pageContext: string;
  category?: string;
  priceText?: string;
  className: string;
  children: ReactNode;
}) {
  function trackClick() {
    const metadata = {
      page: pageContext,
      type: "hotel",
      provider: "expedia",
      destination,
      category,
      cta_text: label,
      price_text: priceText,
      outbound_url: href,
      page_path: window.location.pathname
    };

    trackEvent("deal_click", metadata);
    trackEvent("hotel_booking_click", metadata);
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={trackClick}>
      {children}
    </a>
  );
}
