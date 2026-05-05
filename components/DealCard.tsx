import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Star, Tag } from "lucide-react";
import { OutboundDealLink } from "@/components/OutboundDealLink";
import type { HotelDeal } from "@/lib/types";

const badgeClass: Record<HotelDeal["badge"], string> = {
  "Hot Deal": "bg-rose-50 text-rose-700 ring-rose-200",
  Weekend: "bg-sun-400/20 text-amber-800 ring-amber-200",
  Beach: "bg-ocean-50 text-ocean-700 ring-ocean-100",
  Family: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Luxury: "bg-violet-50 text-violet-700 ring-violet-200",
  "Resident Deal": "bg-blue-50 text-blue-700 ring-blue-200"
};

export function DealCard({ deal, pageContext = "homepage" }: { deal: HotelDeal; pageContext?: string }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft sm:grid-cols-[15rem_1fr]">
      <div className="relative min-h-56 overflow-hidden sm:min-h-full">
        <Image
          src={deal.image}
          alt={deal.image_alt}
          fill
          sizes="(min-width: 640px) 240px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
      </div>
      <div className="flex min-w-0 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded px-2.5 py-1 text-xs font-black ring-1 ${badgeClass[deal.badge]}`}
          >
            {deal.badge}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-ocean" aria-hidden="true" />
            {deal.city}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-black leading-tight text-ink">{deal.hotel_name}</h3>
          <p className="mt-2 text-sm font-medium leading-6 text-slateText">{deal.description}</p>
        </div>

        <div className="grid gap-3 text-sm font-bold text-slateText sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-ocean" aria-hidden="true" />
            {deal.category}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-ocean" aria-hidden="true" />
            {deal.dates}
          </span>
        </div>

        {deal.place ? (
          <div className="rounded-2xl border border-slate-200 bg-sand px-4 py-3 text-sm font-bold text-slateText">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {deal.place.rating ? (
                <span className="inline-flex items-center gap-1 text-ink">
                  <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  {deal.place.rating.toFixed(1)}
                  {deal.place.review_count ? (
                    <span className="text-slate-500">({deal.place.review_count.toLocaleString()} reviews)</span>
                  ) : null}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4 text-ocean" aria-hidden="true" />
                {deal.place.neighborhood ?? deal.place.city ?? deal.city}
              </span>
            </div>
            {deal.place.address ? (
              <p className="mt-2 text-xs font-bold leading-5 text-slate-500">{deal.place.address}</p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-black text-ink">{deal.price}</p>
            <p className="text-sm font-bold text-palm-600">{deal.savings}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">Prices may change before booking.</p>
            <p className="mt-1 text-xs font-bold text-slate-500">
              Free cancellation and no booking fees are available on many stays.
            </p>
          </div>
          <OutboundDealLink
            deal={deal}
            pageContext={pageContext}
            className="btn btn-primary btn-card w-full sm:w-auto"
          >
            {deal.cta_label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </OutboundDealLink>
        </div>
      </div>
    </article>
  );
}
