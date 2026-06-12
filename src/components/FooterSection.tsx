import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#product" },
    { label: "How it works", href: "/#about" },
    { label: "Roadmap", href: "/#roadmap" },
    { label: "Join waitlist", href: "/#contact" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "mailto:hello@benzoe.health" },
    { label: "LinkedIn", href: "#" },
    { label: "Careers", href: "mailto:careers@benzoe.health" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  Support: [
    { label: "Help Center", href: "mailto:support@benzoe.health" },
    { label: "FAQs", href: "/#about" },
    { label: "For clinics", href: "mailto:partners@benzoe.health" },
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer id="contact" className="border-t border-border bg-ink text-white">
      <div className="section-wrap py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="pointer-events-none absolute top-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-green/25 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">
                Early access
              </p>
              <h2
                className="mt-5 max-w-[760px] font-display leading-[0.95] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.4rem, 9vw, 7.5rem)" }}
              >
                Skip the wait before launch.
              </h2>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-white/62 md:text-lg">
                Join the waitlist for product updates, pilot openings, and early
                access to Benzoe.
              </p>
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
                    You&apos;re on the list.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    We&apos;ll reach out when Benzoe opens early access.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-white/10 bg-white px-5 py-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-green px-5 py-4 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Join waitlist
                  </button>
                  <p className="px-2 text-xs leading-5 text-white/42">
                    No spam. Just meaningful build updates and pilot access.
                  </p>
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
              <p className="text-xs text-white/45">Healthtech queue OS</p>
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
              © 2026 Benzoe Healthtech Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm text-white/45">
              Built to make healthcare waiting less opaque.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
