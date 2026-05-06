// =====================================================================
// Leaderboard API — types and the server-side fetch helper.
//
// Token discipline: SURFR_API_TOKEN is server-only (env var).
// - This module is imported by server components and the BFF route handler.
// - NEVER import this from a client component, even indirectly.
// =====================================================================

export type Board = "height" | "airtime" | "speed" | "distance";
export type Period =
  | "alltime"
  | "monthly"
  | "weekly"
  | "daily"
  | "custom";

export interface LeaderboardUser {
  id: number;
  name: string;
  country: string;
  profilepicid: string;
  ispro: boolean;
  subscriptionTier: string;
  lb_unsubscribed: boolean;
}

export interface LeaderboardEntry {
  ranking: number;
  value: number;
  user: LeaderboardUser;
  height: number;
  airtime: number;
  maxspeed: number;
  distance: number;
  boardtype: string;
  spotId: number;
  spotName: string;
  spotCountry: string;
  sessionId: number;
  sessionDatetime: string;
  jumpCount: number;
  kite: string;
  totalUsers: number;
}

const SURFR_API_BASE =
  process.env.SURFR_API_BASE_URL ?? "https://api.thesurfr.app";

interface FetchLeaderboardOpts {
  board: Board;
  period?: Period;
  page?: number;
  customLimit?: number;
}

/**
 * Server-side fetch against the Surfr leaderboard API. Uses the access
 * token from env. Returns an empty array on 204 (no content).
 *
 * Throws when the token is missing or the upstream returns a non-OK
 * non-204 status. Callers in server components should wrap in
 * Promise.allSettled or try/catch and fall back to an empty state.
 */
export async function fetchLeaderboard(
  opts: FetchLeaderboardOpts,
): Promise<LeaderboardEntry[]> {
  const token = process.env.SURFR_API_TOKEN;
  if (!token) {
    throw new Error("SURFR_API_TOKEN not configured");
  }

  const { board, period = "alltime", page = 0, customLimit } = opts;
  const url = new URL(
    `${SURFR_API_BASE}/leaderboards/list/${board}/${period}/${page}`,
  );
  url.searchParams.set("accesstoken", token);
  if (customLimit !== undefined) {
    url.searchParams.set("customLimit", String(customLimit));
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
  });

  if (res.status === 204) return [];
  if (!res.ok) {
    throw new Error(`Surfr leaderboard API error: ${res.status}`);
  }

  const data = (await res.json()) as LeaderboardEntry[];
  return Array.isArray(data) ? data : [];
}
