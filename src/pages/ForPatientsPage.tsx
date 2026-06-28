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

export function ForPatientsPage() {
  return (
    <div className="w-full bg-beige text-ink-invert overflow-hidden selection:bg-orange selection:text-white pt-24">
      
      {/* HEADER MARQUEE */}
      <MarqueeStrip items={[
        'ZERO WAITING',
        'DIGITAL RECORDS',
        'INSTANT PRESCRIPTIONS',
        'NO PAPERWORK',
        'AI HEALTH ASSISTANT',
        'LIVE TRACKING'
      ]} className="text-orange" />

      {/* PATIENT JOURNEY SECTION */}
      <section className="relative w-full bg-beige text-ink-invert blueprint-grid-dark py-20 lg:py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-marker text-orange"
        >
          01
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
               <p className="label-uppercase tracking-widest text-orange mb-4 text-xs font-bold relative z-10">YOUR HEALTH, SIMPLIFIED</p>
               <p className="font-functional text-ink-invert text-lg md:text-xl leading-relaxed font-medium relative z-10">
                 Experience the easiest way to see your doctor. No more standing in crowded lines or losing paper prescriptions.
               </p>
            </motion.div>
          </div>

          {/* Scrolling Right List */}
          <div className="flex-1 flex flex-col py-10 lg:py-0 relative z-10">
            <div className="flex flex-col">
              {[
                { num: "01", title: "JOIN THE QUEUE", desc: "Join the digital queue from your couch at home and reach the doctor right on time. If you walk in without the app, the clinic simply adds you manually." },
                { num: "02", title: "TRACK & NAVIGATE", desc: "Monitor your exact queue position live through the app. When your turn approaches, the integrated map navigation directs you straight to the clinic/hospital." },
                { num: "03", title: "MULTILINGUAL AI", desc: "Have a pre-consultation chat with our AI voice assistant in your native language, seamlessly logging your symptoms to save time." },
                { num: "04", title: "THE CONSULTATION", desc: "Walk into the cabin exactly when it's your turn. The doctor already has your full health context from the AI pre-consultation." },
                { num: "05", title: "IN-APP RECORDS", desc: "Pay securely via UPI and instantly receive your permanent digital prescription safely stored inside your patient application." }
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

      {/* UNIVERSAL CTA (Dark Canvas) */}
      <section className="relative w-full bg-ink-invert text-white py-24 md:py-40 border-t border-white/10 overflow-hidden flex items-center justify-center min-h-[70vh]">
         {/* Subtle Background Glow */}
         <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
           <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-orange blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
         </div>
         
         <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 50 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="section-wrap max-w-5xl relative z-10 text-center flex flex-col items-center"
         >
            <h2 className="font-condensed text-[clamp(3.5rem,10vw,10rem)] leading-[0.8] uppercase tracking-tight drop-shadow-sm">
              THE FUTURE OF<br/>HEALTHCARE IS HERE.
            </h2>
            <p className="font-functional text-lg md:text-2xl text-white/70 mt-8 max-w-2xl mx-auto font-medium">
               Whether you are a patient seeking care, or a doctor bringing order to the chaos.
            </p>
            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
               <motion.a 
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 href="/for-doctors" 
                 className="inline-flex items-center justify-center bg-orange text-white font-condensed tracking-wider uppercase px-8 py-5 text-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all w-full sm:w-auto"
               >
                  I am a Doctor / Hospital
               </motion.a>
               <motion.a 
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 href="/for-patients" 
                 className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-condensed tracking-wider uppercase px-8 py-5 text-xl hover:bg-white/10 transition-all w-full sm:w-auto"
               >
                  I am a Patient
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
