// =====================================================================
// Surfr Website — Content & Configuration
// Source of truth for marketing numbers, page copy, and external links.
// All text on the website should originate here unless it's page-specific.
// =====================================================================

export const APP_STORE_URL =
  "https://apps.apple.com/app/surfr/id1438498519";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.surfr.surfr";
export const HELP_URL = "https://support.thesurfr.app";
export const SHOP_URL = "https://shop.thesurfr.app";
export const WIND_GAMES_URL = "https://thewindgames.app";
export const CONTACT_EMAIL = "info@thesurfr.app";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/surfr.app/",
  youtube: "https://www.youtube.com/@surfrapp",
  facebook: "https://www.facebook.com/surfrapp",
} as const;

// =====================================================================
// SITE_META — marketing numbers + meta strings.
// Each number has a "verified" date. Update both when the number changes.
// If a number can't be verified, qualify it ("approx.") or remove it.
// =====================================================================
export const SITE_META = {
  metaDescription:
    "Every session is worth measuring, and worth sharing with the people who get it. Track every jump, discover spots, and see where you stand.",
  // Verified 2026-04-28
  activeUsers: "100K+",
  sessionsTracked: "1M+",
  countries: "120+",
  appStoreRating: "4.9",
  appStoreRatingCount: "25000",
  spotsCount: "5,000+",
  // Note: language count to verify — the in-app system supports more,
  // the previous landing page mentioned 3 newly-added in 4.0.
  languages: "8",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Spots", href: "/spots" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Pricing", href: "/pro" },
  { label: "Team", href: "/team" },
] as const;

// =====================================================================
// HOMEPAGE — Hero
// Narrative line: "Every session is worth measuring —
// and worth sharing with the people who get it."
// Hero opens with the line itself. <em> = italic-cyan accent.
// =====================================================================
export const HOMEPAGE_HERO = {
  badgeLabel: "Surfr 4.0",
  // Use <em>...</em> in the headline for the italic-cyan accent.
  headlineHtml: "Every session is worth <em>measuring</em>.",
  lede:
    "From your first 0.3-meter jump to a 30-meter session. Surfr counts both. Same map, same accuracy, same people who get it.",
  primaryCta: "Download free",
  secondaryCta: "See what's new",
} as const;

// =====================================================================
// HOMEPAGE — How it works (3 steps)
// =====================================================================
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Take it to the water",
    description:
      "Tuck your phone in a waterproof pouch, or pair your watch. Surfr starts recording the moment you ride.",
    icon: "Download" as const,
  },
  {
    step: "02",
    title: "Surfr counts every jump",
    description:
      "Proprietary jump detection on phone, Apple Watch, Wear OS, and Garmin. Height, airtime, distance, G-force. Measured, not estimated.",
    icon: "Activity" as const,
  },
  {
    step: "03",
    title: "Share what mattered",
    description:
      "Send a session to a friend, drop a comment on the feed, see your rank. The stoke continues on the beach.",
    icon: "TrendingUp" as const,
  },
] as const;

