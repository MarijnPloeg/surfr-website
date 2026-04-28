"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export type Tier = "free" | "plus" | "pro";

interface TierCardProps {
  tier: Tier;
  name: string;
  tagline: string;
  monthlyPrice?: string;
  yearlyPrice?: string;
  yearlySavings?: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  highlight?: boolean;
  badge?: string;
}

/**
 * TierCard — encodes the design-system tier rule:
 *   Plus = gray (#8E99A4) — "the upgrade"
 *   PRO  = cyan (brand)   — "the top tier"
 *   Free = neutral
 *
 * Never use cyan for Plus. Never use gray for PRO. Ever.
 */
export function TierCard({
  tier,
  name,
  tagline,
  monthlyPrice,
  yearlyPrice,
  yearlySavings,
  features,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
  highlight = false,
  badge,
}: TierCardProps) {
  const isPro = tier === "pro";
  const isPlus = tier === "plus";

  const wrapperBorder = isPro
    ? "border-(--color-cyan)"
    : isPlus
      ? "border-(--color-tier-plus)"
      : "border-(--color-card-border)";

  const wrapperShadow = isPro
    ? "shadow-[var(--shadow-cyan-soft)]"
    : isPlus
      ? "shadow-[0_8px_24px_rgba(142,153,164,0.18)]"
      : "shadow-[var(--shadow-card)]";

  const nameColor = isPro
    ? "text-(--color-cyan-ink)"
    : isPlus
      ? "text-(--color-tier-plus)"
      : "text-(--color-ink)";

  const checkColor = isPro
    ? "text-(--color-cyan-ink)"
    : isPlus
      ? "text-(--color-tier-plus)"
      : "text-(--color-ink-50)";

  const ctaClass = isPro
    ? "bg-(--color-cyan) text-black shadow-[var(--shadow-cyan-soft)] hover:shadow-[var(--shadow-cyan-hard)]"
    : isPlus
      ? "bg-(--color-tier-plus) text-white hover:bg-[#7A8590]"
      : "bg-(--color-ink) text-white hover:bg-[#1a2530]";

  const badgeBg = isPro
    ? "bg-(--color-cyan) text-black"
    : "bg-(--color-tier-plus) text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative flex flex-col gap-5 rounded-(--radius-md) border-2 bg-(--color-card) p-8 ${wrapperBorder} ${wrapperShadow} ${
        highlight ? "md:-translate-y-2" : ""
      }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-7 rounded-(--radius-sm) px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${badgeBg}`}
        >
          {badge}
        </span>
      )}

      <div>
        <h3
          className={`font-[family-name:var(--font-roboto)] text-[30px] font-black leading-none tracking-[-0.03em] ${nameColor}`}
        >
          {name}
        </h3>
        <p className="mt-2 text-[14px] text-(--color-ink-60)">{tagline}</p>
      </div>

      {(monthlyPrice || yearlyPrice) && (
        <div className="border-t border-(--color-ink-10) pt-5">
          {monthlyPrice && (
            <div className="flex items-baseline gap-1.5">
              <span className="text-[36px] font-bold leading-none tracking-[-0.02em] text-(--color-ink)">
                {monthlyPrice}
              </span>
              <span className="text-[13px] text-(--color-ink-50)">/month</span>
            </div>
          )}
          {yearlyPrice && (
            <p className="mt-2 text-[13px] text-(--color-ink-50)">
              {yearlyPrice} per year
              {yearlySavings && (
                <span className="ml-1.5 text-(--color-ink-75)">
                  · {yearlySavings}
                </span>
              )}
            </p>
          )}
        </div>
      )}

      <ul className="flex flex-1 flex-col gap-3 border-t border-(--color-ink-10) pt-5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-[14px] leading-snug text-(--color-ink-90)"
          >
            <Check size={16} className={`mt-0.5 shrink-0 ${checkColor}`} />
            {feature}
          </li>
        ))}
      </ul>

      {ctaExternal ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto rounded-(--radius-md) px-5 py-3.5 text-center text-[14px] font-semibold transition-[transform,box-shadow,background] duration-150 ease-out hover:-translate-y-px ${ctaClass}`}
        >
          {ctaLabel}
        </a>
      ) : (
        <Link
          href={ctaHref}
          className={`mt-auto rounded-(--radius-md) px-5 py-3.5 text-center text-[14px] font-semibold transition-[transform,box-shadow,background] duration-150 ease-out hover:-translate-y-px ${ctaClass}`}
        >
          {ctaLabel}
        </Link>
      )}
    </motion.div>
  );
}
