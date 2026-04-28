"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Wind, Star, Users } from "lucide-react";
import { SPOTS, CONTINENTS } from "@/lib/spots-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DisplayHeading, Lede } from "@/components/ui/headings";
import { APP_STORE_URL, SITE_META } from "@/lib/constants";
import { ACCENTS, DISCIPLINE_ACCENT, type Accent } from "@/lib/accents";

export default function SpotsPage() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState<string>("All");

  const filtered = useMemo(() => {
    return SPOTS.filter((spot) => {
      const matchesSearch =
        search === "" ||
        spot.name.toLowerCase().includes(search.toLowerCase()) ||
        spot.country.toLowerCase().includes(search.toLowerCase());
      const matchesContinent =
        continent === "All" || spot.continent === continent;
      return matchesSearch && matchesContinent;
    }).sort((a, b) => b.sessionCount - a.sessionCount);
  }, [search, continent]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-[0.08] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge>Spots</Badge>
          <div className="mt-6">
            <DisplayHeading>
              Find your <em>next session</em>.
            </DisplayHeading>
          </div>
          <div className="mx-auto mt-6 max-w-2xl">
            <Lede className="mx-auto">
              A taste of the most-ridden spots, ranked by session count.
              Open Surfr to browse all {SITE_META.spotsCount} with live wind
              and community reviews.
            </Lede>
          </div>
        </div>
      </section>

      {/* SEARCH STRIP */}
      <section className="sticky top-[68px] z-40 border-y border-(--color-divider) bg-(--color-page)/85 py-4 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 sm:flex-row sm:items-center md:px-8">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-(--color-ink-50)"
            />
            <input
              type="text"
              placeholder="Search spots or countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card-alt) py-2.5 pl-10 pr-4 text-[14px] text-(--color-ink) outline-none transition-colors focus:border-(--color-cyan) focus:ring-2 focus:ring-(--color-cyan-30)"
            />
          </div>
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {CONTINENTS.map((c) => (
              <button
                key={c}
                onClick={() => setContinent(c)}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold whitespace-nowrap transition-colors ${
                  continent === c
                    ? "bg-(--color-cyan) text-black"
                    : "bg-(--color-card-alt) text-(--color-ink-75) hover:bg-(--color-ink-10)"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <p className="mb-6 text-[13px] text-(--color-ink-50)">
            {filtered.length} {filtered.length === 1 ? "spot" : "spots"}{" "}
            shown, sorted by session count
          </p>

          {filtered.length === 0 && (
            <div className="rounded-(--radius-md) border-2 border-dashed border-(--color-ink-15) bg-(--color-card) p-10 text-center">
              <MapPin
                size={28}
                strokeWidth={1.5}
                className="mx-auto text-(--color-ink-35)"
              />
              <p className="mt-4 text-[15px] font-semibold text-(--color-ink)">
                No matches. Try a different search.
              </p>
              <p className="mt-2 text-[14px] text-(--color-ink-60)">
                The full {SITE_META.spotsCount} spot index lives in the app.
              </p>
              <div className="mt-5">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearch("");
                    setContinent("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((spot, i) => (
                <motion.div
                  key={spot.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(i * 0.025, 0.3),
                  }}
                  className="group overflow-hidden rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                >
                  {/* Photo placeholder */}
                  <div className="flex aspect-[16/9] items-center justify-center border-b border-(--color-divider) bg-(--color-card-alt)">
                    <MapPin
                      size={28}
                      strokeWidth={1.25}
                      className="text-(--color-ink-25)"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-[16px] font-semibold">
                          {spot.name}
                        </h3>
                        <p className="mt-0.5 text-[14px] text-(--color-ink-60)">
                          {spot.country}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        <Star
                          size={14}
                          className="fill-(--color-star) text-(--color-star)"
                        />
                        <span className="text-[14px] font-semibold text-(--color-ink)">
                          {spot.rating}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-[12px] text-(--color-ink-60)">
                      <span className="inline-flex items-center gap-1">
                        <Wind size={12} />
                        {spot.avgWind} kn avg
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users size={12} />
                        {spot.sessionCount.toLocaleString()} sessions
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {spot.disciplines.map((d) => {
                        const acc: Accent = DISCIPLINE_ACCENT[d] ?? "cyan";
                        const accent = ACCENTS[acc];
                        return (
                          <span
                            key={d}
                            className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{
                              backgroundColor: accent.bg,
                              color: accent.fg,
                            }}
                          >
                            {d}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Footer CTA */}
          <div className="mt-16 rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-8 text-center">
            <p className="text-[15px] text-(--color-ink-75)">
              These {SPOTS.length} are the popular ones. Open Surfr to
              browse all {SITE_META.spotsCount} with live wind and rider
              activity.
            </p>
            <div className="mt-5">
              <Button href={APP_STORE_URL} external size="lg">
                Open in Surfr
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
