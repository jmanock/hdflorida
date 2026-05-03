import Link from "next/link";
import { FreshnessBadge } from "@/components/FreshnessBadge";

export const metadata = {
  title: "Privacy Policy | Florida Hotel Deals",
  description: "Privacy information for Florida Hotel Deals newsletter and website visitors."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm font-black text-ocean">
        Florida Hotel Deals
      </Link>
      <div className="mt-4">
        <FreshnessBadge />
      </div>
      <h1 className="mt-4 text-4xl font-black text-ink">Privacy Policy</h1>
      <p className="mt-5 text-lg font-medium leading-8 text-slateText">
        Florida Hotel Deals collects newsletter email addresses only when visitors submit the signup
        form. Email addresses are used to send Florida hotel deal alerts and related Florida Deals
        Hub updates. We do not sell personal information.
      </p>
    </main>
  );
}
