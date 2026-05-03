import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { NETWORK_NAME, SITE_NAME, SITE_URL } from "@/lib/siteConstants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteldealsflorida.org"),
  title: "Florida Hotel Deals | Resorts, Beach Hotels & Weekend Stays",
  description:
    "Find Florida hotel deals including beach resorts, family hotels, luxury stays, weekend getaways, and staycation rates across Orlando, Miami, Tampa, Fort Lauderdale, the Florida Keys, and more.",
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
    title: "Florida Hotel Deals | Resorts, Beach Hotels & Weekend Stays",
    description:
      "Find Florida hotel deals including beach resorts, family hotels, luxury stays, weekend getaways, and staycation rates across Orlando, Miami, Tampa, Fort Lauderdale, the Florida Keys, and more.",
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
    title: "Florida Hotel Deals | Resorts, Beach Hotels & Weekend Stays",
    description:
      "Find Florida beach resort, family hotel, luxury stay, weekend getaway, and staycation rates."
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
      <body className={`${inter.variable} font-sans antialiased`}>
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
