"use client";

import { Section } from "@/components/ui/section";
import { TierCard } from "@/components/ui/tier-card";
import {
  PLUS_FEATURES,
  PRO_FEATURES,
  PRICING,
  APP_STORE_URL,
} from "@/lib/constants";

const FREE_FEATURES = [
  "Basic GPS tracking",
  "Phone & Garmin jump detection",
  "3-hourly wind forecast",
  "Spot discovery & search",
  "Social feed, likes & comments",
  "Strava export",
] as const;

export function TierCards() {
  return (
    <Section id="tiers" alternate>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:items-stretch">
        <TierCard
          tier="free"
          name="Free"
          tagline="Track every session, at no cost."
          features={FREE_FEATURES}
          ctaLabel="Download Surfr"
          ctaHref={APP_STORE_URL}
          ctaExternal
        />

        <TierCard
          tier="plus"
          name="Plus"
          tagline="More signal, less noise."
          monthlyPrice={PRICING.plus.monthly}
          yearlyPrice={PRICING.plus.yearly}
          yearlySavings={PRICING.plus.yearlySavings}
          features={PLUS_FEATURES}
          ctaLabel="Get Plus"
          ctaHref={APP_STORE_URL}
          ctaExternal
        />

        <TierCard
          tier="pro"
          name="PRO"
          tagline="Engineered for progression."
          monthlyPrice={PRICING.pro.monthly}
          yearlyPrice={PRICING.pro.yearly}
          yearlySavings={PRICING.pro.yearlySavings}
          features={PRO_FEATURES}
          ctaLabel="Get PRO"
          ctaHref={APP_STORE_URL}
          ctaExternal
          highlight
          badge="Most popular"
        />
      </div>

      <div className="mx-auto mt-8 max-w-2xl space-y-1.5 text-center text-[13px] text-(--color-ink-50)">
        <p>{PRICING.trialDays}-day free trial on Plus and PRO. Cancel any time.</p>
        <p>{PRICING.currencyNote}</p>
        <p>All purchases through the App Store or Google Play.</p>
      </div>
    </Section>
  );
}
