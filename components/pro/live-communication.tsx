"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";

// Copy sourced from support article "Live communication"
// (https://support.thesurfr.app/en/articles/9863308-live-communication):
// - Kiteboarding is typically a solo water sport; communication with
//   friends is limited to hand signals and distant screams.
// - "Press the side buttons of your Apple Watch (or the action button
//   on the Ultra) and speak your message into the microphone."
// - The spoken message converts to text and transmits to nearby friends.
// - Internet connection required on the watch.
// - Currently available only on Apple Watch.
const items = [
  {
    icon: Mic,
    title: "Press, speak, send",
    description:
      "Press the side button on your Apple Watch (or the Action Button on the Ultra). Speak your message. The watch handles the rest.",
  },
  {
    icon: MessageSquare,
    title: "Voice to text",
    description:
      "Your message is converted to text and transmitted to nearby friends on the water.",
  },
  {
    icon: Users,
    title: "Beats hand signals",
    description:
      "Kiteboarding is a solo sport. Until now your only options were hand signals and distant screams.",
  },
];

export function LiveCommunication() {
  return (
    <Section id="live-communication">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Eyebrow>Live communication</Eyebrow>
          <SectionHeading className="mt-5">
            Talk to your <em>crew</em>.
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            Press the side button on your Apple Watch and speak. Your message
            is converted to text and sent to nearby friends on the water.
          </p>

          <div className="mt-10 space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                  <item.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[18px]">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-(--color-ink-75)">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-[13px] font-medium text-(--color-ink-50)">
            Apple Watch. Internet connection required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <Image
            src="/screenshots/watch-chat.png"
            alt="Apple Watch live communication — incoming message from Carlos on the water"
            width={376}
            height={637}
            sizes="(max-width: 768px) 220px, 260px"
            className="w-[220px] md:w-[260px] h-auto"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(10,25,41,0.3))",
            }}
          />
        </motion.div>
      </div>
    </Section>
  );
}
