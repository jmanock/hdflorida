import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import { ANALYTICS_CONFIG } from "@/lib/analyticsConfig";
import { NETWORK_NAME, SITE_NAME, SITE_URL } from "@/lib/siteConstants";
import { NetworkNavigation } from "@/components/NetworkNavigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteldealsflorida.org"),
  title: "Florida Hotel Deals: Beach Resorts, Family Stays & Weekend Ideas",
  description:
    "Compare Florida hotel deals, beach resorts, family-friendly stays, waterfront hotels, cruise-port lodging, and weekend getaway ideas.",
  keywords: [
    "Florida hotel deals",
    "Florida resort deals",
    "Orlando hotel deals",
    "Miami Beach hotel deals",
    "Florida staycation deals",
    "Florida resident hotel discounts"
  ],
  alternates: {
    canonical: "https://hoteldealsflorida.org"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Florida Hotel Deals | Resorts, Beach Hotels & Vacation Stays",
    description:
      "Discover Florida hotel deals, beach resorts, family-friendly stays, waterfront hotels, weekend getaways, and Florida vacation planning guides.",
    url: "https://hoteldealsflorida.org",
    siteName: "Florida Hotel Deals",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Florida beach with clear blue water"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Hotel Deals | Resorts, Beach Hotels & Vacation Stays",
    description:
      "Discover Florida hotel deals, beach resorts, family-friendly stays, waterfront hotels, weekend getaways, and Florida vacation planning guides.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        alt: "Florida beach with clear blue water"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: NETWORK_NAME,
    url: "https://floridadealshub.com",
    sameAs: [
      "https://hoteldealsflorida.org",
      "https://flightdealsflorida.org",
      "https://cruisedealsflorida.org",
      "https://localdealsflorida.org"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Florida hotel deal searches for resorts, beach hotels, family stays, weekend getaways, and staycation rates.",
    publisher: {
      "@type": "Organization",
      name: NETWORK_NAME
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          id="fdn-ga-library"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.measurementId}`}
        />
      </head>
      <body className={`${inter.variable} fdn-site font-sans antialiased`}>
        <NetworkNavigation />
        {[organizationSchema, websiteSchema].map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
        {children}
        <AnalyticsBootstrap />
      </body>
    </html>
  );
}
