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

Use `getHotelBookingUrl(destination, hotelName)` when adding or replacing hotel links. Later affiliate integrations can swap the mapped URLs for:

- Booking.com partner links
- Expedia Rapid Lodging API links
- Hotels.com / Expedia links
- Tripadvisor links

The deal data can keep the same `booking_url` field while the helper changes the underlying URL format.

## Analytics

GA4 is loaded globally in `app/layout.tsx`. Outbound hotel clicks are tracked as `deal_click` with:

- `site`
- `source`
- `destination`
- `hotel_name`
- `category`
- `outbound_url`

## Verification

```bash
npm run lint
npm run build
```
