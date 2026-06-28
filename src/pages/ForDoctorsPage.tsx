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

export function ForDoctorsPage() {
  return (
    <div className="w-full bg-beige text-ink-invert overflow-hidden selection:bg-orange selection:text-white pt-24">
      
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
      <section className="relative w-full bg-beige text-ink-invert blueprint-grid-dark py-20 lg:py-32 overflow-hidden">
        {/* Section corner marker */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-marker text-orange"
        >
          02
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
               <p className="label-uppercase tracking-widest text-orange mb-4 text-xs font-bold relative z-10">THE COMPLETE ECOSYSTEM</p>
               <p className="font-functional text-ink-invert text-lg md:text-xl leading-relaxed font-medium relative z-10">
                 Benzoe is the ultimate all-in-one digital platform for your clinic. Manage patients, monitor revenue flows, and eliminate OPD chaos forever.
               </p>
            </motion.div>
          </div>

          {/* Scrolling Right List */}
          <div className="flex-1 flex flex-col py-10 lg:py-0 relative z-10">
            <div className="flex flex-col">
              {[
                { num: "01", title: "PAPER REGISTERS", desc: "Manually written walk-in queues create chaos. 'Mera number kab aayega?' echoes through the waiting room, stressing your front-desk staff." },
                { num: "02", title: "CROWDED WAITING ROOMS", desc: "Without live queue visibility, patients arrive hours early and wait anxiously. Benzoe's digital queue completely clears the physical room." },
                { num: "03", title: "LOST PRESCRIPTIONS", desc: "Handwritten prescriptions are easily lost, leaving follow-ups without context. Benzoe secures permanent digital records instantly inside the app." },
                { num: "04", title: "REVENUE TRACKING", desc: "Cash-only billing and scattered UPI payments make accounting a nightmare. Our financial dashboard tracks all cash inflows, outflows, and UPI settlements in one place." },
                { num: "05", title: "INSTANT & EMERGENCY", desc: "Struggling to fit urgent cases into a packed schedule? Use instant bookings and emergency queues to manage capacity and significantly boost your clinic's revenue." },
                { num: "06", title: "STAFF OVERLOAD", desc: "Front-desk staff juggle queues, billing, and patient queries simultaneously. Benzoe completely automates the workflow so they can focus on patient care." }
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

      {/* FINAL CTA SECTION */}
      <section className="relative w-full bg-orange text-white py-32 border-t border-ink-invert/10 overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 50 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="section-wrap max-w-7xl relative z-10 text-center"
         >
            <h2 className="font-condensed text-[clamp(4rem,10vw,8rem)] leading-[0.8] uppercase tracking-tight drop-shadow-sm">
              Upgrade Your<br/>Practice Today
            </h2>
            <div className="mt-12 flex justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="inline-block bg-white text-[#252525] font-condensed tracking-wider uppercase px-8 py-4 text-lg hover:bg-white/90 shadow-xl rounded-full"
              >
                Book a Demo
              </motion.a>
            </div>
         </motion.div>
      </section>

      <div className="relative z-[100] bg-ink-invert">
        <CinematicFooter />
      </div>
    </div>
  );
}
