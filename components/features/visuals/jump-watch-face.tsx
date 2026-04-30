import { Clock } from "lucide-react";

const STATUS_GREEN = "#2BD45F";
const TEXT_DIM = "rgba(255,255,255,0.65)";
const DIVIDER = "rgba(255,255,255,0.20)";

function RunnerIcon({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={STATUS_GREEN}
      aria-hidden
    >
      <circle cx="15" cy="3.5" r="2" />
      <path d="M9 9l3.5-1.6 3 .5 1.2 4.4-2 1.1-.8 4.1-2.6-3.1L13 11.6 9.5 11z" />
      <path d="M5.5 12l3.2.6 1 1.6-3.2 1.4z" />
    </svg>
  );
}

interface JumpWatchFaceProps {
  className?: string;
}

export function JumpWatchFace({ className = "" }: JumpWatchFaceProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative aspect-[1/1.2] rounded-[22%] bg-[#1a1a1c] p-[6%]"
        style={{ boxShadow: "0 20px 40px -10px rgba(10,25,41,0.30)" }}
      >
        <div
          aria-hidden
          className="absolute right-[-2.5%] top-[28%] h-[12%] w-[3.5%] rounded-r-[3px] bg-[#2a2a2c]"
        />
        <div
          aria-hidden
          className="absolute right-[-1.5%] top-[55%] h-[14%] w-[2.5%] rounded-r-[2px] bg-[#222224]"
        />
        <div
          className="relative h-full w-full overflow-hidden rounded-[14%]"
          style={{
            background: "#000",
            color: "#fff",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: "10% 7% 8%",
              gap: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 7,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Clock size={7} strokeWidth={2.5} />
                <span>1:32</span>
              </span>
              <span
                aria-hidden
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 99,
                  background: STATUS_GREEN,
                }}
              />
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <RunnerIcon size={8} />
                <span>18:41</span>
              </span>
            </div>

            <MetricsRow
              borderTop
              borderBottom
              cells={[
                { value: "32", unit: "kmh" },
                { value: "112", unit: "bpm" },
                { value: "24.4", unit: "mt" },
              ]}
            />

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              24.4
            </div>

            <MetricsRow
              borderTop
              cells={[
                { value: "56", unit: "km" },
                { value: "24.4", unit: "mt" },
                { value: "8.5", unit: "sec" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface Cell {
  value: string;
  unit: string;
}

interface MetricsRowProps {
  cells: ReadonlyArray<Cell>;
  borderTop?: boolean;
  borderBottom?: boolean;
}

function MetricsRow({ cells, borderTop, borderBottom }: MetricsRowProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
        alignItems: "stretch",
        padding: "5% 0",
        borderTop: borderTop ? `0.5px solid ${DIVIDER}` : undefined,
        borderBottom: borderBottom ? `0.5px solid ${DIVIDER}` : undefined,
      }}
    >
      <CellView {...cells[0]} />
      <div style={{ background: DIVIDER }} />
      <CellView {...cells[1]} />
      <div style={{ background: DIVIDER }} />
      <CellView {...cells[2]} />
    </div>
  );
}

function CellView({ value, unit }: Cell) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 800, lineHeight: 1.1 }}>
        {value}
      </span>
      <span
        style={{
          fontSize: 7,
          fontWeight: 500,
          color: TEXT_DIM,
        }}
      >
        {unit}
      </span>
    </div>
  );
}
