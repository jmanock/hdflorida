"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  className,
  children,
  label,
  eventName = "navigation_click",
  ariaCurrent
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label: string;
  eventName?: string;
  ariaCurrent?: "page";
}) {
  function handleClick() {
    const eventMetadata = {
      source_site: "hoteldealsflorida.org",
      label,
      href,
      page_path: window.location.pathname
    };

    trackEvent(eventName, eventMetadata);

    if (href.startsWith("https://")) {
      trackEvent("network_site_click", eventMetadata);
    }
  }

  return (
    <Link href={href} className={className} aria-current={ariaCurrent} onClick={handleClick}>
      {children}
    </Link>
  );
}
