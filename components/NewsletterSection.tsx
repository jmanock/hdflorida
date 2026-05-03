import { Bell, TicketPercent } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";

export function NewsletterSection() {
  return (
    <section id="alerts" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.24),transparent_26rem),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.18),transparent_24rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 text-white sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-gold">
            <Bell className="h-4 w-4" aria-hidden="true" />
            Hotel deal alerts
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
            Get Florida Hotel Deals Delivered
          </h2>
          <p className="mt-4 max-w-xl text-lg font-medium leading-8 text-white/74">
            Join free alerts for beach resorts, family hotels, weekend getaways, and Florida
            staycation deals.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/15">
            <TicketPercent className="h-4 w-4 text-gold" aria-hidden="true" />
            Free alerts. No spam. Hotel rates may change fast.
          </p>
        </div>
        <div className="self-center rounded-3xl border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
