import { useRef } from 'react'
import { motion } from 'framer-motion'

const stories = [
  {
    quote:
      'You check in, sit down, and stare at a number on a screen that never seems to move. Nobody tells you how long the wait actually is.',
    highlight: 'Nobody tells you how long the wait actually is.',
    source: 'The waiting room problem',
  },
  {
    quote:
      'Caregivers lose hours every week sitting in hospital lobbies — time they could spend working, resting, or being with family.',
    highlight: 'time they could spend working, resting, or being with family.',
    source: 'Why visibility matters',
  },
  {
    quote:
      'Front-desk teams are constantly asked "how much longer?" with no good answer. The data exists — it just never reaches the patient.',
    highlight: 'The data exists — it just never reaches the patient.',
    source: 'The gap we\'re closing',
  },
  {
    quote:
      'Healthcare shouldn\'t feel like a guessing game. Real-time queue data is a small fix with an outsized impact on patient trust.',
    highlight: 'an outsized impact on patient trust.',
    source: 'Our thesis',
  },
]

function HighlightQuote({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(highlight)
  if (parts.length === 1) return <>{text}</>

  return (
    <>
      {parts[0]}
      <mark className="highlight bg-transparent">{highlight}</mark>
      {parts[1]}
    </>
  )
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="section-wrap mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}
        >
          Apparently, waiting
          <br />
          rooms weren&apos;t
          <br />
          <span className="italic">designed for humans!</span>
        </motion.h2>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar snap-x-mandatory flex gap-6 overflow-x-auto px-6 pb-4 md:gap-8 md:px-12"
      >
        {stories.map((story, i) => (
          <motion.article
            key={story.source}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            className="snap-start w-[85vw] shrink-0 border-t border-border pt-8 md:w-[480px]"
          >
            <span
              className="font-display leading-none text-blue/20"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
            >
              &ldquo;
            </span>
            <p className="mt-2 text-base leading-relaxed text-ink md:text-lg">
              <HighlightQuote text={story.quote} highlight={story.highlight} />
            </p>
            <footer className="mt-8 border-t border-border pt-4">
              <p className="text-sm font-medium">{story.source}</p>
            </footer>
            <span
              className="mt-4 block text-right font-display leading-none text-blue/20"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              &rdquo;
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
