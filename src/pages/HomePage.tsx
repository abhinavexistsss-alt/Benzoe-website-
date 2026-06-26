import { useEffect, useRef, useState } from "react";
import { CinematicFooter } from "../components/ui/motion-footer";
import { AssistantCanvas } from "./AIVoiceAssistant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function MarqueeStrip({ items, className = "" }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className={`marquee-strip ${className}`}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </div>
    </div>
  );
}

const FAQ_DATA = [
  {
    q: "DO I NEED TO DOWNLOAD AN APP?",
    a: "No. Benzoe is 100% browser-based. Patients simply scan a QR code at the clinic and everything runs instantly in their mobile browser — no app store, no sign-up, no friction."
  },
  {
    q: "HOW DOES THE LIVE QUEUE WORK?",
    a: "When a patient scans the clinic QR, they're added to a real-time digital queue. They can track their exact position from anywhere — grab a coffee, sit in their car, or wait at home nearby. The queue updates live, every second."
  },
  {
    q: "WHAT IS THE AI VOICE ASSISTANT?",
    a: "Before seeing the doctor, patients can chat with our AI assistant to log their symptoms. This pre-consultation data is shared with the doctor so they walk into the cabin already knowing why you're there — saving time for both sides."
  },
  {
    q: "HOW DO DIGITAL PRESCRIPTIONS WORK?",
    a: "After the consultation, the doctor generates a clear, typed prescription digitally. The patient receives it instantly via WhatsApp as a permanent PDF — no more unreadable handwriting or lost slips."
  },
  {
    q: "IS THIS ONLY FOR LARGE HOSPITALS?",
    a: "Not at all. Benzoe is designed specifically for small-to-medium Indian clinics and OPDs. Solo practitioners, polyclinics, and multi-doctor setups all work seamlessly. If you have walk-in patients, Benzoe works for you."
  },
  {
    q: "DO MY STAFF NEED TRAINING?",
    a: "Zero training required. Benzoe is designed to drop into your existing workflow without disruption. Your front-desk staff will be up and running within minutes, not weeks."
  },
  {
    q: "IS PATIENT DATA SECURE?",
    a: "Absolutely. All patient data is encrypted end-to-end and stored on secure cloud infrastructure compliant with Indian healthcare data regulations. Only the patient and their doctor can access their medical records."
  },
  {
    q: "HOW DO I GET STARTED?",
    a: "Book a free demo call with our team. We'll set up your entire digital clinic system — QR codes, queue management, prescription templates, UPI billing — completely hands-off for you. You focus on patients, we handle the tech."
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof FAQ_DATA[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-t border-ink-invert cursor-pointer group"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between py-7 lg:py-9">
        <h3 className={`font-condensed text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1] tracking-tight uppercase transition-colors duration-300 ${isOpen ? 'text-orange' : 'text-ink-invert group-hover:text-orange'}`}>
          {item.q}
        </h3>
        <div className={`flex-shrink-0 ml-8 w-10 h-10 rounded-full border-2 ${isOpen ? 'border-orange bg-orange text-white rotate-45' : 'border-ink-invert/30 text-ink-invert group-hover:border-orange group-hover:text-orange'} flex items-center justify-center transition-all duration-400`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="font-functional text-[17px] text-ink-invert/60 leading-relaxed font-medium pb-8 lg:pb-10 max-w-3xl">
          {item.a}
        </p>
      </div>
    </div>
  );
}

// Global Audio Engine for Ticking Sound
let globalAudioCtx: AudioContext | null = null;
export let isAudioUnlocked = false;

const getGlobalAudioCtx = () => {
  if (typeof window === 'undefined') return null;
  if (!globalAudioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      globalAudioCtx = new AudioContextClass();
    }
  }
  return globalAudioCtx;
};

export const unlockGlobalAudio = async () => {
  const ctx = getGlobalAudioCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
  
  if (!isAudioUnlocked) {
    try {
      // Loud Confirmation Beep
      const beepOsc = ctx.createOscillator();
      const beepGain = ctx.createGain();
      beepOsc.type = 'square'; // Extremely loud and aggressive
      beepOsc.frequency.setValueAtTime(800, ctx.currentTime);
      beepGain.gain.setValueAtTime(1.0, ctx.currentTime);
      beepGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      beepOsc.connect(beepGain);
      beepGain.connect(ctx.destination);
      beepOsc.start();
      beepOsc.stop(ctx.currentTime + 0.2);

      isAudioUnlocked = true;
      console.log("Audio Engine successfully unlocked! Beep fired.");
    } catch (e) {
      console.error("Audio Engine unlock failed:", e);
    }
  }
};

export const muteGlobalAudio = () => {
  isAudioUnlocked = false;
  console.log("Audio Engine MUTED");
};

function useCountUp(target: number, duration: number = 2, suffix: string = "", playSound: boolean = false) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    let lastVibrateTime = 0;

    const playTickSound = () => {
      if (!playSound || !isAudioUnlocked) return;
      try {
        const ctx = getGlobalAudioCtx();
        if (!ctx) return;
        
        // Context should already be running from the unlock, but just in case
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.05);
        
        gain.gain.setValueAtTime(1.0, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
        console.log("TICK SOUND FIRED");
      } catch (e) {
        console.error("Tick sound failed:", e);
      }
    };

    const triggerFeedback = (pattern: number | number[]) => {
      // 1. Always attempt vibration (silently fails on desktop)
      if (typeof window !== "undefined" && navigator.vibrate && playSound) {
        try { navigator.vibrate(pattern); } catch (e) {}
      }
      // 2. Always attempt audio (works on desktop/dev tools)
      playTickSound();
    };

    const playCounter = () => {
      if (tweenRef.current) tweenRef.current.kill();
      const obj = { val: 0 };
      setDisplay("0" + suffix);
      tweenRef.current = gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          const formatted = target >= 100000
            ? Math.floor(obj.val).toLocaleString('en-IN')
            : Math.floor(obj.val).toLocaleString();
          setDisplay(formatted + suffix);

          const now = Date.now();
          if (now - lastVibrateTime > 80) {
            triggerFeedback(5);
            lastVibrateTime = now;
          }
        },
        onComplete: () => {
          triggerFeedback([15, 30, 15]);
        }
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: playCounter,
      onEnterBack: playCounter,
    });

    return () => {
      trigger.kill();
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [target, duration, suffix, playSound]);

  return { ref, display };
}

