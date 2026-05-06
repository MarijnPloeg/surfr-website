"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, MapPin } from "lucide-react";
import {
  METRIC_LABELS,
  formatMetricValue,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import type { LeaderboardEntry } from "@/lib/leaderboard-api";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

interface WorldRecordsProps {
  entries: Record<LeaderboardMetric, LeaderboardEntry[]>;
}

/**
 * Layer 1 of the leaderboard page: the world records table.
 * Tab between the four metrics. Top 10 per metric, fetched server-side
 * and passed in via props. Empty state when an individual metric has no
 * data (API failure, no qualifying entries, etc.).
 */
export function WorldRecords({ entries }: WorldRecordsProps) {
  const [metric, setMetric] = useState<LeaderboardMetric>("height");
  const rows = entries[metric];
  const hasData = rows.length > 0;

  return (
    <>
      {/* Metric tabs */}
      <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-1">
        {METRICS.map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors ${
              metric === m
                ? "bg-(--color-cyan) text-black shadow-[var(--shadow-cyan-soft)]"
                : "bg-(--color-card) text-(--color-ink-75) ring-1 ring-(--color-card-border) hover:text-(--color-ink)"
            }`}
          >
            {METRIC_LABELS[m]}
          </button>
        ))}
      </div>

      {!hasData && (
        <motion.div
          key={metric}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-10 max-w-xl rounded-(--radius-md) border-2 border-dashed border-(--color-ink-15) bg-(--color-card) p-10 text-center"
        >
          <Database
            size={28}
            strokeWidth={1.5}
            className="mx-auto text-(--color-ink-35)"
          />
          <p className="mt-4 font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
            No entries yet
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
            The {METRIC_LABELS[metric].toLowerCase()} board is rebuilding.
            Check back shortly, or open Surfr to see your numbers.
          </p>
        </motion.div>
      )}

      {hasData && (
        <motion.div
          key={metric}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="overflow-hidden rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card)">
            <table className="w-full">
              <thead>
                <tr className="border-b border-(--color-card-border) text-left">
                  <th className="w-12 py-3 pl-5 pr-2 font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
                    #
                  </th>
                  <th className="py-3 pr-3 font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
                    Rider
                  </th>
                  <th className="hidden py-3 pr-3 font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50) sm:table-cell">
                    Spot
                  </th>
                  <th className="py-3 pr-5 text-right font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
                    {METRIC_LABELS[metric]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={`${row.user.id}-${row.sessionId}`}
                    className="border-b border-(--color-card-border) last:border-b-0"
                  >
                    <td className="py-4 pl-5 pr-2 text-[14px] font-bold tabular-nums text-(--color-ink)">
                      {row.ranking}
                    </td>
                    <td className="py-4 pr-3">
                      <div className="text-[14px] font-semibold text-(--color-ink)">
                        {row.user.name}
                      </div>
                      <div className="text-[12px] text-(--color-ink-50)">
                        {row.user.country}
                      </div>
                    </td>
                    <td className="hidden py-4 pr-3 sm:table-cell">
                      <div className="flex items-center gap-1.5 text-[13px] text-(--color-ink-75)">
                        <MapPin size={12} className="text-(--color-ink-35)" />
                        {row.spotName}
                      </div>
                      <div className="text-[12px] text-(--color-ink-50)">
                        {row.spotCountry}
                      </div>
                    </td>
                    <td className="py-4 pr-5 text-right text-[14px] font-bold tabular-nums text-(--color-cyan-ink)">
                      {formatMetricValue(row.value, metric)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-[12px] text-(--color-ink-50)">
            Top {rows.length} riders. Refreshes every 5 minutes. Only riders
            who opted in appear on the public board.
          </p>
        </motion.div>
      )}
    </>
  );
}
