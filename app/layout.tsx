import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Florida Hotel Deals | Daily Florida Hotel, Resort & Staycation Savings",
  description:
    "Find daily Florida hotel deals across Orlando, Miami, Fort Lauderdale, Tampa Bay, Jacksonville, the Keys, and more.",
  keywords: [
    "Florida hotel deals",
    "Florida resort deals",
    "Orlando hotel deals",
    "Miami Beach hotel deals",
    "Florida staycation deals",
    "Florida resident hotel discounts"
  ],
  openGraph: {
    title: "Florida Hotel Deals",
    description:
      "Daily savings on beach resorts, family hotels, weekend getaways, and Florida staycations.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
