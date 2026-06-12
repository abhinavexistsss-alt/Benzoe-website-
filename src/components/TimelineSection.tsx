import { motion } from "framer-motion";

const items = [
  { org: "Benzoe", role: "Idea & research", period: "Early 2026" },
  {
    org: "Patient interviews",
    role: "Discovery & problem validation",
    period: "Q1 2026",
  },
  { org: "Product design", role: "UX flows & prototype", period: "Q1 2026" },
  {
    org: "Pilot conversations",
    role: "Hospital & clinic outreach",
    period: "Q2 2026",
  },
];

export function TimelineSection() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden border-t border-border bg-bg py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full blueprint-grid opacity-35" />
      <div className="section-wrap relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-border bg-white/70 px-3 py-2 text-xs font-bold tracking-[0.14em] text-blue uppercase backdrop-blur">
              Roadmap
            </p>
            <h2
              className="mt-8 font-display leading-[0.98] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.6rem)" }}
            >
              From insight
              <br /> to pilots.
            </h2>
            <p className="mt-6 max-w-[420px] text-base leading-8 text-ink-soft md:text-lg">
              A healthtech startup building in India, moving carefully from
              research to real clinic workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-[2rem] p-4 md:p-6"
          >
            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={item.org + item.period}
                  className="group relative rounded-3xl border border-border bg-white/70 p-5 transition-colors hover:border-blue/30 hover:bg-blue-soft/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono-display text-xs text-white group-hover:bg-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < items.length - 1 && (
                        <span className="mt-3 h-12 w-px bg-border" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold tracking-[-0.02em]">
                          {item.org}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-ink-soft">
                          {item.role}
                        </p>
                      </div>
                      <p className="shrink-0 rounded-full bg-bg px-3 py-1 text-xs font-semibold text-ink-soft">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Join the waitlist <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
