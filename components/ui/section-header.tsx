"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {badge && (
        <Badge
          className={
            dark
              ? "bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]"
              : ""
          }
        >
          {badge}
        </Badge>
      )}
      <h2
        className={`${badge ? "mt-4" : ""} ${dark ? "text-white" : "text-[var(--color-dark)]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${dark ? "text-[var(--color-dark-muted)]" : "text-[var(--color-secondary)]"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
