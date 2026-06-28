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
    </motion.div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="w-full bg-beige text-ink-invert overflow-hidden selection:bg-orange selection:text-white pt-24">
      
      {/* HEADER MARQUEE */}
      <MarqueeStrip items={[
        'PLUG THE LEAKS',
        'BUILD A BETTER BUCKET',
        'ZERO STAFF TRAINING',
        'OVERFILL THE BUCKET',
        'FULLY AUTOMATED',
        'SEAMLESS INTEGRATION'
      ]} className="text-orange" />

      {/* SYSTEM PROCESS SECTION */}
      <section className="relative w-full bg-beige text-ink-invert blueprint-grid-dark py-20 lg:py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-marker text-orange"
        >
          03
        </motion.div>

        <div className="section-wrap w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Left Box */}
          <div className="lg:w-[35%] flex-shrink-0 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              className="sticky top-32 p-8 lg:p-12 flex flex-col justify-center text-left relative overflow-hidden border border-white/40 bg-white/40 backdrop-blur-3xl shadow-[0_16px_40px_rgba(0,0,0,0.05)] rounded-[2rem] transition-all duration-300"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none rounded-[2rem]" />
               <p className="label-uppercase tracking-widest text-orange mb-4 text-xs font-bold relative z-10">THE BENZOE SYSTEM</p>
               <p className="font-functional text-ink-invert text-lg md:text-xl leading-relaxed font-medium relative z-10">
                 Most clinic owners are too busy to track patient history. Hand-written prescriptions are slipping through the cracks and you don't even notice.
               </p>
            </motion.div>
          </div>

          {/* Scrolling Right List */}
          <div className="flex-1 flex flex-col py-10 lg:py-0 relative z-10">
            <div className="flex flex-col">
              {[
                { num: "01", title: "STOP THE LEAK", desc: "Without a digital system, every piece of paper is a point of failure. We plug the holes in your operational bucket by moving everything to the cloud." },
                { num: "02", title: "BUILD A BETTER BUCKET", desc: "Digital queues, WhatsApp prescriptions, and UPI billing built for you 100% hands off. We'll handle the system, you focus on the patients." },
                { num: "03", title: "OVERFILL THE BUCKET", desc: "With Benzoe in place, word of mouth and patient retention will be flowing. Expect a lot of new faces to walk in the door." },
                { num: "04", title: "SEAMLESS INTEGRATION", desc: "Our system is designed to drop right into your existing Indian OPD environment without requiring your staff to learn complicated new software." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 16, backgroundColor: "rgba(0,0,0,0.03)" }}
                  className="py-10 border-t border-ink-invert/10 last:border-b transition-colors pl-4 md:pl-8 rounded-xl cursor-pointer"
                >
                  <div className="feature-num text-orange font-bold text-lg mb-2">{item.num}</div>
                  <div>
                    <h3 className="font-condensed text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-tight uppercase text-ink-invert mb-3">{item.title}</h3>
                    <p className="font-functional text-ink-invert opacity-75 text-base md:text-lg max-w-xl leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-[100] bg-ink-invert">
        <CinematicFooter />
      </div>
    </div>
  );
}

