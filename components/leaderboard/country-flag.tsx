import { countryToAlpha2 } from "@/lib/country-codes";

interface CountryFlagProps {
  country: string;
  /** Display height in px. Width is auto via aspect ratio (4:3 from flagcdn). */
  height?: number;
  className?: string;
}

/**
 * Tiny country flag rendered from flagcdn.com. Falls back to nothing if
 * the country name isn't in the lookup. Uses a plain <img> on purpose so
 * we don't have to whitelist flagcdn.com under next.config.ts images.
 */
export function CountryFlag({
  country,
  height = 12,
  className = "",
}: CountryFlagProps) {
  const code = countryToAlpha2(country);
  if (!code) return null;

  const cdnHeight = height * 2;
  const cdnWidth = Math.round(cdnHeight * 4 / 3);

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://flagcdn.com/${cdnWidth}x${cdnHeight}/${code.toLowerCase()}.png`}
      alt={`${country} flag`}
      style={{ height, width: "auto" }}
      className={`inline-block rounded-[2px] ${className}`}
      loading="lazy"
    />
  );
}