// =====================================================================
// HOMEPAGE / FEATURES — Core feature stories
// Feature-first headlines — feeling, then proof.
// Each feature carries an `accent` from lib/accents.ts so the page has
// visual rhythm. Brand cyan reserved for Wind & Forecasts (the brand
// is built on wind data).
// =====================================================================
export const CORE_FEATURES = [
  {
    eyebrow: "Session Tracking",
    headline: "Feel it counted.",
    teaser:
      "Jump heights measured from your phone alone. Plus standalone tracking on Apple Watch, Wear OS, and Garmin.",
    description:
      "That 10-meter jump. You know it happened. Surfr knows it happened. The haptic tap on your wrist is the proof. First app to measure jump height from a phone alone. On Apple Watch, Wear OS, and Garmin it runs standalone: on-wrist metrics, live height, sync when you're done.",
    bullets: [
      "Height, airtime, and distance per jump. Not the session average.",
      "Apple Watch, Wear OS, and Garmin: standalone, on-wrist metrics, haptic tap on every jump.",
      "Scrubbable arcs on the map: see the line, the peak, the landing.",
    ],
    icon: "Zap" as const,
    accent: "orange" as const,
    screenshot: "/screenshots/session_tracking.png",
    screenshotDesc: "Session detail screen with jump arc and metrics list",
  },
  {
    eyebrow: "Wind & Forecasts",
    headline: "Don't miss the day.",
    teaser:
      "Cross-checked forecasts ping you when your spot hits its sweet spot.",
    description:
      "You checked at midnight. It looked fine. You woke up to 45 knots and nowhere to go. Surfr alerts you before that happens: pick your spot, speed range, and window. Cross-checked forecasts do the watching.",
    bullets: [
      "Alerts up to 5 days ahead, via notification or email.",
      "Multiple weather models, cross-checked: fewer false calls.",
      "Kite-size picks pulled from your own quiver.",
    ],
    icon: "Wind" as const,
    accent: "cyan" as const,
    screenshot: "/screenshots/wind_forecast.png",
    screenshotDesc: "Spot forecast tile with hourly wind chart and alert toggle",
  },
  {
    eyebrow: "Discover Spots",
    headline: "Find your next session.",
    description:
      "A fullscreen map of kitesurfing spots with live wind, community reviews, session history, and photos. You know what you're driving to before you load the car.",
    bullets: [
      "Live wind data overlaid on a fullscreen map",
      "Community reviews, ratings, and photos",
      "Spot stats: jump profiles, wind history, popular kite sizes",
    ],
    icon: "Compass" as const,
    accent: "lime" as const,
    screenshot: "/screenshots/discover_spots.png",
    screenshotDesc: "Fullscreen Discover map with spot bottom-sheet open",
  },
  {
    eyebrow: "Live on the Water",
    headline: "Someone's already there.",
    teaser:
      "Real-time rider positions on the map. Friends and family follow your session from the beach.",
    description:
      "The Live Map shows real-time positions of riders at your spot. Friends and family follow your session from the beach. Privacy controls let you choose who sees what.",
    bullets: [
      "Real-time rider positions on the Live Map",
      "Friends and family can follow your live session",
      "Privacy: everyone, friends-only, or off",
    ],
    icon: "Radio" as const,
    accent: "live" as const,
    screenshot: "/screenshots/live_activity.png",
    screenshotDesc: "Live Map with rider tracks animating in real time",
  },
  {
    eyebrow: "Social Feed",
    headline: "The session continues on the beach.",
    description:
      "Follow friends, like sessions, drop a comment, share a clip. A For-You feed surfaces riders and sessions you'd want to see, without algorithmic noise.",
    bullets: [
      "For You feed tuned for kite content",
      "Comments with mentions and GIFs",
      "Friends, follows, and activity notifications",
    ],
    icon: "Users" as const,
    accent: "pink" as const,
    screenshot: "/screenshots/connect.PNG",
    screenshotDesc: "Feed view with a session card, like/comment/share row",
  },
  {
    eyebrow: "Leaderboard",
    headline: "Find your tribe by the numbers.",
    description:
      "Rankings by jump height, distance, airtime, and speed. Filter by spot, region, gender, or skill bracket. Everyone has a board where they count.",
    bullets: [
      "Global, regional, and spot-specific rankings",
      "Filter by height, distance, airtime, speed",
      "Personal-progression view: how much you improved this season",
    ],
    icon: "Trophy" as const,
    accent: "purple" as const,
    screenshot: "/screenshots/leaderboard.png",
    screenshotDesc: "Leaderboard tab with podium top-3 and personal rank below",
  },
] as const;

