import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    num: '01',
    year: '2026',
    title: 'Real-time queue tracking for patients',
    description:
      'See your position in line, how the queue is moving, and when to expect your turn — updated live from the clinic floor.',
    discipline: 'Mobile app, Real-time data, Patient UX',
    role: 'For patients & caregivers',
    timeline: 'In development',
    image: '/products/01-queue-tracking.svg',
    alt: 'Benzoe mobile app showing live queue position and estimated wait time',
  },
  {
    num: '02',
    year: '2026',
    title: 'Smart arrival notifications',
    description:
      'Get a heads-up when you\'re next in line. Leave home at the right moment instead of sitting in a crowded lobby.',
    discipline: 'Push notifications, Contextual UX',
    role: 'Mobile-first experience',
    timeline: 'In development',
    image: '/products/02-notifications.svg',
    alt: 'Benzoe push notification alerting patient when to leave for clinic',
  },
  {
    num: '03',
    year: '2026',
    title: 'Queue management for clinics & hospitals',
    description:
      'A simple dashboard for front-desk teams to manage patient flow, update wait times, and reduce lobby congestion.',
    discipline: 'Webapp, B2B SaaS, Queue ops',
    role: 'For healthcare providers',
    timeline: 'In development',
    image: '/products/03-clinic-dashboard.svg',
    alt: 'Benzoe clinic dashboard for staff queue management',
  },
  {
    num: '04',
    year: '2026',
    title: 'Operational insights for better flow',
    description:
      'Understand peak hours, bottlenecks, and staffing gaps — so facilities can improve wait times over time.',
    discipline: 'Data dashboard, Health ops',
    role: 'For hospital administrators',
    timeline: 'Planned',
    image: '/products/04-analytics.svg',
    alt: 'Benzoe analytics dashboard showing queue peak hours and bottlenecks',
  },
]

const STICKY_TOP = 108
const STICKY_STEP = 28

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  return (
    <div
      ref={ref}
      className="relative mb-8"
      style={{
        position: 'sticky',
        top: STICKY_TOP + index * STICKY_STEP,
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale }}
        className="overflow-hidden rounded-sm border border-border bg-bg"
      >
        <div className="grid md:min-h-[520px] md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col p-6 md:p-10 lg:p-12">
            <div className="mb-6 flex items-start gap-6">
              <span className="font-mono-display text-4xl text-ink/15 md:text-5xl">
                {project.num}
              </span>
              <span className="text-sm text-ink-soft">{project.year}</span>
            </div>

            <h3 className="text-xl font-semibold leading-snug md:text-2xl lg:text-[28px]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              {project.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink-soft uppercase">
                  Discipline
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.discipline}</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink-soft uppercase">
                  Built for
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.role}</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink-soft uppercase">
                  Status
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.timeline}</p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block text-sm font-medium text-blue underline decoration-blue/40 underline-offset-4 hover:decoration-blue"
            >
              Join waitlist
            </a>
          </div>

          <div className="relative min-h-[360px] w-full bg-bg-soft md:min-h-0 md:h-auto">
            <img
              src={project.image}
              alt={project.alt}
              className="absolute inset-0 h-full w-full object-contain p-6 md:p-10"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="product" className="border-t border-border py-16 md:py-24">
      <div className="section-wrap">
        <div
          className="sticky z-30 mb-12 bg-bg/95 py-4 backdrop-blur-sm md:mb-16"
          style={{ top: '96px' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="leading-none tracking-[-0.04em]"
            style={{ fontSize: 'clamp(4rem, 18vw, 11rem)' }}
          >
            <span className="font-mono-display font-medium">Product</span>
            <span className="font-display italic">(04)</span>
          </motion.h2>
        </div>

        <div className="relative pb-[25vh] md:pb-[35vh]">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
