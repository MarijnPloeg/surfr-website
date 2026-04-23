"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I try Plus or PRO for free?",
    answer:
      "Yes! Both Plus and PRO come with a 2-week free trial. You can experience all features before being charged. Cancel anytime during the trial at no cost.",
  },
  {
    question: "What's the difference between Plus and PRO?",
    answer:
      "Plus unlocks detailed session analytics, 1-hourly wind forecasts, wind alerts, live map, and spot statistics — perfect for riders who want deeper insights. PRO includes everything in Plus and adds Apple Watch & Wear OS recording, on-board coaching, PRO Insights with AI analytics, cinematic replay, and downwinder navigation.",
  },
  {
    question: "What devices support watch-only tracking?",
    answer:
      "Watch-only tracking is a PRO feature and works on Apple Watch (Series 4+), Wear OS watches (2.0+), and Garmin watches with the Surfr Connect IQ app.",
  },
  {
    question: "How does Jump Insights work?",
    answer:
      "Our proprietary algorithm analyzes your jump data — height, airtime, approach speed, and heading — to give each jump a comprehensive score. The POP (Power of Progression) chart tracks your improvement over time. Jump Insights is a PRO feature.",
  },
  {
    question: "Can I switch between Plus and PRO?",
    answer:
      "Yes. Upgrading from Plus to PRO takes effect immediately with prorated billing. Downgrading from PRO to Plus is deferred to your next renewal date, so you keep PRO features until then.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Both Plus and PRO subscriptions are managed through the App Store or Google Play. You can cancel anytime and continue using your plan's features until the end of your billing period.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You keep all your session data, jumps, and history. Your account reverts to the free tier, so some features become limited, but nothing is deleted.",
  },
] as const;

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-semibold text-[var(--color-dark)]">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[var(--color-secondary)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <Section>
      <SectionHeader
        badge="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about Surfr Plus and PRO."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