// =====================================================================
// HOMEPAGE — Wind Games callout (replaces removed BAKL/GKA references)
// =====================================================================
export const WIND_GAMES = {
  eyebrow: "Compete",
  headline: "Compete in <em>Wind Games</em>.",
  description:
    "Wind Games is the official competition companion app. Join live competitions at spots near you, scored on your actual recorded performance. No judges needed. Check leaderboards, track your ranking, discover active competitions worldwide.",
  ctaLabel: "thewindgames.app",
  ctaHref: WIND_GAMES_URL,
} as const;

// =====================================================================
// HOMEPAGE — What's new in 4.0
// =====================================================================
export const WHATS_NEW_4_0 = [
  {
    title: "Redesigned UI",
    description:
      "Every screen rebuilt. Cleaner hierarchy, sharper typography, deliberate motion.",
    icon: "Sparkles" as const,
    accent: "purple" as const,
  },
  {
    title: "New Discover tab",
    description:
      "Fullscreen map, smart search, bottom sheets, live spot data.",
    icon: "Map" as const,
    accent: "lime" as const,
  },
  {
    title: "Social feed",
    description:
      "For You algorithmic feed, comments with mentions and GIFs, friends.",
    icon: "MessageCircle" as const,
    accent: "pink" as const,
  },
  {
    title: "Sharper wind",
    description:
      "Cross-checked weather models, high-resolution regional data. More signal, less noise.",
    icon: "Wind" as const,
    accent: "cyan" as const,
  },
  {
    title: "Wear OS 2.0",
    description:
      "Full companion app for Android watches with live jump detection.",
    icon: "Watch" as const,
    accent: "live" as const,
  },
  {
    title: "PRO Insights",
    description:
      "Per-jump scoring with qualitative ratings and a Power-of-Progression chart.",
    icon: "Brain" as const,
    accent: "orange" as const,
  },
] as const;

// =====================================================================
// HOMEPAGE — Stats strip
// Numbers come from SITE_META; only verified values displayed.
// =====================================================================
export const HOMEPAGE_STATS = [
  { value: SITE_META.activeUsers, label: "Active riders" },
  { value: SITE_META.sessionsTracked, label: "Sessions tracked" },
  { value: SITE_META.countries, label: "Countries" },
  { value: SITE_META.appStoreRating, label: "App Store rating", isStar: true },
] as const;

// =====================================================================
// TESTIMONIALS — only real, named riders. Slot 3 awaiting input.
// =====================================================================
export const TESTIMONIALS = [
  {
    quote:
      "This is the best app in kitesurfing, hands down. The jump-height metrics are super accurate, the app is easy and fun to use, and the team is insanely sharp. I highly recommend it.",
    author: "Mike MacDonald",
    role: "GHWM (Guinness World Record holder, kitesurfing)",
    spot: "Cape Town",
  },
  {
    quote:
      "You don't even notice that you carry a device. Everything is on your phone, secured in a waterproof pouch, tucked away in your wetsuit. It just works.",
    author: "Giel Vlugt",
    role: "Professional Big Air kiteboarder",
    spot: "Tarifa",
  },
  // Slot 3: awaiting a real rider quote (see docs/INPUT_NEEDED.md).
  // Until then we render only two cards.
] as const;

// =====================================================================
// PARTNERS — currently empty. Was previously a fabricated mix
// (Red Bull / GKA / BAKL / Full Power). Repopulate with real, current
// partnerships only — and only if logo usage is permitted.
// =====================================================================
export const PARTNERS: readonly { name: string; logoSrc?: string }[] = [];

