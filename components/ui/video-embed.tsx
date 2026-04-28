"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID (the part after v= or after youtu.be/) */
  videoId: string;
  /** Caption shown beneath the play button, e.g. "Watch the trailer · 1:30" */
  label: string;
  /** ARIA label for the play button. Defaults to "Play video". */
  ariaLabel?: string;
  className?: string;
}

/**
 * Lite YouTube embed — shows a thumbnail-style poster with a cyan play button.
 * On click, swaps in the real YouTube iframe with autoplay.
 * Avoids loading YouTube's heavy iframe until the user opts in.
 */
export function VideoEmbed({
  videoId,
  label,
  ariaLabel = "Play video",
  className = "",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-(--radius-xl) shadow-[0_30px_70px_rgba(0,0,0,0.18)] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(1,188,215,0.35), rgba(7,52,68,1) 70%)",
      }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={ariaLabel}
          className="group absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
          <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-(--color-cyan) text-black shadow-[0_0_40px_rgba(1,188,215,0.6)] transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
            <Play size={28} strokeWidth={2} fill="currentColor" className="ml-1" />
          </span>
          <span className="relative mt-4 font-[family-name:var(--font-roboto-condensed)] text-[13px] font-semibold uppercase tracking-[0.12em] text-white/90">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
