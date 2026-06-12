import { useRef } from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Built for doctors",
    text: "A full management app built for doctors — not just a patient booking portal.",
  },
  {
    title: "Walk-in OPD first",
    text: "Designed for real Indian walk-in patients, not only appointment-led workflows.",
  },
  {
    title: "Made for independent clinics",
    text: "Designed for India’s independent clinics and hospitals, not just big chains.",
  },
  {
    title: "One subscription",
    text: "Queue, prescription, billing, and records together — your entire clinic goes digital.",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="why-benzoe" className="border-t border-border py-16 md:py-24">
      <div className="section-wrap mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-sm text-ink-soft"
        >
          Why Benzoe
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
        >
          Not another
          <br /> appointment portal.
        </motion.h2>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar snap-x-mandatory flex gap-6 overflow-x-auto px-6 pb-4 md:gap-8 md:px-12"
      >
        {points.map((point, i) => (
          <motion.article
            key={point.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            className="snap-start w-[85vw] shrink-0 border-t border-border pt-8 md:w-[480px]"
          >
            <span
              className="font-display leading-none text-blue/20"
              style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
            >
              0{i + 1}
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">
              {point.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink md:text-lg">
              {point.text}
            </p>
            <footer className="mt-8 border-t border-border pt-4">
              <p className="text-sm font-medium">Built for India 🇮🇳</p>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
