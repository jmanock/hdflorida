import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/data/seoPages";
import { tripRealityGuides } from "@/data/tripRealityGuides";

const baseUrl = "https://hoteldealsflorida.org";
const verifiedModified = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...tripRealityGuides.map((guide) => `/trip-reality/${guide.slug}`),
    ...seoLandingPages.map((page) => `/${page.slug}`)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: verifiedModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("hotel-deals") ? 0.85 : 0.75
  }));
}
