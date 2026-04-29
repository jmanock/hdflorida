import Link from "next/link";

export const metadata = {
  title: "Contact | Florida Hotel Deals",
  description: "Contact Florida Hotel Deals for partnerships, hotel deal tips, and site questions."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm font-black text-ocean">
        Florida Hotel Deals
      </Link>
      <h1 className="mt-4 text-4xl font-black text-ink">Contact</h1>
      <p className="mt-5 text-lg font-medium leading-8 text-slateText">
        For partnerships, hotel deal submissions, or questions about Florida Hotel Deals, contact
        the Florida Deals Hub team at{" "}
        <a className="font-black text-ocean" href="mailto:hello@hoteldealsflorida.org">
          hello@hoteldealsflorida.org
        </a>
        .
      </p>
    </main>
  );
}
