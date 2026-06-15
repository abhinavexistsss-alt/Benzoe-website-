import { motion } from "framer-motion";
import { FlowSection } from "./FlowArt";

const features = [
  {
    num: "01",
    title: "Queue Management",
    description:
      "Real-time walk-in OPD queue with token tracking. Patients see their live position — no more asking 'mera number kab aayega?'",
    includes: "Token system, live status, SMS alerts",
    builtFor: "Clinic staff & walk-in patients",
    impact: "Organised OPD, less front-desk chaos",
  },
  {
    num: "02",
    title: "Digital Prescriptions",
    description:
      "Write prescriptions digitally during consultations. Patients receive instant PDF prescriptions — clear, readable, and never lost.",
    includes: "Digital Rx pad, PDF generation, history",
    builtFor: "Doctors & patients",
    impact: "Accurate records, better follow-ups",
  },
  {
    num: "03",
    title: "UPI Billing & Receipts",
    description:
      "Collect payments via UPI with auto-generated digital receipts. Every transaction tracked — no more cash-only confusion.",
    includes: "QR code payments, digital receipts",
    builtFor: "Clinic billing staff & patients",
    impact: "Clean financial records, zero leakage",
  },
  {
    num: "04",
    title: "Patient Health Records",
    description:
      "Complete prescription history and visit records in one place. Patients carry their health data digitally — no app download needed.",
    includes: "Visit history, Rx archive, family records",
    builtFor: "Patients, caregivers & doctors",
    impact: "Continuity of care across visits",
  },
  {
    num: "05",
    title: "Live Queue Tracking",
    description:
      "Patients check their estimated wait time from their phone. Arrive when it's almost their turn — not two hours early.",
    includes: "Live position, ETA, notifications",
    builtFor: "Walk-in OPD patients",
    impact: "Less anxious waiting, happier patients",
  },
];

export function SolutionFlowSection() {
  return (
    <FlowSection
      aria-label="The solution"
      className="bg-bg"
      style={{ borderRadius: "2rem 2rem 0 0" }}
    >
      <div className="section-wrap flex flex-1 flex-col justify-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-4 text-xs font-bold tracking-[0.16em] text-blue uppercase">
            The solution
          </p>
          <h2
            className="font-display leading-[0.95] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            One app. Two sides.
            <br />
            <span className="text-ink/25">One complete solution.</span>
          </h2>
          <p className="mt-6 max-w-[600px] text-base leading-8 text-ink-soft md:text-lg">
            Benzoe replaces paper queues, handwritten prescriptions, and
            cash-only billing with one simple clinic management app — built
            for how Indian clinics actually run.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-3xl border border-border bg-bg-soft/60 p-5 backdrop-blur transition-colors hover:border-blue/30 hover:bg-blue-soft/40"
            >
              <span className="font-mono-display text-3xl text-blue/20">
                {feature.num}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-tight tracking-[-0.02em]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                {feature.description}
              </p>
              <div className="mt-5 space-y-2 border-t border-border pt-4">
                <p className="text-[10px] font-bold tracking-[0.12em] text-blue uppercase">
                  Includes
                </p>
                <p className="text-xs leading-relaxed text-ink-soft">
                  {feature.includes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FlowSection>
  );
}
