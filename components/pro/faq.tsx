"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ } from "@/lib/constants";

function FaqItem({ question, answer }: { question: string; answer: string }) {
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

export function Faq() {
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <em>questions</em>.
          </>
        }
        description="Everything you need to know about Surfr Plus and PRO."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        {FAQ.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
