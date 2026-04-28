import { Hero } from "@/components/home/hero";
import { TrailerVideo } from "@/components/home/trailer-video";
import { Stats } from "@/components/home/stats";
import { HowItWorks } from "@/components/home/how-it-works";
import { Features } from "@/components/home/features";
import { WindGames } from "@/components/home/wind-games";
import { WhatsNew } from "@/components/home/whats-new";
import { DeepDiveVideo } from "@/components/home/deep-dive-video";
import { ProTeaser } from "@/components/home/pro-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { Community } from "@/components/home/community";
import { DownloadCTA } from "@/components/home/download-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrailerVideo />
      <Stats />
      <HowItWorks />
      <Features />
      <WindGames />
      <WhatsNew />
      <DeepDiveVideo />
      <ProTeaser />
      <Testimonials />
      <Community />
      <DownloadCTA />
    </>
  );
}
