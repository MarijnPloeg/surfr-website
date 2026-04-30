"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { COMPARE_FAQ, HELP_URL } from "@/lib/constants";
import { showIntercom } from "@/components/integrations/intercom";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-(--color-divider) last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-[16px] font-semibold text-(--color-ink)">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-(--color-ink-50) transition-transform duration-200 ${
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
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-relaxed text-(--color-ink-75)">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Bottom hook: "Still got questions?" → chat with us, or browse help center.
 * Primary CTA opens the Intercom Messenger. Secondary links to the longer
 * help center articles.
 */
function StillGotQuestions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-(--radius-lg) border border-(--color-divider) bg-(--color-page) p-8 text-center sm:flex-row sm:justify-between sm:text-left"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-cyan-15) text-(--color-cyan-ink)">
          <MessageCircle size={20} strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="text-[16px] font-bold text-(--color-ink)">
            Still got questions?
          </h3>
          <p className="text-[13px] text-(--color-ink-60)">
            Chat with us in the Messenger, or browse longer answers in the help center.
          </p>
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-center gap-2 sm:items-end">
        <button
          type="button"
          onClick={showIntercom}
          className="inline-flex items-center gap-1.5 rounded-(--radius-md) bg-(--color-cyan) px-5 py-2.5 text-[14px] font-semibold text-black shadow-[var(--shadow-cyan-soft)] transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[var(--shadow-cyan-hard)]"
        >
          Chat with us
          <ArrowRight size={14} />
        </button>
        <a
          href={HELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-(--color-ink-60) underline-offset-4 transition-colors hover:text-(--color-ink) hover:underline"
        >
          Visit help center
        </a>
      </div>
    </motion.div>
  );
}

export function CompareFaq() {
  return (
    <Section alternate>
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Honest answers, <em>no asterisks</em>.
          </>
        }
      />

      <div className="mx-auto mt-12 max-w-2xl">
        {COMPARE_FAQ.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>

      <StillGotQuestions />
    </Section>
  );
}
