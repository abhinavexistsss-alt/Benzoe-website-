import { useEffect, useRef } from "react";
import { CinematicFooter } from "../components/ui/motion-footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MarqueeStrip({ items, className = "" }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-strip border-y border-ink-invert/10 ${className}`}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </div>
    </div>
  );
}

export function ForPatientsPage() {
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
        'ZERO WAITING',
        'DIGITAL RECORDS',
        'INSTANT PRESCRIPTIONS',
        'NO PAPERWORK',
        'AI HEALTH ASSISTANT',
        'LIVE TRACKING'
      ]} className="text-orange" />

      {/* PATIENT JOURNEY SECTION */}
      <section className="relative w-full bg-beige text-ink-invert blueprint-grid-dark py-20 lg:py-32">
        <div className="section-marker text-orange opacity-40">01</div>

        <div className="section-wrap w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Left Box */}
          <div className="lg:w-[35%] flex-shrink-0 relative z-10">
            <div className="sticky top-32 p-8 lg:p-10 flex flex-col justify-center text-left relative overflow-hidden border border-ink-invert/10 bg-white shadow-xl">
               <p className="label-uppercase tracking-widest text-orange mb-4 text-xs font-bold">YOUR HEALTH, SIMPLIFIED</p>
               <p className="font-functional text-ink-invert text-lg leading-relaxed font-medium">
                 Experience the easiest way to see your doctor. No more standing in crowded lines or losing paper prescriptions.
               </p>
            </div>
          </div>

          {/* Scrolling Right List */}
          <div className="flex-1 flex flex-col py-10 lg:py-0 relative z-10">
            <div className="flex flex-col">
              {[
                { num: "01", title: "SCAN & JOIN", desc: "Scan the clinic's QR code with your phone to instantly join the live queue. No app required." },
                { num: "02", title: "TRACK LIVE", desc: "Grab a coffee. You can track your exact position in the queue live from your browser." },
                { num: "03", title: "AI ASSISTANT", desc: "Have a quick chat with our AI to log your symptoms before you even step into the doctor's cabin." },
                { num: "04", title: "CONSULT", desc: "Walk in exactly when it's your turn. Your doctor already knows why you're there." },
                { num: "05", title: "WHATSAPP PRESCRIPTIONS", desc: "Pay via UPI and receive your permanent digital prescription directly on WhatsApp." }
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
              Your Health Record,<br/>Always With You
            </h2>
            <div className="mt-12 flex justify-center gap-4">
              <a href="#" className="inline-block bg-white text-[#252525] font-condensed tracking-wider uppercase px-8 py-4 text-lg hover:bg-white/90 transition-colors shadow-lg">
                View Your Records
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
