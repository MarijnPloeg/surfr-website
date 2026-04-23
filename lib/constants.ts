export const APP_STORE_URL =
  "https://apps.apple.com/app/surfr/id1438498519";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.surfr.surfr";
export const HELP_URL = "https://support.thesurfr.app";
export const SHOP_URL = "https://shop.thesurfr.app";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/surfr.app/",
  youtube: "https://www.youtube.com/@surfrapp",
  facebook: "https://www.facebook.com/surfrapp",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Spots", href: "/spots" },
  { label: "Pricing", href: "/pro" },
  { label: "Team", href: "/team" },
  { label: "Help", href: HELP_URL, external: true },
] as const;

export const FEATURES = [
  {
    title: "Track Your Sessions",
    description:
      "Whatever you want to know about your session, the Surfr app tracks it in the most accurate way. Jumps, speed, distance and much more.",
    icon: "MapPin" as const,
  },
  {
    title: "Stay Safe",
    description:
      "Taking Surfr with you ensures you are traceable and improves your safety on the water.",
    icon: "Shield" as const,
  },
  {
    title: "Go Live",
    description:
      "In live-mode, your friends and family can follow your sessions right from the beach or at home.",
    icon: "Radio" as const,
  },
  {
    title: "Discover Places",
    description:
      "With Surfr Discover we collected tons of valuable spot information and thousands of reviews from fellow riders to help you find your next destination.",
    icon: "Compass" as const,
  },
  {
    title: "Socialize",
    description:
      "Connect with like-minded people on the fastest growing watersports app.",
    icon: "Users" as const,
  },
  {
    title: "Leaderboards",
    description:
      "Surfr is the go-to app for every big-air competition around the World. Trusted by the Big Air Kite League and the GKA for its accuracy and live scoring.",
    icon: "Trophy" as const,
  },
] as const;

export const STATS = [
  { value: "100K+", label: "Active Users" },
  { value: "1M+", label: "Sessions Tracked" },
  { value: "120+", label: "Countries" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "This is the best app in kitesurfing, hands down. The jump height metrics are super accurate, the app is easy and fun to use and the team is insanely sharp. I highly recommend it.",
    author: "Mike MacDonald",
    role: "Founder, Big Air Kite League",
  },
  {
    quote:
      "You don't even notice that you carry a device with you that accurately measures all metrics of your jumps. Everything is on your phone that's secured in a waterproof pouch and tucked away in your wetsuit.",
    author: "Giel Vlugt",
    role: "Professional Big Air Kiteboarder",
  },
  {
    quote:
      "Fun, accurate, revolutionary. Trust 25,000+ users that got into the app and left almost only positive reviews in the stores.",
    author: "99% of active users",
    role: "Rate the app 5 stars",
  },
] as const;

export const PARTNERS = [
  { name: "Full Power" },
  { name: "Red Bull" },
  { name: "GKA" },
  { name: "Big Air Kite League" },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Marijn van der Ploeg",
    role: "Founder & Developer",
    image: "/team/marijn.jpg",
  },
  {
    name: "Milan Sluiter",
    role: "Co-Founder & Developer",
    image: "/team/milan.jpg",
  },
  {
    name: "Ruben Verhoef",
    role: "Developer",
    image: "/team/ruben.jpg",
  },
] as const;

export const ABOUT_TEXT = {
  paragraph1:
    "The Surfr app is the 'spot' to be if you are excited about watersports. With close to 100K users, the Surfr app is home to one of the largest watersport communities and offers functionalities to track your sessions with high accuracy and all its details. Surfr leverages Artificial Intelligence to deliver next-level accuracy, no matter which device you take to the water.",
  paragraph2:
    "It doesn't stop with tracking though: use the Surfr app to connect with like-minded people, discover places, and push yourself beyond your own limits.",
  paragraph3:
    "Founded in 2019, the team has now expanded to a small team of watersports enthusiasts that have one mission: to deliver the best app experience to our users. Just like the wind, we move around all over the world and try to be close to where the action happens.",
} as const;

export const HOMEPAGE_HERO = {
  badge: "Surfr 4.0 is here",
  headline: "Track Every Jump.",
  headlineAccent: "Own Your Progression.",
  description:
    "The #1 app for kitesurfers. Record sessions, measure jump height, discover spots, and compete with riders worldwide.",
} as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Download & Ride",
    description:
      "Grab Surfr for free, tuck your phone in your wetsuit or pair your smartwatch, and hit the water.",
    icon: "Download" as const,
  },
  {
    step: "02",
    title: "Track Everything",
    description:
      "Surfr automatically detects every jump, measures height, airtime, and distance with proprietary algorithms.",
    icon: "Activity" as const,
  },
  {
    step: "03",
    title: "Review & Compete",
    description:
      "Analyze your session, share with friends, climb the leaderboard, and track your progression over time.",
    icon: "TrendingUp" as const,
  },
] as const;