// =====================================================================
// TEAM
// =====================================================================
// Team roster mirrors the live /team page on thesurfr.app. Stats are each
// member's actual personal records inside the app — meta on purpose.
// Marijn (Product Owner) and Loes (Operational Manager) override the public
// site's titles per direct request from the team.
export const TEAM_MEMBERS = [
  {
    name: "Herbert",
    role: "Founder & CEO",
    country: "The Netherlands",
    countryFlag: "🇳🇱",
    age: 37,
    stats: {
      height: "24.3m",
      distance: "141m",
      airtime: "10.8s",
      speed: "83kmh",
    },
    image: "/team/herbert.jpg",
  },
  {
    name: "Alireza",
    role: "CTO · Head of Development",
    country: "Germany",
    countryFlag: "🇩🇪",
    age: 44,
    stats: {
      height: "13.3m",
      distance: "89m",
      airtime: "8.2s",
      speed: "58kmh",
    },
    image: "/team/alireza.jpg",
  },
  {
    name: "Marijn",
    role: "Product Owner",
    country: "The Netherlands",
    countryFlag: "🇳🇱",
    age: 27,
    stats: {
      height: "24.5m",
      distance: "176m",
      airtime: "17.3s",
      speed: "116kmh",
    },
    image: "/team/marijn.jpg",
  },
  {
    name: "Carlos",
    role: "Developer",
    country: "Spain",
    countryFlag: "🇪🇸",
    age: 37,
    stats: {
      height: "32.8m",
      distance: "211m",
      airtime: "22s",
      speed: "88kmh",
    },
    image: "/team/carlos.jpg",
  },
  {
    name: "Loes",
    role: "Operational Manager",
    country: "The Netherlands",
    countryFlag: "🇳🇱",
    age: 30,
    stats: {
      height: "11.1m",
      distance: "96m",
      airtime: "7.1s",
      speed: "82kmh",
    },
    image: "/team/loes.jpg",
  },
  {
    name: "Bruna",
    role: "Marketing Director",
    country: "Brazil",
    countryFlag: "🇧🇷",
    age: 29,
    stats: {
      height: "9.1m",
      distance: "64m",
      airtime: "6.1s",
      speed: "88kmh",
    },
    image: "/team/bruna.jpg",
  },
] as const;

export const ABOUT_TEXT = {
  paragraph1:
    "Surfr started in 2019 with a simple bet: that you could measure a kitesurf jump from a phone alone, accurately enough to share. The bet paid off. Surfr was the first to do it, and it's still the most accurate way.",
  paragraph2:
    "Today the app counts close to 100K riders' sessions. It runs on iPhone, Android, Apple Watch, Wear OS, and Garmin. We move around the world wherever the wind is, but the team is rooted on the North Sea.",
  paragraph3:
    "We don't try to be a fitness app. We don't try to be everything. We try to be the place every kite session, first jump or world record, gets counted, and shared with the people who get it.",
} as const;

export const TEAM_TIMELINE = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Surfr launches as the first app to track kitesurfing jumps from a phone alone.",
  },
  {
    year: "2021",
    title: "Apple Watch",
    description:
      "Wrist-only tracking ships. No phone needed in the water.",
  },
  {
    year: "2024",
    title: "100K riders",
    description:
      "100K active riders across 120+ countries. 1M+ sessions tracked.",
  },
  {
    year: "2026",
    title: "Surfr 4.0",
    description:
      "Complete redesign. Social feed, new Discover tab, Wear OS 2.0, sharper wind.",
  },
] as const;

// =====================================================================
// PRICING (verified 2026-04-28; source: founder)
// Local-currency variation handled by the app stores.
// =====================================================================
export const PRICING = {
  currency: "€",
  currencyNote:
    "Local prices may vary by region. App Store and Google Play show the price for your country.",
  trialDays: 14,
  plus: {
    monthly: "€3.99",
    yearly: "€24.99",
    yearlySavings: "save 48%", // 3.99*12=47.88 → 24.99 ≈ 48% off
  },
  pro: {
    monthly: "€6.99",
    yearly: "€54.99",
    yearlySavings: "save 34%", // 6.99*12=83.88 → 54.99 ≈ 34% off
  },
} as const;

