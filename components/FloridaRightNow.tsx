import liveData from "@/data/live-intelligence.json";
export function FloridaRightNow({
  detailHref = "https://localdealsflorida.org/clearwater-beach-conditions",
  focus = "destination weather and coastal conditions",
}: {
  detailHref?: string;
  focus?: string;
}) {
  const data = liveData as any;
  const unavailable = data.status !== "current";
  const alerts =
    data.locations?.reduce(
      (n: number, x: any) => n + (x.officialAlerts?.length || 0),
      0,
    ) || 0;
  return (
    <section
      aria-labelledby="hotel-live-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase text-ocean">
          Florida travel intelligence
        </p>
        <h2
          id="hotel-live-heading"
          className="mt-2 text-2xl font-black text-ink"
        >
          Check conditions before choosing a stay
        </h2>
        <p className="mt-3 text-slateText">
          {unavailable
            ? "Current conditions data is temporarily unavailable. Use the official source link before making travel decisions."
            : alerts
            ? `${alerts} active official alert records are available across the pilot locations.`
            : "No active official alert was found in the latest successful update."}{" "}
          Focus: {focus}.
        </p>
        <p className="mt-4 text-sm text-slateText">
          Conditions updated{" "}
          <time dateTime={data.generatedAt}>
            {new Date(data.generatedAt).toLocaleString("en-US", {
              timeZone: "America/New_York",
            })}{" "}
            ET
          </time>
          .
        </p>
        <a
          className="mt-5 inline-flex font-black text-ocean underline"
          href={detailHref}
        >
          View Clearwater Beach conditions and sources
        </a>
      </div>
    </section>
  );
}
