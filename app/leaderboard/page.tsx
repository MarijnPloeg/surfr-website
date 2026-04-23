"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LEADERBOARD_DATA,
  METRIC_LABELS,
  type LeaderboardMetric,
  type LeaderboardEntry,
} from "@/lib/leaderboard-data";
import { APP_STORE_URL } from "@/lib/constants";
import { Trophy } from "lucide-react";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

function PodiumCard({ entry, medal }: { entry: LeaderboardEntry; medal: string }) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl p-5 ${
        entry.rank === 1
          ? "bg-gradient-to-b from-amber-50 to-white shadow-[var(--shadow-md)]"
          : "bg-white shadow-[var(--shadow-sm)]"
      }`}
    >
      <span className="text-2xl">{medal}</span>
      <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#0d8fa8] text-sm font-bold text-white">
        {entry.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <p className="mt-2 text-center text-sm font-semibold text-[var(--color-dark)]">
        {entry.name}
      </p>
      <p className="text-xs text-[var(--color-muted)]">{entry.country}</p>
      <p className="mt-2 text-lg font-bold text-[var(--color-primary)]">
        {entry.value}
        {entry.unit}
      </p>
      <p className="text-xs text-[var(--color-muted)]">{entry.spot}</p>
    </div>
  );
}

export default function LeaderboardPage() {
  const [metric, setMetric] = useState<LeaderboardMetric>("height");
  const entries = LEADERBOARD_DATA[metric];
  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-dark)] pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
            Leaderboard
          </Badge>
          <h1 className="mt-4 text-white">
            Global Kitesurfing{" "}
            <span className="text-[var(--color-primary)]">Leaderboard</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-dark-muted)]">
            See who&apos;s pushing the limits. Rankings by jump height, distance,
            airtime, and speed — powered by Surfr.
          </p>
        </div>
      </section>

      {/* Metric tabs */}
      <section className="sticky top-[64px] z-40 border-b border-[var(--color-border)] bg-white/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] justify-center gap-2 px-6 md:px-8">
          {METRICS.map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                metric === m
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-light-bg)] text-[var(--color-secondary)] hover:bg-[var(--color-border)]"
              }`}
            >
              {METRIC_LABELS[m]}
            </button>
          ))}
        </div>
      </section>

      {/* Leaderboard content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          {/* Podium */}
          {top3.length >= 3 && (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12 grid grid-cols-3 items-end gap-3"
            >
              <PodiumCard entry={top3[1]} medal="🥈" />
              <PodiumCard entry={top3[0]} medal="🥇" />
              <PodiumCard entry={top3[2]} medal="🥉" />
            </motion.div>
          )}

          {/* Rest of the table */}
          {rest.length > 0 && (
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
              {rest.map((entry, i) => (
                <motion.div
                  key={`${metric}-${entry.rank}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex items-center gap-4 border-b border-[var(--color-border)] px-5 py-3.5 last:border-b-0"
                >
                  <span className="w-8 text-sm font-bold text-[var(--color-muted)]">
                    #{entry.rank}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-light-bg)] text-xs font-bold text-[var(--color-secondary)]">
                    {entry.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--color-dark)]">
                      {entry.name}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {entry.country}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[var(--color-primary)]">
                      {entry.value}
                      {entry.unit}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {entry.spot}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-[var(--color-light-bg)] p-8 text-center">
            <Trophy
              size={32}
              className="mx-auto text-[var(--color-primary)]"
            />
            <h3 className="mt-4 text-xl font-bold">
              Where do you rank?
            </h3>
            <p className="mt-2 text-sm text-[var(--color-secondary)]">
              Download Surfr to track your jumps and see your position on the
              global leaderboard.
            </p>
            <div className="mt-6">
              <Button href={APP_STORE_URL} external>
                Download Surfr
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
