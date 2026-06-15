import { motion } from "framer-motion";
import { FlowSection } from "./FlowArt";

const truths = [
  {
    icon: "🗒️",
    label: "Paper registers",
    text: "Walk-in queues are still written by hand. Staff keep answering 'mera number kab aayega?' while the OPD gets crowded.",
  },
  {
    icon: "💊",
    label: "Lost prescriptions",
    text: "Handwritten prescriptions are hard to read and easy to lose, so every follow-up starts without proper context.",
  },
  {
    icon: "💸",
    label: "Cash-only billing",
    text: "Payments and receipts stay outside a digital trail, making records messy for clinics and patients alike.",
  },
];

export function AboutFlowSection() {
  return (
    <FlowSection
      aria-label="The problem"
      className="bg-bg-soft"
      style={{ borderRadius: "2rem 2rem 0 0" }}
    >
      <div className="section-wrap flex flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex w-fit rounded-full border border-border bg-bg/60 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-blue uppercase backdrop-blur"
        >
          The problem
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
            >
              1,000,000+ Indian clinics still run on paper.
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
                Millions of Indian clinics still run on paper queues,
                handwritten prescriptions, and cash counters. It feels normal
                only because everyone has been forced to adjust to it.
              </p>
              <p className="mt-6 text-base leading-8 text-ink-soft md:text-lg">
                India has over a million independent clinics, and most are stuck
                in this daily cycle. Benzoe is built for the real OPD
                environment — not appointment-only hospitals.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {truths.map((truth) => (
                <div
                  key={truth.label}
                  className="rounded-3xl border border-border bg-bg/65 p-5 backdrop-blur"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {truth.icon}
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-[0.13em] text-blue uppercase">
                    {truth.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {truth.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </FlowSection>
  );
}
