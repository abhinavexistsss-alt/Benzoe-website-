import { motion } from "framer-motion";

const insights = [
  {
    label: "For patients",
    text: "Know when to leave instead of waiting blindly.",
  },
  {
    label: "For clinics",
    text: "Reduce lobby crowding and repetitive front-desk calls.",
  },
  {
    label: "For ops teams",
    text: "Spot bottlenecks before they become daily chaos.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div className="pointer-events-none absolute right-[-16rem] bottom-[-16rem] h-[34rem] w-[34rem] rounded-full bg-green/20 blur-3xl" />

      <div className="section-wrap relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex rounded-full border border-border bg-white/60 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-blue uppercase backdrop-blur"
        >
          Why Benzoe exists
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display leading-[0.98] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
            >
              Healthcare waits
              <br /> shouldn&apos;t feel
              <br /> unknowable.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <p className="font-garamond text-2xl leading-relaxed text-ink md:text-[32px] md:leading-[1.35]">
                Benzoe is built by a team obsessed with patient experience. We
                spent months inside waiting rooms before taking the leap — and
                learned the biggest frustration is not always the wait,
                it&apos;s the uncertainty.
              </p>
              <p className="mt-6 text-base leading-8 text-ink-soft md:text-lg">
                Engineering taught us constraints. Healthcare taught us empathy.
                Queue visibility is where we stopped choosing between them and
                started building better answers.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {insights.map((insight) => (
                <div
                  key={insight.label}
                  className="rounded-3xl border border-border bg-white/65 p-5 backdrop-blur"
                >
                  <p className="text-xs font-semibold tracking-[0.13em] text-blue uppercase">
                    {insight.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
