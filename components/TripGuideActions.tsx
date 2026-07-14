"use client";

import { Check, Copy, Printer, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type EventValue = string | number | boolean;

function emit(event: string, payload: Record<string, EventValue>) {
  window.gtag?.("event", event, payload);
  window.dataLayer?.push({ event, ...payload });
}

export function GuideLink({ href, route, children, className, eventName = "related_guide_click", placement = "trip_reality_next_steps" }: { href: string; route: string; children: ReactNode; className?: string; eventName?: string; placement?: string }) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => emit(eventName, {
        network: "Florida Deals Network",
        site: "hoteldealsflorida.org",
        route,
        destination: href,
        placement
      })}
    >
      {children}
    </a>
  );
}

export function TripChecklist({ route, storageKey, items }: { route: string; storageKey: string; items: string[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        setChecked(JSON.parse(window.localStorage.getItem(storageKey) || "{}"));
      } catch {
        setChecked({});
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [storageKey]);

  function persist(next: Record<string, boolean>, action: string) {
    setChecked(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    emit("trip_checklist_interaction", {
      network: "Florida Deals Network",
      site: "hoteldealsflorida.org",
      route,
      action,
      completed_items: Object.values(next).filter(Boolean).length
    });
  }

  async function copyChecklist() {
    const text = items.map((item) => `${checked[item] ? "[x]" : "[ ]"} ${item}`).join("\n");
    await navigator.clipboard.writeText(text);
    setMessage("Checklist copied");
    emit("trip_checklist_interaction", { network: "Florida Deals Network", site: "hoteldealsflorida.org", route, action: "copy", completed_items: Object.values(checked).filter(Boolean).length });
  }

  return (
    <section className="rounded-lg border border-sky-200 bg-sky-50 p-5 sm:p-7" aria-labelledby={`${storageKey}-title`}>
      <p className="text-xs font-black uppercase tracking-[0.14em] text-ocean">Private, on this device</p>
      <h2 className="mt-2 text-2xl font-black text-ink" id={`${storageKey}-title`}>My Trip Checklist</h2>
      <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slateText">Selections stay in this browser. No account or personal information is used.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <label className="flex min-h-12 cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-ink" key={item}>
            <input
              checked={Boolean(checked[item])}
              className="mt-0.5 h-5 w-5 accent-sky-700"
              onChange={(event) => persist({ ...checked, [item]: event.target.checked }, event.target.checked ? "check" : "uncheck")}
              type="checkbox"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button className="btn btn-secondary min-h-11 px-4" onClick={() => { persist({}, "reset"); setMessage("Checklist reset"); }} type="button"><RotateCcw className="h-4 w-4" /> Reset</button>
        <button className="btn btn-secondary min-h-11 px-4" onClick={() => { window.print(); emit("trip_checklist_interaction", { network: "Florida Deals Network", site: "hoteldealsflorida.org", route, action: "print", completed_items: Object.values(checked).filter(Boolean).length }); }} type="button"><Printer className="h-4 w-4" /> Print</button>
        <button className="btn btn-secondary min-h-11 px-4" onClick={copyChecklist} type="button"><Copy className="h-4 w-4" /> Copy</button>
        {message ? <span className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-black text-ocean" role="status"><Check className="h-4 w-4" /> {message}</span> : null}
      </div>
    </section>
  );
}
