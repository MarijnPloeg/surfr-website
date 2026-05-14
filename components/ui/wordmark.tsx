import Image from "next/image";
import Link from "next/link";

interface WordmarkProps {
  size?: "sm" | "md" | "lg";
  variant?: "color" | "white";
  asLink?: boolean;
  className?: string;
}

const heights = {
  sm: 20,
  md: 28,
  lg: 48,
} as const;

const LOGO_ASPECT = 175.03 / 69.27;

export function Wordmark({
  size = "md",
  variant = "color",
  asLink = true,
  className = "",
}: WordmarkProps) {
  const h = heights[size];
  const w = Math.round(h * LOGO_ASPECT);
  const src = variant === "white" ? "/brand/surfr-logo-white.svg" : "/brand/surfr-logo.svg";

  const img = (
    <Image
      src={src}
      alt="Surfr"
      width={w}
      height={h}
      priority
      className={`block h-auto w-auto ${className}`}
      style={{ height: h, width: "auto" }}
    />
  );

  if (!asLink) return img;

  return (
    <Link href="/" aria-label="Surfr home" className="inline-flex items-center">
      {img}
    </Link>
  );
}
