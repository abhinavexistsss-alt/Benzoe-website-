import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Problem", href: "/#problem" },
    { label: "Solution", href: "/#solution" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "For doctors", href: "/#doctors" },
  ],
  Company: [
    { label: "For patients", href: "/#patients" },
    { label: "Why Benzoe", href: "/#why-benzoe" },
    { label: "Contact", href: "mailto:hello@benzoe.health" },
    { label: "Book demo", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  Support: [
    { label: "Help Center", href: "mailto:support@benzoe.health" },
    { label: "For clinics", href: "mailto:partners@benzoe.health" },
    {
      label: "WhatsApp",
      href: "https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo",
    },
    { label: "Report an issue", href: "mailto:support@benzoe.health" },
  ],
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternalRoute = href.startsWith("/") && !href.startsWith("/#");

  if (isInternalRoute) {
    return (
      <Link
        to={href}
        className="text-sm text-white/55 transition-colors hover:text-green"
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="text-sm text-white/55 transition-colors hover:text-green"
    >
      {label}
    </a>
  );
}

export function FooterSection() {
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
    <footer id="contact" className="border-t border-border bg-ink text-white">
      <div className="section-wrap py-16 md:py-24">
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
                Book a demo
              </p>
              <h2
                className="mt-5 max-w-[760px] font-display leading-[0.95] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.4rem, 9vw, 7.5rem)" }}
              >
                Ready to digitize your clinic?
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-white/62 md:text-lg">
                Share your details and we&apos;ll contact you for a walkthrough
                of Benzoe for your clinic, hospital, or healthcare facility.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-green/30 bg-green/15 px-5 py-3 text-sm font-semibold text-green transition-colors hover:bg-green/25"
              >
                WhatsApp directly
              </a>
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
                  <p className="text-lg font-semibold">
                    Demo request received.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    We&apos;ll reach out to schedule a walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="Dr. Sharma"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="clinic"
                  >
                    Clinic Name
                  </label>
                  <input
                    id="clinic"
                    required
                    value={form.clinic}
                    onChange={(e) => updateField("clinic", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="CityCare Clinic"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    required
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                    placeholder="+91 98765 43210"
                  />

                  <label
                    className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    id="city"
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
                    Submit
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-wrap py-12 md:py-16">
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-blue">
              B
            </span>
            <div>
              <p className="text-lg font-semibold">Benzoe</p>
              <p className="text-xs text-white/45">
                Digitizing India&apos;s clinics, one at a time
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-white uppercase">
                  {group}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/45">
              © 2025 Benzoe Private Limited. All rights reserved.
            </p>
            <p className="text-sm text-white/45">
              Private Limited · Reg: AAOCB6577A · Built in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
