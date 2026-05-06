import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DisplayHeading, Lede, FeatureHeading } from "@/components/ui/headings";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorldRecords } from "@/components/leaderboard/world-records";
import { TribeBoard } from "@/components/leaderboard/tribe-board";
import { ProgressionGraphCard } from "@/components/leaderboard/visuals/progression-graph-card";
import {
  fetchLeaderboard,
  type LeaderboardEntry,
} from "@/lib/leaderboard-api";
import type { LeaderboardMetric } from "@/lib/leaderboard-data";
import { APP_STORE_URL } from "@/lib/constants";

interface SpotOption {
  spotId: number;
  spotName: string;
  spotCountry: string;
}

/**
 * Harvest unique spots from leaderboard entries for the tribe filter
 * picker. Sorted by frequency descending (most-active spots first), then
 * truncated to a sensible cap.
 */
function deriveSpots(
  entries: Record<LeaderboardMetric, LeaderboardEntry[]>,
  cap = 30,
): SpotOption[] {
  const counts = new Map<number, { spot: SpotOption; count: number }>();
  for (const board of Object.values(entries)) {
    for (const e of board) {
      if (!e.spotId) continue;
      const existing = counts.get(e.spotId);
      if (existing) {
        existing.count++;
      } else {
        counts.set(e.spotId, {
          spot: {
            spotId: e.spotId,
            spotName: e.spotName,
            spotCountry: e.spotCountry,
          },
          count: 1,
        });
      }
    }
  }
  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, cap)
    .map((x) => x.spot)
    .sort((a, b) => a.spotName.localeCompare(b.spotName));
}

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "World records by jump height, distance, airtime, and top speed. Real Surfr riders, real numbers, refreshed every five minutes.",
};

// Match the backend's 5-minute leaderboard cache.
export const revalidate = 300;

const BOARDS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

/**
 * Leaderboard — three layers of motivation:
 *   1. World records — the dream (top of page, live data from Surfr API)
 *   2. Your tribe   — filterable boards (placeholder, in-app only for now)
 *   3. Personal    — your own progression (placeholder, in-app only)
 *
 * Layer 1 fetches all four boards in parallel at request time. Per-board
 * failures are isolated via Promise.allSettled, so one bad board doesn't
 * block the rest. The world-records sub-component handles tab interaction.
 *
 * Backend spec: docs/leaderboard-backend-spec.md
 */
export default async function LeaderboardPage() {
  const results = await Promise.allSettled(
    BOARDS.map((board) =>
      fetchLeaderboard({ board, customLimit: 10 }),
    ),
  );

  const entries: Record<LeaderboardMetric, LeaderboardEntry[]> = {
    height: results[0].status === "fulfilled" ? results[0].value : [],
    distance: results[1].status === "fulfilled" ? results[1].value : [],
    airtime: results[2].status === "fulfilled" ? results[2].value : [],
    speed: results[3].status === "fulfilled" ? results[3].value : [],
  };

  const spots = deriveSpots(entries);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-[0.08] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge>Leaderboard</Badge>
          <div className="mt-6">
            <DisplayHeading>
              See where you <em>stand</em>.
            </DisplayHeading>
          </div>
          <div className="mx-auto mt-6 max-w-2xl">
            <Lede className="mx-auto">
              Three views. The world records to chase. The boards filtered
              to your tribe. And the only one that really matters: your own
              progression.
            </Lede>
          </div>
        </div>
      </section>

      {/* LAYER 1 — WORLD RECORDS (live data) */}
      <section className="border-y border-(--color-divider) bg-(--color-page-tint) py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="text-center">
            <Eyebrow>Layer 1 · World records</Eyebrow>
            <FeatureHeading className="mt-5">
              The numbers everyone <em>chases</em>.
            </FeatureHeading>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-(--color-ink-75)">
              Verified peaks, by metric. Live from the Surfr backend, top
              ten per board.
            </p>
          </div>
          <WorldRecords entries={entries} />

          {/* Inline CTA at the bottom of Layer 1 — primary download hook
              while the user has the leaderboard fresh in mind. */}
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-(--radius-lg) bg-(--color-card) p-7 text-center ring-1 ring-(--color-card-border) sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--color-cyan-15) text-(--color-cyan-ink)">
              <Trophy size={22} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-bold text-(--color-ink)">
                Want your name on the board?
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-(--color-ink-75)">
                Track your sessions with Surfr. Opt in to the leaderboard.
                Every jump counts.
              </p>
            </div>
            <Button href={APP_STORE_URL} external size="md" className="shrink-0">
              Download Surfr
            </Button>
          </div>
        </div>
      </section>

      {/* LAYER 2 — YOUR TRIBE (filterable boards) */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="text-center">
            <Eyebrow>Layer 2 · Your tribe</Eyebrow>
            <FeatureHeading className="mt-5">
              Find the board where <em>you count</em>.
            </FeatureHeading>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-(--color-ink-75)">
              Filter by spot, gender, age, skill, board type, or kite size.
              Everyone is top-10 of something.
            </p>
          </div>

          <TribeBoard spots={spots} />
        </div>
      </section>

      {/* LAYER 3 — PERSONAL PROGRESSION */}
      <section className="border-t border-(--color-divider) bg-(--color-page-tint) py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-6 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Layer 3 · You</Eyebrow>
              <FeatureHeading className="mt-5">
                The only board that <em>really</em> matters.
              </FeatureHeading>
              <p className="mt-5 text-[16px] leading-relaxed text-(--color-ink-75)">
                Your height curve over 30, 90, 365 days. How much you improved
                this season. How close you are to your own personal best,
                live, every session.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-60)">
                This view lives in the app. Open the Leaderboard tab in Surfr
                to see your numbers.
              </p>
              <div className="mt-7">
                <Button href={APP_STORE_URL} external size="md">
                  Open in Surfr
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[460px]">
                <ProgressionGraphCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[640px] px-6 text-center md:px-8">
          <Trophy size={32} className="mx-auto text-(--color-cyan-ink)" />
          <h2 className="mt-4 text-[28px] font-bold tracking-[-0.02em]">
            Where do you rank?
          </h2>
          <p className="mt-3 text-[15px] text-(--color-ink-75)">
            Download Surfr to track your jumps and see your position on every
            leaderboard that matters.
          </p>
          <div className="mt-7">
            <Button href={APP_STORE_URL} external size="lg">
              Download Surfr
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
