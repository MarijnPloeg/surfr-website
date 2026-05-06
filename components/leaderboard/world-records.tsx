"use client";

import { useState } from "react";
import {
  METRIC_LABELS,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import type { LeaderboardEntry } from "@/lib/leaderboard-api";
import { LeaderboardDisplay } from "@/components/leaderboard/leaderboard-display";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

interface WorldRecordsProps {
  entries: Record<LeaderboardMetric, LeaderboardEntry[]>;
}

/**
 * Layer 1 — server-fetched all-time world records, top 10 per metric.
 * Client-side state is just the active metric tab; the data itself is
 * baked at request time via Promise.allSettled in the page.
 */
export function WorldRecords({ entries }: WorldRecordsProps) {
  const [metric, setMetric] = useState<LeaderboardMetric>("height");
  const rows = entries[metric];

  return (
    <>
      <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-1">
        {METRICS.map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`rounded-full px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-colors ${
              metric === m
                ? "bg-(--color-cyan) text-black shadow-[var(--shadow-cyan-soft)]"
                : "bg-(--color-card) text-(--color-ink-75) ring-1 ring-(--color-card-border) hover:text-(--color-ink)"
            }`}
          >
            {METRIC_LABELS[m]}
          </button>
        ))}
      </div>

      <LeaderboardDisplay
        entries={rows}
        metric={metric}
        emptyMessage={`The ${METRIC_LABELS[metric].toLowerCase()} board is rebuilding. Check back shortly, or open Surfr to see your numbers.`}
      />
    </>
  );
}
