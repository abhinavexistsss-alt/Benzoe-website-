import { motion } from "framer-motion";
import { FlowSection } from "./FlowArt";

export function HeroFlowSection() {
  return (
    <FlowSection
      aria-label="Hero"
      className="bg-bg"
    >
      <div className="flex flex-1 flex-col justify-center section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 inline-flex rounded-full border border-border bg-bg-soft/60 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-blue uppercase backdrop-blur">
            India's #1 Clinic Management App
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          India's clinics
          <br />
          <span className="text-ink/25">deserve better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg md:leading-8"
        >
          A complete clinic &amp; hospital management app — built for India's doctors,
          staff, and patients. From walk-in OPD queues to digital prescriptions
          and UPI billing — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-blue"
          >
            Book a Free Demo <span className="ml-2">→</span>
          </a>
          <a
            href="#solution"
            className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            See how it works
          </a>
        </motion.div>
      </div>

      {/* Bottom stat bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="section-wrap"
      >
        <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-4">
          <div>
            <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
              Queues
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Real-time walk-in OPD management
            </p>
          </div>
          <div>
            <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
              Prescriptions
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Instant digital records after every visit
            </p>
          </div>
          <div>
            <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
              Billing
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              UPI payments with digital receipts
            </p>
          </div>
          <div>
            <p className="font-mono-display text-xs tracking-[0.14em] text-blue uppercase">
              Records
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Complete patient health history
            </p>
          </div>
        </div>
      </motion.div>
    </FlowSection>
  );
}

export function HeroTicker() {
  const phrase =
    "walk-in OPD queues • digital prescriptions • UPI billing • patient records • live queue tracking •";
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
