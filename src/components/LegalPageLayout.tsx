import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type LegalPageProps = {
  title: string;
  children: ReactNode;
}

const STYLES = `
.legal-page-wrapper {
  background-color: #fd5200;
  color: #ffffff;
  position: relative;
  overflow-x: hidden;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.legal-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}

.legal-aurora {
  background: radial-gradient(
    circle at 50% 30%,
    rgba(255,255,255,0.12) 0%,
    rgba(255,255,255,0.04) 50%,
    transparent 80%
  );
}

.legal-glass-card {
  background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  box-shadow:
    0 30px 60px -15px rgba(0,0,0,0.3),
    inset 0 1px 1px rgba(255,255,255,0.08),
    inset 0 -1px 2px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
}

/* Override utility classes applied to inner elements */
.legal-glass-card h2, 
.legal-glass-card h3,
.legal-glass-card h4 {
  color: #ffffff !important;
  font-weight: 800 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1rem !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
}

.legal-glass-card h2 {
  font-size: 1.5rem !important;
  border-bottom: 1px solid rgba(255,255,255,0.1) !important;
  padding-bottom: 0.5rem !important;
}

.legal-glass-card h3 {
  font-size: 1.2rem !important;
}

.legal-glass-card p,
.legal-glass-card li {
  color: rgba(255,255,255,0.8) !important;
  line-height: 1.75 !important;
  font-size: 1rem !important;
}

.legal-glass-card p {
  margin-bottom: 1.25rem !important;
}

.legal-glass-card ul {
  padding-left: 1.5rem !important;
  margin-bottom: 1.5rem !important;
  list-style-type: disc !important;
}

.legal-glass-card li {
  margin-bottom: 0.5rem !important;
}

.legal-glass-card li::marker {
  color: rgba(255,255,255,0.4) !important;
}

.glass-pill-button {
  background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.glass-pill-button:hover {
  background: linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 100%);
  border-color: rgba(255,255,255,0.2);
  transform: translateY(-1px);
}
`;

export function LegalPageLayout({ title, children }: LegalPageProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="legal-page-wrapper min-h-screen pb-20">
        {/* Ambient background designs */}
        <div className="legal-aurora absolute left-1/2 top-1/3 h-[50vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px] pointer-events-none z-0" />
        <div className="legal-bg-grid absolute inset-0 z-0 pointer-events-none" />

        {/* Sleek transparent Header */}
        <header className="relative z-20 border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="section-wrap max-w-5xl flex items-center justify-between py-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/" className="text-lg font-bold text-white tracking-tight">
                Benzoe
              </Link>
            </div>
            
            <Link
              to="/"
              className="glass-pill-button px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white/90 hover:text-white flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10 pt-12 md:pt-16 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page Title with Glow */}
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8 md:mb-12 text-center drop-shadow-md">
              {title}
            </h1>

            {/* Premium Glass Card */}
            <div className="legal-glass-card p-6 md:p-12">
              {children}
            </div>

            {/* Bottom meta / credits */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium px-2">
              <p>Last updated: June 2026</p>
              <div className="flex items-center gap-2">
                <span>© 2026 Benzoe Global Private Limited. All rights reserved.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
