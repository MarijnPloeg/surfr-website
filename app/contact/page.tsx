import type { Metadata } from "next";
import {
  Mail,
  MessageCircle,
  GraduationCap,
  Newspaper,
  Trophy,
} from "lucide-react";
import {
  SOCIAL_LINKS,
  HELP_URL,
  WIND_GAMES_URL,
  CONTACT_EMAIL,
} from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { DisplayHeading, Lede } from "@/components/ui/headings";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Surfr team. General inquiries, partnerships, press, and Wind Games competition support.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-[0.08] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge>Contact</Badge>
          <div className="mt-6">
            <DisplayHeading>
              Get in <em>touch</em>.
            </DisplayHeading>
          </div>
          <div className="mx-auto mt-6 max-w-xl">
            <Lede className="mx-auto">
              A real human reads every email. Pick the path that matches
              what you need.
            </Lede>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="pb-12">
        <div className="mx-auto grid max-w-3xl gap-6 px-6 md:grid-cols-2 md:px-8">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-4 rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
              <Mail size={22} />
            </div>
            <div>
              <p className="font-semibold text-(--color-ink)">
                General inquiries
              </p>
              <p className="text-[14px] text-(--color-cyan-ink) transition-[gap] group-hover:gap-1.5">
                {CONTACT_EMAIL}
              </p>
            </div>
          </a>

          <a
            href={HELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="font-semibold text-(--color-ink)">Help Center</p>
              <p className="text-[14px] text-(--color-ink-60)">
                FAQs and support articles
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="text-center">
            <Eyebrow>Partnerships</Eyebrow>
            <h2 className="mt-5 text-[28px] font-bold tracking-[-0.02em]">
              Working together
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-(--color-ink-75)">
              We work with kite schools, brands, and event organizers
              worldwide. Competition support runs through Wind Games.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href={WIND_GAMES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-center transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <Trophy
                size={26}
                strokeWidth={1.75}
                className="mx-auto text-(--color-cyan-ink)"
              />
              <h3 className="mt-3 text-[16px]">Competitions</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-(--color-ink-75)">
                Run your event on Wind Games, Surfr&apos;s competition
                companion. Live scoring from real recordings.
              </p>
              <p className="mt-3 text-[13px] font-semibold text-(--color-cyan-ink)">
                thewindgames.app →
              </p>
            </a>

            <div className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-center">
              <GraduationCap
                size={26}
                strokeWidth={1.75}
                className="mx-auto text-(--color-cyan-ink)"
              />
              <h3 className="mt-3 text-[16px]">Kite schools</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-(--color-ink-75)">
                Track student progression. Share session data. Help us
                build features your students will use.
              </p>
            </div>

            <div className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-center">
              <Newspaper
                size={26}
                strokeWidth={1.75}
                className="mx-auto text-(--color-cyan-ink)"
              />
              <h3 className="mt-3 text-[16px]">Press</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-(--color-ink-75)">
                Press kit and media inquiries. Reach out. We&apos;re fast.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-[14px] text-(--color-ink-60)">
            For partnerships:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-(--color-cyan-ink) hover:text-(--color-cyan-ink-hover)"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="border-t border-(--color-divider) bg-(--color-page-tint) py-12">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-ink-60)">
            Or find us on
          </p>
          <div className="mt-4 flex justify-center gap-7">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-(--color-cyan-ink) hover:text-(--color-cyan-ink-hover)"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-(--color-cyan-ink) hover:text-(--color-cyan-ink-hover)"
            >
              YouTube
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-(--color-cyan-ink) hover:text-(--color-cyan-ink-hover)"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
