import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import { CinematicFooter } from '../components/ui/motion-footer';
import { AssistantCanvas } from './AIVoiceAssistant';

/* ── Reusable Patch-inspired components ── */

function SectionMarker({ num }: { num: string }) {
  return <div className="section-marker">{num}</div>;
}

function FeatureRow({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="feature-row">
      <div className="feature-num">{num}</div>
      <div>
        <p className="feature-title">{title}</p>
        <p className="feature-desc">{desc}</p>
      </div>
    </div>
  );
}

function ProcessCard({ num, label, title, desc }: { num: string; label: string; title: string; desc: string }) {
  return (
    <div className="process-card">
      <div className="step-num">{num}</div>
      <div className="step-divider" />
      <div>
        <p className="step-label">{label}</p>
        <p className="step-title">{title}</p>
        <p className="step-desc">{desc}</p>
      </div>
    </div>
  );
}

function MarqueeStrip({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <FlowArt aria-label="Benzoe — Clinic Management for India">
        {/* 01 — Hero / Who we are */}
        <FlowSection aria-label="Who we are" style={{ backgroundColor: '#fd5200', color: '#fff', position: 'relative' }}>
          
          {/* Canvas acting as the background for the entire section so shockwaves cover the screen */}
          <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden">
            <AssistantCanvas />
          </div>

          <SectionMarker num="01" />

          <div className="relative z-10 flex flex-col w-full h-full pointer-events-none justify-center">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-[4vw] w-full flex-1">
              <div className="flex flex-col justify-center flex-1 pointer-events-auto mt-12 lg:mt-0">
                <p className="label-uppercase opacity-70 mb-4 text-white/80">India's Healthcare Platform</p>
                <h1 className="font-condensed text-[clamp(3.5rem,9vw,10rem)] leading-[0.85] tracking-tight mb-6 max-w-[12ch] drop-shadow-md uppercase">
                  The Easiest Way To Go Digital
                </h1>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-glass-pill px-8 md:px-10 py-4 md:py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group w-fit"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-[45vw] h-[350px] lg:h-[550px] flex items-center justify-center">
                {/* Empty placeholder to reserve layout space for the 3D assistant */}
              </div>
            </div>

            {/* Bottom bar — like Patch's "PATCH UP YOUR MARKETING" / "GROW YOUR BUSINESS" */}
            <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-5 mt-auto">
              <p className="font-condensed text-[clamp(0.9rem,1.5vw,1.25rem)] tracking-widest uppercase opacity-70">
                Manage Your Clinic
              </p>
              <p className="font-condensed text-[clamp(0.9rem,1.5vw,1.25rem)] tracking-widest uppercase opacity-70">
                Grow Your Practice
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 02 — The Problem */}
        <FlowSection aria-label="The problem" style={{ backgroundColor: '#000', color: '#fff' }}>
          <SectionMarker num="02" />

          {/* Marquee strip at top */}
          <div className="w-full text-white/60">
            <MarqueeStrip items={[
              'Paper Registers',
              'Lost Prescriptions',
              'Cash-Only Billing',
              'Crowded Waiting Rooms',
              'No Patient Records',
              'Staff Overload',
            ]} />
          </div>

          <div className="flex flex-col lg:flex-row gap-[4vw] mt-[4vw]">
            {/* Left sticky promise card */}
            <div className="lg:w-[30%] flex-shrink-0">
              <div className="border border-white/20 p-6 lg:sticky lg:top-[30vh]">
                <p className="label-uppercase text-white/50 mb-3">The Benzoe Promise</p>
                <p className="font-functional text-[clamp(0.95rem,1.5vw,1.15rem)] leading-relaxed text-white/80">
                  Your clinic deserves more than paper. We're built for the real Indian OPD — walk-ins, queues, and chaos included.
                </p>
              </div>
            </div>

            {/* Right — scrolling feature headlines */}
            <div className="flex-1">
              <div className="w-full" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <FeatureRow num="01" title="Paper Registers" desc="Walk-in queues written by hand. 'Mera number kab aayega?' echoes through every OPD, every day." />
                <FeatureRow num="02" title="Lost Prescriptions" desc="Handwritten prescriptions are hard to read and easy to lose. Every follow-up starts without context." />
                <FeatureRow num="03" title="Cash-Only Billing" desc="Payments and receipts stay outside a digital trail, making records messy for everyone." />
                <FeatureRow num="04" title="No Patient History" desc="Old files get buried. Patients can't access their own health records without visiting again." />
                <FeatureRow num="05" title="Crowded Waiting Rooms" desc="No live queue visibility. Patients arrive hours early and wait anxiously with no sense of position." />
                <FeatureRow num="06" title="Staff Overload" desc="Front-desk staff juggle queues, billing, and queries — all manually, every single day." />
              </div>
            </div>
          </div>

          <p className="font-functional mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed opacity-60">
            India has 1M+ independent clinics stuck in this cycle. Benzoe is built for that reality.
          </p>
        </FlowSection>

        {/* 03 — How It Works (Process steps in white cards over cream) */}
        <FlowSection aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <SectionMarker num="03" />
          <p className="label-uppercase opacity-50">Process — Steps</p>

          <div className="flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)] mt-[3vw]">
            <ProcessCard
              num="01"
              label="Sign Up"
              title="Stop The Chaos"
              desc="Pick a subscription suited to your clinic's size and workflow. Your entire front desk goes digital in minutes, not weeks."
            />
            <ProcessCard
              num="02"
              label="Go Digital"
              title="Staff Goes Online"
              desc="Walk-ins, prescriptions, UPI billing, and patient history move from paper registers to one clean app — instantly."
            />
            <ProcessCard
              num="03"
              label="See Results"
              title="Patients Stay Informed"
              desc="Live queue updates, digital prescriptions, and permanent health records. No app download needed for patients."
            />
          </div>

          {/* Marquee strip between sections */}
          <div className="w-full mt-[4vw] text-black/40">
            <MarqueeStrip items={[
              'Digital Prescriptions',
              'Live Queue Updates',
              'UPI Billing',
              'Patient Health Records',
              'Zero Paper',
            ]} />
          </div>
        </FlowSection>

        {/* 04 — The Solution (feature list like Patch's services page) */}
        <FlowSection aria-label="The solution" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <SectionMarker num="04" />

          <div className="flex flex-col lg:flex-row gap-[4vw]">
            {/* Left — Big stacking headline */}
            <div className="lg:w-[45%] flex-shrink-0">
              <p className="label-uppercase opacity-50 mb-4">04 — What You Get</p>
              <h2 className="font-condensed text-[clamp(3rem,10vw,9rem)] leading-[0.85] uppercase tracking-tight">
                One
                <br />
                App.
                <br />
                Every
                <br />
                Feature.
              </h2>
              <p className="font-functional max-w-[35ch] text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-relaxed opacity-70 mt-[3vw]">
                Not just another appointment portal. A full clinic management app — built for how Indian clinics actually run.
              </p>
            </div>

            {/* Right — Numbered feature rows */}
            <div className="flex-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <FeatureRow num="01" title="Queue Management" desc="Real-time walk-in OPD queue with token tracking. Patients see their live position and estimated wait." />
              <FeatureRow num="02" title="Digital Prescriptions" desc="Instant PDF prescriptions sent to patients. Clear, readable, and permanently stored." />
              <FeatureRow num="03" title="UPI Billing" desc="Digital receipts with QR code payments. Every transaction tracked — no more cash confusion." />
              <FeatureRow num="04" title="Patient Records" desc="Complete prescription history and visit records in one place. Patients carry their data digitally." />
              <FeatureRow num="05" title="Walk-In OPD First" desc="Designed for real Indian walk-in patients. Built for Nagpur, Jaipur, Indore, and beyond." />
              <FeatureRow num="06" title="One Subscription" desc="Tiered SaaS pricing for clinics and hospitals of any size. Everything included." />
            </div>
          </div>

          {/* Who it's for — bottom strip */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-t border-white/20 pt-6 mt-auto">
            {['For Doctors', 'For Staff', 'For Patients'].map((label) => (
              <div key={label} className="flex-1 sm:border-r sm:last:border-r-0 border-white/15 sm:pr-6">
                <p className="font-condensed text-[clamp(1.25rem,2.5vw,2rem)] uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* 05 — Book a Demo (CTA section) */}
        <FlowSection aria-label="Book a demo" style={{ backgroundColor: '#000', color: '#fff' }}>
          <SectionMarker num="05" />
          <p className="label-uppercase opacity-50">05 — Get Started</p>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-condensed text-[clamp(3.5rem,14vw,14rem)] leading-[0.85] uppercase tracking-tight">
              Ready
              <br />
              To Go
              <br />
              Digital?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto">
            <a
              href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-glass-pill px-10 py-5 rounded-full text-white font-bold text-base flex items-center gap-3 group w-fit"
            >
              Book a Call
            </a>
            <p className="font-functional max-w-[40ch] text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-relaxed opacity-60 text-right">
              Visit{' '}
              <a href="https://benzoe.in" className="underline underline-offset-4 hover:opacity-80">
                benzoe.in
              </a>{' '}
              or WhatsApp us to book a free demo.
              <br />
              Built in India 🇮🇳
            </p>
          </div>
        </FlowSection>
      </FlowArt>

      {/* Cinematic Footer — revealed by scrolling past the last section */}
      <CinematicFooter />
    </>
  );
}
