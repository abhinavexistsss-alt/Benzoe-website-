'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. INLINE STYLES — Benzoe Orange (#fd5200) themed
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(253,82,0,0.4)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 12px rgba(253,82,0,0.7)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Grid Background — subtle orange tint */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(253,82,0,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(253,82,0,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Aurora Glow — warm orange */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(253,82,0,0.15) 0%,
    rgba(253,82,0,0.06) 40%,
    transparent 70%
  );
}

/* Glass Pill */
.footer-glass-pill {
  background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  box-shadow:
    0 10px 30px -10px rgba(0,0,0,0.4),
    inset 0 1px 1px rgba(255,255,255,0.08),
    inset 0 -1px 2px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, rgba(253,82,0,0.12) 0%, rgba(253,82,0,0.04) 100%);
  border-color: rgba(253,82,0,0.3);
  box-shadow:
    0 20px 40px -10px rgba(253,82,0,0.2),
    inset 0 1px 1px rgba(253,82,0,0.15);
  color: #fff;
}

/* Giant Background Text */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(253,82,0,0.08);
  background: linear-gradient(180deg, rgba(253,82,0,0.12) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow — white with orange drop shadow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(253,82,0,0.25));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON (Zero external dependency)
// -------------------------------------------------------------------------
type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
    to?: string;
    [key: string]: any;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = 'button', ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === 'undefined') return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: 'power2.out',
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: 'elastic.out(1, 0.3)',
            duration: 1.2,
          });
        };

        element.addEventListener('mousemove', handleMouseMove as EventListener);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          element.removeEventListener('mousemove', handleMouseMove as EventListener);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef)
            (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={`cursor-pointer ${className || ''}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
MagneticButton.displayName = 'MagneticButton';

// -------------------------------------------------------------------------
// 3. MARQUEE ITEM — Benzoe-themed
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Queue Management</span> <span style={{ color: 'rgba(253,82,0,0.6)' }}>✦</span>
    <span>Digital Prescriptions</span> <span style={{ color: 'rgba(253,82,0,0.4)' }}>✦</span>
    <span>UPI Billing</span> <span style={{ color: 'rgba(253,82,0,0.6)' }}>✦</span>
    <span>Patient Records</span> <span style={{ color: 'rgba(253,82,0,0.4)' }}>✦</span>
    <span>Walk-In OPD</span> <span style={{ color: 'rgba(253,82,0,0.6)' }}>✦</span>
    <span>Built for India</span> <span style={{ color: 'rgba(253,82,0,0.4)' }}>✦</span>
  </div>
);

// -------------------------------------------------------------------------
// 4. MAIN CINEMATIC FOOTER — Benzoe customized
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: '10vh', scale: 0.8, opacity: 0 },
        {
          y: '0vh',
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 40%',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain Reveal Wrapper — sits after FlowArt in normal flow */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        {/* Fixed footer revealed by scrolling past the clip wrapper */}
        <footer
          className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden cinematic-footer-wrapper"
          style={{ backgroundColor: '#fd5200', color: '#fff' }}
        >
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            BENZOE
          </div>

          {/* 1. Diagonal Marquee */}
          <div
            className="absolute top-12 left-0 w-full overflow-hidden py-4 z-10 -rotate-2 scale-110 shadow-2xl"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.15)',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              backgroundColor: 'rgba(0,0,0,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-white/70 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-4xl md:text-7xl lg:text-8xl font-black footer-text-glow tracking-tighter mb-8 md:mb-12 text-center"
            >
              Go digital today.
            </h2>

            {/* Interactive Pills */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary CTA */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="https://benzoe.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-8 md:px-10 py-4 md:py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                    />
                  </svg>
                  Visit benzoe.in
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-8 md:px-10 py-4 md:py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book a Free Demo
                </MagneticButton>
              </div>

              {/* Secondary Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full mt-2">
                <MagneticButton
                  as={Link}
                  to="/privacy-policy"
                  className="footer-glass-pill px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white/60 font-medium text-xs md:text-sm hover:text-white"
                >
                  Privacy Policy
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  to="/terms"
                  className="footer-glass-pill px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white/60 font-medium text-xs md:text-sm hover:text-white"
                >
                  Terms of Service
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  to="/refund-policy"
                  className="footer-glass-pill px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white/60 font-medium text-xs md:text-sm hover:text-white"
                >
                  Refund Policy
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  to="/cookie-policy"
                  className="footer-glass-pill px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white/60 font-medium text-xs md:text-sm hover:text-white"
                >
                  Cookie Policy
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-6 md:pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Copyright */}
            <div className="text-white/50 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              &copy; 2026 Benzoe Global Private Limited. All rights reserved.
            </div>

            {/* Made with Love Badge */}
            <div className="footer-glass-pill px-5 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Made in
              </span>
              <span className="text-sm md:text-base">🇮🇳</span>
              <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                for India&apos;s clinics
              </span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full footer-glass-pill flex items-center justify-center text-white/60 hover:text-white group order-3"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
