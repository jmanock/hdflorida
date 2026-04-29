import Link from "next/link";
import { Building2 } from "lucide-react";

const sisterLinks = [
  { label: "Flights", href: "https://flightdealsflorida.org" },
  { label: "Hotels", href: "/" },
  { label: "Cruises", href: "https://cruisedealsflorida.org" },
  { label: "Local Deals", href: "https://localdealsflorida.org" },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Florida Hotel Deals home">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink text-white shadow-lg shadow-slate-900/15">
            <Building2 className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gold ring-2 ring-white" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-normal text-ink sm:text-lg">
              Florida Hotel Deals
            </span>
            <span className="hidden text-xs font-bold text-slateText sm:block">
              Part of Florida Deals Hub
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-sand p-1 text-sm font-bold text-slateText lg:flex"
        >
          {sisterLinks.map((link) => {
            const active = link.label === "Hotels";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  active
                    ? "bg-white text-ink shadow-sm"
                    : "hover:bg-white hover:text-ocean"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#alerts"
          className="btn btn-gold min-h-11 shrink-0 px-4 py-2"
        >
          Get Alerts
        </Link>
      </div>
    </header>
  );
}
