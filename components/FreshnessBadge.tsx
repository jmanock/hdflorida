import { LAST_UPDATED_LABEL } from "@/lib/siteConstants";

export function FreshnessBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slateText shadow-sm ${className}`}
    >
      {LAST_UPDATED_LABEL}
      <span className="h-1.5 w-1.5 rounded-full bg-ocean" aria-hidden="true" />
      Current hotel searches
    </p>
  );
}
