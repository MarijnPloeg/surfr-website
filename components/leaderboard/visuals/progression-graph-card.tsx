"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// =====================================================================
// Personal progression chart — 12 months of max-jump-height per month.
// Marketing visual only. Numbers are illustrative ("a rider improving
// over a season"), styled to match the home-page JumpGraphCard.
// =====================================================================

interface DataPoint {
  month: string;
  value: number;
}

const PROGRESSION: ReadonlyArray<DataPoint> = [
  { month: "J", value: 8.2 },
  { month: "F", value: 9.6 },
  { month: "M", value: 11.0 },
  { month: "A", value: 12.4 },
  { month: "M", value: 13.0 },
  { month: "J", value: 14.5 },
  { month: "J", value: 16.2 },
  { month: "A", value: 17.4 },
  { month: "S", value: 19.1 },
  { month: "O", value: 20.6 },
  { month: "N", value: 21.3 },
  { month: "D", value: 22.0 },
];

const Y_MAX = 24;

const VB_WIDTH = 320;
const VB_HEIGHT = 132;
const X_MIN = 30;
const X_MAX = 308;
const Y_TOP = 6;
const Y_BASELINE = 92;
const X_AXIS_LABEL_Y = 112;
const AXIS_FONT_SIZE = 10;

const xToScreen = (i: number) =>
  X_MIN + (i / (PROGRESSION.length - 1)) * (X_MAX - X_MIN);
const yToScreen = (v: number) =>
  Y_TOP + (1 - v / Y_MAX) * (Y_BASELINE - Y_TOP);

/** Catmull-Rom spline → cubic Bezier path, for smooth interpolation
 *  through the data points without a charting library. */
function smoothPath(points: ReadonlyArray<[number, number]>): {
  line: string;
  area: string;
} {
  if (points.length < 2) return { line: "", area: "" };

  let line = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i === 0 ? points[0] : points[i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i + 2 < points.length ? points[i + 2] : p2;

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    line += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }

  const last = points[points.length - 1];
  const area = `${line} L ${last[0].toFixed(2)} ${Y_BASELINE} L ${points[0][0].toFixed(2)} ${Y_BASELINE} Z`;

  return { line, area };
}

const Y_LABELS: ReadonlyArray<{ v: number; y: number }> = [
  { v: 24, y: yToScreen(24) },
  { v: 18, y: yToScreen(18) },
  { v: 12, y: yToScreen(12) },
  { v: 6, y: yToScreen(6) },
  { v: 0, y: yToScreen(0) },
];

const CARD_BG = "#20222A";
const CARD_RING = "rgba(255,255,255,0.06)";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_MUTED = "rgba(255,255,255,0.45)";
const TEXT_DIM = "rgba(255,255,255,0.55)";
const GRID = "rgba(255,255,255,0.07)";
const ACCENT_CYAN = "#1EB7D8";
const ACCENT_GREEN = "#3DD68C";

export function ProgressionGraphCard() {
  const points: [number, number][] = PROGRESSION.map((p, i) => [
    xToScreen(i),
    yToScreen(p.value),
  ]);
  const { line, area } = smoothPath(points);

  const first = PROGRESSION[0].value;
  const best = PROGRESSION[PROGRESSION.length - 1].value;
  const improvement = best - first;
  const peakX = xToScreen(PROGRESSION.length - 1);
  const peakY = yToScreen(best);

  return (
    <div
      style={{
        background: CARD_BG,
        borderRadius: 12,
        padding: 16,
        boxShadow: `inset 0 0 0 1px ${CARD_RING}, 0 24px 48px -18px rgba(10,25,41,0.45)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{ color: TEXT_PRIMARY, fontSize: 14, fontWeight: 600 }}
          >
            Your progression
          </span>
          <span style={{ color: TEXT_MUTED, fontSize: 11 }}>
            last 12 months
          </span>
        </div>
        <span style={{ color: ACCENT_CYAN, fontSize: 11, fontWeight: 500 }}>
          Open in app ›
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
        style={{ display: "block", width: "100%" }}
        role="img"
        aria-label={`Personal progression: max jump height grew from ${first.toFixed(1)}m to ${best.toFixed(1)}m over twelve months`}
      >
        <defs>
          <linearGradient id="progFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT_CYAN} stopOpacity="0.22" />
            <stop offset="100%" stopColor={ACCENT_CYAN} stopOpacity="0" />
          </linearGradient>
        </defs>

        {Y_LABELS.map(({ v, y }) => (
          <line
            key={`grid-${v}`}
            x1={X_MIN}
            x2={X_MAX}
            y1={y}
            y2={y}
            stroke={GRID}
            strokeWidth={0.75}
          />
        ))}

        {Y_LABELS.map(({ v, y }) => (
          <text
            key={`yl-${v}`}
            x={X_MIN - 6}
            y={y + AXIS_FONT_SIZE * 0.35}
            textAnchor="end"
            fontSize={AXIS_FONT_SIZE}
            fill={TEXT_DIM}
          >
            {v}m
          </text>
        ))}

        {PROGRESSION.map((p, i) => (
          <text
            key={`xl-${i}`}
            x={xToScreen(i)}
            y={X_AXIS_LABEL_Y}
            textAnchor="middle"
            fontSize={AXIS_FONT_SIZE}
            fill={TEXT_DIM}
          >
            {p.month}
          </text>
        ))}

        <motion.path
          d={area}
          fill="url(#progFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke={ACCENT_CYAN}
          strokeWidth={2.25}
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* Peak marker — pulsing dot at the latest, highest point */}
        <motion.circle
          cx={peakX}
          cy={peakY}
          r={3.5}
          fill={ACCENT_CYAN}
          stroke={CARD_BG}
          strokeWidth={2}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
        />
      </svg>

      <div
        style={{
          marginTop: 8,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 4,
        }}
      >
        <Kpi value={first.toFixed(1)} unit="m" label="First" />
        <Kpi value={best.toFixed(1)} unit="m" label="Best" />
        <Kpi
          value={`+${improvement.toFixed(1)}`}
          unit="m"
          label="Improvement"
          accent
        />
      </div>

      <div
        style={{
          marginTop: 10,
          paddingTop: 10,
          borderTop: `1px solid ${CARD_RING}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          fontSize: 10,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            color: ACCENT_GREEN,
            fontWeight: 600,
          }}
        >
          <TrendingUp size={11} strokeWidth={2.25} />
          Personal best, this season
        </span>
        <span style={{ color: TEXT_MUTED }}>47 sessions</span>
      </div>
    </div>
  );
}

interface KpiProps {
  value: string;
  unit: string;
  label: string;
  accent?: boolean;
}

function Kpi({ value, unit, label, accent }: KpiProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
        <span
          style={{
            color: accent ? ACCENT_GREEN : TEXT_PRIMARY,
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span
          style={{
            color: accent ? ACCENT_GREEN : TEXT_MUTED,
            fontSize: 10,
          }}
        >
          {unit}
        </span>
      </div>
      <div style={{ marginTop: 2, color: TEXT_DIM, fontSize: 10 }}>
        {label}
      </div>
    </div>
  );
}
