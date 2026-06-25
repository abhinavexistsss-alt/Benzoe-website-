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
                <p className="font-condensed text-[clamp(1.5rem,3vw,2.5rem)] tracking-widest uppercase mb-4 opacity-80 drop-shadow-sm">Benzoe</p>
                <h1 className="font-condensed text-[clamp(3rem,7vw,7rem)] leading-[0.90] tracking-tight mb-6 max-w-[15ch] drop-shadow-md uppercase">
                  India's first modern waiting room for healthcare
                </h1>
                <p className="font-functional max-w-[40ch] text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed opacity-90 mb-10 drop-shadow-sm">
                  Manage queues, walk-ins, and patient updates without front-desk chaos.
                </p>
                <div className="flex flex-wrap gap-4">
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
          </div>
        </FlowSection>

        {/* 02 — The Problem */}
        <FlowSection aria-label="The problem" style={{ backgroundColor: '#000', color: '#fff' }}>
          <SectionMarker num="02" />
          <p className="label-uppercase opacity-60">02 — The problem</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-condensed text-[clamp(3rem,14vw,14rem)] leading-[0.85] uppercase tracking-tight">
              Still
              <br />
              On
              <br />
              Paper
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="font-functional max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-80">
            Over 1,000,000 Indian clinics still run on paper registers, handwritten prescriptions, and
            cash counters. It feels normal only because everyone has been forced to adjust.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />

          {/* Feature Rows — replaces old 3-column grid */}
          <div className="w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <FeatureRow num="01" title="Paper Registers" desc="Walk-in queues are still written by hand. Staff keep answering 'mera number kab aayega?' while the OPD gets crowded." />
            <FeatureRow num="02" title="Lost Prescriptions" desc="Handwritten prescriptions are hard to read and easy to lose, so every follow-up starts without proper context." />
            <FeatureRow num="03" title="Cash-Only Billing" desc="Payments and receipts stay outside a digital trail, making records messy for clinics and patients alike." />
            <FeatureRow num="04" title="No Patient History" desc="Old files get buried. Patients can't access their own health records without visiting the clinic again." />
            <FeatureRow num="05" title="Crowded Waiting Rooms" desc="No live queue visibility means patients arrive hours early and wait anxiously with no sense of their position." />
            <FeatureRow num="06" title="Staff Overload" desc="Front-desk staff juggle queue management, billing, and patient queries all manually — every single day." />
          </div>

          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="font-functional mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-80">
            India has 1M+ independent clinics stuck in this daily cycle. Benzoe is built for that real
            OPD environment — not appointment-only hospitals.
          </p>
        </FlowSection>

        {/* 03 — How It Works */}
        <FlowSection aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <SectionMarker num="03" />
          <p className="label-uppercase opacity-60">03 — How it works</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="font-condensed text-[clamp(3rem,14vw,14rem)] leading-[0.85] uppercase tracking-tight">
              Sign
              <br />
              Up.
              <br />
              Go
              <br />
              Digital.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="font-functional max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-70">
            Three steps. Zero complexity. Your clinic goes from paper to digital the moment you
            subscribe.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />

          {/* Steps as feature rows */}
          <div className="w-full" style={{ color: 'rgba(0,0,0,0.7)' }}>
            <FeatureRow num="01" title="Clinic Signs Up" desc="Pick a subscription suited to your clinic's size and workflow. Setup takes minutes, not weeks." />
            <FeatureRow num="02" title="Staff Goes Digital" desc="Walk-ins, prescriptions, UPI billing, and patient history move from paper registers to one clean app." />
            <FeatureRow num="03" title="Patients Stay Informed" desc="Live queue updates, digital prescriptions, and permanent health records — no app download needed." />
          </div>

          <hr className="my-[2vw] border-none border-t border-black/20" />

          {/* Who it's for — feature rows */}
          <div className="w-full" style={{ color: 'rgba(0,0,0,0.7)' }}>
            <FeatureRow num="→" title="For Doctors" desc="Write digital prescriptions, manage walk-in queues, and see full patient history without digging through old files." />
            <FeatureRow num="→" title="For Staff" desc="Manage real-time OPD queues, collect UPI payments, and generate digital receipts — all from one dashboard." />
            <FeatureRow num="→" title="For Patients" desc="See your live queue position, receive clear digital prescriptions, and carry your health records digitally." />
          </div>
        </FlowSection>

        {/* 04 — The Solution */}
        <FlowSection aria-label="The solution" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <SectionMarker num="04" />
          <p className="label-uppercase opacity-60">04 — The solution</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-condensed text-[clamp(3rem,14vw,14rem)] leading-[0.85] uppercase tracking-tight">
              One
              <br />
              App.
              <br />
              One
              <br />
              Solution.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="font-functional max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-80">
            Not just another appointment portal. A full management app — built for how Indian clinics
            actually run.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />

          {/* Core features as rows */}
          <div className="w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <FeatureRow num="01" title="Queue Management" desc="Real-time walk-in OPD queue with token tracking. Patients see their live position and estimated wait time." />
            <FeatureRow num="02" title="Digital Prescriptions" desc="Instant PDF prescriptions sent to patients. Clear, readable, and permanently stored in their health record." />
            <FeatureRow num="03" title="UPI Billing" desc="Digital receipts with QR code payments. Every transaction tracked — no more cash-only confusion." />
          </div>

          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="font-functional max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-80">
            Queue, prescription, billing, and patient records — together in one subscription. Your
            entire clinic goes digital.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />

          {/* More features */}
          <div className="w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <FeatureRow num="04" title="Patient Health Records" desc="Complete prescription history and visit records in one place. Patients carry their health data digitally." />
            <FeatureRow num="05" title="Walk-In OPD First" desc="Designed for real Indian walk-in patients, not appointment-only workflows. Built for Nagpur, Jaipur, Indore, and beyond." />
            <FeatureRow num="06" title="One Subscription" desc="Tiered SaaS pricing for clinics and hospitals of any size. Benzoe Global Private Limited — digitizing India's clinics." />
          </div>
        </FlowSection>

        {/* 05 — Book a Demo */}
        <FlowSection aria-label="Book a demo" style={{ backgroundColor: '#000', color: '#fff' }}>
          <SectionMarker num="05" />
          <p className="label-uppercase opacity-60">05 — Book a demo</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="font-condensed text-[clamp(3rem,14vw,14rem)] leading-[0.85] uppercase tracking-tight">
              Ready
              <br />
              To Go
              <br />
              Digital?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="font-functional mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-light leading-relaxed opacity-80">
            Digitize your clinic today. Visit{' '}
            <a href="https://benzoe.in" className="underline underline-offset-4 hover:opacity-80">
              benzoe.in
            </a>{' '}
            or{' '}
            <a
              href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
              className="underline underline-offset-4 hover:opacity-80"
            >
              WhatsApp us
            </a>{' '}
            to book a free demo. Built in India 🇮🇳
          </p>
        </FlowSection>
      </FlowArt>

      {/* Cinematic Footer — revealed by scrolling past the last section */}
      <CinematicFooter />
    </>
  );
}
