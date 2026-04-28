import Image from "next/image";
import { Watch } from "lucide-react";

interface WatchMockupProps {
  /** Path to a screenshot under /public/screenshots/. When omitted, an
   *  honest placeholder renders inside the bezel (still in device frame). */
  screenshot?: string;
  /** Required when `screenshot` is set — used as alt text. */
  alt?: string;
  /** Description rendered inside the placeholder when no screenshot is set. */
  fallbackDescribes?: string;
  /** Width is set via className (e.g. "w-[180px]"). Aspect ratio is fixed. */
  className?: string;
}

/**
 * WatchMockup — Apple Watch Ultra-style device frame around a watchOS screenshot.
 *
 * Aspect ratio fixed at 1:1.2. Includes digital crown + side button hints.
 * Drop screenshots in /public/screenshots/ (see that folder's README).
 */
export function WatchMockup({
  screenshot,
  alt,
  fallbackDescribes,
  className = "",
}: WatchMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[1/1.2] rounded-[22%] bg-[#1a1a1c] p-[6%] shadow-[0_20px_40px_-10px_rgba(10,25,41,0.3)]">
        <div
          aria-hidden
          className="absolute right-[-2.5%] top-[28%] h-[12%] w-[3.5%] rounded-r-[3px] bg-[#2a2a2c]"
        />
        <div
          aria-hidden
          className="absolute right-[-1.5%] top-[55%] h-[14%] w-[2.5%] rounded-r-[2px] bg-[#222224]"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[14%] bg-black">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={alt ?? "Surfr Apple Watch screenshot"}
              fill
              sizes="(max-width: 768px) 160px, 200px"
              className="object-cover"
            />
          ) : (
            <WatchPlaceholder
              describes={fallbackDescribes ?? "Watch face"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function WatchPlaceholder({ describes }: { describes: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-2 text-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(1,188,215,0.18), transparent 65%), linear-gradient(180deg, #0e1620 0%, #050b13 100%)",
      }}
      role="img"
      aria-label={`Watch placeholder: ${describes}`}
    >
      <Watch size={20} strokeWidth={1.25} className="text-(--color-cyan)" />
      <span className="mt-2 font-[family-name:var(--font-roboto-condensed)] text-[8px] font-bold uppercase tracking-[0.2em] text-(--color-cyan)">
        Watch
      </span>
      <span className="mt-1 max-w-[90%] text-[9px] leading-snug text-white/60">
        {describes}
      </span>
    </div>
  );
}
