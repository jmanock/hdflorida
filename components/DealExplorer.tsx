"use client";

import { useMemo, useState } from "react";
import { RefreshCw, SlidersHorizontal } from "lucide-react";
import { hotelDeals } from "@/data/hotelDeals";
import { DealCard } from "@/components/DealCard";

const filters = [
  "All Deals",
  "Orlando",
  "Miami",
  "Fort Lauderdale",
  "Tampa Bay",
  "Jacksonville",
  "Florida Keys",
  "Beach Resorts",
  "Family Hotels",
  "Luxury",
  "Budget",
  "Weekend Getaways",
  "Florida Resident Deals",
  "Under $150"
];

export function DealExplorer() {
  const [activeFilter, setActiveFilter] = useState("All Deals");
  const [refreshCount, setRefreshCount] = useState(0);

  const visibleDeals = useMemo(() => {
    const filtered =
      activeFilter === "All Deals"
        ? hotelDeals
        : hotelDeals.filter((deal) => deal.city === activeFilter || deal.category === activeFilter);

    const rotation = refreshCount % filtered.length;
    return [...filtered.slice(rotation), ...filtered.slice(0, rotation)];
  }, [activeFilter, refreshCount]);

  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-ocean-700">
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Today&apos;s Florida hotel board
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Browse stays by destination, price, and trip style.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setRefreshCount((value) => value + 1)}
          className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 bg-white px-4 py-2 text-sm font-black text-ink shadow-sm transition hover:border-ocean-500 hover:text-ocean-700"
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
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded px-4 py-2 text-sm font-black transition ${
              activeFilter === filter
                ? "bg-ink text-white shadow-sm"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-ink"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2" aria-live="polite">
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
