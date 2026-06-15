import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FlowSection } from "./FlowArt";

export function CTAFlowSection() {
  const [form, setForm] = useState({
    name: "",
    clinic: "",
    phone: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      form.name.trim() &&
      form.clinic.trim() &&
      form.phone.trim() &&
      form.city.trim()
    ) {
      setSubmitted(true);
      setForm({ name: "", clinic: "", phone: "", city: "" });
    }
  };

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <FlowSection
      aria-label="Book a demo"
      className="bg-ink"
      style={{ borderRadius: "2rem 2rem 0 0" }}
    >
      <div className="section-wrap flex flex-1 flex-col justify-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="pointer-events-none absolute top-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-green/25 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">
                Book a Free Demo
              </p>
              <h2
                className="mt-5 max-w-[760px] font-display leading-[0.95] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              >
                Ready to digitize your clinic?
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-white/62 md:text-lg">
                Share your details and we&apos;ll contact you for a walkthrough
                of Benzoe — tailored for your clinic, hospital, or healthcare
                facility.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-green/30 bg-green/15 px-5 py-3 text-sm font-semibold text-green transition-colors hover:bg-green/25"
                >
                  WhatsApp directly
                </a>
                <a
                  href="mailto:hello@benzoe.health"
                  className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  Email us
                </a>
              </div>

              {/* Why Benzoe points */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Built for doctors", text: "A full management app — not just a patient booking portal." },
                  { title: "Walk-in OPD first", text: "Designed for real Indian walk-in patients, not only appointment-led workflows." },
                  { title: "Independent clinics", text: "Built for India's independent clinics and hospitals, not big chains." },
                  { title: "One subscription", text: "Queue, prescription, billing, and records — your entire clinic goes digital." },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-sm font-semibold text-white">{point.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">{point.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur md:p-5"
            >
              {submitted ? (
                <div className="rounded-3xl border border-green/40 bg-green/15 p-6">
                  <p className="text-lg font-semibold text-white">
                    Demo request received.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    We&apos;ll reach out to schedule a walkthrough of Benzoe for
                    your clinic.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="cta-name"
                  >
                    Name
                  </label>
                  <input
                    id="cta-name"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="Dr. Sharma"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="cta-clinic"
                  >
                    Clinic Name
                  </label>
                  <input
                    id="cta-clinic"
                    required
                    value={form.clinic}
                    onChange={(e) => updateField("clinic", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="CityCare Clinic"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="cta-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    required
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="+91 98765 43210"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="cta-city"
                  >
                    City
                  </label>
                  <input
                    id="cta-city"
                    required
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="Nagpur"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-green px-5 py-4 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Book Free Demo
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </FlowSection>
  );
}
