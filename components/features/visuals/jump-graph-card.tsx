"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const PEAK_HEIGHT_M = 24;
const X_DOMAIN_START = 0;
const X_DOMAIN_END = 9;
const PEAK_T = 0.5;
const POWER_LEFT = 1.94;
const POWER_RIGHT = 1.41;

function jumpHeight(xSeconds: number): number {
  const t =
    (xSeconds - X_DOMAIN_START) / (X_DOMAIN_END - X_DOMAIN_START);
  if (t <= 0 || t >= 1) return 0;
  const sinT = Math.sin(Math.PI * t);
  const power = t <= PEAK_T ? POWER_LEFT : POWER_RIGHT;
  return PEAK_HEIGHT_M * Math.pow(sinT, power);
}

const VB_WIDTH = 300;
const VB_HEIGHT = 122;
const X_MIN = 32;
const X_MAX = 290;
const Y_TOP = 6;
const Y_BASELINE = 86;
const X_AXIS_LABEL_Y = 106;
const AXIS_FONT_SIZE = 11;

const xToScreen = (xSeconds: number) =>
  X_MIN + (xSeconds / 9) * (X_MAX - X_MIN);
const yToScreen = (heightM: number) =>
  Y_TOP + (1 - heightM / PEAK_HEIGHT_M) * (Y_BASELINE - Y_TOP);

function buildJumpPath(): { line: string; area: string } {
  const pts: string[] = [];
  for (let i = 0; i <= 90; i++) {
    const x = i / 10;
    const y = jumpHeight(x);
    pts.push(`${xToScreen(x).toFixed(2)} ${yToScreen(y).toFixed(2)}`);
  }
  const line = "M " + pts.join(" L ");
  const area = `${line} L ${X_MAX} ${Y_BASELINE} L ${X_MIN} ${Y_BASELINE} Z`;
  return { line, area };
}

const Y_LABELS: ReadonlyArray<{ v: number; y: number }> = [
  { v: 24, y: yToScreen(24) },
  { v: 18, y: yToScreen(18) },
  { v: 12, y: yToScreen(12) },
  { v: 6, y: yToScreen(6) },
  { v: 0, y: yToScreen(0) },
];

const X_TICKS: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CARD_BG = "#20222A";
const CARD_RING = "rgba(255,255,255,0.06)";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_MUTED = "rgba(255,255,255,0.45)";
const TEXT_DIM = "rgba(255,255,255,0.55)";
const GRID = "rgba(255,255,255,0.07)";
const ACCENT_CYAN = "#1EB7D8";
const ACCENT_AMBER = "#F4B73B";

export function JumpGraphCard() {
  const { line, area } = buildJumpPath();

  return (
    <div
      style={{
        background: CARD_BG,
        borderRadius: 12,
        padding: 14,
        boxShadow: `inset 0 0 0 1px ${CARD_RING}, 0 24px 48px -18px rgba(10,25,41,0.45)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{ color: TEXT_PRIMARY, fontSize: 14, fontWeight: 600 }}
          >
            Jump 27
          </span>
          <span style={{ color: TEXT_MUTED, fontSize: 11 }}>
            19:46 · Left
          </span>
        </div>
        <span
          style={{ color: ACCENT_CYAN, fontSize: 11, fontWeight: 500 }}
        >
          View jump ›
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
        style={{ display: "block", width: "100%" }}
        role="img"
        aria-label="Jump 27 height profile, peaking at 24 meters around 4 seconds"
      >
        <defs>
          <linearGradient id="jumpFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT_CYAN} stopOpacity="0.18" />
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
            x={X_MIN - 5}
            y={y + AXIS_FONT_SIZE * 0.35}
            textAnchor="end"
            fontSize={AXIS_FONT_SIZE}
            fill={TEXT_DIM}
          >
            {v}m
          </text>
        ))}

        {X_TICKS.map((t) => (
          <text
            key={`xl-${t}`}
            x={xToScreen(t)}
            y={X_AXIS_LABEL_Y}
            textAnchor="middle"
            fontSize={AXIS_FONT_SIZE}
            fill={TEXT_DIM}
          >
            {t}
          </text>
        ))}

        <motion.path
          d={area}
          fill="url(#jumpFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke={ACCENT_CYAN}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>

      <div
        style={{
          marginTop: 4,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 4,
        }}
      >
        <Kpi value="24.4" unit="m" label="Height" />
        <Kpi value="8.5" unit="s" label="Airtime" />
        <Kpi value="131" unit="m" label="Distance" />
        <Kpi value="61" unit="kmh" label="Max speed" />
      </div>

      <div
        style={{
          marginTop: 10,
          paddingTop: 10,
          borderTop: `1px solid ${CARD_RING}`,
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          fontSize: 9,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
          <Gauge size={10} strokeWidth={1.75} style={{ color: TEXT_MUTED }} />
          <span style={{ color: TEXT_PRIMARY, fontWeight: 500 }}>29 kmh</span>
          <span style={{ color: TEXT_MUTED }}>Speed on approach</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <span style={{ color: TEXT_MUTED }} aria-hidden>
              ↓
            </span>
            <span style={{ color: TEXT_PRIMARY, fontWeight: 500 }}>17°</span>
            <span style={{ color: TEXT_MUTED }}>upwind</span>
          </span>
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: 999,
              background: ACCENT_AMBER,
            }}
          />
          <span style={{ color: ACCENT_AMBER, fontWeight: 600 }}>OK</span>
        </span>
      </div>
    </div>
  );
}

interface KpiProps {
  value: string;
  unit: string;
  label: string;
}

function Kpi({ value, unit, label }: KpiProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
        <span
          style={{
            color: TEXT_PRIMARY,
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span style={{ color: TEXT_MUTED, fontSize: 10 }}>{unit}</span>
      </div>
      <div style={{ marginTop: 2, color: TEXT_DIM, fontSize: 10 }}>
        {label}
      </div>
    </div>
  );
}
