export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs font-bold leading-5 text-slate-500 ${className}`}>
      Some links may be sponsored or affiliate links. We may earn a commission if you book or buy through them, at no extra cost to you.
    </p>
  );
}
