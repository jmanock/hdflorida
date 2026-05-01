import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm font-medium text-slateText">
          © 2026 Florida Hotel Deals. Part of Florida Deals Hub.
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slateText"
        >
          {[
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Sitemap", "/sitemap.xml"],
            ["Sister Sites", "https://floridadealshub.com"]
          ].map(([label, href]) => (
            <Link key={label} href={href} className="hover:text-ocean">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
