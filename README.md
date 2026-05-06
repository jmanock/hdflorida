# Florida Hotel Deals

Production Next.js site for Florida hotel, resort, staycation, and destination hotel searches.

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

```env
GOOGLE_PLACES_API_KEY=
EXPEDIA_RAPID_API_KEY=
EXPEDIA_RAPID_SECRET=
BOOKING_PARTNER_ID=
BOOKING_AFFILIATE_ID=
```

`GOOGLE_PLACES_API_KEY` powers the optional server-side Places enhancement route. The site renders with static fallback hotel data when the key is missing.

## Google Places Setup

The route `GET /api/hotels/place-details` accepts:

- `placeId`
- `destination`
- `dealId`

It uses the Google Places API server-side only. API keys are never exposed to browser code. Responses are normalized to safe hotel trust fields such as name, address, city, rating, review count, location, official website, place ID, and photo reference when available.

## Caching Behavior

The Places route uses layered caching:

- Static fallback data is always available from `data/hotelPlaceData.ts`
- Successful API responses are cached for 24 hours in `.data/places-cache`
- HTTP responses include cache headers with stale-while-revalidate behavior
- If Google Places is unavailable, the route returns polished fallback data instead of raw errors

## Fallback Behavior

Hotel cards and SEO pages do not depend on API responses to render. They use curated Florida stay data first, then show optional trust fields when available:

- location or neighborhood
- address snippet
- rating and review count only when available
- rates-may-change microcopy

No empty ratings, broken images, or API errors are shown in the UI.

## Expedia Affiliate Link Readiness

Expedia affiliate links are centralized in `lib/affiliateLinks.ts`, with compatibility helpers in `lib/hotelLinks.ts`.

Use `getExpediaHotelLink(destination)` for page-level CTAs and `getHotelAffiliateUrl(destination, hotelName)` for hotel deal data. The deal data can keep the same `booking_url` field, but every active hotel CTA now resolves through the centralized Expedia destination map.

Destination links live in `expediaHotelLinks`:

```ts
export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";

export const expediaHotelLinks = {
  // Paste destination-specific Expedia/Awin hotel deep links here when available.
  orlando: EXPEDIA_AFFILIATE_BASE,
  miamiBeach: EXPEDIA_AFFILIATE_BASE,
  default: EXPEDIA_AFFILIATE_BASE
};

export function getExpediaHotelLink(destination: string) {
  return expediaHotelLinks[destination] || expediaHotelLinks.default;
}
```

When Expedia affiliate deep links are ready, replace the destination values inside `expediaHotelLinks`. Card components, SEO pages, and analytics should not need to change.

Future integrations can also swap or layer in:

- Expedia Rapid Lodging API links
- Booking.com partner links
- Hotels.com / Expedia links
- Tripadvisor links
- direct hotel or resort partner links

When adding a new destination page, add the page config in `data/seoPages.ts`, add or reuse relevant deal IDs from `data/hotelDeals.ts`, and add any new hotel destination key in `lib/affiliateLinks.ts`. If the page needs a page-level CTA, add its slug mapping in `app/[slug]/page.tsx`.

## Analytics

GA4 is loaded globally in `app/layout.tsx`. Outbound Expedia hotel clicks are tracked as `deal_click` with:

- `site`
- `source`
- `type`
- `provider`
- `destination`
- `hotel_name`
- `category`
- `price_text`
- `cta_text`
- `outbound_url`
- `page_path`

Expedia hotel clicks also fire `hotel_booking_click` with the same metadata. Navigation links use `navigation_click`, filters use `filter_click`, and newsletter form interactions use `newsletter_signup_started` and `newsletter_signup_success`.

## Verification

```bash
npm run lint
npm run build
```
