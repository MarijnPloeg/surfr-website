"use client";

import { useState } from "react";

interface RiderAvatarProps {
  name: string;
  /** Surfr profilepicid (from leaderboard API). When set, the photo is
   *  fetched from the public Surfr image endpoint with an initials-only
   *  fallback rendered underneath. */
  profilePicId?: string | null;
  /** Pixel size of the avatar (square). */
  size?: number;
  className?: string;
}

const SURFR_PROFILE_IMAGE_BASE = "https://api.thesurfr.app/image/profile";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Avatar with a real profile photo when available, falling back to
 * initials. The initials layer is always rendered, the photo loads on
 * top and fades in. If the photo 404s or errors, we drop it and the
 * initials stay visible — no broken-image icon.
 */
export function RiderAvatar({
  name,
  profilePicId,
  size = 40,
  className = "",
}: RiderAvatarProps) {
  const initials = getInitials(name);
  const hasId =
    typeof profilePicId === "string" && profilePicId.trim().length > 0;
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const showImage = hasId && !errored;
  const url = hasId ? `${SURFR_PROFILE_IMAGE_BASE}/${profilePicId}` : null;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-(--color-cyan-30) to-(--color-cyan-15) ring-1 ring-(--color-card-border) ${className}`}
      style={{ width: size, height: size }}
      aria-label={name}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-bold text-(--color-cyan-ink)"
        style={{ fontSize: Math.max(11, size * 0.36) }}
        aria-hidden={showImage && loaded}
      >
        {initials}
      </span>
      {showImage && url && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={url}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
