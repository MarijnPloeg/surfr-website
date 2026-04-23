"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PLUS_FEATURES, PRO_FEATURES, APP_STORE_URL } from "@/lib/constants";

export function TierCards() {
  return (
    <Section alternate>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:items-start">
        {/* Plus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]"
        >
          <div className="border-b border-[var(--color-border)] px-7 py-6">
            <span className="inline-block rounded-full bg-[var(--color-plus)]/10 px-3 py-1 text-sm font-semibold text-[var(--color-plus)]">
              Plus
            </span>
            <p className="mt-3 text-sm text-[var(--color-secondary)]">
              Unlock the features that match your style
            </p>
          </div>
          <div className="px-7 py-6">
            <ul className="space-y-3">
              {PLUS_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[var(--color-body)]"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--color-plus)]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[var(--color-border)] px-7 py-5">
            <Button
              href={APP_STORE_URL}
              external
              variant="secondary"
              className="w-full"
            >
              Get Plus
            </Button>
            <p className="mt-2 text-center text-xs text-[var(--color-muted)]">
              Try free for 2 weeks
            </p>
          </div>
        </motion.div>

        {/* PRO Card (highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border-2 border-[var(--color-primary)]/30 bg-white shadow-[var(--shadow-md)] md:-translate-y-2"
        >
          <div className="border-b border-[var(--color-border)] bg-[var(--color-accent-tint)] px-7 py-6">
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
                PRO
              </span>
              <span className="rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-bold text-white">
                POPULAR
              </span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-secondary)]">
              Everything in Plus +
            </p>
          </div>
          <div className="px-7 py-6">
            <ul className="space-y-3">
              {PRO_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[var(--color-body)]"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[var(--color-border)] px-7 py-5">
            <Button
              href={APP_STORE_URL}
              external
              variant="primary"
              className="w-full"
            >
              Get PRO
            </Button>
            <p className="mt-2 text-center text-xs text-[var(--color-muted)]">
              Try free for 2 weeks
            </p>
          </div>
        </motion.div>
      </div>

      <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
        All purchases through App Store / Google Play. Cancel anytime.
      </p>
    </Section>
  );
}
