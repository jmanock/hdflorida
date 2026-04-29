import Link from "next/link";

export const metadata = {
  title: "About | Florida Hotel Deals",
  description: "Learn about Florida Hotel Deals and the Florida Deals Hub travel savings network."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm font-black text-ocean">
        Florida Hotel Deals
      </Link>
      <h1 className="mt-4 text-4xl font-black text-ink">About Florida Hotel Deals</h1>
      <p className="mt-5 text-lg font-medium leading-8 text-slateText">
        Florida Hotel Deals curates hotel, resort, family stay, weekend getaway, and staycation
        offers across Florida. The site is part of Florida Deals Hub, a travel savings network
        focused on trustworthy Florida-specific deal discovery.
      </p>
    </main>
  );
}
