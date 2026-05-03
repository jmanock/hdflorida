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
    trackEvent(eventName, {
      label,
      href,
      page_path: window.location.pathname
    });
  }

  return (
    <Link href={href} className={className} aria-current={ariaCurrent} onClick={handleClick}>
      {children}
    </Link>
  );
}
