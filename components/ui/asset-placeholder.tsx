import { Image as ImageIcon, Camera, Smartphone, Watch } from "lucide-react";

type Kind = "screenshot" | "photo" | "logo" | "headshot" | "watch";

interface AssetPlaceholderProps {
  kind: Kind;
  /** Short description of what should go here. Surfaced in the placeholder
   *  AND in docs/INPUT_NEEDED.md so the user knows what to source. */
  describes: string;
  aspectRatio?: string; // e.g. "9/19.5" for phone screen, "16/9" for photo
  className?: string;
  rounded?: "md" | "lg" | "xl";
}

const icons = {
  screenshot: Smartphone,
  photo: Camera,
  logo: ImageIcon,
  headshot: Camera,
  watch: Watch,
} as const;

const labels: Record<Kind, string> = {
  screenshot: "Screenshot",
  photo: "Photo",
  logo: "Logo",
  headshot: "Headshot",
  watch: "Watch UI",
};

const radii = {
  md: "rounded-(--radius-md)",
  lg: "rounded-(--radius-lg)",
  xl: "rounded-(--radius-xl)",
} as const;

/**
 * AssetPlaceholder — explicitly-marked "real asset goes here" slot.
 * Better than a gradient mockup pretending to be a screenshot.
 * Always honest: shows what the asset is supposed to be.
 *
 * Tracked in docs/INPUT_NEEDED.md.
 */
export function AssetPlaceholder({
  kind,
  describes,
  aspectRatio = "9/19.5",
  className = "",
  rounded = "lg",
}: AssetPlaceholderProps) {
  const Icon = icons[kind];

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden border-2 border-dashed border-(--color-cyan-30) ${radii[rounded]} ${className}`}
      style={{
        aspectRatio,
        backgroundImage:
          "linear-gradient(160deg, rgba(1,188,215,0.10) 0%, rgba(1,188,215,0.04) 45%, rgba(246,248,250,1) 100%)",
      }}
      role="img"
      aria-label={`Asset placeholder: ${describes}`}
    >
      {/* Soft radial glow — subtle but adds presence */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(1,188,215,0.18), transparent 55%)",
        }}
      />
      <div className="relative flex flex-col items-center">
        <Icon size={32} strokeWidth={1.25} className="text-(--color-cyan-ink)" />
        <span className="mt-3 font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-(--color-cyan-ink)">
          {labels[kind]}
        </span>
        <span className="mt-1.5 max-w-[80%] px-3 text-center text-[12px] leading-snug text-(--color-ink-60)">
          {describes}
        </span>
      </div>
    </div>
  );
}
