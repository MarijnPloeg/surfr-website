"use client";

import { motion } from "framer-motion";
import { Watch, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/section";

export function Tracking() {
  return (
    <Section alternate>
      <div className="text-center">
        <h2>Just the way you want it</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--color-secondary)]">
          Choose how you take Surfr to the water. Whether it&apos;s on your
          wrist or tucked in your wetsuit — we&apos;ve got you covered.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
            <Watch size={24} className="text-[var(--color-primary)]" />
          </div>
          <h3 className="mt-5">The Surfr App For Watches</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
            Get all the metrics right on your wrist. No phone needed for accurate
            session tracking on the water. The Surfr app is available for Apple
            Watches, Android Watches and Garmin watches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
            <Smartphone size={24} className="text-[var(--color-primary)]" />
          </div>
          <h3 className="mt-5">For Phones / Wetsuit Mode</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
            Recording in &ldquo;wetsuit mode&rdquo; using a waterproof pouch is
            the perfect solution for many riders, especially those in colder
            climates. Tuck your phone in a waterproof pouch and secure it in your
            wetsuit for accurate tracking without needing a watch.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
