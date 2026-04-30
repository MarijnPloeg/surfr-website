# Surfr Website — Inputs Still Needed

> **Purpose:** Single list of every real asset, decision, or copy line that's still pending. The website renders honestly without these (placeholder boxes labeled clearly, empty states where data is missing) — but each item below makes the site sharper when it lands.
>
> **Owner:** Marijn. **Last updated:** 2026-04-28.

---

## Tier 1 — needed for credibility (high impact)

These are visible on every visit and the placeholders draw attention to themselves on purpose.

### 1.1 App screenshots (top priority)

The website uses 14 screenshot placeholders. Each is labeled with the screen needed. PNGs at native iPhone-15-class resolution (1290 × 2796), exported from iOS dark-tinted theme to match the rest of the site, no device chrome (we apply our own frame).

| Placement | What to capture | Aspect |
|---|---|---|
| Home hero | 4.0 home screen — session summary card with hero jump number | 9:19.5 |
| Features — Session Tracking | Session detail screen with jump arc + metric list | 9:19.5 |
| Features — Wind & Forecasts | Spot forecast tile with hourly chart + alert toggle | 9:19.5 |
| Features — Discover Spots | Fullscreen Discover map with bottom-sheet open | 9:19.5 |
| Features — Live on the Water | Live Map with rider tracks animating | 9:19.5 |
| Features — Social Feed | Feed view with session card + comment row | 9:19.5 |
| Features — Leaderboard | Leaderboard tab with podium top-3 + personal rank | 9:19.5 |
| Wind Games callout | Wind Games competition screen — live event leaderboard | 9:19.5 |
| Pro Teaser | PRO Insights screen — per-jump score with POP chart | 9:19.5 |
| PRO page — Jump Insights | Same as above but with pro-comparison drawer | 9:19.5 |
| Devices section | iPhone recording start screen + Apple Watch face | mixed |
| PRO — Watch tracking | Apple Watch face — live session metrics | 1:1.2 |
| Download CTA | Home tab with recent session card | 9:19.5 |
| Roadmap | (none yet — could add a "now" preview screen) | 9:19.5 |

Drop files in `public/screenshots/` — see [`public/screenshots/README.md`](../public/screenshots/README.md) for filenames and capture rules. Each consumer already has the expected path on a commented-out line; uncomment it when the file lands.

### 1.2 Real photos for hero / community

The Community section has 6 placeholders. Each labeled with the *vibe* (gray sky IJmuiden, Tarifa sunset, Lo Stagnone foiler, Cape Town big-air ramp, Brouwersdam beginner, dawn downwinder).

Mix of conditions matters more than mix of locations — the inclusivity pillar is strongest when riders see the gray, wet, weather-honest shots, not just the perfect-blue Caribbean.

Aspect ratio 1:1 (square). Drop in `public/community/`.

### 1.3 Team headshots

Referenced in `lib/constants.ts` `TEAM_MEMBERS` — files needed in `public/team/`:

- `herbert.jpg` — Founder & CEO
- `alireza.jpg` — CTO
- `marijn.jpg` — Product Owner
- `carlos.jpg` — Developer
- `loes.jpg` — Operational Manager
- `bruna.jpg` — Marketing Director

Portrait crops, **roughly 3:4 (600×800 minimum)** to fill the right half of the team card without cropping faces awkwardly. Cards render with a dark background + initial letter as a fallback until photos drop in. Authenticity > studio polish.

### 1.4 Bonus: a 2019 prototype / origin photo

For the Team page — a single grainy photo of the first prototype, an early ride with the early app, or Marijn on the North Sea. Heritage moments are some of the strongest brand-building material per the Hoffman framework. If it exists, surface it.

---

## Tier 2 — content waiting on a decision

### 2.1 Third testimonial slot

Currently rendering only two real testimonials (Mike MacDonald, Giel Vlugt). The synthetic third ("99% of active users") was cut. Slot is open.

**Need:** one more real quote with name, role, and a real spot. Prefer a non-pro rider — someone who shows the inclusivity pillar more than the world-class one.

