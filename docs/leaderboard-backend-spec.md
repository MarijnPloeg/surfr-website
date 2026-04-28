# Leaderboard — Backend Functional Requirements

**Status:** Spec, awaiting implementation.
**Owner:** Backend.
**Consumer:** `surfr-website` (`/leaderboard` page) and the in-app Leaderboard tab.
**Why now:** the website previously shipped fabricated rankings attributed to real pro athletes. That has been removed. The website renders an honest "coming via API" empty state until this endpoint exists.

---

## 1. Goals

The website Leaderboard page is structured as three motivational layers (see `/app/leaderboard/page.tsx`). The backend must support all three:

1. **World records** — top-N globally, by metric, with verified peaks.
2. **Your tribe** — filterable rankings (by spot, region, gender, age bracket, skill level, kite size) so every rider sees a board where they place top-10.
3. **Personal progression** — the requesting user's own height curve over time. (App-only — not exposed to the public website.)

The website only consumes Layers 1 and 2. Layer 3 stays in-app.

---

## 2. Endpoint surface (proposed)

### 2.1 `GET /api/v1/leaderboard`

Public, cacheable. Returns the world-records table for a given metric.

**Query params:**

| Name | Type | Required | Description |
|---|---|---|---|
| `metric` | enum | yes | `height` \| `distance` \| `airtime` \| `speed` |
| `period` | enum | no | `all` (default), `season`, `30d`, `7d` |
| `limit` | int | no | default 25, max 100 |
| `cursor` | string | no | for pagination |

**Response shape:**

```ts
type LeaderboardResponse = {
  metric: "height" | "distance" | "airtime" | "speed";
  period: "all" | "season" | "30d" | "7d";
  unit: "m" | "s" | "kn";
  generatedAt: string;          // ISO timestamp
  entries: LeaderboardEntry[];
  nextCursor?: string;
}

type LeaderboardEntry = {
  rank: number;
  userId: string;               // opaque, app-internal
  displayName: string;          // see §3 for naming rules
  countryCode: string;          // ISO 3166-1 alpha-2
  country: string;              // localized country name
  value: number;
  unit: string;                 // matches response.unit
  spotName: string;
  spotSlug?: string;
  recordedAt: string;           // ISO date when the value was achieved
  verifiedAt?: string;          // ISO date if reviewed by mod
  isVerifiedRider: boolean;     // true if user opted into showing real name
}
```

### 2.2 `GET /api/v1/leaderboard/tribe`

Public-with-filters version of §2.1. Takes the same params plus the filters below. Each filter narrows the dataset before ranking.

**Additional query params:**

| Name | Type | Description |
|---|---|---|
| `spot` | string (slug) | Limit to a single spot. |
| `region` | enum | `europe` \| `africa` \| `asia` \| `north-america` \| `south-america` \| `oceania` |
| `country` | string (alpha-2) | Limit to a country. |
| `gender` | enum | `male` \| `female` \| `nonbinary` \| `unspecified` (multi-select via repeated param) |
| `ageBracket` | enum | `u18` \| `18-25` \| `26-35` \| `36-45` \| `46-55` \| `55+` |
| `skillLevel` | enum | `beginner` \| `intermediate` \| `advanced` \| `expert` |
| `kiteSize` | int | meters; matches recorded session metadata |

Response shape identical to §2.1 plus an `appliedFilters` echo so the client can render the active filter chips.

### 2.3 `GET /api/v1/me/progression` (app-only)

Returns the requesting user's own progression curve. Auth-required. Out of scope for the public website but listed here for completeness so the contract is consistent across surfaces.

---

## 3. Naming, privacy, anti-fraud

The website mistakenly listed real pro athletes with invented values. Three rules to prevent recurrence:

1. **Default to anonymized display names.** A user appears on a public leaderboard as `"Rider · NL"` (country code) or `"R. v. d. P."` (initials) **unless** they explicitly opt into showing their real name in their leaderboard preference.
2. **Never echo names from session metadata.** `displayName` must come from the user's leaderboard-preference field (already in the schema per `backend-change-request-subscription-tier-on-user.md` lineage), not from session-recorded metadata.
3. **`verifiedAt` is required for the top 10 of any metric.** Any value high enough to land in the top 10 must pass moderation review. Until reviewed, the entry sits at rank 11+ or in a separate "pending" bucket the website can choose not to render.

Suggested fraud guard: reject any session where the device-reported altitude derivative exceeds physically-possible bounds (e.g. height > 40m + 6σ over the speed-corrected expected envelope). Existing jump-detection sanity checks may already cover this — confirm with @Ali.

---

## 4. Caching

- Layer 1 (world records, no filters): cache aggressively — TTL 5 min, CDN-edge cacheable.
- Layer 2 (filtered tribe boards): cache by filter combination — TTL 60 s.
- `Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=600`.
- ETag based on `generatedAt`.

The website calls these endpoints from a server component; failure modes degrade to the existing "coming via API" empty state.

---

## 5. Failure modes the website handles

| Backend state | Website behavior |
|---|---|
| Endpoint 404 / not deployed | Renders the existing dashed-border "coming via API" placeholder. |
| Endpoint 5xx | Same placeholder + a small "we're rebuilding the leaderboard — back shortly" subline. |
| `entries: []` | Renders empty state per metric with "no entries yet for this period" copy. |
| Network timeout > 4s | Same as 5xx. |

The website **must not** synthesize entries to fill empty results.

---

## 6. Open questions

- Should `GET /api/v1/leaderboard/tribe` allow combining `spot=X&region=Y`, or are filters mutually exclusive? *Suggested: allow combining; let the response shrink to zero entries naturally.*
- Where does the user's gender / age-bracket / skill-level live today? Are all three already on the user record, or do some need to be backfilled?
- Do we surface unverified peaks at all on the public website, or hold them entirely until reviewed?

Answer these and I'll update this doc + the website's empty-state copy.

---

## 7. Definition of done

- [ ] `GET /api/v1/leaderboard` returns 200 with the schema in §2.1
- [ ] `GET /api/v1/leaderboard/tribe` honors all filters in §2.2 with combinable semantics
- [ ] No `displayName` ever leaks a real name without `isVerifiedRider === true`
- [ ] Top-10 rows always have `verifiedAt`
- [ ] Cache headers per §4
- [ ] Website integration tested end-to-end against staging

*Last updated: 2026-04-28 by website owner. Update this file when the contract or behavior changes.*
