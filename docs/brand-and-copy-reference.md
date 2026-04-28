# Surfr Website — Brand, Story & Copy Reference

> **Purpose:** Durable reference for any future design, copy, or page work on the Surfr website. Anyone (human or Claude agent) starting a session should read this first. This is the source of truth for *how* the site speaks, what it stands for, and what makes copy on/off-brand.
>
> **Source inspirations:** Greg Hoffman, *Emotion by Design* (Nike's brand storytelling framework); founder direction April 2026.

---

## 1. The single narrative line

> **"Every session is worth measuring — and worth sharing with the people who get it."**

This is the line every page, headline, screenshot, and CTA must serve. If a section can't be defended against this line, cut it or rewrite it.

It carries all three brand pillars:
- **measuring** → technical excellence & accuracy
- **every** → inclusivity (first jump and 30m world record both count)
- **people who get it** → community ("harbor the community")

---

## 2. The three brand pillars

| Pillar | What it sounds like | What it kills |
|---|---|---|
| **Harbor the community** | "The kite world checks in here." A place riders return to, not just an app they record with. | Loneliness on the water. Sessions disappearing into a camera roll. |
| **Inclusivity** | "First session or 30-meter session — same map." Everyone has a stat that matters to *them*. | The intimidation of pro-only highlight reels. |
| **Technical excellence & accuracy** | "Measured, not estimated." Numbers a rider would defend in court. Engineering as care. | Vague "fitness app" vibes. Untrustworthy data. |

The pillars are in productive tension. A leaderboard culture risks excluding the new rider; pure inclusivity dilutes the technical claim. **The story job is to hold all three at once** — the way Nike held "elite performance" and "everyone is an athlete" simultaneously through *Find Your Greatness*.

---

## 3. Hero is the rider, not the app

The app is the tool. The rider is the hero. This is the most consistently violated rule in current copy.

**Off-brand (app-as-hero):**
- "Surfr tracks every jump."
- "The app you need on the water."
- "Built for kitesurfers."

**On-brand (rider-as-hero):**
- "Know it happened."
- "Find your tribe by the numbers."
- "Don't miss the day."

When in doubt, write the line as something a rider would actually say to a friend at the beach. If a brand-team copywriter would say it, it's probably wrong.

---

## 4. Voice & tone

**Tone in one phrase:** *Quiet confidence with engineering credibility.*

- Short sentences. Then a longer one when it earns its place.
- Concrete > abstract. Named riders, named spots, named conditions, real numbers.
- Technical when the moment calls for it. Never technical to show off.
- Rider slang sparingly. Over-using "stoke", "send it", "shred" is its own kind of slop.
- No exclamation marks except inside a quote.
- Em dashes welcome. Three-word triplets discouraged ("Track. Compete. Connect.") unless one of the three is genuinely unexpected.

---

## 5. Forbidden list (current AI-slop patterns to delete on sight)

These phrases are banned across the site. If you see them in existing copy, replace them.

- ❌ Highlight stripe / marker-stroke / underline gradient behind text. Reads as AI slop. Italic + color is enough; never decorate text with a colored bar behind it.
- ❌ **Em-dash in copy.** Use a period and a new sentence, or a comma. The em-dash is one of the strongest AI-slop tells. This rule applies to all user-facing strings (page copy, headings, descriptions, CTAs, alt text, aria-labels, meta descriptions). Allowed only in code comments and internal JSDoc.
- ❌ "Built by [X], for [X]" — cliché
- ❌ "Don't take our word for it" — cliché
- ❌ "Everything you need, nothing you don't" — Apple knockoff
- ❌ "All in one app" / "all-in-one" — filler
- ❌ "Seamlessly" / "effortlessly" / "powerful" / "robust" / "cutting-edge" — empty adjectives
- ❌ "Unlock" as a generic verb — overused
- ❌ "Take it to the next level" — cliché
- ❌ "Whether you're [X] or [Y]" — formulaic
- ❌ Anonymous social proof ("99% of active users", "thousands of riders agree") — synthetic-feeling
- ❌ Three-noun headlines unless the third noun is surprising
- ❌ Generic stock photography of perfect blue Caribbean conditions

---

## 6. Specifics defeat slop

Hoffman's discipline: every great brand moment has texture. The waffle iron behind the Cortez sole. The rivet on the first Air Jordan. Surfr's equivalents — use them.

- The actual jump-detection algorithm name and what it does in one paragraph
- The bilinear interpolation choice for wind ("this is why Surfr's forecast is sharper than the model output you'd get raw")
- ±height accuracy figures (when validated)
- 1Hz GPS sample rate
- Mike MacDonald (GHWM) collaboration on the jump model
- Founded 2019, North Sea origin, first to track jump height from a phone alone
- Real spot names with real session counts

When you're tempted to write "advanced algorithms," stop and write the algorithm's name instead.

---

## 7. The core narrative line, applied per page

| Page | Story job | Single takeaway after leaving |
|---|---|---|
| **Home** | Frame the world. Promise the feeling. | "Surfr is where my session belongs." |
| **Features** | Prove technical excellence with stories, not specs. | "These people are obsessed with getting it right." |
| **Spots** | Make the map feel inhabited. | "Real riders have been here. I want to be next." |
| **Leaderboard** | Progression for everyone — not a pro highlights reel. | "There's a board where I count." |
| **Roadmap** | Trust through transparency. | "They ship in the open. They listen." |
| **Team / Origin** | The why behind the why. | "Built by people who actually ride." |
| **Pro / Pricing** | Value, not feature gates. | "Plus pays for itself in one good day." |

---

## 8. Page direction in detail

### 8.1 Home

**Open with a rider moment, not a feature.** The pro athletes are the ceiling proof; the new rider is the emotional entry. Show the small moment first, then the world record as a quiet juxtaposition.

Hero direction (illustrative, not final):
> **"My first jump was 0.3 meters."**
> *Surfr counted it. Same way it counts the 34.2m world record.*

Section flow recommendation:
1. Hero (rider moment + brand promise)
2. Stats strip (only verified numbers — see §11)
3. "How it works" reframed as a feeling, not a process
4. Feature blocks — feeling-first headlines, technical proof underneath
5. What's New in current version (concrete shipped features only)
6. Pro teaser
7. Real testimonials (named, with role and a real spot)
8. Community section (real photos, not gradients)
9. Download CTA

### 8.2 Features

The Features page must not duplicate the home page's feature section. Today they share the same `CORE_FEATURES` array — that's a redundancy bug.

Direction: each feature is a **story with a lede**, then the technical proof, then the bullets.

Feeling-first headlines (use as a starting point, not gospel):
- Session Tracking → **"Know it happened."**
- Wind & Forecasts → **"Don't miss the day."**
- Discover Spots → **"Find your next session."** (existing — keep)
- Live on the Water → **"Someone's already there."**
- Social Feed → **"The session continues on the beach."**
- Leaderboards → **"Find your tribe by the numbers."**

Each one wants a real screenshot. Gradient placeholders dilute the technical-credibility pillar.

### 8.3 Spots

The map should feel **inhabited**, not catalogued.

- Show real session counts and rider activity, not just metadata
- "Most-ridden this week" / "New spots added" sections
- A rider quote per featured spot when available
- Empty-state copy for filtered-to-zero results (small, human, not a 404)
- Honest framing of scale: if the live app has 5,000+ spots and the website shows 24, the page should say "Browse the most-ridden — open the app for all 5,000+." Don't oversell what's visible.

### 8.4 Leaderboard — the inclusivity test

Current implementation lists fabricated heights for real pro athletes. **This must be fixed before the page is shown publicly.** Replace with real backend top-N or anonymized riders, or label clearly as sample data.

Restructure into three tiers on one page:

1. **World records** — the dream. Real pro names, real values, sourced. Cite the date and conditions.
2. **Your tribe** — leaderboards filtered by skill bracket, age, region, gender, gear type. Everyone is top-10 of *something*. This is where inclusivity lives.
3. **Personal progression** — your own height curve over 30/90 days. Deepest motivator. *"You jumped 23% higher this season than last."*

Section header reframe: "Jump Height" → consider **"How high you flew"** at the section level. The data is the same; the framing makes it feel personal.

### 8.5 Roadmap (new page)

A public roadmap is the cheapest trust device a small team has. Three columns:

- **Now** — currently shipping in the active version
- **Next** — committed for the next release
- **Later** — under consideration; open to community vote

Lightweight email-capture for upvotes also feeds the marketing list. Frame: *"We ship in the open. We listen."*

This is the right place to manage transitions in positioning (e.g. shifting away from competition-specific branding without leaving inconsistency across other pages).

### 8.6 Team / Origin

Today the origin is buried in a privacy footnote ("Surfr B.V.") and one timeline component. Surface it.

Things that belong here:
- Founded 2019, the Netherlands, North Sea origin
- The technical insight that started it (jump tracking from a phone alone — a *first*)
- Founder photo from the early days, a prototype, a first measurement
- The team today (real photos, not initials in gradient circles)
- The Mike MacDonald collaboration and what it produced

Frame: not "About Us." Frame: **"Why we exist."**

### 8.7 Pro / Pricing — the most broken page today

Two critical fixes before any other work:

1. **Show actual prices.** Tier cards today say "Get Plus / Get PRO / Try free for 2 weeks" with no €/$ amount. A page literally labeled "Pricing" must show pricing. Source the live App Store / Play Store SKUs once, surface them clearly, allow currency display.
2. **Frame value, not feature gates.** "Plus pays for itself in one good day" is a stronger frame than "Plus unlocks the features that match your style."

Tier card copy direction:
- **Free** — "Track every session." (Reassures everyone is welcome.)
- **Plus** — "More signal, less noise." (Better forecasts, deeper analytics.)
- **PRO** — "Engineered for progression." (Watch tracking, coaching, AI insights.)

Comparison table is good as a reference but should not be the headline experience.

---

## 9. Visual & art direction

The current site uses a generic SaaS-cyan palette with gradient phone mockups. Direction to develop:

- **A signature visual move** — raw GPS tracks of real sessions used as graphic elements. A line on a dark map = unmistakable, ownable, technical.
- **Real photography, weather-honest** — wet, gray, North Sea, blown spray. Not stock azure-Caribbean. Inclusivity = showing the spots most riders actually ride, not just Cape Town and Tarifa.
- **Numbers as typography** — let height numbers carry visual weight. The number 34.2 set large is more memorable than another phone mockup.
- **Founder/rider portraiture** — small, named, real. No initials-in-circles avatars on production pages.
- **Motion discipline** — Framer Motion fade-ins are fine but currently overused. Animate the things that matter (a number counting up, a track drawing on a map). Static the rest. Respect `prefers-reduced-motion`.

---

## 10. Imagery: what to commission, in priority order

1. Real app screenshots replacing every gradient `PhoneMockup` placeholder
2. 6–10 hero rider photos in varied conditions (gray, sunny, dawn, North Sea, tropical) and varied skill levels
3. 3 founder/team photos (current team, plus one from the early days if it exists)
4. 6–10 spot photos for the spots most likely to feature on the site
5. SVG logos for the partners shown in `SocialProof` (Red Bull, GKA, BAKL, Full Power) — with permission
6. OG image and favicon (still missing)

---

## 11. Numbers: one source of truth

All marketing numbers must live in `lib/constants.ts` (or a dedicated marketing-numbers module) with a "last verified" date in a comment. Currently `4.9` is hardcoded in `components/home/stats.tsx` outside the constants file — that pattern is the bug.

Numbers to verify and tag:
- 100K+ active users
- 1M+ sessions tracked
- 120+ countries
- 4.9 App Store rating
- 5,000+ spots
- 8 languages (current site copy says 8; the timeline mentions 3 new languages — reconcile)

If a number can't be verified, either remove it or qualify it ("approx.", "as of [month] [year]").

---

## 12. Inclusivity guardrails

When writing or reviewing copy, ask:

- Does this make a first-time rider feel welcome, or only address a 25m+ rider?
- Is the example rider a pro by default? If yes, can I swap them for an everyday rider without weakening the point?
- Does the leaderboard framing offer multiple ways to "win"?
- Are the spots shown only the world-famous ones, or do regional/everyday spots feature?
- Does the imagery show varied body types, ages, genders, conditions?

This is not a diversity-checklist exercise. It's the *Find Your Greatness* discipline applied to kitesurfing — the brand wins when more people see themselves in it.

---

## 13. Competition-references decision (open)

The recent commit `b02888a` removed competition references, but they remain in:
- `constants.ts` `FEATURES[5]` (BAKL/GKA mention)
- `SocialProof` partners list
- `team/timeline.tsx` (2023 milestone)
- `contact/page.tsx` (Partnerships → Competitions card)

**Decision needed before next copy sweep:** are competition partnerships part of the public story or not? Two coherent paths:

- **Keep them** — revert the removal language, lean into competition-grade accuracy as a credibility signal
- **Remove them fully** — finish the cleanup, reposition Partnerships as "Schools, brands, and event organizers"

Whichever path is chosen, it must be consistent across all pages and reflected in this document.

---

## 14. Anti-patterns specifically observed in this codebase

These are footguns to avoid in future work, derived from the current state of the site:

- **Reusing the same constants array on two pages** (Home `Features` and `/features` `FeaturesDeepDive` both render `CORE_FEATURES` — kills the differentiation between pages)
- **Synthetic testimonials** ("99% of active users") — replace with one fewer real testimonial rather than padding with a fake third
- **Fabricated data attributed to real people** — never list real pro athletes with invented values
- **Hardcoded marketing numbers outside `constants.ts`** (e.g. `"4.9"` in `stats.tsx`)
- **Generic gradient mockups standing in for screenshots indefinitely** — they were always meant to be temporary
- **Hidden primary pages** (Leaderboard exists in footer only, not in nav)

---

## 15. When in doubt: the test

Before publishing any new copy, headline, or page section, ask:

1. Does it serve the **single narrative line**?
2. Does it pass the **forbidden list**?
3. Is the **rider the hero**, not the app?
4. Is there a **specific, real, textured detail** in here, or only abstractions?
5. Would a **first-time rider** feel welcome reading this?
6. Could a **competitor's brand team** have written this exact sentence? (If yes — rewrite.)

If any answer is "no", don't ship it.

---

*Last updated: 2026-04-28. Owner: Marijn. Update this document when the narrative line, pillars, or forbidden list change.*
