import { TrackedLink } from "@/components/TrackedLink";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

const topHotelLinks = [
  ["Orlando Hotel Deals", "/orlando-hotel-deals"],
  ["Miami Hotel Deals", "/miami-hotel-deals"],
  ["Miami Beach Hotel Deals", "/miami-beach-hotel-deals"],
  ["Florida Keys Hotel Deals", "/florida-keys-hotel-deals"],
  ["Clearwater Beach Hotel Deals", "/clearwater-beach-hotel-deals"],
  ["Beach Resort Deals", "/florida-beach-resort-deals"],
  ["Family Hotel Deals", "/florida-family-hotel-deals"],
  ["Weekend Getaway Hotels", "/florida-weekend-getaway-hotels"],
  ["Hotels Under $150", "/florida-hotels-under-150"]
];

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-slate-200 pb-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
              Popular Hotel Searches
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-slateText">
              Current hotel searches, updated regularly. Rates may change before booking.
            </p>
          </div>
          <nav aria-label="Popular hotel searches" className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-slateText">
            {topHotelLinks.map(([label, href]) => (
              <TrackedLink key={href} href={href} label={`footer:${label}`} className="hover:text-ocean">
                {label}
              </TrackedLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-slateText">
              © 2026 Florida Hotel Deals. Part of Florida Deals Hub.
            </p>
            <AffiliateDisclosure className="mt-2 max-w-xl" />
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slateText"
          >
            {[
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Sitemap", "/sitemap.xml"],
              ["Sister Sites", "https://floridadealshub.com"]
            ].map(([label, href]) => (
              <TrackedLink key={href} href={href} label={`footer:${label}`} className="hover:text-ocean">
                {label}
              </TrackedLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
