import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "Live", label: "queue position" },
  { value: "28m", label: "predicted wait" },
  { value: "3rd", label: "next in line" },
];

const queue = [
  { name: "Aarav", status: "Checked in", time: "09:35" },
  { name: "Mira", status: "With doctor", time: "09:42" },
  { name: "You", status: "Arrive in 12 min", time: "09:58" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[130px] pb-14 md:pt-[150px] md:pb-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] blueprint-grid opacity-60" />
      <div className="pointer-events-none absolute top-28 right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-green/25 blur-3xl" />

      <div className="section-wrap relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-bg/80 px-3 py-2 text-xs font-medium text-ink-soft shadow-sm backdrop-blur-md"
            >
              <span className="pulse-green h-2 w-2 rounded-full bg-green" />
              Building the patient queue layer for India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[880px] font-display leading-[0.9] tracking-[-0.045em]"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
            >
              Make waiting
              <span className="block text-ink/30">feel human.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 max-w-[680px] text-base leading-relaxed text-ink-soft md:text-xl md:leading-9"
            >
              Benzoe gives patients real-time clinic and hospital queue
              visibility — so they know when to leave, when they&apos;re next,
              and where they stand before walking in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(23,16,230,0.25)] transition-transform hover:-translate-y-0.5"
              >
                Join the waitlist
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-md transition-colors hover:border-blue hover:text-blue"
              >
                Explore product
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="mt-10 grid max-w-[620px] grid-cols-3 overflow-hidden rounded-3xl border border-border bg-bg/70 backdrop-blur-md"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-border px-4 py-4 last:border-r-0 md:px-6"
                >
                  <p className="font-display text-3xl leading-none text-blue md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] font-medium tracking-[0.12em] text-ink-soft uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="float-soft lg:pb-2"
          >
            <div className="glass-panel noise-overlay relative overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
              <div className="rounded-[1.5rem] border border-border bg-white/80 p-4 shadow-2xl shadow-ink/5 md:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">
                      Benzoe live
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                      CityCare Clinic
                    </h2>
                  </div>
                  <div className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-ink">
                    On time
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-ink p-5 text-white">
                  <div className="scan-line absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-green/30 to-transparent" />
                  <p className="text-sm text-white/60">Your estimated turn</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-6xl leading-none">
                        09:58
                      </p>
                      <p className="mt-3 text-sm text-white/60">
                        Leave by 09:42 to arrive calmly
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-md">
                      <p className="font-mono-display text-2xl">#03</p>
                      <p className="text-[10px] tracking-[0.16em] text-white/60 uppercase">
                        position
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {queue.map((person, index) => (
                    <div
                      key={person.name}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                        person.name === "You"
                          ? "border-blue/30 bg-blue-soft"
                          : "border-border bg-bg/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono-display text-xs text-blue shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{person.name}</p>
                          <p className="text-xs text-ink-soft">
                            {person.status}
                          </p>
                        </div>
                      </div>
                      <p className="font-mono-display text-sm text-ink-soft">
                        {person.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function HeroTicker() {
  const phrase =
    "real-time queue visibility • smarter arrival alerts • calmer waiting rooms •";
  const items = Array(10).fill(phrase);

  return (
    <div className="overflow-hidden border-y border-border bg-ink py-3 text-white">
      <div className="animate-ticker flex w-max">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-8 shrink-0 font-mono-display text-xs tracking-wide text-white/55 uppercase md:text-sm"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
