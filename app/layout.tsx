import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteldealsflorida.org"),
  title: "Florida Hotel Deals | Beach Resorts, Family Stays & Weekend Getaways",
  description:
    "Find Florida hotel deals including beach resorts, family stays, weekend getaways, luxury hotels, and staycation discounts across Orlando, Miami, Tampa, Fort Lauderdale, and the Florida Keys.",
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
    title: "Florida Hotel Deals | Beach Resorts, Family Stays & Weekend Getaways",
    description:
      "Curated Florida hotel deals for beach resorts, family stays, weekend escapes, luxury hotels, and staycations.",
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
    title: "Florida Hotel Deals | Beach Resorts, Family Stays & Weekend Getaways",
    description:
      "Find Florida beach resort, family hotel, weekend getaway, and staycation deals."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
