import { useRef } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    quote:
      "You check in, sit down, and stare at a number on a screen that never seems to move. Nobody tells you how long the wait actually is.",
    highlight: "Nobody tells you how long the wait actually is.",
    source: "The waiting room problem",
  },
  {
    quote:
      "Caregivers lose hours every week sitting in hospital lobbies — time they could spend working, resting, or being with family.",
    highlight: "time they could spend working, resting, or being with family.",
    source: "Why visibility matters",
  },
  {
    quote:
      'Front-desk teams are constantly asked "how much longer?" with no good answer. The data exists — it just never reaches the patient.',
    highlight: "The data exists — it just never reaches the patient.",
    source: "The gap we're closing",
  },
  {
    quote:
      "Healthcare shouldn't feel like a guessing game. Real-time queue data is a small fix with an outsized impact on patient trust.",
    highlight: "an outsized impact on patient trust.",
    source: "Our thesis",
  },
];

function HighlightQuote({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const parts = text.split(highlight);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts[0]}
      <mark className="highlight bg-transparent text-ink">{highlight}</mark>
      {parts[1]}
    </>
  );
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-t border-border bg-ink py-16 text-white md:py-24">
      <div className="pointer-events-none absolute top-[-14rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-blue/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-[-14rem] h-[34rem] w-[34rem] rounded-full bg-green/20 blur-3xl" />

      <div className="section-wrap relative z-10 mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-xs font-bold tracking-[0.16em] text-green uppercase"
        >
          Problem signals
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[980px] font-display leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          Waiting rooms weren&apos;t designed for humans.
        </motion.h2>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar snap-x-mandatory relative z-10 flex gap-5 overflow-x-auto px-6 pb-4 md:gap-8 md:px-12"
      >
        {stories.map((story, i) => (
          <motion.article
            key={story.source}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            className="snap-start flex min-h-[360px] w-[86vw] shrink-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:w-[500px] md:p-8"
          >
            <div>
              <span
                className="font-display leading-none text-green/70"
                style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
              >
                “
              </span>
              <p className="mt-2 text-lg leading-8 text-white/82 md:text-xl md:leading-9">
                <HighlightQuote
                  text={story.quote}
                  highlight={story.highlight}
                />
              </p>
            </div>
            <footer className="mt-8 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-white">{story.source}</p>
              <p className="mt-1 text-xs text-white/40">Benzoe research note</p>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
