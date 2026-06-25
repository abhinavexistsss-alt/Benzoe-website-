import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import { CinematicFooter } from '../components/ui/motion-footer';
import { AssistantCanvas } from './AIVoiceAssistant';

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

          <div className="relative z-10 flex flex-col w-full h-full pointer-events-none justify-center">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-[4vw] w-full flex-1">
              <div className="flex flex-col justify-center flex-1 pointer-events-auto mt-12 lg:mt-0">
                <p className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-widest uppercase mb-4 opacity-80 drop-shadow-sm">Benzoe</p>
                <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6 max-w-[15ch] drop-shadow-md">
                  India’s first modern waiting room for healthcare
                </h1>
                <p className="max-w-[40ch] text-[clamp(1rem,1.5vw,1.5rem)] font-medium leading-relaxed opacity-90 mb-10 drop-shadow-sm">
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
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — The problem</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(2.3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Still
              <br />
              On
              <br />
              Paper
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Over 1,000,000 Indian clinics still run on paper registers, handwritten prescriptions, and
            cash counters. It feels normal only because everyone has been forced to adjust.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Paper Registers</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Walk-in queues are still written by hand. Staff keep answering &quot;mera number kab
                aayega?&quot; while the OPD gets crowded.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Lost Prescriptions</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Handwritten prescriptions are hard to read and easy to lose, so every follow-up starts
                without proper context.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Cash-Only Billing</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Payments and receipts stay outside a digital trail, making records messy for clinics
                and patients alike.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">No Patient History</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Old files get buried. Patients can&apos;t access their own health records without
                visiting the clinic again.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Crowded Waiting Rooms</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                No live queue visibility means patients arrive hours early and wait anxiously with no
                sense of their position.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Staff Overload</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Front-desk staff juggle queue management, billing, and patient queries all manually —
                every single day.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            India has 1M+ independent clinics stuck in this daily cycle. Benzoe is built for that real
            OPD environment — not appointment-only hospitals.
          </p>
        </FlowSection>

        {/* 03 — How It Works */}
        <FlowSection aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How it works</p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div>
            <h2 className="text-[clamp(2.3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Sign
              <br />
              Up.
              <br />
              Go
              <br />
              Digital.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Three steps. Zero complexity. Your clinic goes from paper to digital the moment you
            subscribe.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Clinic Signs Up</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Pick a subscription suited to your clinic&apos;s size and workflow. Setup takes
                minutes, not weeks.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Staff Goes Digital</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Walk-ins, prescriptions, UPI billing, and patient history move from paper registers to
                one clean app.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Patients Stay Informed</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Live queue updates, digital prescriptions, and permanent health records — no app
                download needed.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">For Doctors</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Write digital prescriptions, manage walk-in queues, and see full patient history
                without digging through old files.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">For Staff</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Manage real-time OPD queues, collect UPI payments, and generate digital receipts — all
                from one dashboard.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">For Patients</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                See your live queue position, receive clear digital prescriptions, and carry your
                health records digitally.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 04 — The Solution */}
        <FlowSection aria-label="The solution" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The solution</p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div>
            <h2 className="text-[clamp(2.3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              One
              <br />
              App.
              <br />
              One
              <br />
              Solution.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Not just another appointment portal. A full management app — built for how Indian clinics
            actually run.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Queue Management</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Real-time walk-in OPD queue with token tracking. Patients see their live position and
                estimated wait time.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Digital Prescriptions</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Instant PDF prescriptions sent to patients. Clear, readable, and permanently stored in
                their health record.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">UPI Billing</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Digital receipts with QR code payments. Every transaction tracked — no more cash-only
                confusion.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Queue, prescription, billing, and patient records — together in one subscription. Your
            entire clinic goes digital.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Patient Health Records</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Complete prescription history and visit records in one place. Patients carry their
                health data digitally.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Walk-In OPD First</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Designed for real Indian walk-in patients, not appointment-only workflows. Built for
                Nagpur, Jaipur, Indore, and beyond.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">One Subscription</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Tiered SaaS pricing for clinics and hospitals of any size. Founded 2025 · Private
                Limited · Reg: AAOCB6577A.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 05 — Book a Demo */}
        <FlowSection aria-label="Book a demo" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Book a demo</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(2.3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Ready
              <br />
              To Go
              <br />
              Digital?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
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
