export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs font-bold leading-5 text-slate-500 ${className}`}>
      Florida Deals Hub may earn a commission when you book through some links. This helps keep
      our deal alerts free.
    </p>
  );
}
