"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Crown } from "lucide-react";
import {
  METRIC_LABELS,
  formatMetricValue,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import type { LeaderboardEntry } from "@/lib/leaderboard-api";
import { RiderAvatar } from "@/components/leaderboard/rider-avatar";
import { CountryFlag } from "@/components/leaderboard/country-flag";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

interface WorldRecordsProps {
  entries: Record<LeaderboardMetric, LeaderboardEntry[]>;
}

export function WorldRecords({ entries }: WorldRecordsProps) {
  const [metric, setMetric] = useState<LeaderboardMetric>("height");
  const rows = entries[metric];
  const hasData = rows.length > 0;
  const top3 = rows.slice(0, 3);
  const rest = rows.slice(3);

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

      {!hasData && <EmptyState metric={metric} />}

      {hasData && (
        <motion.div
          key={metric}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-12"
        >
          <Podium top3={top3} metric={metric} />
          {rest.length > 0 && <RankList rows={rest} metric={metric} />}
        </motion.div>
      )}
    </>
  );
}

function EmptyState({ metric }: { metric: LeaderboardMetric }) {
  return (
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
  );
}

interface PodiumCardProps {
  entry: LeaderboardEntry;
  metric: LeaderboardMetric;
  position: 1 | 2 | 3;
}

function PodiumCard({ entry, metric, position }: PodiumCardProps) {
  const isFirst = position === 1;
  const avatarSize = isFirst ? 96 : 76;
  const podiumHeight = position === 1 ? 88 : position === 2 ? 64 : 48;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        {isFirst && (
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-(--color-cyan-ink)">
            <Crown size={24} strokeWidth={2} fill="currentColor" />
          </div>
        )}
        <RiderAvatar
          name={entry.user.name}
          profilePicId={entry.user.profilepicid}
          size={avatarSize}
          className={
            isFirst
              ? "ring-2 ring-(--color-cyan) shadow-[var(--shadow-cyan-soft)]"
              : ""
          }
        />
      </div>

      <div className="mt-3 flex max-w-[160px] flex-col items-center">
        <div
          className={`truncate text-[14px] font-bold text-(--color-ink) ${
            isFirst ? "text-[15px]" : ""
          }`}
          style={{ maxWidth: "160px" }}
        >
          {entry.user.name}
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-(--color-ink-60)">
          <CountryFlag country={entry.user.country} height={9} />
          <span className="truncate" style={{ maxWidth: "120px" }}>
            {entry.spotName}
          </span>
        </div>
        <div
          className={`mt-2 font-bold tabular-nums text-(--color-cyan-ink) ${
            isFirst ? "text-[28px]" : "text-[22px]"
          }`}
        >
          {formatMetricValue(entry.value, metric)}
        </div>
      </div>

      {/* The podium block — visual rank step. */}
      <div
        className={`mt-3 flex w-full items-center justify-center rounded-t-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink) ${
          isFirst ? "bg-(--color-cyan-30)" : ""
        }`}
        style={{ height: podiumHeight }}
      >
        <span
          className={`font-bold tabular-nums ${
            isFirst ? "text-[36px]" : "text-[28px]"
          }`}
        >
          {position}
        </span>
      </div>
    </div>
  );
}

function Podium({
  top3,
  metric,
}: {
  top3: LeaderboardEntry[];
  metric: LeaderboardMetric;
}) {
  const first = top3[0];
  const second = top3[1];
  const third = top3[2];

  return (
    <div className="mx-auto max-w-[680px]">
      <div className="grid grid-cols-3 items-end gap-3 sm:gap-6">
        <div>{second && <PodiumCard entry={second} metric={metric} position={2} />}</div>
        <div>{first && <PodiumCard entry={first} metric={metric} position={1} />}</div>
        <div>{third && <PodiumCard entry={third} metric={metric} position={3} />}</div>
      </div>
    </div>
  );
}

function RankList({
  rows,
  metric,
}: {
  rows: LeaderboardEntry[];
  metric: LeaderboardMetric;
}) {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="overflow-hidden rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) shadow-[0_4px_16px_-8px_rgba(10,25,41,0.08)]">
        {rows.map((row, i) => (
          <RankRow
            key={`${row.user.id}-${row.sessionId}`}
            entry={row}
            metric={metric}
            isLast={i === rows.length - 1}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] text-(--color-ink-50)">
        Top {rows.length + 3} riders. Refreshes every 5 minutes. Only riders
        who opted in appear on the public board.
      </p>
    </div>
  );
}

function RankRow({
  entry,
  metric,
  isLast,
}: {
  entry: LeaderboardEntry;
  metric: LeaderboardMetric;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-4 transition-colors hover:bg-(--color-page-tint) sm:px-5 ${
        isLast ? "" : "border-b border-(--color-card-border)"
      }`}
    >
      <span className="w-6 text-right text-[14px] font-bold tabular-nums text-(--color-ink-50)">
        {entry.ranking}
      </span>
      <RiderAvatar
        name={entry.user.name}
        profilePicId={entry.user.profilepicid}
        size={40}
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-semibold text-(--color-ink)">
          {entry.user.name}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 truncate text-[12px] text-(--color-ink-60)">
          <CountryFlag country={entry.user.country} height={10} />
          <span className="truncate">
            {entry.spotName} · {entry.spotCountry}
          </span>
        </div>
      </div>
      <div className="text-right text-[18px] font-bold tabular-nums text-(--color-cyan-ink) sm:text-[20px]">
        {formatMetricValue(entry.value, metric)}
      </div>
    </div>
  );
}