export const CORE_FEATURES = [
  {
    title: "Session Tracking",
    headline: "Know exactly how high you flew",
    description:
      "Surfr was the first app to accurately track jump heights with just a phone — and it's still the most accurate. Every session records jumps, speed, distance, airtime, and more.",
    bullets: [
      "Proprietary jump detection with real-time haptic feedback",
      "Per-jump metrics: height, airtime, distance, G-force",
      "Interactive jump arc charts with touch-to-scrub",
    ],
    icon: "Zap" as const,
  },
  {
    title: "Wind & Forecasts",
    headline: "Never miss a good wind day",
    description:
      "Live wind station data, hourly forecasts from multiple models, and smart alerts that notify you when conditions hit your sweet spot. All powered by Open Meteo with high-resolution regional models.",
    bullets: [
      "Hourly wind forecasts with multiple weather models",
      "Custom wind alerts by spot, speed & direction",
      "Kite size recommendations based on your quiver",
    ],
    icon: "Wind" as const,
  },
  {
    title: "Discover Spots",
    headline: "Find your next session",
    description:
      "Explore thousands of kitesurfing spots worldwide on a fullscreen map. Check live wind conditions, browse community reviews, see session history and photos — all before you pack your gear.",
    bullets: [
      "5,000+ spots with live wind data & forecasts",
      "Community reviews, ratings & photos",
      "Spot statistics: jump profiles, wind history, popular kite sizes",
    ],
    icon: "Compass" as const,
  },
  {
    title: "Live on the Water",
    headline: "See who's riding right now",
    description:
      "The Live Map shows real-time positions of riders at your spot. Friends and family can follow your session from the beach or at home. Stay connected, stay safe.",
    bullets: [
      "Real-time rider positions on the map",
      "Friends & family can follow your live session",
      "Privacy controls: everyone, friends-only, or off",
    ],
    icon: "Radio" as const,
  },
  {
    title: "Social Feed",
    headline: "Connect with the community",
    description:
      "Follow friends, like sessions, drop comments with GIFs, and discover new riders in your personalized For You feed. Surfr is where the kite community lives.",
    bullets: [
      "For You feed with smart discovery algorithm",
      "Instagram-style comments with GIFs & mentions",
      "Friends system & activity notifications",
    ],
    icon: "Users" as const,
  },
  {
    title: "Leaderboards",
    headline: "See where you rank",
    description:
      "Global and spot-specific rankings by jump height, distance, airtime, or speed. Filter by time period, discipline, or friends. Track your progression over time.",
    bullets: [
      "Global & spot-specific rankings",
      "Filter by height, distance, airtime, speed",
      "Weekly, monthly & all-time filters",
    ],
    icon: "Trophy" as const,
  },
] as const;

export const WHATS_NEW = [
  {
    title: "Redesigned UI",
    description:
      "Every screen rebuilt from the ground up with a modern, clean interface.",
    icon: "Sparkles" as const,
  },
  {
    title: "New Discover Tab",
    description:
      "Fullscreen map with smart search, bottom sheets, and live spot data.",
    icon: "Map" as const,
  },
  {
    title: "Social Feeds",
    description:
      "For You algorithmic feed, Instagram-style comments with GIFs, and friends.",
    icon: "MessageCircle" as const,
  },
  {
    title: "Wind Intelligence",
    description:
      "Open Meteo integration with bilinear interpolation for precise forecasts.",
    icon: "Wind" as const,
  },
  {
    title: "WearOS 2.0",
    description:
      "Full companion app for Android watches with live jump detection.",
    icon: "Watch" as const,
  },
  {
    title: "Smart Insights",
    description:
      "Per-jump PRO insights with qualitative ratings and progression tips.",
    icon: "Brain" as const,
  },
] as const;

export const PRICING_TEASER = {
  badge: "Plans & Pricing",
  headline: "From casual sessions to serious progression",
  description:
    "Start free, then choose the plan that matches your riding. Plus unlocks detailed analytics and wind forecasts. PRO adds watch tracking, coaching, and AI insights.",
  cta: "See pricing",
} as const;

export const PLUS_FEATURES = [
  "Full session details & jump analysis",
  "1-hourly wind forecasts & alerts",
  "Live Map & spot statistics",
  "Surfie video export",
  "Quiver insights",
  "Unlimited spot photos",
] as const;

export const PRO_FEATURES = [
  "Apple Watch & Wear OS recording",
  "PRO Insights & AI analytics",
  "On-board coaching",
  "Downwinder navigation",
  "Cinematic replay",
  "Voice chat (AI transcribed)",
] as const;

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