### 2.2 Partner logos

`PARTNERS` in `lib/constants.ts` is empty. Was previously a fabricated mix (Red Bull / GKA / BAKL / Full Power) that never made sense as a uniform list.

**Decisions to make:**
- Are there real, current partners with permission to display logos?
- Wind Games is now the official competition reference — should it appear here too?
- If no partners, we leave the section out. (It's currently not rendered anywhere — it stays out by default.)

### 2.3 Real prices verified across regions

Prices are in `PRICING` in `lib/constants.ts`:
- Plus €3.99/mo, €24.99/yr
- PRO €6.99/mo, €54.99/yr

The website notes that local-currency variation is handled by the app stores. Confirm these are the values actually live in the App Store and Play Store today.

### 2.4 The "8 languages" claim

`SITE_META.languages = "8"`. The previous version mentioned 3 newly-added languages in 4.0, suggesting the actual total may be different. Verify and adjust if needed.

### 2.5 Marketing numbers reverification

Stats currently shown:
- 100K+ active users
- 1M+ sessions tracked
- 120+ countries
- 4.9 App Store rating (with 25,000 ratings count)
- 5,000+ spots

All marked verified 2026-04-28 (today). Re-verify before any external launch and update the inline comments in `lib/constants.ts`.

---

## Tier 3 — engineering work (handed to backend / other teams)

### 3.1 Leaderboard backend

See [`leaderboard-backend-spec.md`](./leaderboard-backend-spec.md). Until this ships, the Leaderboard page renders a clean "coming via API" empty state.

### 3.2 Roadmap voting / email capture

The Roadmap page currently has a `mailto:` button as the input mechanism. When email-capture infra is built (newsletter, feature voting), wire it in here:

`/app/roadmap/page.tsx` — replace the email-CTA button with the form component.

### 3.3 OG image and favicon

Still missing per project memory. Need:
- `public/favicon.ico` (multi-size)
- `public/icon.png` (512×512)
- `public/apple-touch-icon.png` (180×180)
- `public/og-image.png` (1200×630, for Twitter / OG cards)

The OG image should follow the design system: white bg, large dark headline with `<em>`-style cyan accent, optional small phone mockup, surfr. wordmark.

---

## Tier 4 — small things, batch when convenient

- Replace `lib/spots-data.ts` seed (24 spots) with the most-popular real spots from the backend, when a list is exported. Numbers (`sessionCount`, `rating`, `avgWind`) should reflect real values, not placeholders.
- Decide whether to ship a separate `/press` page with a downloadable press kit, or keep press as a contact-page card.
- Double-check the Mike MacDonald attribution ("GHWM (Guinness World Record holder, kitesurfing)") is accurate as he'd want it stated.
- Add `prefers-reduced-motion` test pass — already respected globally via `globals.css` but worth a quick visual check.
- Add Plausible / GA4 (or chosen analytics) once decided. Hook for the script lives in `app/layout.tsx`.

---

## Tier 5 — open product/strategy questions surfaced during the redesign

These don't block shipping but the answers will shape next iterations.

1. **Light theme only — agreed for now.** If we want a dark-mode toggle later, the design system already supports it; current site is light-only by intent.
2. **Outfit kept for marketing.** Design system says system stack; marketing override approved. Keep this in `docs/design-system.md` §13 as a consciously-accepted drift.
3. **Roadmap "Later" column is intentionally thin.** Filling it depends on how voting feedback comes in. Keep light until real signal arrives.
4. **Press kit / brand kit.** Should we make a downloadable ZIP (logos, screenshots, founder bios)? Cheap to assemble; likely valuable for outreach.

---

## How to use this list

When an item is delivered:
1. Replace the placeholder file or copy
2. Delete the corresponding entry from this doc
3. (Optional) update `lib/constants.ts` "verified" comment if it was a number

Empty list = website is fully sourced. Until then, every placeholder visible on the site corresponds to one of the items above.
