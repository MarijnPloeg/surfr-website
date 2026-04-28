# App Screenshots

This folder holds real iPhone and Apple Watch screenshots used inside `<PhoneMockup>` and `<WatchMockup>` device frames across the site.

## Capture rules

**iPhone:** capture in iOS Simulator on **iPhone 15 Pro** at native resolution (1290 × 2796). Export as PNG. Don't crop — the mockup component handles the bezel and rounded corners. No status bar tweaks needed; the dynamic island sits above the image.

**Apple Watch:** capture in Watch Simulator on **Apple Watch Ultra (49mm)**. Native resolution (410 × 502). Export as PNG. The bezel is applied by the mockup; capture only the screen contents.

## Naming convention

Use kebab-case, scoped by surface. Files referenced by the site:

| File | Used in | Screen to capture |
|---|---|---|
| `home-hero.png` | Home hero phone (`components/home/hero.tsx`) | 4.0 home — session summary card with hero jump number |
| `feature-tracking.png` | Home features + `/features` deep dive | Session detail with jump arc + metric list |
| `watch-jump.png` | Home features + `/features` Session Tracking row | Apple Watch — jump just detected, large height number with airtime |
| `feature-forecasts.png` | Home features + `/features` deep dive | Spot forecast tile with hourly chart + alert toggle |
| `feature-discover.png` | Home features + `/features` deep dive | Fullscreen Discover map with bottom-sheet open |
| `feature-livemap.png` | Home features + `/features` deep dive | Live Map with rider tracks animating |
| `feature-feed.png` | Home features + `/features` deep dive | Feed view with session card + comment row |
| `feature-leaderboard.png` | Home features + `/features` deep dive | Leaderboard tab with podium top-3 + personal rank |
| `wind-games.png` | `components/home/wind-games.tsx` | Wind Games competition screen — live event leaderboard |
| `pro-insights.png` | `components/home/pro-teaser.tsx` | PRO Insights — per-jump score with POP chart |
| `pro-jump-detail.png` | `components/pro/jump-insights.tsx` | PRO Insights with pro-comparison drawer open |
| `download-home.png` | `components/home/download-cta.tsx` | Home tab with recent session card |
| `iphone-recording-start.png` | `components/features/device-compatibility.tsx` | iPhone recording start screen |
| `watch-session.png` | Home hero + `components/pro/watch-tracking.tsx` | Apple Watch — live session metrics during recording |
| `watch-recording.png` | `components/features/device-compatibility.tsx` | Apple Watch — Surfr session recording face |

## Wiring a screenshot in

When you drop `home-hero.png` into this folder, open the consumer (e.g. `components/home/hero.tsx`) and uncomment the `screenshot` line:

```tsx
<PhoneMockup
  screenshot="/screenshots/home-hero.png"
  alt="Surfr home tab — session summary"
  fallbackDescribes="Surfr 4.0 home · session summary card with hero jump number"
  className="w-[280px]"
  priority
/>
```

Until the file exists, the mockup renders an honest placeholder inside the device frame — no broken images.

## Why the bezel is in code, not in the screenshot

Strava-style: the device frame is rendered by `<PhoneMockup>` / `<WatchMockup>` so we control the look (bezel color, shadow, corner radius) consistently across the site. When iOS device design changes, we update one component instead of recapturing every screenshot.
