import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { HowItWorks } from "@/components/home/how-it-works";
import { Features } from "@/components/home/features";
import { WhatsNew } from "@/components/home/whats-new";
import { ProTeaser } from "@/components/home/pro-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { SocialProof } from "@/components/home/social-proof";
import { Community } from "@/components/home/community";
import { DownloadCTA } from "@/components/home/download-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <WhatsNew />
      <ProTeaser />
      <Testimonials />
      <SocialProof />
      <Community />
      <DownloadCTA />
    </>
  );
}
