import Image from "next/image";
import { Smartphone } from "lucide-react";

interface PhoneMockupProps {
  /** Path to a screenshot under /public/screenshots/. When omitted, an
   *  honest placeholder renders inside the bezel (still in device frame). */
  screenshot?: string;
  /** Required when `screenshot` is set — used as alt text. */
  alt?: string;
  /** Description rendered inside the placeholder when no screenshot is set.
   *  Surfaced in docs/INPUT_NEEDED.md so the user knows what to capture. */
  fallbackDescribes?: string;
  /** Width is set via className (e.g. "w-[280px]"). Aspect ratio is fixed. */
  className?: string;
  /** Hint for next/image priority loading (above-the-fold mockups). */
  priority?: boolean;
}

/**
 * PhoneMockup — iPhone-style device frame around an app screenshot.
 *
 * Strava-style: dark bezel, dynamic island, no fake side buttons.
 * Aspect ratio fixed at 9:19.5 (iPhone 15 Pro class).
 *
 * Drop screenshots in /public/screenshots/ — see that folder's README
 * for naming conventions.
 */
export function PhoneMockup({
  screenshot,
  alt,
  fallbackDescribes,
  className = "",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] [border-radius:14%/6.4%] bg-[#0e0e10] p-[3%] shadow-[0_30px_60px_-15px_rgba(10,25,41,0.25)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden [border-radius:11%/5%] bg-white">
        <div
          aria-hidden
          className="absolute left-1/2 top-[1.6%] z-10 h-[2.4%] w-[28%] -translate-x-1/2 rounded-full bg-[#0e0e10]"
        />
        {screenshot ? (
          <Image
            src={screenshot}
            alt={alt ?? "Surfr app screenshot"}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <PhonePlaceholder describes={fallbackDescribes ?? "App screenshot"} />
        )}
      </div>
    </div>
  );
}

function PhonePlaceholder({ describes }: { describes: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(160deg, rgba(1,188,215,0.10) 0%, rgba(1,188,215,0.04) 45%, rgba(246,248,250,1) 100%)",
      }}
      role="img"
      aria-label={`Screenshot placeholder: ${describes}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(1,188,215,0.18), transparent 55%)",
        }}
      />
      <div className="relative flex flex-col items-center">
        <Smartphone
          size={28}
          strokeWidth={1.25}
          className="text-(--color-cyan-ink)"
        />
        <span className="mt-3 font-[family-name:var(--font-roboto-condensed)] text-[9px] font-bold uppercase tracking-[0.2em] text-(--color-cyan-ink)">
          Screenshot
        </span>
        <span className="mt-1.5 max-w-[80%] text-center text-[11px] leading-snug text-(--color-ink-60)">
          {describes}
        </span>
      </div>
    </div>
  );
}
