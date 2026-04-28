import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import type { HotelDeal } from "@/lib/types";

const badgeClass: Record<HotelDeal["badge"], string> = {
  "Hot Deal": "bg-rose-50 text-rose-700 ring-rose-200",
  Weekend: "bg-sun-400/20 text-amber-800 ring-amber-200",
  Beach: "bg-ocean-50 text-ocean-700 ring-ocean-100",
  Family: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Luxury: "bg-violet-50 text-violet-700 ring-violet-200",
  "Limited Time": "bg-orange-50 text-orange-700 ring-orange-200",
  "Resident Deal": "bg-blue-50 text-blue-700 ring-blue-200"
};

export function DealCard({ deal }: { deal: HotelDeal }) {
  return (
    <article className="group grid overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[15rem_1fr]">
      <div className="relative min-h-52 overflow-hidden sm:min-h-full">
        <Image
          src={deal.image}
          alt={`${deal.hotel_name} in ${deal.city}`}
          fill
          sizes="(min-width: 640px) 240px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded px-2.5 py-1 text-xs font-black ring-1 ${badgeClass[deal.badge]}`}
          >
            {deal.badge}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {deal.city}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-black leading-tight text-ink">{deal.hotel_name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{deal.description}</p>
        </div>

        <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-ocean-600" aria-hidden="true" />
            {deal.category}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-ocean-600" aria-hidden="true" />
            {deal.dates}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-black text-ink">{deal.price}</p>
            <p className="text-sm font-bold text-palm-600">{deal.savings}</p>
          </div>
          <Link
            href={deal.booking_url}
            className="rounded bg-ocean-600 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-ocean-700"
          >
            View Deal
          </Link>
        </div>
      </div>
    </article>
  );
}
