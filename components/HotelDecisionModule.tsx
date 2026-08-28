import { BadgeDollarSign, CircleCheck, CircleX, ReceiptText } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";

const decisions: Record<string, { answer: string; cards: Array<[string, string]> }> = {
  "clearwater-beach-hotel-deals": { answer: "Pay more for beach proximity only when it changes how you will use the stay.", cards: [["Best for", "Travelers planning repeated beach access"], ["Skip if", "The room is mainly a place to sleep"], ["Hidden cost", "Check parking, resort fees, and room-view terms"]] },
  "florida-budget-hotels": { answer: "Compare the final stay total, not the room label or starting price.", cards: [["Best for", "Short stays, road trips, and airport nights"], ["Skip if", "Added transport erases the room savings"], ["Hidden cost", "Check parking, deposits, and cancellation terms"]] },
  "florida-pet-friendly-hotels": { answer: "A pet-friendly label is only useful after the property-specific rules and complete pet cost are clear.", cards: [["Best for", "Road trips and stays where the pet joins the full itinerary"], ["Check first", "Species, size, quantity, unattended-pet, and restricted-area rules"], ["Hidden cost", "Confirm per-night or per-stay fees, deposits, cleaning charges, and parking"]] },
  "florida-oceanfront-hotels": { answer: "Pay for oceanfront placement when repeated beach access matters more than room size or nearby alternatives.", cards: [["Best for", "Beach-first trips and sunrise or sunset access"], ["Skip if", "Most days will be spent away from the property"], ["What to compare", "View wording, beach access, parking, fees, and cancellation terms"]] },
  "orlando-family-resort-deals": { answer: "Choose an Orlando family resort by the daily routine, not only its advertised distance from an attraction.", cards: [["Best for", "Families using the pool, room layout, or resort downtime"], ["Check first", "Real drive time, shuttle rules, bedding, breakfast, and midday-rest practicality"], ["Hidden cost", "Compare parking, resort fees, transport, and the final checkout total"]] },
  "best-time-to-book-florida-hotels": { answer: "The useful booking window depends on flexibility, cancellation terms, destination demand, and trip dates.", cards: [["Best for", "Travelers able to compare more than once"], ["Price driver", "Dates, events, room type, and flexibility"], ["Question", "Can you rebook if the total changes?"]] },
  "how-hotel-pricing-works": { answer: "Compare the final stay total and cancellation terms before treating a nightly rate as the better deal.", cards: [["Best for", "Travelers comparing dates, room types, or neighborhoods"], ["Price driver", "Demand, inventory, fees, taxes, and flexibility"], ["Question", "What is included in the final checkout total?"]] },
  "florida-resorts-with-pools": { answer: "A pool is worth prioritizing when it will replace part of the activity schedule.", cards: [["Best for", "Families and resort-focused days"], ["Skip if", "Most days will be away from the property"], ["Hidden cost", "Check resort fees, access rules, and closures"]] }
};

const relatedLinks = [
  ["Florida budget hotel guide", "/florida-budget-hotels"],
  ["Florida oceanfront hotel guide", "/florida-oceanfront-hotels"],
  ["Florida pool resort guide", "/florida-resorts-with-pools"],
  ["Orlando family resort guide", "/orlando-family-resort-deals"],
  ["Florida pet-friendly hotel guide", "/florida-pet-friendly-hotels"],
  ["Clearwater Beach hotel guide", "/clearwater-beach-hotel-deals"],
  ["When to book Florida hotels", "/best-time-to-book-florida-hotels"],
  ["How Florida hotel pricing works", "/how-hotel-pricing-works"]
] as const;

const relatedRoutes: Record<string, string[]> = {
  "florida-budget-hotels": ["/florida-oceanfront-hotels", "/how-hotel-pricing-works", "/best-time-to-book-florida-hotels", "/clearwater-beach-hotel-deals"],
  "florida-oceanfront-hotels": ["/clearwater-beach-hotel-deals", "/florida-resorts-with-pools", "/florida-budget-hotels", "/how-hotel-pricing-works"],
  "florida-pet-friendly-hotels": ["/florida-budget-hotels", "/orlando-family-resort-deals", "/clearwater-beach-hotel-deals", "/how-hotel-pricing-works"],
  "orlando-family-resort-deals": ["/florida-resorts-with-pools", "/florida-budget-hotels", "/best-time-to-book-florida-hotels", "/clearwater-beach-hotel-deals"],
  "clearwater-beach-hotel-deals": ["/florida-oceanfront-hotels", "/florida-resorts-with-pools", "/orlando-family-resort-deals", "/how-hotel-pricing-works"],
  "florida-resorts-with-pools": ["/orlando-family-resort-deals", "/clearwater-beach-hotel-deals", "/florida-budget-hotels", "/florida-oceanfront-hotels"],
  "best-time-to-book-florida-hotels": ["/how-hotel-pricing-works", "/florida-budget-hotels", "/clearwater-beach-hotel-deals", "/orlando-family-resort-deals"],
  "how-hotel-pricing-works": ["/florida-budget-hotels", "/best-time-to-book-florida-hotels", "/florida-oceanfront-hotels", "/florida-pet-friendly-hotels"]
};

export function HotelDecisionModule({ slug }: { slug: string }) {
  const decision = decisions[slug];
  if (!decision) return null;
  const icons = [CircleCheck, CircleX, ReceiptText];
  const routes = new Set(relatedRoutes[slug] ?? []);
  const pageLinks = relatedLinks.filter(([, href]) => routes.has(href));

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" aria-labelledby="hotel-decision-title">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-ocean">Hotel decision check</p>
        <h2 id="hotel-decision-title" className="mt-2 text-2xl font-black text-ink">{decision.answer}</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {decision.cards.map(([label, value], index) => {
            const Icon = icons[index];
            return (
              <article className="rounded-lg border border-slate-200 bg-sand p-4" key={label}>
                <Icon className="h-5 w-5 text-ocean" aria-hidden="true" />
                <h3 className="mt-3 font-black text-ink">{label}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-slateText">{value}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pageLinks.map(([label, href]) => (
            <TrackedLink
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-ocean"
              eventName="related_guide_click"
              href={href}
              key={href}
              label={label}
            >
              {label}
            </TrackedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
