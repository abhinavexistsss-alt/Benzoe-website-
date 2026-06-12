import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    num: "01",
    year: "2026",
    title: "Real-time queue tracking for patients",
    description:
      "See your position in line, how the queue is moving, and when to expect your turn — updated live from the clinic floor.",
    discipline: "Mobile app, Real-time data, Patient UX",
    role: "For patients & caregivers",
    timeline: "In development",
    image: "/products/01-queue-tracking.svg",
    alt: "Benzoe mobile app showing live queue position and estimated wait time",
  },
  {
    num: "02",
    year: "2026",
    title: "Smart arrival notifications",
    description:
      "Get a heads-up when you're next in line. Leave home at the right moment instead of sitting in a crowded lobby.",
    discipline: "Push notifications, Contextual UX",
    role: "Mobile-first experience",
    timeline: "In development",
    image: "/products/02-notifications.svg",
    alt: "Benzoe push notification alerting patient when to leave for clinic",
  },
  {
    num: "03",
    year: "2026",
    title: "Queue management for clinics & hospitals",
    description:
      "A simple dashboard for front-desk teams to manage patient flow, update wait times, and reduce lobby congestion.",
    discipline: "Webapp, B2B SaaS, Queue ops",
    role: "For healthcare providers",
    timeline: "In development",
    image: "/products/03-clinic-dashboard.svg",
    alt: "Benzoe clinic dashboard for staff queue management",
  },
  {
    num: "04",
    year: "2026",
    title: "Operational insights for better flow",
    description:
      "Understand peak hours, bottlenecks, and staffing gaps — so facilities can improve wait times over time.",
    discipline: "Data dashboard, Health ops",
    role: "For hospital administrators",
    timeline: "Planned",
    image: "/products/04-analytics.svg",
    alt: "Benzoe analytics dashboard showing queue peak hours and bottlenecks",
  },
];

const STICKY_TOP = 118;
const STICKY_STEP = 28;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.955]);

  return (
    <div
      ref={ref}
      className="relative mb-8"
      style={{
        position: "sticky",
        top: STICKY_TOP + index * STICKY_STEP,
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale }}
        className="group overflow-hidden rounded-[2rem] border border-border bg-white/78 shadow-[0_30px_100px_rgba(37,37,37,0.08)] backdrop-blur-xl"
      >
        <div className="grid md:min-h-[560px] md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col p-6 md:p-10 lg:p-12">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <span className="font-mono-display text-5xl text-blue/20 md:text-6xl">
                  {project.num}
                </span>
                <span className="ml-3 rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-ink-soft">
                  {project.year}
                </span>
              </div>
              <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-ink">
                {project.timeline}
              </span>
            </div>

            <h3 className="max-w-[520px] text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl lg:text-[38px]">
              {project.title}
            </h3>
            <p className="mt-5 max-w-[560px] text-base leading-8 text-ink-soft">
              {project.description}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-bg/70 p-4">
                <p className="text-[10px] font-bold tracking-[0.14em] text-blue uppercase">
                  Discipline
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  {project.discipline}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-bg/70 p-4">
                <p className="text-[10px] font-bold tracking-[0.14em] text-blue uppercase">
                  Built for
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.role}</p>
              </div>
              <div className="rounded-2xl border border-border bg-bg/70 p-4">
                <p className="text-[10px] font-bold tracking-[0.14em] text-blue uppercase">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  Less crowding, more trust
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-auto inline-flex w-fit items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue"
            >
              Join waitlist <span className="ml-2">→</span>
            </a>
          </div>

          <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-blue-soft via-bg-soft to-green-soft md:h-auto md:min-h-0">
            <div className="absolute inset-6 rounded-[2rem] border border-white/70 bg-white/45 backdrop-blur" />
            <div className="absolute inset-0 blueprint-grid opacity-60" />
            <img
              src={project.image}
              alt={project.alt}
              className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-[1.035] md:p-12"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="product" className="border-t border-border py-16 md:py-24">
      <div className="section-wrap">
        <div
          className="sticky z-30 mb-12 bg-bg/80 py-4 backdrop-blur-xl md:mb-16"
          style={{ top: "94px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs font-bold tracking-[0.16em] text-blue uppercase">
              Product suite
            </p>
            <h2
              className="leading-none tracking-[-0.05em]"
              style={{ fontSize: "clamp(4rem, 16vw, 11rem)" }}
            >
              <span className="font-mono-display font-medium">Product</span>
              <span className="font-display italic text-ink/35">(04)</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative pb-[25vh] md:pb-[35vh]">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
