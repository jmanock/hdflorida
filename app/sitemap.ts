import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/data/seoPages";

const baseUrl = "https://hoteldealsflorida.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...seoLandingPages.map((page) => `/${page.slug}`)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("hotel-deals") ? 0.85 : 0.75
  }));
}
