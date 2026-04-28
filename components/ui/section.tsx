"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
  contained?: boolean;
}

/**
 * Page-level section wrapper.
 *  - alternate: subtly tinted page bg (#F6F8FA) for banding between sections.
 *  - contained: when false, lets the consumer manage the inner container.
 *  - Reduced-motion is respected globally via globals.css.
 */
export function Section({
  children,
  className = "",
  id,
  alternate = false,
  contained = true,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`py-20 md:py-28 lg:py-32 ${
        alternate ? "bg-(--color-page-tint)" : "bg-(--color-page)"
      } ${className}`}
    >
      {contained ? (
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">{children}</div>
      ) : (
        children
      )}
    </motion.section>
  );
}
