import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-16 md:py-24">
      <div className="section-wrap">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-sm text-ink-soft"
        >
          Hello
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Don&apos;t you want to
              <br />
              know more
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-garamond text-xl leading-relaxed text-ink md:text-[27px] md:leading-[1.45]">
              Benzoe, built by a team obsessed with patient experience. We spent months inside
              waiting rooms before we took the leap. We are still taking it.
            </p>
            <p className="font-garamond text-xl leading-relaxed text-ink md:text-[27px] md:leading-[1.45]">
              Engineering taught us constraints. Healthcare taught us empathy. Queue visibility is
              where we stopped choosing between them and started using the tension to find better
              answers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
