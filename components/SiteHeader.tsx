import Link from "next/link";
import { Building2, Plane, Sailboat, Sparkles } from "lucide-react";

const sisterLinks = [
  { label: "Cruise Deals", href: "https://example.com/florida-cruise-deals", icon: Sailboat },
  { label: "Flight Deals", href: "https://example.com/florida-flight-deals", icon: Plane },
  { label: "Local Deals", href: "https://example.com/local-florida-deals", icon: Sparkles },
  { label: "Hotel Deals", href: "/", icon: Building2 }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Florida Hotel Deals home">
          <span className="grid h-10 w-10 place-items-center rounded bg-ocean-600 text-white shadow-sm">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-ocean-700">
              Florida
            </span>
            <span className="block text-lg font-black leading-none text-ink">Hotel Deals</span>
          </span>
        </Link>

        <nav aria-label="Florida deals family" className="hidden items-center gap-1 md:flex">
          {sisterLinks.map((link) => {
            const Icon = link.icon;
            const active = link.label === "Hotel Deals";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-ocean-50 text-ocean-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#alerts"
          className="rounded bg-sun-400 px-4 py-2 text-sm font-black text-ink shadow-sm transition hover:bg-sun-500"
        >
          Get Alerts
        </Link>
      </div>
    </header>
  );
}
