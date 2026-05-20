export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs font-bold leading-5 text-slate-500 ${className}`}>
      Some links on this site may earn us a commission at no extra cost to you. This helps keep our deal alerts free.
    </p>
  );
}
