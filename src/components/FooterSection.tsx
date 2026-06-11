import { Link } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#product' },
    { label: 'How it works', href: '/#about' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Join waitlist', href: '/#contact' },
  ],
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: 'mailto:hello@benzoe.health' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Careers', href: 'mailto:careers@benzoe.health' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
  Support: [
    { label: 'Help Center', href: 'mailto:support@benzoe.health' },
    { label: 'FAQs', href: '/#about' },
    { label: 'For clinics', href: 'mailto:partners@benzoe.health' },
    { label: 'Report an issue', href: 'mailto:support@benzoe.health' },
  ],
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternalRoute = href.startsWith('/') && !href.startsWith('/#')

  if (isInternalRoute) {
    return (
      <Link to={href} className="text-sm text-ink-soft transition-colors hover:text-blue">
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className="text-sm text-ink-soft transition-colors hover:text-blue">
      {label}
    </a>
  )
}

export function FooterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer id="contact" className="border-t border-border">
      {/* Waitlist CTA */}
      <div className="section-wrap py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-ink-soft">Still here?</p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              I know you want to
              <br />
              skip the wait.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="border border-green/40 bg-green/10 p-6">
                <p className="font-medium">You&apos;re on the list.</p>
                <p className="mt-1 text-sm text-ink-soft">We&apos;ll reach out when we launch.</p>
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
                  className="w-full border border-border bg-bg px-4 py-3 text-sm outline-none focus:border-blue"
                />
                <button
                  type="submit"
                  className="w-full bg-blue py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Join waitlist
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Legal & links footer */}
      <div className="border-t border-border bg-bg-soft">
        <div className="section-wrap py-12 md:py-16">
          <div className="mb-10 flex items-center gap-2">
            <span className="text-lg font-semibold">Benzoe</span>
            <span className="text-sm text-blue">Healthtech</span>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
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

          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-ink-soft">
              © 2026 Benzoe Healthtech Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm text-ink-soft">Definitely not our first draft.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
