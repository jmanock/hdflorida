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

## Affiliate Link Readiness

Booking/search links are centralized in `lib/hotelLinks.ts`.

Use `getHotelBookingUrl(destination, hotelName)` when adding or replacing hotel links. All Booking.com URLs pass through `getBookingLink(url)` before they reach deal cards, SEO pages, or homepage featured cards.

While Awin/Booking approval is pending, `getBookingLink(url)` returns the normal Booking.com search URL:

```ts
export function getBookingLink(url: string) {
  return url;
}
```

After Awin approval, replace that function with the Awin deep-link/decorator logic. Keep deal data using the same `booking_url` field so card components and analytics do not need to change.

Future integrations can also swap or layer in:

- Booking.com partner links
- Expedia Rapid Lodging API links
- Hotels.com / Expedia links
- Tripadvisor links
- direct hotel or resort partner links

When adding a new destination page, add the page config in `data/seoPages.ts`, add or reuse relevant deal IDs from `data/hotelDeals.ts`, and add any new Booking destination key in `lib/hotelLinks.ts`.

## Analytics

GA4 is loaded globally in `app/layout.tsx`. Outbound hotel clicks are tracked as `deal_click` with:

- `site`
- `source`
- `provider`
- `destination`
- `hotel_name`
- `category`
- `price_text`
- `outbound_url`
- `page_path`

Booking clicks also fire `hotel_booking_click` with the same metadata. Navigation links use `navigation_click`, filters use `filter_click`, and newsletter form interactions use `newsletter_signup_started` and `newsletter_signup_success`.

## Verification

```bash
npm run lint
npm run build
```
