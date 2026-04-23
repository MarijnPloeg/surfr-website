import type { Metadata } from "next";
import { ProHero } from "@/components/pro/pro-hero";
import { TierCards } from "@/components/pro/tier-cards";
import { JumpInsights } from "@/components/pro/jump-insights";
import { WatchTracking } from "@/components/pro/watch-tracking";
import { Coaching } from "@/components/pro/coaching";
import { Pricing } from "@/components/pro/pricing";
import { Faq } from "@/components/pro/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Surfr Free, Plus, and PRO plans. Unlock session analytics, wind forecasts, watch tracking, coaching, and more.",
};

export default function ProPage() {
  return (
    <>
      <ProHero />
      <TierCards />
      <JumpInsights />
      <WatchTracking />
      <Coaching />
      <Pricing />
      <Faq />
    </>
  );
}
