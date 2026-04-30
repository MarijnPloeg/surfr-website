import Image from "next/image";
import { Watch } from "lucide-react";

interface WearOsMockupProps {
  /** Path to a screenshot under /public/screenshots/. When omitted, an
   *  honest placeholder renders inside the bezel. */
  screenshot?: string;
  alt?: string;
  fallbackDescribes?: string;
  /** Width set via className (e.g. "w-[100px]"). Aspect locked to 1:1. */
  className?: string;
}

/**
 * WearOsMockup — round Wear OS / Galaxy Watch style frame.
 * Two side buttons on the right. Sleek, minimalist bezel. Aspect 1:1.
 */
export function WearOsMockup({
  screenshot,
  alt,
  fallbackDescribes,
  className = "",
}: WearOsMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-square rounded-full bg-[#1a1a1c] p-[6%] shadow-[0_20px_40px_-10px_rgba(10,25,41,0.3)]">
        {/* Right-side buttons (home + back) */}
        <div
          aria-hidden
          className="absolute right-[-2.5%] top-[32%] h-[12%] w-[3.5%] rounded-r-[3px] bg-[#2a2a2c]"
        />
        <div
          aria-hidden
          className="absolute right-[-1.5%] top-[58%] h-[10%] w-[2.5%] rounded-r-[2px] bg-[#222224]"
        />
        <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={alt ?? "Surfr Wear OS screenshot"}
              fill
              sizes="(max-width: 768px) 120px, 160px"
              className="object-cover"
            />
          ) : (
            <Placeholder describes={fallbackDescribes ?? "Wear OS face"} />
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
      aria-label={`Wear OS placeholder: ${describes}`}
    >
      <Watch size={18} strokeWidth={1.25} className="text-(--color-cyan)" />
      <span className="mt-1 font-[family-name:var(--font-roboto-condensed)] text-[8px] font-bold uppercase tracking-[0.2em] text-(--color-cyan)">
        Wear OS
      </span>
    </div>
  );
}
