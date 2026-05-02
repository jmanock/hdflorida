import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getFallbackPlaceData } from "@/data/hotelPlaceData";
import type { HotelPlaceTrustData } from "@/lib/types";

export const runtime = "nodejs";

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const CACHE_DIR = path.join(process.cwd(), ".data", "places-cache");

type GooglePlace = {
  id?: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
  location?: { latitude?: number; longitude?: number };
  photos?: Array<{ name?: string }>;
  addressComponents?: Array<{
    longText?: string;
    types?: string[];
  }>;
};

function cacheKey(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "default";
}

async function readCache(key: string) {
  try {
    const raw = await readFile(path.join(CACHE_DIR, `${key}.json`), "utf8");
    const cached = JSON.parse(raw) as { createdAt: number; data: HotelPlaceTrustData };

    if (Date.now() - cached.createdAt < CACHE_TTL_MS) {
      return cached.data;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

async function writeCache(key: string, data: HotelPlaceTrustData) {
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(
    path.join(CACHE_DIR, `${key}.json`),
    JSON.stringify({ createdAt: Date.now(), data }, null, 2),
    "utf8"
  );
}

function normalizePlace(place: GooglePlace): HotelPlaceTrustData {
  const cityComponent = place.addressComponents?.find((component) =>
    component.types?.some((type) => ["locality", "postal_town"].includes(type))
  );
  const neighborhoodComponent = place.addressComponents?.find((component) =>
    component.types?.includes("neighborhood")
  );

  return {
    place_id: place.id,
    name: place.displayName?.text,
    address: place.formattedAddress,
    city: cityComponent?.longText,
    neighborhood: neighborhoodComponent?.longText,
    rating: place.rating,
    review_count: place.userRatingCount,
    latitude: place.location?.latitude,
    longitude: place.location?.longitude,
    official_website: place.websiteUri,
    photo_reference: place.photos?.[0]?.name,
    source: "google_places",
    updated_at: new Date().toISOString()
  };
}

async function fetchPlaceById(placeId: string, apiKey: string) {
  const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "id,displayName,formattedAddress,rating,userRatingCount,websiteUri,location,photos,addressComponents"
    },
    next: {
      revalidate: 86400
    }
  });

  if (!response.ok) {
    throw new Error(`Google Place Details returned ${response.status}`);
  }

  return normalizePlace((await response.json()) as GooglePlace);
}

async function searchPlace(destination: string, apiKey: string) {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.websiteUri,places.location,places.photos,places.addressComponents"
    },
    body: JSON.stringify({
      textQuery: `${destination} hotels Florida`,
      includedType: "lodging",
      maxResultCount: 1
    }),
    next: {
      revalidate: 86400
    }
  });

  if (!response.ok) {
    throw new Error(`Google Places Text Search returned ${response.status}`);
  }

  const data = (await response.json()) as { places?: GooglePlace[] };
  const place = data.places?.[0];

  if (!place) {
    throw new Error("No Google Places result found");
  }

  return normalizePlace(place);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId")?.trim();
  const destination = searchParams.get("destination")?.trim();
  const dealId = searchParams.get("dealId")?.trim() ?? "";
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const lookup = placeId || destination || dealId || "Florida hotel";
  const key = cacheKey(lookup);
  const cached = await readCache(key);

  if (cached) {
    return NextResponse.json(
      { ok: true, data: cached, cache: "hit" },
      {
        headers: {
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800"
        }
      }
    );
  }

  if (!apiKey) {
    const fallback = getFallbackPlaceData(dealId, destination ?? "");

    return NextResponse.json(
      {
        ok: true,
        data: fallback,
        cache: "fallback",
        message: "GOOGLE_PLACES_API_KEY is not configured; returned static fallback hotel data."
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
        }
      }
    );
  }

  try {
    const data = placeId
      ? await fetchPlaceById(placeId, apiKey)
      : await searchPlace(destination ?? lookup, apiKey);

    await writeCache(key, data);

    return NextResponse.json(
      { ok: true, data, cache: "refresh" },
      {
        headers: {
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800"
        }
      }
    );
  } catch (error) {
    const fallback = getFallbackPlaceData(dealId, destination ?? "");

    return NextResponse.json(
      {
        ok: false,
        data: fallback,
        cache: "fallback",
        error: error instanceof Error ? error.message : "Unable to load Google Places data"
      },
      {
        status: fallback ? 200 : 502,
        headers: {
          "Cache-Control": "s-maxage=1800, stale-while-revalidate=86400"
        }
      }
    );
  }
}
