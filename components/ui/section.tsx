"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  alternate = false,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 md:py-28 lg:py-32 ${
        alternate ? "bg-[var(--color-light-bg)]" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">{children}</div>
    </motion.section>
  );
}
