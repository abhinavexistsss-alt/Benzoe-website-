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
    <section
      id="why-benzoe"
      className="relative overflow-hidden border-t border-border bg-ink py-16 text-white md:py-24"
    >
      <div className="pointer-events-none absolute top-[-14rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-blue/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-[-14rem] h-[34rem] w-[34rem] rounded-full bg-green/20 blur-3xl" />

      <div className="section-wrap relative z-10 mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-xs font-bold tracking-[0.16em] text-green uppercase"
        >
          Why Benzoe
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[980px] font-display leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          Not another appointment portal.
        </motion.h2>
        <p className="mt-6 max-w-[720px] text-base leading-8 text-white/60 md:text-lg">
          Benzoe is a clinic management app for the messy, high-volume, walk-in
          reality of Indian healthcare.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar snap-x-mandatory relative z-10 flex gap-5 overflow-x-auto px-6 pb-4 md:gap-8 md:px-12"
      >
        {points.map((point, i) => (
          <motion.article
            key={point.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            className="snap-start flex min-h-[320px] w-[86vw] shrink-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:w-[500px] md:p-8"
          >
            <div>
              <span className="font-mono-display text-sm font-bold tracking-[0.18em] text-green uppercase">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
                {point.title}
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/72 md:text-xl md:leading-9">
                {point.text}
              </p>
            </div>
            <footer className="mt-8 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-white">
                Built for India 🇮🇳
              </p>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
