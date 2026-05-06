interface RiderAvatarProps {
  name: string;
  /** Pixel size of the avatar (square). */
  size?: number;
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Initials-only avatar. Profile photos from the Surfr backend are not
 * yet wired (would need the CDN URL pattern from `profilepicid`). Until
 * then this gives every rider a clean, consistent placeholder.
 */
export function RiderAvatar({
  name,
  size = 40,
  className = "",
}: RiderAvatarProps) {
  const initials = getInitials(name);
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-(--color-cyan-30) to-(--color-cyan-15) font-bold text-(--color-cyan-ink) ring-1 ring-(--color-card-border) ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, size * 0.36),
      }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
