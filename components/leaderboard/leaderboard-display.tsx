"use client";

import { motion } from "framer-motion";
import { Crown, Database, Calendar, Wind } from "lucide-react";
import {
  METRIC_LABELS,
  formatMetricValue,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import type { LeaderboardEntry } from "@/lib/leaderboard-api";
import { RiderAvatar } from "@/components/leaderboard/rider-avatar";
import { CountryFlag } from "@/components/leaderboard/country-flag";

interface LeaderboardDisplayProps {
  entries: LeaderboardEntry[];
  metric: LeaderboardMetric;
  emptyMessage?: string;
}

/**
 * Shared leaderboard display: podium for top 3, ranked list for the rest.
 * The same visual treatment is used by world records (Layer 1) and the
 * tribe board (Layer 2).
 */
export function LeaderboardDisplay({
  entries,
  metric,
  emptyMessage,
}: LeaderboardDisplayProps) {
  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  if (entries.length === 0) {
    return <EmptyState metric={metric} message={emptyMessage} />;
  }

  return (
    <motion.div
      key={metric}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-8"
    >
      <Podium top3={top3} metric={metric} />
      {rest.length > 0 && <RankList rows={rest} metric={metric} />}
    </motion.div>
  );
}

function EmptyState({
  metric,
  message,
}: {
  metric: LeaderboardMetric;
  message?: string;
}) {
  return (
    <motion.div
      key={metric}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto mt-8 max-w-xl rounded-(--radius-md) border-2 border-dashed border-(--color-ink-15) bg-(--color-card) p-10 text-center"
    >
      <Database
        size={28}
        strokeWidth={1.5}
        className="mx-auto text-(--color-ink-35)"
      />
      <p className="mt-4 font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
        No entries
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
        {message ??
          `No ${METRIC_LABELS[metric].toLowerCase()} entries match these filters yet.`}
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
  const avatarSize = isFirst ? 96 : 72;

  return (
    <div
      className={`relative flex flex-col items-center rounded-(--radius-md) border bg-(--color-card) px-4 pt-9 pb-5 text-center transition-shadow ${
        isFirst
          ? "border-(--color-cyan) shadow-[var(--shadow-cyan-soft)]"
          : "border-(--color-card-border)"
      }`}
    >
      {isFirst && (
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) p-2 text-black shadow-[var(--shadow-cyan-soft)]"
          aria-label="First place"
        >
          <Crown size={18} strokeWidth={2.5} />
        </div>
      )}

      <span
        className={`absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-bold tabular-nums ${
          isFirst
            ? "bg-(--color-cyan-30) text-(--color-cyan-ink)"
            : "bg-(--color-cyan-15) text-(--color-cyan-ink)"
        }`}
      >
        {position}
      </span>

      <RiderAvatar
        name={entry.user.name}
        profilePicId={entry.user.profilepicid}
        size={avatarSize}
      />

      <div
        className={`mt-3 line-clamp-1 font-bold text-(--color-ink) ${
          isFirst ? "text-[16px]" : "text-[14px]"
        }`}
      >
        {entry.user.name}
      </div>

      <div className="mt-1 flex items-center justify-center gap-1.5 text-[12px] text-(--color-ink-60)">
        <CountryFlag country={entry.user.country} height={10} />
        <span className="line-clamp-1 max-w-[18ch]">{entry.spotName}</span>
      </div>

      <div
        className={`mt-3 font-bold tabular-nums text-(--color-cyan-ink) ${
          isFirst ? "text-[32px]" : "text-[24px]"
        }`}
      >
        {formatMetricValue(entry.value, metric)}
      </div>

      <div className="mt-1 text-[11px] text-(--color-ink-50)">
        {formatDate(entry.sessionDatetime)}
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
  const [first, second, third] = top3;

  return (
    <div className="mx-auto max-w-[840px]">
      <div className="grid grid-cols-3 items-stretch gap-3 sm:gap-4">
        <div>
          {second && <PodiumCard entry={second} metric={metric} position={2} />}
        </div>
        <div className="-translate-y-3 sm:-translate-y-4">
          {first && <PodiumCard entry={first} metric={metric} position={1} />}
        </div>
        <div>
          {third && <PodiumCard entry={third} metric={metric} position={3} />}
        </div>
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
    <div className="mx-auto mt-10 max-w-5xl">
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
      className={`grid grid-cols-[44px_44px_1fr_auto] items-center gap-3 px-4 py-3.5 transition-colors hover:bg-(--color-page-tint) sm:grid-cols-[48px_48px_2fr_1fr_1fr_auto] sm:gap-4 sm:px-5 sm:py-4 ${
        isLast ? "" : "border-b border-(--color-card-border)"
      }`}
    >
      {/* Rank */}
      <span className="text-right text-[14px] font-bold tabular-nums text-(--color-ink-50) sm:text-[15px]">
        {entry.ranking}
      </span>

      {/* Avatar */}
      <RiderAvatar
        name={entry.user.name}
        profilePicId={entry.user.profilepicid}
        size={40}
      />

      {/* Rider + flag (always) — adds spot inline on mobile, stacks on sm+ */}
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 truncate text-[15px] font-semibold text-(--color-ink)">
          <CountryFlag country={entry.user.country} height={10} />
          <span className="truncate">{entry.user.name}</span>
        </div>
        <div className="mt-0.5 truncate text-[12px] text-(--color-ink-60) sm:hidden">
          {entry.spotName} · {formatDate(entry.sessionDatetime)}
        </div>
      </div>

      {/* Spot column — sm+ only */}
      <div className="hidden min-w-0 sm:block">
        <div className="truncate text-[13px] font-medium text-(--color-ink)">
          {entry.spotName}
        </div>
        <div className="truncate text-[11px] text-(--color-ink-50)">
          {entry.spotCountry}
        </div>
      </div>

      {/* Date + kite — sm+ only */}
      <div className="hidden min-w-0 sm:block">
        <div className="flex items-center gap-1.5 truncate text-[12px] text-(--color-ink-75)">
          <Calendar size={12} className="shrink-0 text-(--color-ink-35)" />
          {formatDate(entry.sessionDatetime)}
        </div>
        {entry.kite && (
          <div className="mt-0.5 flex items-center gap-1.5 truncate text-[11px] text-(--color-ink-50)">
            <Wind size={11} className="shrink-0 text-(--color-ink-35)" />
            <span className="truncate">{entry.kite}</span>
          </div>
        )}
      </div>

      {/* Value */}
      <div className="text-right text-[16px] font-bold tabular-nums text-(--color-cyan-ink) sm:text-[20px]">
        {formatMetricValue(entry.value, metric)}
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
}
