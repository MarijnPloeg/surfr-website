"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { Lede } from "@/components/ui/headings";

interface SectionHeaderProps {
  eyebrow?: string;
  /** Pass a string with <em>...</em> for the italic-cyan accent. */
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

/**
 * Canonical section opener: Eyebrow + SectionHeading + Lede.
 * Use plain HTML <em> inside the title to get the italic-cyan accent —
 * styled globally in globals.css.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const ledeAlign = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl ${alignClass} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <SectionHeading className={eyebrow ? "mt-5" : ""}>{title}</SectionHeading>
      {description && (
        <Lede className={`mt-5 ${ledeAlign}`}>{description}</Lede>
      )}
    </motion.div>
  );
}
