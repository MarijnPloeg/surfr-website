import type { Metadata } from "next";
import { Mail, MessageCircle, Trophy, GraduationCap, Newspaper } from "lucide-react";
import { SOCIAL_LINKS, HELP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Surfr team. Partnerships, press, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl">Get in touch</h1>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-secondary)]">
            Have a question, feedback, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          <a
            href="mailto:info@thesurfr.app"
            className="flex items-center gap-4 rounded-2xl bg-[var(--color-light-bg)] p-6 transition-shadow hover:shadow-[var(--shadow-sm)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
              <Mail size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-dark)]">
                General Inquiries
              </p>
              <p className="text-sm text-[var(--color-primary)]">
                info@thesurfr.app
              </p>
            </div>
          </a>

          <a
            href={HELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-[var(--color-light-bg)] p-6 transition-shadow hover:shadow-[var(--shadow-sm)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
              <MessageCircle
                size={22}
                className="text-[var(--color-primary)]"
              />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-dark)]">
                Help Center
              </p>
              <p className="text-sm text-[var(--color-secondary)]">
                FAQs and support articles
              </p>
            </div>
          </a>
        </div>

        {/* Partnerships section */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-center text-2xl">Partnerships</h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[var(--color-secondary)]">
            We work with competitions, kite schools, brands, and event
            organizers worldwide.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[var(--color-light-bg)] p-6 text-center">
              <Trophy
                size={28}
                className="mx-auto text-[var(--color-primary)]"
              />
              <h3 className="mt-3 text-base">Competitions</h3>
              <p className="mt-2 text-sm text-[var(--color-secondary)]">
                Live scoring and leaderboards for your event.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--color-light-bg)] p-6 text-center">
              <GraduationCap
                size={28}
                className="mx-auto text-[var(--color-primary)]"
              />
              <h3 className="mt-3 text-base">Kite Schools</h3>
              <p className="mt-2 text-sm text-[var(--color-secondary)]">
                Track student progress and share session data.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--color-light-bg)] p-6 text-center">
              <Newspaper
                size={28}
                className="mx-auto text-[var(--color-primary)]"
              />
              <h3 className="mt-3 text-base">Press</h3>
              <p className="mt-2 text-sm text-[var(--color-secondary)]">
                Media inquiries and press materials.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-[var(--color-secondary)]">
            For partnerships:{" "}
            <a
              href="mailto:info@thesurfr.app"
              className="font-medium text-[var(--color-primary)] hover:underline"
            >
              info@thesurfr.app
            </a>
          </p>
        </div>

        {/* Social */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--color-muted)]">
            Follow us on social media
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              YouTube
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