function StatsSection() {
  const mainStat = useCountUp(8000000, 2.5, "+", true);
  const stat2 = useCountUp(500, 2, "+", false);
  const stat3 = useCountUp(0, 1.5, "", false);
  const stat4 = useCountUp(100, 2, "%", false);

  return (
    <section className="relative w-full bg-bg text-white py-28 lg:py-40 overflow-hidden blueprint-grid border-y border-white/20">
      {/* Giant background number */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden z-0">
        <div ref={mainStat.ref} className="font-condensed text-[clamp(20rem,45vw,50rem)] leading-[0.75] tracking-tighter text-white/[0.06] -mr-[5vw]">
          80L
        </div>
      </div>

      <div className="section-wrap max-w-7xl relative z-10">
        {/* Main headline */}
        <div className="lg:w-[55%]">
          <p className="label-uppercase tracking-widest text-white/70 mb-6 font-bold border border-white/20 px-4 py-2 bg-white/5 inline-block">THE BENZOE SCALE</p>
          <h2 className="font-condensed text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] tracking-tight uppercase text-white">
            READY TO SERVE<br/>MORE THAN:
          </h2>
        </div>

        {/* The massive counter */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-baseline gap-4">
            <span className="font-condensed text-[clamp(6rem,18vw,16rem)] leading-[0.8] tracking-tight text-white tabular-nums">
              {mainStat.display}
            </span>
          </div>
          <p className="font-condensed text-[clamp(2rem,4vw,4rem)] leading-[1] tracking-tight uppercase text-white/80 mt-2">
            PATIENTS EVERY SINGLE DAY
          </p>
        </div>

        {/* Supporting stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 lg:mt-28 border-t border-white/20 pt-12">
          <div>
            <div ref={stat2.ref} className="font-condensed text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-tight text-white">
              {stat2.display}
            </div>
            <p className="font-functional text-sm text-white/60 uppercase tracking-wider font-bold mt-2">Clinics Ready To Onboard</p>
          </div>
          <div>
            <div ref={stat3.ref} className="font-condensed text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-tight text-white">
              ₹0
            </div>
            <p className="font-functional text-sm text-white/60 uppercase tracking-wider font-bold mt-2">Setup Cost For Clinics</p>
          </div>
          <div>
            <div ref={stat4.ref} className="font-condensed text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-tight text-white">
              {stat4.display}
            </div>
            <p className="font-functional text-sm text-white/60 uppercase tracking-wider font-bold mt-2">Digital & Paperless</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white text-ink-invert py-24 lg:py-40 border-b border-ink-invert">
      <div className="section-wrap max-w-5xl">
        {/* Unified Header */}
        <div className="mb-20 lg:mb-28">
          <h2 className="font-condensed text-[clamp(4rem,9vw,10rem)] leading-[0.85] tracking-tight uppercase text-ink-invert">
            FREQUENTLY<br/>ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-b border-ink-invert">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollingCardsRef = useRef<HTMLDivElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 1. Split Screen Pinning
      if (triggerRef.current && stickyRef.current && scrollingCardsRef.current) {
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top 120px",
          end: () => `+=${scrollingCardsRef.current?.offsetHeight! - stickyRef.current?.offsetHeight!}`,
          pin: stickyRef.current,
          pinSpacing: false,
        });
      }

      // 2. Feature Cards Fade Up
      const cards = gsap.utils.toArray<HTMLElement>('.gsap-card');
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-bg text-ink overflow-hidden selection:bg-ink-invert selection:text-white min-h-screen">
      {/* EXPLICIT SOUND TOGGLE */}
      <button 
        onClick={() => {
          if (!soundOn) {
            unlockGlobalAudio();
            setSoundOn(true);
          } else {
            muteGlobalAudio();
            setSoundOn(false);
          }
        }}
        className="fixed bottom-6 left-6 z-[999] bg-ink-invert text-white px-5 py-3 font-functional text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-orange transition-colors shadow-2xl border border-white/20"
      >
        <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] ${soundOn ? 'bg-green-400' : 'bg-red-500'}`} />
        SOUND {soundOn ? 'ON' : 'MUTED'}
      </button>
      
      {/* 1. HERO SECTION (Orange) */}
      <section className="relative min-h-[100svh] w-full pt-32 pb-10 flex flex-col justify-between blueprint-grid">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <AssistantCanvas />
        </div>

        <div className="section-wrap relative z-10 w-full flex-1 flex flex-col pointer-events-none">
          
          <div className="w-full lg:w-[75%] flex flex-col items-start justify-center text-left mt-12 lg:mt-24 -ml-2 md:-ml-6 lg:-ml-8 relative">
            <div className="inline-block">
              <p className="label-uppercase tracking-widest text-white/80 mb-6 font-bold border border-white/20 px-4 py-2 bg-white/5">THE FUTURE OF OPD</p>
            </div>
            <h1 className="font-condensed text-[clamp(5rem,11vw,20rem)] leading-[0.85] tracking-tight uppercase text-white whitespace-nowrap">
              YOUR HEALTH.<br/>ZERO WAITING.
            </h1>
          </div>

          <div className="mt-auto pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/30 w-full text-white pointer-events-auto">
            <Link to="/for-patients" className="font-condensed text-[clamp(1.5rem,3vw,2.5rem)] tracking-wide uppercase hover:text-white/70 transition-colors">
              Explore Patient Journey →
            </Link>
            <Link to="/for-doctors" className="font-condensed text-[clamp(1.5rem,3vw,2.5rem)] tracking-wide uppercase hover:text-white/70 transition-colors">
              Explore Clinic Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE TICKER (White) */}
      <div className="bg-white text-ink-invert border-y border-ink-invert">
        <MarqueeStrip items={[
          'DIGITAL PRESCRIPTIONS',
          'LIVE QUEUE UPDATES',
          'UPI BILLING',
          'AI ASSISTANT',
          'ZERO PAPER',
          'INSTANT RECORDS'
        ]} className="font-bold border-none py-4" />
      </div>

      {/* 3. THE PROBLEM (Dark) */}
      <section className="relative w-full bg-ink-invert text-white py-32 border-b border-white/20">
         <div className="section-wrap text-center max-w-5xl">
            <p className="label-uppercase tracking-widest text-orange mb-8 text-sm">THE OPD CHAOS</p>
            <h2 className="font-condensed text-[clamp(4rem,8vw,10rem)] leading-[0.85] tracking-tight uppercase">
              Paper Registers.<br/>Lost Prescriptions.<br/>Crowded Waiting Rooms.
            </h2>
            <p className="font-functional text-white/70 text-xl mt-12 max-w-3xl mx-auto leading-relaxed">
              The Indian healthcare system is broken by paperwork. Front-desk staff juggle queues manually, patients wait hours anxiety-filled, and doctors lose crucial medical history. It ends today.
            </p>
         </div>
      </section>

      {/* 4. THE SOLUTION: SPLIT-SCREEN PINNING (White Canvas) */}
      <section ref={triggerRef} className="relative w-full bg-white text-ink-invert py-20 lg:py-32 border-b border-ink-invert blueprint-grid-dark">
        <div className="section-wrap w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Column (Pinned on Desktop) */}
          <div className="lg:w-[40%] flex-shrink-0 relative">
            <div ref={stickyRef} className="lg:sticky lg:top-[120px] bg-white text-ink-invert p-8 lg:p-12 aspect-square flex flex-col justify-between overflow-hidden shadow-2xl border border-ink-invert">
               <div>
                 <p className="label-uppercase tracking-widest text-orange mb-4 font-bold border-b border-ink-invert pb-4">HOW IT WORKS</p>
                 <h2 className="font-condensed text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-tight uppercase mt-4">
                    CARE WITHOUT<br/>THE CHAOS.
                 </h2>
               </div>
               <p className="font-functional text-ink-invert/80 text-lg font-medium border-t border-ink-invert pt-4">
                  A seamless digital ecosystem designed specifically to handle the sheer volume of walk-in Indian OPDs.
               </p>
            </div>
          </div>

          {/* Right Column (Scrolling Stark Cards) */}
          <div ref={scrollingCardsRef} className="flex-1 flex flex-col gap-8 lg:py-0">
             {[
                { title: "NO APP REQUIRED", desc: "Just scan a QR code at the clinic and join the live queue instantly from your mobile browser." },
                { title: "LIVE TRACKING", desc: "Grab a coffee and wait comfortably. You'll see your exact position in the queue update live." },
                { title: "AI PRE-CONSULT", desc: "Talk to our AI voice assistant to log your symptoms before you see the doctor, saving everyone time." },
                { title: "DIGITAL PRESCRIPTIONS", desc: "Pay the fee via UPI and instantly receive your permanent, clear digital prescription via WhatsApp." }
             ].map((feature, i) => (
                <div key={i} className="gsap-card bg-white border border-ink-invert p-8 lg:p-12 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(37,37,37,1)]">
                   <div className="flex items-center gap-6 mb-6 pb-6 border-b border-ink-invert">
                      <span className="font-condensed text-5xl text-orange border border-ink-invert px-3 py-1 leading-none bg-orange/10">0{i+1}</span>
                      <h3 className="font-condensed text-3xl lg:text-5xl uppercase tracking-wide">{feature.title}</h3>
                   </div>
                   <p className="font-functional text-lg text-ink-invert/80 leading-relaxed font-medium">
                      {feature.desc}
                   </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. THE FEATURE GRID (Orange Canvas) */}
      <section className="relative w-full bg-bg text-white py-20 lg:py-32 blueprint-grid border-b border-white">
         <div className="section-wrap max-w-7xl">
            <div className="text-center mb-20">
               <h2 className="font-condensed text-[clamp(4rem,8vw,10rem)] leading-[0.8] uppercase tracking-tight">Everything You Need.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: "WHATSAPP INTEGRATION", desc: "Instantly deliver prescriptions and follow-up reminders straight to the patient's WhatsApp." },
                 { title: "INTEGRATED UPI", desc: "Keep track of every rupee with built-in UPI receipting directly linked to patient files." },
                 { title: "PERMANENT RECORDS", desc: "Never lose a health record again. Entire medical histories are stored securely and accessible instantly." },
                 { title: "ZERO STAFF TRAINING", desc: "Designed to drop into your existing OPD without requiring staff to learn complicated new software." }
               ].map((feat, i) => (
                 <div key={i} className="bg-white text-ink-invert border border-ink-invert p-10 flex flex-col justify-between min-h-[300px] shadow-[8px_8px_0px_0px_rgba(253,82,0,1)] hover:-translate-y-2 transition-transform">
                    <div>
                      <h3 className="font-condensed text-4xl mb-4 border-b border-ink-invert/20 pb-4">{feat.title}</h3>
                      <p className="font-functional text-lg text-ink-invert/80 font-medium">{feat.desc}</p>
                    </div>
                    <Link to="/how-it-works" className="mt-8 font-bold uppercase tracking-wider text-orange hover:text-ink-invert transition-colors flex items-center gap-2">
                       Learn More <span className="text-2xl leading-none">→</span>
                    </Link>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. AUDIENCE DEEP DIVES (White Canvas) */}
      <section className="relative w-full bg-white text-ink-invert py-20 lg:py-32 blueprint-grid-dark border-b border-ink-invert">
         <div className="section-wrap max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Patient Card */}
               <Link to="/for-patients" className="group relative bg-white border border-ink-invert p-12 lg:p-20 overflow-hidden flex flex-col justify-between min-h-[600px] shadow-[12px_12px_0px_0px_rgba(37,37,37,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(37,37,37,1)] transition-all duration-300">
                  <div className="absolute inset-0 bg-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <div className="relative z-10">
                    <p className="label-uppercase tracking-widest text-orange mb-6 font-bold border-b border-ink-invert/20 pb-4">I AM A PATIENT</p>
                    <h2 className="font-condensed text-[clamp(4rem,7vw,8rem)] leading-[0.85] tracking-tight uppercase">
                       SEE HOW IT<br/>WORKS FOR YOU
                    </h2>
                  </div>
                  <div className="relative z-10 flex items-center justify-between mt-12 border-t border-ink-invert/20 pt-8">
                    <span className="font-functional font-bold text-xl group-hover:text-orange transition-colors">Explore Patient Journey</span>
                    <span className="text-5xl group-hover:translate-x-4 transition-transform text-orange">→</span>
                  </div>
               </Link>

               {/* Doctor Card */}
               <Link to="/for-doctors" className="group relative bg-ink-invert text-white border border-ink-invert p-12 lg:p-20 overflow-hidden flex flex-col justify-between min-h-[600px] shadow-[12px_12px_0px_0px_rgba(253,82,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(253,82,0,1)] transition-all duration-300">
                  <div className="absolute inset-0 bg-orange/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <div className="relative z-10">
                    <p className="label-uppercase tracking-widest text-orange mb-6 font-bold border-b border-white/20 pb-4">I AM A DOCTOR</p>
                    <h2 className="font-condensed text-[clamp(4rem,7vw,8rem)] leading-[0.85] tracking-tight uppercase">
                       TRANSFORM YOUR<br/>CLINIC TODAY
                    </h2>
                  </div>
                  <div className="relative z-10 flex items-center justify-between mt-12 border-t border-white/20 pt-8">
                    <span className="font-functional font-bold text-xl group-hover:text-orange transition-colors">Explore Clinic Solutions</span>
                    <span className="text-5xl group-hover:translate-x-4 transition-transform text-orange">→</span>
                  </div>
               </Link>

            </div>
         </div>
      </section>

      {/* 7. STATS COUNTER (Orange Canvas) */}
      <StatsSection />

      {/* 8. FAQ SECTION (White Canvas) */}
      <FAQSection />

      {/* 8. FINAL CTA (Dark Canvas) */}
      <section className="relative w-full bg-ink-invert text-white py-32 border-t border-white/10">
         <div className="section-wrap max-w-7xl relative z-10 text-center">
            <h2 className="font-condensed text-[clamp(4rem,10vw,12rem)] leading-[0.8] uppercase tracking-tight drop-shadow-sm">
              READY TO UPGRADE?
            </h2>
            <p className="font-functional text-xl text-white/70 mt-8 max-w-2xl mx-auto">
               Join the clinics already revolutionizing their OPD experience.
            </p>
            <div className="mt-12">
               <a href="#contact" className="inline-block bg-orange text-white font-condensed tracking-wider uppercase px-12 py-6 text-2xl hover:bg-orange/90 transition-colors shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1">
                  Book A Demo Call
               </a>
            </div>
         </div>
      </section>

      {/* Cinematic Footer */}
      <div className="relative z-[100] bg-ink-invert">
        <CinematicFooter />
      </div>
    </div>
  );
}