export const PLUS_FEATURES = [
  "Full session details and jump analysis",
  "1-hourly wind forecasts and alerts",
  "Live Map and detailed spot statistics",
  "Surfie video export",
  "Quiver insights",
  "Unlimited spot photos",
] as const;

export const PRO_FEATURES = [
  "Apple Watch and Wear OS recording",
  "PRO Insights with AI analytics",
  "On-board coaching",
  "Downwinder navigation",
  "Cinematic replay",
  "Voice chat (AI transcribed)",
] as const;

export const PRICING_TEASER = {
  eyebrow: "Plans",
  headlineHtml: "Plus pays for itself in <em>one good day</em>.",
  description:
    "Start free. Plus unlocks deeper analytics and sharper wind forecasts. PRO adds watch tracking, coaching, and AI insights.",
  cta: "See plans",
} as const;

// =====================================================================
// PRICING — Comparison table
// =====================================================================
export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  feature: string;
  category: string;
  free: ComparisonValue;
  plus: ComparisonValue;
  pro: ComparisonValue;
}

export const COMPARISON_TABLE: ComparisonRow[] = [
  // Recording & Tracking
  { feature: "Basic GPS tracking", category: "Recording", free: true, plus: true, pro: true },
  { feature: "Jump detection (Phone & Garmin)", category: "Recording", free: true, plus: true, pro: true },
  { feature: "Apple Watch & Wear OS recording", category: "Recording", free: false, plus: false, pro: true },
  { feature: "On-board coaching", category: "Recording", free: false, plus: false, pro: true },
  { feature: "Downwinder navigation", category: "Recording", free: false, plus: false, pro: true },
  { feature: "Voice chat (AI transcribed)", category: "Recording", free: false, plus: false, pro: true },
  // Session Details
  { feature: "Session summary & leaderboards", category: "Session Details", free: true, plus: true, pro: true },
  { feature: "Interactive GPS map", category: "Session Details", free: true, plus: true, pro: true },
  { feature: "Jumps on map", category: "Session Details", free: "Basic", plus: "2D", pro: "3D" },
  { feature: "Full jump details", category: "Session Details", free: "Limited", plus: true, pro: true },
  { feature: "Cinematic replay", category: "Session Details", free: "Limited", plus: "Limited", pro: true },
  { feature: "PRO Insights & analytics", category: "Session Details", free: false, plus: false, pro: true },
  { feature: "Quiver insights", category: "Session Details", free: false, plus: true, pro: true },
  // Wind
  { feature: "3-hourly forecast", category: "Wind", free: true, plus: true, pro: true },
  { feature: "1-hourly forecast", category: "Wind", free: "Limited", plus: true, pro: true },
  { feature: "High-res regional models", category: "Wind", free: "Limited", plus: true, pro: true },
  { feature: "Kite size recommendations", category: "Wind", free: "Limited", plus: true, pro: true },
  { feature: "Wind alerts", category: "Wind", free: false, plus: true, pro: true },
  // Spots
  { feature: "Spot discovery & search", category: "Spots", free: true, plus: true, pro: true },
  { feature: "Live Map", category: "Spots", free: "Limited", plus: true, pro: true },
  { feature: "Detailed spot statistics", category: "Spots", free: "Limited", plus: true, pro: true },
  { feature: "Spot photos", category: "Spots", free: "Max 3", plus: "Unlimited", pro: "Unlimited" },
  // Social & Extras
  { feature: "Social feed, likes & comments", category: "Social & Extras", free: true, plus: true, pro: true },
  { feature: "Strava export", category: "Social & Extras", free: true, plus: true, pro: true },
  { feature: "Surfie video export", category: "Social & Extras", free: "Limited", plus: true, pro: true },
  { feature: "Ad-free experience", category: "Social & Extras", free: false, plus: false, pro: true },
];

