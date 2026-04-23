"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Wind, Star, Users } from "lucide-react";
import { SPOTS, CONTINENTS } from "@/lib/spots-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL } from "@/lib/constants";

export default function SpotsPage() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("All");

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
      {/* Hero */}
      <section className="bg-[var(--color-dark)] pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
            Discover
          </Badge>
          <h1 className="mt-4 text-white">
            Explore{" "}
            <span className="text-[var(--color-primary)]">5,000+</span>{" "}
            kitesurfing spots
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-dark-muted)]">
            Find your next session. Browse spots worldwide with wind data,
            community reviews, and session history.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-[64px] z-40 border-b border-[var(--color-border)] bg-white/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 sm:flex-row sm:items-center md:px-8">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <input
              type="text"
              placeholder="Search spots or countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-light-bg)] py-2.5 pl-10 pr-4 text-sm text-[var(--color-dark)] outline-none transition-colors focus:border-[var(--color-primary)]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CONTINENTS.map((c) => (
              <button
                key={c}
                onClick={() => setContinent(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  continent === c
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-light-bg)] text-[var(--color-secondary)] hover:bg-[var(--color-border)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spots Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <p className="mb-6 text-sm text-[var(--color-muted)]">
            {filtered.length} spots found
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((spot, i) => (
              <motion.div
                key={spot.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-[var(--shadow-md)]"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-cyan-100 to-blue-100">
                  <div className="flex h-full items-center justify-center">
                    <MapPin
                      size={32}
                      className="text-[var(--color-primary)] opacity-30"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold">
                        {spot.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-[var(--color-secondary)]">
                        {spot.country}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                      <span className="text-sm font-medium text-[var(--color-dark)]">
                        {spot.rating}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-secondary)]">
                    <span className="flex items-center gap-1">
                      <Wind size={12} />
                      {spot.avgWind} kn avg
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {spot.sessionCount.toLocaleString()} sessions
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {spot.disciplines.map((d) => (
                      <span
                        key={d}
                        className="rounded-full bg-[var(--color-light-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-secondary)]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[var(--color-secondary)]">
              Want to explore all 5,000+ spots with live wind data?
            </p>
            <div className="mt-4">
              <Button href={APP_STORE_URL} external size="lg">
                Download Surfr
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
