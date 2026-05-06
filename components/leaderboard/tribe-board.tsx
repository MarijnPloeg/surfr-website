"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Loader2, X, SlidersHorizontal } from "lucide-react";
import {
  METRIC_LABELS,
  type LeaderboardMetric,
} from "@/lib/leaderboard-data";
import type { LeaderboardEntry, Period } from "@/lib/leaderboard-api";
import { LeaderboardDisplay } from "@/components/leaderboard/leaderboard-display";

const METRICS: LeaderboardMetric[] = ["height", "distance", "airtime", "speed"];

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "alltime", label: "All time" },
  { value: "monthly", label: "This month" },
  { value: "weekly", label: "This week" },
  { value: "daily", label: "Today" },
];

const GENDER_OPTIONS = [
  { value: "", label: "All genders" },
  { value: "male", label: "Men" },
  { value: "female", label: "Women" },
];

const AGE_OPTIONS = [
  { value: "", label: "All ages" },
  { value: "u18", label: "Under 18" },
  { value: "18-25", label: "18 – 25" },
  { value: "26-35", label: "26 – 35" },
  { value: "36-45", label: "36 – 45" },
  { value: "46-55", label: "46 – 55" },
  { value: "55+", label: "55+" },
];

const SKILL_OPTIONS = [
  { value: "", label: "All levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
];

const BOARDTYPE_OPTIONS = [
  { value: "", label: "All boards" },
  { value: "twintip", label: "Twintip" },
  { value: "foil", label: "Foil" },
  { value: "wingfoiling", label: "Wing" },
  { value: "windsurfing", label: "Windsurf" },
  { value: "directional", label: "Directional" },
];

const KITESIZE_OPTIONS = [
  { value: "", label: "All kite sizes" },
  { value: "7", label: "7m" },
  { value: "8", label: "8m" },
  { value: "9", label: "9m" },
  { value: "10", label: "10m" },
  { value: "11", label: "11m" },
  { value: "12", label: "12m" },
  { value: "13", label: "13m" },
  { value: "14", label: "14m" },
  { value: "15", label: "15m" },
];

interface SpotOption {
  spotId: number;
  spotName: string;
  spotCountry: string;
}

interface TribeBoardProps {
  spots: SpotOption[];
}

interface FilterState {
  metric: LeaderboardMetric;
  period: Period;
  gender: string;
  ageBracket: string;
  skillLevel: string;
  boardtype: string;
  kitesize: string;
  spotid: string;
}

const DEFAULT_FILTERS: FilterState = {
  metric: "height",
  period: "alltime",
  gender: "",
  ageBracket: "",
  skillLevel: "",
  boardtype: "",
  kitesize: "",
  spotid: "",
};

function buildBffUrl(filters: FilterState): string {
  const { metric, period } = filters;
  const params = new URLSearchParams();
  params.set("customLimit", "10");
  if (filters.gender) params.set("gender", filters.gender);
  if (filters.ageBracket) params.set("ageBracket", filters.ageBracket);
  if (filters.skillLevel) params.set("skillLevel", filters.skillLevel);
  if (filters.boardtype) params.set("boardtype", filters.boardtype);
  if (filters.kitesize) params.set("kitesize", filters.kitesize);
  if (filters.spotid) params.set("spotid", filters.spotid);
  return `/api/leaderboard/list/${metric}/${period}/0?${params.toString()}`;
}

function countActiveFilters(f: FilterState): number {
  let n = 0;
  if (f.period !== "alltime") n++;
  if (f.gender) n++;
  if (f.ageBracket) n++;
  if (f.skillLevel) n++;
  if (f.boardtype) n++;
  if (f.kitesize) n++;
  if (f.spotid) n++;
  return n;
}

/**
 * Active-filter summaries for the mobile chip row. Returns just the
 * non-default values so the chip row stays compact.
 */
function activeChipLabels(
  f: FilterState,
  spots: SpotOption[],
): string[] {
  const labels: string[] = [];
  if (f.period !== "alltime") {
    labels.push(label(PERIOD_OPTIONS, f.period));
  }
  if (f.gender) labels.push(label(GENDER_OPTIONS, f.gender));
  if (f.ageBracket) labels.push(label(AGE_OPTIONS, f.ageBracket));
  if (f.skillLevel) labels.push(label(SKILL_OPTIONS, f.skillLevel));
  if (f.boardtype) labels.push(label(BOARDTYPE_OPTIONS, f.boardtype));
  if (f.kitesize) labels.push(`${f.kitesize}m`);
  if (f.spotid) {
    const spot = spots.find((s) => String(s.spotId) === f.spotid);
    if (spot) labels.push(spot.spotName);
  }
  return labels;
}

function label(
  options: readonly { value: string; label: string }[],
  value: string,
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

export function TribeBoard({ spots }: TribeBoardProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [entries, setEntries] = useState<LeaderboardEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const activeCount = useMemo(() => countActiveFilters(filters), [filters]);
  const activeLabels = useMemo(
    () => activeChipLabels(filters, spots),
    [filters, spots],
  );
  const url = useMemo(() => buildBffUrl(filters), [filters]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((r) => {
        if (r.status === 204) return [];
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: LeaderboardEntry[]) => {
        if (!cancelled) setEntries(Array.isArray(data) ? data : []);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setEntries([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    if (!sheetOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [sheetOpen]);

  const update = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ) => setFilters((prev) => ({ ...prev, [key]: value }));

  const clearAll = () => setFilters(DEFAULT_FILTERS);

  return (
    <>
      {/* Metric tabs */}
      <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-1">
        {METRICS.map((m) => (
          <button
            key={m}
            onClick={() => update("metric", m)}
            className={`rounded-full px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-colors ${
              filters.metric === m
                ? "bg-(--color-cyan) text-black shadow-[var(--shadow-cyan-soft)]"
                : "bg-(--color-card) text-(--color-ink-75) ring-1 ring-(--color-card-border) hover:text-(--color-ink)"
            }`}
          >
            {METRIC_LABELS[m]}
          </button>
        ))}
      </div>

      {/* DESKTOP — horizontal pill row */}
      <div className="mx-auto mt-6 hidden max-w-5xl sm:block">
        <div className="flex flex-wrap items-center gap-2">
          <FilterPill
            value={filters.period}
            onChange={(v) => update("period", v as Period)}
            options={PERIOD_OPTIONS}
            isDefault={filters.period === "alltime"}
          />
          <FilterPill
            value={filters.gender}
            onChange={(v) => update("gender", v)}
            options={GENDER_OPTIONS}
            isDefault={filters.gender === ""}
          />
          <FilterPill
            value={filters.ageBracket}
            onChange={(v) => update("ageBracket", v)}
            options={AGE_OPTIONS}
            isDefault={filters.ageBracket === ""}
          />
          <FilterPill
            value={filters.skillLevel}
            onChange={(v) => update("skillLevel", v)}
            options={SKILL_OPTIONS}
            isDefault={filters.skillLevel === ""}
          />
          <FilterPill
            value={filters.boardtype}
            onChange={(v) => update("boardtype", v)}
            options={BOARDTYPE_OPTIONS}
            isDefault={filters.boardtype === ""}
          />
          <FilterPill
            value={filters.kitesize}
            onChange={(v) => update("kitesize", v)}
            options={KITESIZE_OPTIONS}
            isDefault={filters.kitesize === ""}
          />
          <FilterPill
            value={filters.spotid}
            onChange={(v) => update("spotid", v)}
            options={[
              { value: "", label: "All spots" },
              ...spots.map((s) => ({
                value: String(s.spotId),
                label: `${s.spotName} · ${s.spotCountry}`,
              })),
            ]}
            isDefault={filters.spotid === ""}
          />
          {activeCount > 0 && (
            <button
              onClick={clearAll}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-(--color-cyan-15) px-3 py-1.5 text-[12px] font-semibold text-(--color-cyan-ink) hover:bg-(--color-cyan-30)"
            >
              <X size={12} strokeWidth={2.5} />
              Clear {activeCount} filter{activeCount === 1 ? "" : "s"}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE — Filters button + active-chip scroll */}
      <div className="mt-6 flex items-center gap-2 sm:hidden">
        <button
          onClick={() => setSheetOpen(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-(--color-cyan) px-4 py-2 text-[13px] font-semibold text-black shadow-[var(--shadow-cyan-soft)]"
          aria-label="Open filters"
        >
          <SlidersHorizontal size={14} strokeWidth={2.5} />
          Filters
          {activeCount > 0 && (
            <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1.5 text-[11px] font-bold text-(--color-cyan)">
              {activeCount}
            </span>
          )}
        </button>

        {activeLabels.length > 0 ? (
          <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-0.5">
            {activeLabels.map((l) => (
              <span
                key={l}
                className="inline-flex shrink-0 items-center rounded-full bg-(--color-cyan-15) px-3 py-1 text-[12px] font-semibold text-(--color-cyan-ink)"
              >
                {l}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-[12px] text-(--color-ink-50)">
            No filters active
          </span>
        )}
      </div>

      {/* Filter bottom sheet (mobile only) */}
      <AnimatePresence>
        {sheetOpen && (
          <FilterSheet
            filters={filters}
            spots={spots}
            activeCount={activeCount}
            onUpdate={update}
            onClear={clearAll}
            onClose={() => setSheetOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Results */}
      {loading && entries === null && (
        <div className="mt-10 flex flex-col items-center gap-3 text-(--color-ink-50)">
          <Loader2 size={24} className="animate-spin" />
          <span className="text-[13px]">Loading…</span>
        </div>
      )}

      {entries !== null && !error && (
        <div className={loading ? "opacity-60 transition-opacity" : ""}>
          <LeaderboardDisplay
            entries={entries}
            metric={filters.metric}
            emptyMessage="No entries match these filters yet. Try widening the search."
          />
        </div>
      )}

      {error && (
        <div className="mx-auto mt-8 max-w-xl rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-center">
          <p className="text-[14px] text-(--color-ink-75)">
            Couldn&apos;t load that combination. Try adjusting the filters or
            check back in a moment.
          </p>
        </div>
      )}
    </>
  );
}

interface FilterPillProps {
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
  isDefault: boolean;
}

function FilterPill({ value, onChange, options, isDefault }: FilterPillProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-full py-1.5 pl-4 pr-8 text-[13px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-cyan-30) ${
          isDefault
            ? "bg-(--color-card) text-(--color-ink-75) ring-1 ring-(--color-card-border) hover:text-(--color-ink)"
            : "bg-(--color-cyan-15) text-(--color-cyan-ink) ring-1 ring-(--color-cyan-30)"
        }`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-(--color-ink-50)"
      >
        ▾
      </span>
    </div>
  );
}

interface FilterSheetProps {
  filters: FilterState;
  spots: SpotOption[];
  activeCount: number;
  onUpdate: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onClear: () => void;
  onClose: () => void;
}

function FilterSheet({
  filters,
  spots,
  activeCount,
  onUpdate,
  onClear,
  onClose,
}: FilterSheetProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] sm:hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-(--color-page) shadow-[0_-12px_32px_-8px_rgba(10,25,41,0.25)]"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        role="dialog"
        aria-label="Filters"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3">
          <span className="h-1 w-10 rounded-full bg-(--color-ink-15)" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-(--color-ink-75)" />
            <h3 className="text-[18px] font-bold text-(--color-ink)">
              Filters
            </h3>
            {activeCount > 0 && (
              <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-(--color-cyan-15) px-2 text-[12px] font-bold text-(--color-cyan-ink)">
                {activeCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="-m-2 p-2 text-(--color-ink-75) hover:text-(--color-ink)"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Body — vertical filter list */}
        <div className="space-y-4 px-5 pb-5">
          <SheetSelect
            label="Period"
            value={filters.period}
            onChange={(v) => onUpdate("period", v as Period)}
            options={PERIOD_OPTIONS}
          />
          <SheetSelect
            label="Gender"
            value={filters.gender}
            onChange={(v) => onUpdate("gender", v)}
            options={GENDER_OPTIONS}
          />
          <SheetSelect
            label="Age"
            value={filters.ageBracket}
            onChange={(v) => onUpdate("ageBracket", v)}
            options={AGE_OPTIONS}
          />
          <SheetSelect
            label="Skill"
            value={filters.skillLevel}
            onChange={(v) => onUpdate("skillLevel", v)}
            options={SKILL_OPTIONS}
          />
          <SheetSelect
            label="Board type"
            value={filters.boardtype}
            onChange={(v) => onUpdate("boardtype", v)}
            options={BOARDTYPE_OPTIONS}
          />
          <SheetSelect
            label="Kite size"
            value={filters.kitesize}
            onChange={(v) => onUpdate("kitesize", v)}
            options={KITESIZE_OPTIONS}
          />
          <SheetSelect
            label="Spot"
            value={filters.spotid}
            onChange={(v) => onUpdate("spotid", v)}
            options={[
              { value: "", label: "All spots" },
              ...spots.map((s) => ({
                value: String(s.spotId),
                label: `${s.spotName} · ${s.spotCountry}`,
              })),
            ]}
          />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center gap-3 border-t border-(--color-divider) bg-(--color-page) px-5 py-4">
          <button
            onClick={onClear}
            disabled={activeCount === 0}
            className="text-[14px] font-semibold text-(--color-ink-75) disabled:opacity-40"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="ml-auto rounded-(--radius-md) bg-(--color-cyan) px-6 py-3 text-[14px] font-semibold text-black shadow-[var(--shadow-cyan-soft)]"
          >
            Show results
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface SheetSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
}

function SheetSelect({ label, value, onChange, options }: SheetSelectProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) px-4 py-3 pr-10 text-[15px] font-medium text-(--color-ink) focus:outline-none focus:ring-2 focus:ring-(--color-cyan-30)"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
