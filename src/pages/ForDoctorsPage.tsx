import { motion } from "framer-motion";
import { CinematicFooter } from "../components/ui/motion-footer";

function MarqueeStrip({ items, className = "" }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`marquee-strip border-y border-ink-invert/10 ${className}`}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </div>
    </div>
  );
}

export function ForDoctorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featureRows = gsap.utils.toArray<HTMLElement>('.feature-row-trigger');
    featureRows.forEach((row) => {
      gsap.fromTo(row, 
        { opacity: 0.2, x: -10 },
        {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-beige text-ink-invert overflow-hidden selection:bg-orange selection:text-white pt-24">
      
      {/* HEADER MARQUEE */}
      <MarqueeStrip items={[
        'WAITING ROOMS',
        'NO PATIENT RECORDS',
        'STAFF OVERLOAD',
        'PAPER REGISTERS',
        'LOST PRESCRIPTIONS',
        'CASH-ONLY BILLING'
      ]} className="text-orange" />

      {/* AUTOMATE / THE PROBLEM SECTION */}
      <section className="relative w-full bg-beige text-ink-invert blueprint-grid-dark py-20 lg:py-32">
        {/* Section corner marker */}
        <div className="section-marker text-orange opacity-40">02</div>

        <div className="section-wrap w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Left Box */}
          <div className="lg:w-[35%] flex-shrink-0 relative z-10">
            <div className="sticky top-32 p-8 lg:p-10 flex flex-col justify-center text-left relative overflow-hidden border border-ink-invert/10 bg-white shadow-xl">
               <p className="label-uppercase tracking-widest text-orange mb-4 text-xs font-bold">THE BENZOE PROMISE</p>
               <p className="font-functional text-ink-invert text-lg leading-relaxed font-medium">
                 Your clinic deserves more than paper. We're built for the real Indian OPD — walk-ins, queues, and chaos included.
               </p>
            </div>
          </div>

          {/* Scrolling Right List */}
          <div className="flex-1 flex flex-col py-10 lg:py-0 relative z-10">
            <div className="flex flex-col">
              {[
                { num: "01", title: "PAPER REGISTERS", desc: "Walk-in queues written by hand. 'Mera number kab aayega?' echoes through every OPD, every day." },
                { num: "02", title: "LOST PRESCRIPTIONS", desc: "Handwritten prescriptions are hard to read and easy to lose. Every follow-up starts without context." },
                { num: "03", title: "CASH-ONLY BILLING", desc: "Payments and receipts stay outside a digital trail, making records messy for everyone." },
                { num: "04", title: "NO PATIENT HISTORY", desc: "Old files get buried. Patients can't access their own health records without visiting again." },
                { num: "05", title: "CROWDED WAITING ROOMS", desc: "No live queue visibility. Patients arrive hours early and wait anxiously with no sense of position." },
                { num: "06", title: "STAFF OVERLOAD", desc: "Front-desk staff juggle queues, billing, and queries — all manually, every single day." }
              ].map((item, idx) => (
                <div key={idx} className="feature-row feature-row-trigger py-10 border-t border-ink-invert/10 last:border-b hover:bg-black/5 transition-colors pl-4">
                  <div className="feature-num text-orange border-ink-invert/20 font-bold">{item.num}</div>
                  <div>
                    <h3 className="font-condensed text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-tight uppercase text-ink-invert mb-2">{item.title}</h3>
                    <p className="font-functional text-ink-invert opacity-70 text-[15px] max-w-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative w-full bg-orange text-white py-32 border-t border-ink-invert/10">
         <div className="section-wrap max-w-7xl relative z-10 text-center">
            <h2 className="font-condensed text-[clamp(4rem,10vw,8rem)] leading-[0.8] uppercase tracking-tight drop-shadow-sm">
              Ready To Upgrade?
            </h2>
            <div className="mt-12">
               <a href="#" className="inline-block bg-white text-[#252525] font-condensed tracking-wider uppercase px-8 py-4 text-lg hover:bg-white/90 transition-colors shadow-lg">
                  Book A Demo Call
               </a>
            </div>
         </div>
      </section>

      <div className="relative z-[100] bg-ink-invert">
        <CinematicFooter />
      </div>
    </div>
  );
}
