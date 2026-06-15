import { motion } from "framer-motion";
import { FlowSection } from "./FlowArt";

const steps = [
  {
    org: "Clinic signs up",
    role: "A clinic or hospital starts using Benzoe with a subscription suited to its size and daily workflow.",
    period: "Step 1",
  },
  {
    org: "Doctor & staff go digital",
    role: "Walk-ins, prescriptions, UPI billing, and patient history move from paper registers to one clean app.",
    period: "Step 2",
  },
  {
    org: "Patient stays informed",
    role: "Patients get live queue updates, digital prescriptions, and permanent digital health records — no app download needed.",
    period: "Step 3",
  },
];

export function HowItWorksFlowSection() {
  return (
    <FlowSection
      aria-label="How it works"
      className="bg-bg-soft"
      style={{ borderRadius: "2rem 2rem 0 0" }}
    >
      <div className="section-wrap flex flex-1 flex-col justify-center">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-border bg-bg/70 px-3 py-2 text-xs font-bold tracking-[0.14em] text-blue uppercase backdrop-blur">
              How it works
            </p>
            <h2
              className="mt-8 font-display leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.6rem)" }}
            >
              Three steps from paper to digital.
            </h2>
            <p className="mt-6 max-w-[460px] text-base leading-8 text-ink-soft md:text-lg">
              No complicated feature grid. Benzoe follows the way Indian clinics
              actually run — walk-ins first, doctors in control, patients
              always informed.
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
              {steps.map((item, index) => (
                <div
                  key={item.org}
                  className="group relative rounded-3xl border border-border bg-bg/70 p-5 transition-colors hover:border-blue/30 hover:bg-blue-soft/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono-display text-xs text-bg group-hover:bg-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < steps.length - 1 && (
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

            <div className="mt-5 rounded-3xl border border-border bg-bg/80 p-5 text-sm leading-7 text-ink-soft">
              Founded 2025 · Private Limited · Reg: AAOCB6577A · Built in India
              🇮🇳
            </div>
          </motion.div>
        </div>
      </div>
    </FlowSection>
  );
}
