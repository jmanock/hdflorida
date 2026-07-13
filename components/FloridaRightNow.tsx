import { ArrowRight, CloudSun, Waves } from "lucide-react";
import Link from "next/link";
import liveData from "@/data/live-intelligence.json";

const locationOrder = ["clearwater-beach", "miami-beach", "orlando"];

function formatUpdate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short" }).format(new Date(value));
}

export function FloridaRightNow() {
  const data = liveData as any;
  const locations = locationOrder.map((id) => data.locations?.find((location: any) => location.locationId === id)).filter(Boolean);
  const activeSystems = data.tropicalWeather?.activeSystems?.length || 0;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8" aria-labelledby="destination-conditions-title">
      <div className="overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-card">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-sky-50 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-ocean">Florida Beach &amp; Destination Conditions</p>
            <h2 id="destination-conditions-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">A quicker read before choosing where to stay</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slateText">Compare current weather context for Clearwater Beach, Miami Beach, and Orlando, plus the latest official tropical feed status.</p>
          </div>
          <div className="flex flex-wrap gap-2"><Link className="btn btn-primary px-4" href="/clearwater-beach-hotel-deals">Clearwater Beach conditions</Link><a className="btn btn-secondary px-4" href="https://floridadealshub.com/florida-right-now">Florida Right Now</a></div>
        </div>
        <div className="grid gap-px bg-slate-200 md:grid-cols-3">
          {locations.map((location: any) => (
            <article className="min-w-0 bg-white p-5" key={location.locationId}>
              <div className="flex items-center justify-between gap-3"><h3 className="text-lg font-black text-ink">{location.name}</h3>{location.locationId.includes("beach") ? <Waves className="h-5 w-5 text-ocean" /> : <CloudSun className="h-5 w-5 text-gold" />}</div>
              <p className="mt-3 text-sm font-black text-ink">{location.weather?.summary?.value || "Conditions unavailable"}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slateText">{location.weather?.temperature?.value != null ? `${location.weather.temperature.value}°F` : "Temperature unavailable"}{location.waterTemperature?.value != null ? ` · Water ${Math.round(location.waterTemperature.value)}°F` : ""}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-2 px-5 py-4 text-xs font-bold text-slateText sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>{activeSystems ? `${activeSystems} active tropical system record${activeSystems === 1 ? "" : "s"}; verify official guidance.` : "No active tropical systems appear in the latest official feed."}</span><span>Conditions updated <time dateTime={data.generatedAt}>{formatUpdate(data.generatedAt)}</time> · Sources: NWS, NOAA, NHC</span></div>
      </div>
    </section>
  );
}
