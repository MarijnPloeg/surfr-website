"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Database, Users, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DisplayHeading, Lede, FeatureHeading } from "@/components/ui/headings";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  LEADERBOARD_DATA,
  METRIC_LABELS,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import { APP_STORE_URL } from "@/lib/constants";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

/**
 * Leaderboard — three layers of motivation:
 *   1. World records — the dream (top of page)
 *   2. Your tribe   — filterable boards (middle, where inclusivity lives)
 *   3. Personal    — your own progression (bottom, deepest motivator)
 *
 * All three depend on the live backend. Until /api/leaderboard ships,
 * each layer renders an honest "coming via API" empty state instead of
 * fabricated values attributed to real pros.
 *
 * Backend spec: docs/leaderboard-backend-spec.md
 */
export default function LeaderboardPage() {
  const [metric, setMetric] = useState<LeaderboardMetric>("height");
  const entries = LEADERBOARD_DATA[metric];
  const hasData = entries.length > 0;

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

      {/* LAYER 1 — WORLD RECORDS */}
      <section className="border-y border-(--color-divider) bg-(--color-page-tint) py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-6 md:px-8">
          <div className="text-center">
            <Eyebrow>Layer 1 · World records</Eyebrow>
            <FeatureHeading className="mt-5">
              The numbers everyone <em>chases</em>.
            </FeatureHeading>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-(--color-ink-75)">
              Verified peaks, by metric. Source: Surfr backend (top-N from
              opted-in riders).
            </p>
          </div>

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

          {/* Empty state */}
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
                Coming via API
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
                The world-record table will populate from the Surfr backend
                once <code className="rounded bg-(--color-page-tint) px-1.5 py-0.5 font-mono text-[12px]">/api/leaderboard</code> ships.
                See <span className="font-mono text-[12px]">docs/leaderboard-backend-spec.md</span>{" "}
                for the contract.
              </p>
            </motion.div>
          )}

          {/* Data state — kept for when LEADERBOARD_DATA is wired */}
          {hasData && (
            <div className="mx-auto mt-10 max-w-xl">
              {/* Future: Podium + table render here. Component stays simple
                  on purpose — heavy interaction belongs in the app. */}
            </div>
          )}
        </div>
      </section>

      {/* LAYER 2 — YOUR TRIBE */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-6 md:px-8">
          <div className="text-center">
            <Eyebrow>Layer 2 · Your tribe</Eyebrow>
            <FeatureHeading className="mt-5">
              Find the board where <em>you count</em>.
            </FeatureHeading>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-(--color-ink-75)">
              Filter by spot, region, gender, age, skill bracket, gear type.
              Everyone is top-10 of something.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "By spot",
              "By region",
              "By gender",
              "By age bracket",
              "By skill level",
              "By kite size",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) px-5 py-4 opacity-90"
              >
                <Users size={18} className="text-(--color-cyan-ink)" />
                <span className="text-[15px] font-medium text-(--color-ink)">
                  {label}
                </span>
                <span className="ml-auto text-[11px] font-semibold uppercase tracking-[0.14em] text-(--color-ink-50)">
                  Soon
                </span>
              </div>
            ))}
          </div>
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
              <div className="flex h-[300px] w-full max-w-[420px] flex-col items-center justify-center rounded-(--radius-md) border-2 border-dashed border-(--color-ink-15) bg-(--color-card) p-8">
                <LineChart
                  size={32}
                  strokeWidth={1.25}
                  className="text-(--color-ink-35)"
                />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
                  Personal POP chart
                </p>
                <p className="mt-1.5 max-w-[80%] text-center text-[12px] text-(--color-ink-60)">
                  In-app only. Your height curve over time.
                </p>
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
