# Surfr Website — Design System Reference

> **Purpose:** Durable design-system reference for any future work on the Surfr website. Anyone (human or Claude agent) starting a session should read this *together with* [`brand-and-copy-reference.md`](./brand-and-copy-reference.md). This is the source of truth for *how the site looks* — colors, type, tier rules, spacing, components.
>
> **Source:** Extracted from the canonical Surfr 4.0 design system (in-app `Theme.js` + `src/constants/`), shipped as [`design-tokens-source.css`](./design-tokens-source.css) in this folder. The CSS file is the single source of truth — this Markdown is the explanatory layer.
>
> **Last verified:** 2026-04-28.

---

## 1. North star

The design system has **four non-negotiable rules** that everything else flows from. Before changing any visual decision on the website, check it against these.

1. **The brand color is `#01BCD7` (Surfr cyan).** Not `#1EB7D8` (the website's current value — see drift in §13). Cyan is the most concentrated brand asset Surfr has — it must mean one thing, consistently.
2. **Cyan = PRO.** When users see cyan, they should think "this is the top tier." Never use cyan for Plus. Never use the Plus gray for PRO. Ever.
3. **Roboto is the LOGO font, only.** Used exclusively for the `surfr.` wordmark. Body copy, UI, headings — all native system stack. This is a deliberate technical choice (speed, no font loading, OS-consistent, email-safe).
4. **Dark is the default theme.** The product runs dark first. Light is opt-in via `[data-theme="light"]`. The website should respect this hierarchy — dark hero sections, dark dominant moments, light only when there's a reason.

If you violate any of these four, you're working *against* the design system, not within it.

---

## 2. Color tokens

All values come from [`design-tokens-source.css`](./design-tokens-source.css). Use the tokens, not raw hex.

### 2.1 Brand

| Token | Value | When to use |
|---|---|---|
| `--surfr-cyan` | `#01BCD7` | Primary brand. CTAs, PRO accents, link fills on dark. |
| `--surfr-cyan-dark` | `#0097A7` | Hover, pressed-state on cyan. |
| `--surfr-cyan-ink` | `#0097A7` | Cyan **text** on light backgrounds (passes AA on white). |
| `--surfr-cyan-ink-hover` | `#007684` | Hover state for cyan text on light. |
| `--surfr-cyan-15` | `rgba(1,188,215,0.15)` | Soft fills (live pills, hero badges on dark). |
| `--surfr-cyan-30` | `rgba(1,188,215,0.30)` | Borders on soft cyan fills. |
| `--surfr-cyan-50` | `rgba(1,188,215,0.50)` | Outer ring of pulse animations. |
| `--surfr-cyan-80` | `rgba(1,188,215,0.80)` | Dense cyan tints. |
| `--surfr-blue` | `rgb(79,158,215)` | Secondary blue accent. Use rarely. |
| `--surfr-follow-green` | `rgba(0,229,255,1)` | Follow / live-activity accent. |

**Critical:** when placing cyan **text** on **white**, switch from `--surfr-cyan` to `--surfr-cyan-ink` (`#0097A7`). The brand cyan is too light for AA contrast on white. Cyan **fills** (CTAs, pills, badges) stay `--surfr-cyan` regardless of theme.

### 2.2 Subscription tiers (CRITICAL — read this twice)

The CSS file states this rule in a multi-paragraph comment for a reason. It's the single most-violated rule in the codebase.

| Token | Value | Tier | Ink |
|---|---|---|---|
| `--tier-plus` | `#8E99A4` | **Plus** = neutral gray | `--tier-plus-ink` = `#FFFFFF` |
| `--tier-pro` | `var(--surfr-cyan)` (`#01BCD7`) | **PRO** = brand cyan | `--tier-pro-ink` = `#FFFFFF` |

**Rules — the CSS file calls these out explicitly:**

- ✅ Plus = gray. PRO = cyan.
- ✅ Plus is positioned as "the upgrade." PRO is positioned as "the top tier."
- ❌ **Never** use cyan for Plus.
- ❌ **Never** use gray for PRO.
- ❌ **Never** invent additional tier colors (e.g. orange for "Elite").

Why so strict: cyan = PRO is a learned association in the in-app experience. Diluting it on the website breaks the cross-product mental model.

### 2.3 Surface ladder (dark — default)

A 3-step gray ramp. Don't invent new darks; map to these.

| Token | Value | Use |
|---|---|---|
| `--gray-page` | `#1F2229` | App / page background. Behind everything. |
| `--gray-card` | `#313542` | Elevated surface — cards, rows, sheets. |
| `--gray-raised` | `#4E5157` | Pressed / selected / topmost. |
| `--bg-light-page` | `#1D2D36` | Onboarding / landing-section bg variant. |
| `--bg-card-border` | `rgba(255,255,255,0.10)` | Default card border on dark. |
| `--bg-divider` | `rgba(255,255,255,0.08)` | Section dividers on dark. |

### 2.4 Surface ladder (light — opt-in)

| Token | Value | Use |
|---|---|---|
| `--bg-page` (light) | `#FFFFFF` | Default page on light. |
| `--bg-page-tint` | `#F6F8FA` | Subtly warmer alt page bg. |
| `--bg-light-page` (light) | `#F0F4F7` | Onboarding / landing equivalent. |
| `--bg-card-who` (light) | `#FFFFFF` | Elevated card on tint. |
| `--bg-card-alt` | `#F6F8FA` | Elevated card on white. |
| `--bg-card-border` (light) | `rgba(15,23,31,0.10)` | Default card border on light. |
| `--bg-divider` (light) | `rgba(15,23,31,0.08)` | Section dividers on light. |

### 2.5 Foreground ink (alpha scale)

This is the most important token family on the site. The same `--fg-*` token works on both themes — the value flips automatically (white-alpha on dark, black-alpha on light). Use the token, not the raw rgba.

Dark theme white-alpha → light theme black-alpha:

| Token | Dark value | Light value | Typical use |
|---|---|---|---|
| `--fg-default` | `#FFFFFF` | `#0F1720` | Primary text, headings |
| `--fg-90` | rgba 0.90 | rgba 0.90 | Strong body |
| `--fg-75` | rgba 0.75 | rgba 0.75 | Body, lede |
| `--fg-60` | rgba 0.60 | rgba 0.60 | Tertiary body |
| `--fg-50` | rgba 0.50 | rgba 0.50 | Secondary text, fine print |
| `--fg-35` | rgba 0.35 | rgba 0.35 | Tertiary, dim meta |
| `--fg-25` | rgba 0.25 | rgba 0.25 | Default ghost-button border |
| `--fg-18` | rgba 0.18 | rgba 0.18 | Subtle borders |
| `--fg-15` | rgba 0.15 | rgba 0.15 | Hairline, low-emphasis |
| `--fg-10` | rgba 0.10 | rgba 0.10 | Card borders, default divider |
| `--fg-06` | rgba 0.06 | rgba 0.06 | Section dividers |
| `--fg-05` | rgba 0.05 | rgba 0.05 | Subtle backgrounds, table stripe |

**Rule:** prefer alpha foregrounds over hardcoded grays. They adapt to both themes automatically and stay consistent.

### 2.6 Semantic colors

| Token | Value | Use |
|---|---|---|
| `--error` | `#FF0000` | System error states. |
| `--error-text` | `#DC4949` | Error text (slightly desaturated). |
| `--live-red` | `#FF3B30` | Pulsing "LIVE" dot. |
| `--recording-orange` | `rgb(255,153,0)` | Recording state. |
| `--recording-yellow` | `rgb(255,255,0)` | Recording active alt. |
| `--star-yellow` | `#FFD700` | Star ratings. |
| `--silver` | `#C0C0C0` | Podium 2nd. |
| `--bronze` | `#CD7F32` | Podium 3rd. |

---

## 3. Wind palette

The 10-step palette is **canonical across product and marketing**. Use it for forecast tables, spot cards, wind tiles, live rows, map overlays. Also reuse as an extended accent palette for illustrations, badges, chart series, category chips.

Each stop roughly maps to a knot range. Stronger wind = warmer, hotter color. Same values in dark and light themes.

| Token | Value | Knots | Vibe |
|---|---|---|---|
| `--wind-00` | `#5070C0` | 0 | Calm blue |
| `--wind-05` | `#40B8C8` | 5 | Cyan |
| `--wind-10` | `#50C878` | 10 | Green |
| `--wind-15` | `#90D840` | 15 | Lime |
| `--wind-20` | `#D0D828` | 20 | Yellow-green |
| `--wind-25` | `#E8A830` | 25 | Orange-yellow |
| `--wind-30` | `#E06848` | 30 | Orange-red |
| `--wind-35` | `#E04898` | 35 | Hot pink |
| `--wind-40` | `#D048C0` | 40 | Magenta |
| `--wind-50` | `#8858C8` | 50+ | Purple / storm |

This palette is a brand asset in its own right — using these colors in section headers, illustrations, or Spot pages signals "this is Surfr" even without the wordmark. Don't replace them with generic Material/Tailwind palettes.

---

## 4. Type policy

The most opinionated part of the system. Read it carefully.

### 4.1 The rule

- **Roboto** is the **logo font, only.** Used for the `surfr.` wordmark and nothing else.
- **Body copy, UI, headings, stats, buttons, emails** use the **native system stack** (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`).
- **Roboto Condensed / SemiCondensed** are opt-in for **data-dense contexts** (chart axes, forecast pills, wind chips, eyebrows).

Why: speed (no font loading), OS-consistent (looks native everywhere), email-safe (Moosend strips non-inline styles).

**The website currently uses Outfit globally** (per `app/layout.tsx`). This is a drift from the design system — see §13.

### 4.2 Font tokens

| Token | Stack | Use |
|---|---|---|
| `--font-sans` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` | **Default.** UI, body, headings, buttons. |
| `--font-logo` | `'Roboto', -apple-system, BlinkMacSystemFont, sans-serif` | `surfr.` wordmark only. |
| `--font-condensed` | `'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI Condensed', 'Arial Narrow', sans-serif` | Eyebrows, chart axes, forecast pills, wind chips. |
| `--font-semi` | `'Roboto SemiCondensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Slightly narrowed UI for dense rows. |

### 4.3 Type ramp

| Token | Size | Use |
|---|---|---|
| `--fs-xs` | 12px | Meta, captions, eyebrows |
| `--fs-sm` | 14px | Body small, usernames, table cells |
| `--fs-md` | 16px | Default body, title1 |
| `--fs-xm` | 18px | Lede, hero unit |
| `--fs-lg` | 20px | Screen titles |
| `--fs-xl` | 24px | Section titles in app |
| `--fs-2xl` | 32px | Hero numbers (small) |
| `--fs-3xl` | 44px | Hero stat (session card) |
| `--fs-display` | 56px | Display moments |

### 4.4 Marketing display headings (landing-page only)

The public site uses larger fluid headings than the app. These come from the 4.0 landing page implementation:

| Class | Size | Weight | Letter-spacing | Line-height | Use |
|---|---|---|---|---|---|
| `.h-display` | `clamp(48px, 7vw, 96px)` | 700 | -0.035em | 0.98 | Homepage hero |
| `.h-section` | `clamp(36px, 5vw, 64px)` | 700 | -0.03em | 1.02 | Section openers |
| `.h-feature` | `clamp(28px, 3.2vw, 44px)` | 700 | -0.025em | 1.05 | Feature blocks |
| `.lede` | 18px | 400 | 0 | 1.5 | Subhead under headlines, max-width 60ch |

**Accent inside headings:** wrap the accent word in `<em>` — the design system styles `<em>` inside display headings as **italic + cyan + same weight**:

```html
<h1 class="h-display">Track every <em>jump</em>.</h1>
```

This is a recurring brand move. Don't reinvent it with span classes.

### 4.5 Eyebrows (small label above a heading)

```html
<span class="eyebrow">Features</span>
```

Specs: condensed font, weight 700, uppercase, letter-spacing 0.18em, 12px, color `--surfr-cyan`. Includes a **24px-wide cyan hairline** before the label (via `::before`). Use `.eyebrow.no-bar` to suppress the line.

### 4.6 Weights

| Token | Weight |
|---|---|
| `--fw-light` | 300 |
| `--fw-regular` | 400 |
| `--fw-medium` | 500 ("Bolder" in code) |
| `--fw-semi` | 600 |
| `--fw-bold` | 700 |

---

## 5. Spacing

Strict 8-pt grid with named steps. Use tokens, not raw px.

| Token | Value |
|---|---|
| `--space-half` | 4px |
| `--space-single` | 8px |
| `--space-double` | 16px |
| `--space-triple` | 24px |
| `--space-quadruple` | 32px |
| `--nav-height` | 50px |

For the website, page-level horizontal padding is `24px` (handheld) → `32px` (desktop). Standard content max-width: `1200px`. Narrow max-width: `960px`.

---

## 6. Radii

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Tight chips, table-cell rounding |
| `--radius-md` | 8px | **Default.** Buttons, cards, inputs. |
| `--radius-lg` | 10px | Banners, live pills |
| `--radius-xl` | 16px | Modals, large feature cards |
| `--radius-full` | 9999px | Pills, avatars, round chips |

---

## 7. Shadows & glows

The signature shadow is a **cyan glow**, not a generic drop shadow.

| Token | Value | Use |
|---|---|---|
| `--shadow-cyan-soft` | `0 0 10px rgba(1,188,215,0.5)` | Default state on cyan CTAs / PRO cards |
| `--shadow-cyan-hard` | `0 0 16px rgba(1,188,215,0.8)` | Hover on cyan CTAs |
| `--shadow-card` | `0 4px 14px rgba(0,0,0,0.35)` (dark) / `0 1px 2px rgba(15,23,32,0.04), 0 4px 16px rgba(15,23,32,0.08)` (light) | Generic elevated card |
| `--shadow-sheet` | `0 -6px 24px rgba(0,0,0,0.45)` | Bottom sheets / footers |
| `--text-shadow-glow` | `0 0 10px rgba(255,255,255,0.75)` | Glowing white text (use sparingly) |

**Rule:** cyan glow is a brand asset. Reserve it for cyan CTAs, PRO cards, hero pills. Don't apply it to neutral surfaces — it loses meaning if everything glows.

---

## 8. Borders

| Token | Value | Use |
|---|---|---|
| `--border-hairline` | `1px solid rgba(255,255,255,0.10)` (dark) / black 0.08 (light) | Default card border |
| `--border-subtle` | `1px solid rgba(255,255,255,0.18)` / black 0.14 | Slightly stronger separation |
| `--border-input` | `1px solid rgba(255,255,255,0.5)` / black 0.22 | Form inputs |
| `--border-cyan` | `1px solid rgba(1,188,215,0.3)` / 0.35 | Cyan-tinted card outline (PRO) |

---

## 9. Component patterns (observed in the 4.0 landing page)

These are the canonical implementations. Mirror these when building new sections; they're already part of the visual language.

### 9.1 Logo / wordmark

```html
<span class="nav-logo">surfr<span class="dot">.</span></span>
```

- Font: `--font-logo` (Roboto), weight 900
- Size: 26px in nav
- Letter-spacing: -0.04em
- The trailing `.` is **always cyan** (`--surfr-cyan`)

This is the only place Roboto appears on the site. If you see Roboto anywhere else, that's a bug.

### 9.2 Eyebrow + heading + lede (the canonical opener)

```html
<span class="eyebrow">Features</span>
<h2 class="h-section">Track every <em>jump</em>.</h2>
<p class="lede">Surfr was the first app to measure jump heights from a phone alone…</p>
```

This pattern repeats across every page-level section. Keep it.

### 9.3 Primary CTA (cyan with glow)

```html
<a class="btn btn-primary">Download Surfr</a>
```

- Background: `--surfr-cyan`
- Text: **black** (`#000`) — this is intentional. Cyan + black is more brand-distinctive than cyan + white.
- Shadow: `--shadow-cyan-soft` default → `--shadow-cyan-hard` on hover
- Hover: `translateY(-1px)` lift
- Radius: `--radius-md` (8px)
- Padding: `16px 28px`
- Font-weight: 600, font-size 15px

### 9.4 Ghost CTA (secondary)

- Background: transparent
- Border: `1px solid var(--fg-25)`
- Hover: border becomes `--fg-default`
- Same padding/radius as primary

### 9.5 Hero pill (live status / new)

```html
<span class="hero-pill"><span class="live-dot"></span>Surfr 4.0 is here</span>
```

- Background: `--surfr-cyan-15`
- Border: `--surfr-cyan-30`
- Text: `--surfr-cyan`
- Radius: `--radius-full`
- Includes pulsing 7px cyan dot (1.6s ease-out infinite)

### 9.6 Tier card

PRO tier card uses the brand cyan border + glow. Plus tier card uses the gray with a soft gray shadow.

```html
<div class="tier-card is-pro">
  <span class="badge">Most popular</span>     <!-- top-left, cyan, BLACK ink -->
  <h3 class="name">PRO</h3>                    <!-- font-logo, 30px, weight 900 -->
  <p class="tag-line">Engineered for progression</p>
  <div class="price-row">
    <span class="price">€7.99</span>
    <span class="price-unit">/month</span>
  </div>
  <p class="alt-price">€59.99/year — save 37%</p>
  <button class="tier-cta">Get PRO</button>
</div>
```

Critical: `.tier-card .name` uses `--font-logo` (Roboto, 900). This is one of two places on the site where Roboto is allowed (the other is the nav wordmark). Tier names are treated as brand moments.

### 9.7 Section divider with eyebrow

The leading 24px hairline on `.eyebrow::before` *is* the section's visual separator on most pages. You usually don't need a literal `<hr>` between sections — the eyebrow does it.

---

## 10. Selection color

```css
::selection { background: var(--surfr-cyan); color: #000; }
```

Small but recognizable detail. When users drag-select text, they get a Surfr-branded moment. Don't override.

---

## 11. Motion

The design system doesn't enforce motion choices, but the landing page uses these patterns consistently. Adopt them rather than inventing new ones:

- **Hover lift** on CTAs and links: `transform: translateY(-1px)`, transition `0.15s ease`.
- **Pulse animation** on live indicators: 1.6s ease-out infinite, ring expanding from 0 → 10px.
- **Section reveal** on scroll: opacity 0 → 1 with 20px y-offset, 0.4–0.6s, eased-out, `viewport={{ once: true }}`.
- **Backdrop blur** on sticky nav: `backdrop-filter: blur(16px) saturate(140%)` over a 72%-opacity surface.
- Always respect `prefers-reduced-motion: reduce` — strip transforms and animations to opacity-only.

---

## 12. How this maps to the website code today

The website uses **Tailwind CSS 4** with `@theme` CSS variables in `globals.css`. The mapping to do (reconciliation work — not done yet):

| Design system | Website today | Action |
|---|---|---|
| `--surfr-cyan` `#01BCD7` | `--color-primary` `#1EB7D8` | **Update website to `#01BCD7`** |
| `--gray-page` `#1F2229` | `--color-dark` `#0A1929` | Update or alias |
| `--gray-card` `#313542` | (none) | Add as `--color-dark-surface` |
| `--gray-raised` `#4E5157` | (none) | Add for pressed states |
| `--font-sans` system stack | Outfit (next/font/google) | **Decide:** keep Outfit as a marketing-only choice, or follow design system and switch to system stack |
| `--font-logo` Roboto | (none) | Add for `surfr.` wordmark |
| `--font-condensed` Roboto Condensed | (none) | Add for eyebrows / data-dense |
| `--tier-plus` `#8E99A4` | (none) | **Add — currently Plus and PRO both use cyan** |
| `--tier-pro` cyan | `--color-primary` | Already aligned (just rename) |
| `--shadow-cyan-soft` / `-hard` | (none) | Add for CTAs and tier cards |
| Wind palette `--wind-00` … `--wind-50` | (none) | Add — useful even if not on Spots page yet |
| `::selection` cyan | (default) | Add to `globals.css` |

**Highest-impact change:** the Plus tier on `/pro` currently uses cyan (`--color-plus` aliased to cyan in `tier-cards.tsx`). This violates the central tier rule. Plus must move to the gray `#8E99A4`.

---

## 13. Open drift / decisions to lock

These are conscious or unconscious deviations from the design system in the current website. Each needs a decision:

1. **Primary cyan is `#1EB7D8`, not `#01BCD7`.** Slight shift toward blue. Recommend: realign to `#01BCD7` for cross-product consistency.
2. **Outfit body font, not system stack.** Outfit is a fine geometric sans, but it's a deliberate departure. Decision: marketing-only choice (keep, accept the load cost) or align with the system (switch to native).
3. **Plus tier uses cyan.** Direct violation. Should be gray.
4. **No Roboto loaded for the wordmark.** The `surfr` logo in nav and footer uses the body font. The brand wordmark deserves Roboto 900.
5. **Eyebrow pattern not used consistently.** The website has section badges (Tailwind pills) but no condensed-uppercase-cyan-with-hairline eyebrows. The eyebrow is a strong brand asset — adopt it.
6. **Cyan glow shadow not used.** CTAs are flat cyan with no glow. The glow is one of the most distinctive Surfr visual moves. Add it.
7. **Italic-cyan accent in headings not used.** Display headings on the website use a `<span>` colored cyan but no italic. Adopting `<em>` italic-cyan would visually bind the website to the rest of Surfr's design surface.
8. **No light theme switch on the website.** The site is dark-hero / light-body hybrid. The design system supports both via `[data-theme="light"]`. Decision: leave as hybrid (current), full dark, or build a toggle.

---

## 14. Pre-publish design checks

Before shipping any new section or page, verify:

- [ ] Every gray surface maps to one of `--gray-page`, `--gray-card`, `--gray-raised` (or their light aliases). No invented grays.
- [ ] Cyan only appears on PRO tier moments, primary CTAs, links, eyebrow accents, and the wordmark dot. Not on Plus, not on neutral text.
- [ ] Roboto only loads for the wordmark (and tier name `.name`). No body or heading uses Roboto.
- [ ] Eyebrow + heading + lede pattern used at the top of every page-level section.
- [ ] Display headings use `<em>` for italic-cyan accent, not custom span colors.
- [ ] Foreground text uses `--fg-*` tokens, not hardcoded grays — so it adapts to dark/light automatically.
- [ ] Wind palette is the source of truth for any forecast / wind / spot visuals. No swap to generic Material colors.
- [ ] Cyan glow shadow on every cyan CTA.
- [ ] Selection color override in place.
- [ ] `prefers-reduced-motion` respected.

---

## 15. Source files in this folder

- [`design-tokens-source.css`](./design-tokens-source.css) — Canonical token CSS, copied verbatim from the in-app `Theme.js` extraction. **This is the single source of truth.** Update it here when the in-app system changes; everything else flows from this.
- [`brand-and-copy-reference.md`](./brand-and-copy-reference.md) — Voice, story, copy rules. Use together with this doc.
- [`brand-direction-infographic.html`](./brand-direction-infographic.html) — Visual one-pager of the brand direction.

---

*Last updated: 2026-04-28. Owner: Marijn. Update this document when the design system changes or drift is reconciled.*
