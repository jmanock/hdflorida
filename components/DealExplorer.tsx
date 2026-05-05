"use client";

import { useMemo, useState } from "react";
import { RefreshCw, SlidersHorizontal } from "lucide-react";
import { hotelDeals } from "@/data/hotelDeals";
import { DealCard } from "@/components/DealCard";
import { trackEvent } from "@/lib/analytics";

const filters = [
  "All Stays",
  "Orlando",
  "Miami",
  "Tampa Bay",
  "Fort Lauderdale",
  "Florida Keys",
  "Beach Resorts",
  "Family Hotels",
  "Luxury",
  "Under $150",
  "Weekend"
];

export function DealExplorer() {
  const [activeFilter, setActiveFilter] = useState("All Stays");
  const [refreshCount, setRefreshCount] = useState(0);

  const visibleDeals = useMemo(() => {
    const filtered =
      activeFilter === "All Stays"
        ? hotelDeals
        : hotelDeals.filter(
            (deal) =>
              deal.city === activeFilter ||
              deal.category === activeFilter ||
              (activeFilter === "Weekend" && deal.category === "Weekend Getaways")
          );

    const rotation = refreshCount % filtered.length;
    return [...filtered.slice(rotation), ...filtered.slice(0, rotation)];
  }, [activeFilter, refreshCount]);

  function handleFilterClick(filter: string) {
    setActiveFilter(filter);
    trackEvent("filter_click", {
      filter
    });
  }

  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-ocean">
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Curated hotel deal feed
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal text-ink sm:text-4xl">
            More Florida hotel deals by destination and stay style.
          </h2>
          <p className="mt-3 max-w-2xl font-medium leading-7 text-slateText">
            Filter the latest curated stays for beaches, family trips, resort weekends, resident rates,
            and under-$150 value finds.
          </p>
          <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-slate-500">
            Updated regularly. Hotel availability and rates may change.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setRefreshCount((value) => value + 1)}
          className="btn btn-ghost-dark"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Refresh Deals
        </button>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleFilterClick(filter)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
              activeFilter === filter
                ? "bg-ink text-white shadow-sm"
                : "bg-white text-slateText ring-1 ring-slate-200 hover:text-ink"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold leading-6 text-slateText shadow-card">
        Hotel rates can change quickly. Compare options, check cancellation policies, and confirm
        taxes or fees with the booking source before booking.
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2" aria-live="polite">
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
