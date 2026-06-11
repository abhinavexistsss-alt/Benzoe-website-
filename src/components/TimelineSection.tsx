import { motion } from 'framer-motion'

const items = [
  { org: 'Benzoe', role: 'Idea & research', period: 'Early 2026' },
  { org: 'Patient interviews', role: 'Discovery & problem validation', period: 'Q1 2026' },
  { org: 'Product design', role: 'UX flows & prototype', period: 'Q1 2026' },
  { org: 'Pilot conversations', role: 'Hospital & clinic outreach', period: 'Q2 2026' },
]

export function TimelineSection() {
  return (
    <section id="roadmap" className="border-t border-border bg-bg py-16 md:py-24">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              A healthtech startup
              <br />
              building in India
            </p>
            <h2
              className="mt-8 font-display leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Where
              <br />
              we&apos;re headed
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {items.map((item) => (
              <div
                key={item.org + item.period}
                className="flex items-start justify-between gap-4 border-t border-border py-5"
              >
                <div>
                  <p className="font-medium">{item.org}</p>
                  <p className="mt-1 text-sm text-ink-soft">{item.role}</p>
                </div>
                <p className="shrink-0 text-sm text-ink-soft">{item.period}</p>
              </div>
            ))}

            <a
              href="#contact"
              className="mt-6 inline-block text-sm font-medium text-blue underline decoration-blue/40 underline-offset-4"
            >
              Join the waitlist
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
