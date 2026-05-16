import { TrackedLink } from "@/components/TrackedLink";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

const destinationLinks = [
  ["Orlando Hotel Deals", "/orlando-hotel-deals"],
  ["Miami Beach Hotel Deals", "/miami-beach-hotel-deals"],
  ["Tampa Hotel Deals", "/tampa-hotel-deals"],
  ["Fort Lauderdale Hotel Deals", "/fort-lauderdale-hotel-deals"],
  ["Florida Keys Hotel Deals", "/florida-keys-hotel-deals"],
  ["Clearwater Beach Hotel Deals", "/clearwater-beach-hotel-deals"],
  ["St. Augustine Hotel Deals", "/st-augustine-hotel-deals"]
];

const hotelTypeLinks = [
  ["Florida Beach Resort Deals", "/florida-beach-resort-deals"],
  ["Florida Family Hotel Deals", "/florida-family-hotel-deals"],
  ["Florida Budget Hotels", "/florida-budget-hotels"],
  ["Florida Weekend Getaway Hotels", "/florida-weekend-getaway-hotels"],
  ["Florida Oceanfront Hotels", "/florida-oceanfront-hotels"],
  ["Florida Resorts With Pools", "/florida-resorts-with-pools"],
  ["Florida Pet-Friendly Hotels", "/florida-pet-friendly-hotels"]
];

const networkLinks = [
  ["Florida Flight Deals", "https://flightdealsflorida.org"],
  ["Florida Cruise Deals", "https://cruisedealsflorida.org"],
  ["Local Deals Florida", "https://localdealsflorida.org"],
  ["Florida Deals Hub", "https://floridadealshub.com"]
];

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-200 pb-8 md:grid-cols-3">
          {[
            ["Florida Hotel Destinations", destinationLinks],
            ["Hotel Types", hotelTypeLinks],
            ["Florida Deals Network", networkLinks]
          ].map(([title, links]) => (
            <div key={title as string}>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">
                {title as string}
              </p>
              <nav
                aria-label={title as string}
                className="mt-4 grid gap-2 text-sm font-bold leading-6 text-slateText"
              >
                {(links as string[][]).map(([label, href]) => (
                  <TrackedLink key={href} href={href} label={`footer:${label}`} className="hover:text-ocean">
                    {label}
                  </TrackedLink>
                ))}
              </nav>
            </div>
          ))}
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
              ["Editorial Policy", "/editorial-policy"],
              ["Hotel Pricing", "/how-hotel-pricing-works"],
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
