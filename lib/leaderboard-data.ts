// =====================================================================
// Leaderboard display labels and units.
//
// The actual entry shape (LeaderboardEntry) and the server-side fetch
// helper live in lib/leaderboard-api.ts — this file is presentation only.
// =====================================================================

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

/**
 * Pick the right metric value off a Surfr API LeaderboardEntry. The API
 * already returns `value` for the queried board, but this is a safety net
 * if a caller wants to read a specific metric off any entry.
 */
export function pickMetricValue(
  entry: { height: number; distance: number; airtime: number; maxspeed: number },
  metric: LeaderboardMetric,
): number {
  switch (metric) {
    case "height":
      return entry.height;
    case "distance":
      return entry.distance;
    case "airtime":
      return entry.airtime;
    case "speed":
      return entry.maxspeed;
  }
}

/** km/h → knots, used for top-speed display. */
export function kmhToKnots(kmh: number): number {
  return kmh * 0.539957;
}

/** Format a metric value for display, with the right unit and precision. */
export function formatMetricValue(
  value: number,
  metric: LeaderboardMetric,
): string {
  if (metric === "speed") {
    return `${kmhToKnots(value).toFixed(1)} ${METRIC_UNITS.speed}`;
  }
  if (metric === "airtime") {
    return `${value.toFixed(1)} ${METRIC_UNITS.airtime}`;
  }
  return `${value.toFixed(1)} ${METRIC_UNITS[metric]}`;
}
