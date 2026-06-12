import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "India's clinics run on paper.",
  "Benzoe changes that.",
  "India's clinics run on paper.",
  "Benzoe changes that.",
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="pt-[110px] pb-10 md:pt-[120px] md:pb-16">
      <div className="section-wrap">
        <motion.div style={{ y, opacity }}>
          {lines.map((line, i) => (
            <motion.h1
              key={`${line}-${i}`}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-display leading-[0.95] tracking-[-0.02em] ${i % 2 === 1 ? "text-ink/25" : "text-ink"}`}
              style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg md:leading-8">
            A complete clinic & hospital management app — built for doctors,
            staff, and patients.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border-t border-border pt-4">
              <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
                Queues
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Real-time walk-in OPD management
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
                Prescriptions
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Digital records after every visit
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
                Billing
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                UPI payments and receipts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HeroTicker() {
  const phrase =
    "walk-in OPD queues • digital prescriptions • UPI billing • patient records •";
  const items = Array(12).fill(phrase);

  return (
    <div className="overflow-hidden border-y border-border py-3">
      <div className="animate-ticker flex w-max">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-8 shrink-0 font-mono-display text-xs tracking-wide text-ink/30 uppercase md:text-sm"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
