"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const screenshots = [
  { label: "Session Tracking", color: "from-cyan-400 to-blue-500" },
  { label: "Live Map", color: "from-emerald-400 to-teal-500" },
  { label: "Leaderboards", color: "from-violet-400 to-purple-500" },
];

export function AppShowcase() {
  return (
    <Section>
      <div className="text-center">
        <h2>Designed for riders</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--color-secondary)]">
          A clean, intuitive interface that lets you focus on what matters —
          your time on the water.
        </p>
      </div>

      <div className="mt-16 flex items-center justify-center gap-6 md:gap-10">
        {screenshots.map((screen, i) => (
          <motion.div
            key={screen.label}
            initial={{ opacity: 0, y: 30, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`${i === 1 ? "z-10 scale-105" : "hidden sm:block"}`}
          >
            <div className="w-44 md:w-52 lg:w-56">
              <div
                className={`aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b ${screen.color} flex items-end justify-center p-4 shadow-[var(--shadow-md)]`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {screen.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
