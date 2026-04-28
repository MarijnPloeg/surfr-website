// =====================================================================
// Leaderboard data shapes.
//
// IMPORTANT: this file used to ship fabricated rankings attributed to
// real pro athletes. That has been removed. The website now renders an
// empty state with a "live data coming via API" note until the backend
// endpoint is wired.
//
// Backend spec: see docs/leaderboard-backend-spec.md
// =====================================================================

export interface LeaderboardEntry {
  rank: number;
  /** Display name. May be a real rider's verified name OR an anonymized
   *  placeholder ("Rider · NL") depending on user-leaderboard preference. */
  name: string;
  country: string;
  countryCode: string;
  value: number;
  unit: string;
  spot: string;
  /** ISO date when the value was recorded. */
  date: string;
  /** True if the rider opted into showing their real name. */
  isVerifiedRider?: boolean;
}

export type LeaderboardMetric = "height" | "distance" | "airtime" | "speed";

export const METRIC_LABELS: Record<LeaderboardMetric, string> = {
  height: "Jump height",
  distance: "Jump distance",
  airtime: "Airtime",
  speed: "Top speed",
};

export const METRIC_UNITS: Record<LeaderboardMetric, string> = {
  height: "m",
  distance: "m",
  airtime: "s",
  speed: "kn",
};

// Empty until the backend ships /api/leaderboard.
// The website renders an explicit "live data coming" empty state.
export const LEADERBOARD_DATA: Record<LeaderboardMetric, LeaderboardEntry[]> = {
  height: [],
  distance: [],
  airtime: [],
  speed: [],
};