// =====================================================================
// FAQ
// =====================================================================
export const FAQ = [
  {
    question: "Can I try Plus or PRO for free?",
    answer:
      "Yes. Both come with a 2-week free trial. Cancel any time during the trial at no cost.",
  },
  {
    question: "What's the difference between Plus and PRO?",
    answer:
      "Plus unlocks detailed session analytics, 1-hourly wind forecasts, wind alerts, the Live Map, and spot statistics. PRO adds everything Plus has plus Apple Watch & Wear OS recording, on-board coaching, PRO Insights with AI analytics, cinematic replay, and downwinder navigation.",
  },
  {
    question: "What devices support watch-only tracking?",
    answer:
      "Watch-only tracking is a PRO feature on Apple Watch (Series 4+), Wear OS (2.0+), and Garmin watches with the Surfr Connect IQ app.",
  },
  {
    question: "How does Jump Insights work?",
    answer:
      "Surfr's algorithm analyses height, airtime, approach speed, and heading to score each jump. The Power-of-Progression chart tracks improvement over time. Jump Insights is a PRO feature, developed in collaboration with Mike MacDonald (GHWM).",
  },
  {
    question: "Can I switch between Plus and PRO?",
    answer:
      "Yes. Upgrading from Plus to PRO takes effect immediately with prorated billing. Downgrading from PRO to Plus is deferred to your next renewal date, so you keep PRO features until then.",
  },
  {
    question: "Can I cancel any time?",
    answer:
      "Yes. Both subscriptions are managed through the App Store or Google Play. Cancel any time and continue using your plan's features until the end of your billing period.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You keep all your sessions, jumps, and history. Your account reverts to the free tier. Some features become limited, but nothing is deleted.",
  },
] as const;

// =====================================================================
// ROADMAP
// Now: shipping in the active 4.x release.
// Next: committed for 4.1 ("The Social Update", Q2 2026).
// Later: under consideration; community-influenced.
// =====================================================================
export const ROADMAP = {
  now: {
    label: "Now",
    version: "Surfr 4.0",
    status: "Shipping",
    items: [
      {
        title: "Redesigned UI",
        description: "Every screen rebuilt with cleaner hierarchy and sharper type.",
      },
      {
        title: "New Discover tab",
        description: "Fullscreen map, smart search, bottom sheets, live spot data.",
      },
      {
        title: "Social feed",
        description: "For-You feed, comments with mentions and GIFs, friends.",
      },
      {
        title: "Sharper wind",
        description: "Cross-checked models with high-resolution regional data for cleaner forecasts.",
      },
      {
        title: "Wear OS 2.0",
        description: "Full companion app with live jump detection.",
      },
      {
        title: "PRO Insights",
        description: "Per-jump scoring with qualitative ratings and POP chart.",
      },
    ],
  },
  next: {
    label: "Next",
    version: "Surfr 4.1: The Social Update",
    status: "Q2 2026",
    items: [
      {
        title: "Direct messages",
        description:
          "1:1 and group DMs. Send a session, a forecast, a spot. All as first-class messages.",
      },
      {
        title: "Place chat",
        description:
          "Permanent Wall for the spot. 24-hour Crew chat for riders out today.",
      },
      {
        title: "Activity feed",
        description:
          "Likes, mentions, jump reviews, follows. All in one place.",
      },
      {
        title: "Communities",
        description:
          "Group chats tied to Wind Games groups. Inline competitions.",
      },
      {
        title: "Place pages",
        description:
          "Richer spot pages: yearly wind reports, historical data, frequency trends.",
      },
      {
        title: "Share to friend",
        description:
          "Instagram-pattern share sheet. One tap to send a session.",
      },
    ],
  },
  later: {
    label: "Later",
    version: "Under consideration",
    status: "Open to input",
    items: [
      // Intentionally light — fill from community feedback.
      {
        title: "Tell us what's missing",
        description:
          "What would make Surfr unmissable for you? Drop a line at " +
          CONTACT_EMAIL +
          ".",
      },
    ],
  },
} as const;
