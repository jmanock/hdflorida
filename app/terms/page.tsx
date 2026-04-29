import Link from "next/link";

export const metadata = {
  title: "Terms | Florida Hotel Deals",
  description: "Terms of use for Florida Hotel Deals."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm font-black text-ocean">
        Florida Hotel Deals
      </Link>
      <h1 className="mt-4 text-4xl font-black text-ink">Terms</h1>
      <p className="mt-5 text-lg font-medium leading-8 text-slateText">
        Florida Hotel Deals provides curated travel deal information for discovery and planning.
        Prices, availability, dates, savings, and booking terms can change at any time. Always
        confirm final details directly with the hotel, booking provider, or travel partner before
        purchasing.
      </p>
    </main>
  );
}
