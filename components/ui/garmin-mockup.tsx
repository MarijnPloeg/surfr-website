import Image from "next/image";
import { Watch } from "lucide-react";

interface GarminMockupProps {
  /** Path to a screenshot under /public/screenshots/. When omitted, an
   *  honest placeholder renders inside the bezel. */
  screenshot?: string;
  alt?: string;
  fallbackDescribes?: string;
  /** Width set via className (e.g. "w-[100px]"). Aspect locked to 1:1. */
  className?: string;
}

/**
 * GarminMockup — round Garmin Fenix-style frame.
 * Five buttons: three on the left (LIGHT, UP, DOWN), two on the right
 * (START, BACK). Thicker bezel for rugged outdoor feel. Aspect 1:1.
 */
export function GarminMockup({
  screenshot,
  alt,
  fallbackDescribes,
  className = "",
}: GarminMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-square rounded-full bg-[#15171a] p-[9%] shadow-[0_20px_40px_-10px_rgba(10,25,41,0.3)]">
        {/* Inner bezel ring — Fenix has a visible metallic bezel */}
        <div
          aria-hidden
          className="absolute inset-[5%] rounded-full border border-[#2a2d31]"
        />

        {/* Left-side: 3 buttons (LIGHT, UP, DOWN) */}
        <div
          aria-hidden
          className="absolute left-[-2.5%] top-[22%] h-[8%] w-[3.5%] rounded-l-[3px] bg-[#2a2d31]"
        />
        <div
          aria-hidden
          className="absolute left-[-2.5%] top-[46%] h-[8%] w-[3.5%] rounded-l-[3px] bg-[#2a2d31]"
        />
        <div
          aria-hidden
          className="absolute left-[-2.5%] top-[70%] h-[8%] w-[3.5%] rounded-l-[3px] bg-[#2a2d31]"
        />

        {/* Right-side: 2 buttons (START/STOP, BACK) */}
        <div
          aria-hidden
          className="absolute right-[-3%] top-[30%] h-[11%] w-[4%] rounded-r-[3px] bg-[#2a2d31]"
        />
        <div
          aria-hidden
          className="absolute right-[-2.5%] top-[60%] h-[10%] w-[3.5%] rounded-r-[3px] bg-[#2a2d31]"
        />

        <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={alt ?? "Surfr Garmin screenshot"}
              fill
              sizes="(max-width: 768px) 120px, 160px"
              className="object-cover"
            />
          ) : (
            <Placeholder describes={fallbackDescribes ?? "Garmin face"} />
          )}
        </div>
      </div>
    </div>
  );
}

function Placeholder({ describes }: { describes: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-2 text-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(1,188,215,0.18), transparent 65%), linear-gradient(180deg, #0e1620 0%, #050b13 100%)",
      }}
      role="img"
      aria-label={`Garmin placeholder: ${describes}`}
    >
      <Watch size={18} strokeWidth={1.25} className="text-(--color-cyan)" />
      <span className="mt-1 font-[family-name:var(--font-roboto-condensed)] text-[8px] font-bold uppercase tracking-[0.2em] text-(--color-cyan)">
        Garmin
      </span>
    </div>
  );
}
