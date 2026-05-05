import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const popularSearches = [
  ["Orlando Hotel Deals", "/orlando-hotel-deals"],
  ["Miami Beach Hotel Deals", "/miami-beach-hotel-deals"],
  ["Florida Keys Hotel Deals", "/florida-keys-hotel-deals"],
  ["Clearwater Beach Hotel Deals", "/clearwater-beach-hotel-deals"],
  ["Florida Beach Resort Deals", "/florida-beach-resort-deals"],
  ["Florida Family Hotel Deals", "/florida-family-hotel-deals"],
  ["Florida Hotels Under $150", "/florida-hotels-under-150"],
  ["Weekend Getaway Hotels", "/florida-weekend-getaway-hotels"]
];

export function PopularHotelSearches() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ocean">
              <Search className="h-4 w-4" aria-hidden="true" />
              Popular Hotel Searches
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-normal text-ink sm:text-3xl">
              Start with Florida&apos;s most searched hotel deal pages.
            </h2>
          </div>
          <Link href="/florida-beach-resort-deals" className="inline-flex items-center gap-2 text-sm font-black text-ocean">
            View beach resorts
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularSearches.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-black text-ink transition hover:border-sky-200 hover:bg-skyline hover:text-ocean"
            >
              {label}
              <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
