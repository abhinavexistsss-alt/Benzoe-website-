import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const mainNav = [
  { label: "For Patients", href: "/for-patients" },
  { label: "For Doctors", href: "/for-doctors" },
  { label: "How It Works", href: "/how-it-works" },
];

const menuNav = [
  ...mainNav,
  { label: "Book Demo", href: "#contact" },
  { label: "Contact", href: "mailto:hello@benzoe.health" },
];

function FullScreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-bg text-ink"
    >
      <div className="section-wrap flex h-full flex-col py-6 md:py-8">
        <div className="flex items-center justify-between border-b border-ink/10 pb-4">
          <div className="flex items-center">
            <span className="font-condensed text-[clamp(1.5rem,3vw,2.5rem)] tracking-widest uppercase opacity-90">Benzoe</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm transition-colors hover:border-ink/50"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-0">
          {menuNav.map((item, i) => {
            const isExternal = item.href.startsWith("mailto:") || item.href.startsWith("http") || item.href.startsWith("#");
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + i * 0.07,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-ink/10"
              >
                {isExternal ? (
                  <a href={item.href} onClick={onClose} className="group block py-5 md:py-7">
                    <span className="font-condensed text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.90] tracking-tight transition-colors group-hover:text-ink/60">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <Link to={item.href} onClick={onClose} className="group block py-5 md:py-7">
                    <span className="font-condensed text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.90] tracking-tight transition-colors group-hover:text-ink/60">
                      {item.label}
                    </span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center justify-between border-t border-ink/10 pt-4 text-sm text-ink/60">
          <div className="flex items-center gap-2">
            <span className="pulse-green h-2 w-2 rounded-full bg-green" />
            <span>Founded 2026</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAssistantPage = location.pathname === "/assistant";

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className={`fixed top-0 right-0 left-0 z-[90] ${isAssistantPage ? 'text-[#252525]' : 'text-ink'}`}>
        <div className="section-wrap flex items-center justify-between py-4">
          <div className="flex items-center">
            {isAssistantPage ? (
              <Link 
                to="/" 
                className="px-5 py-2.5 rounded-full border border-[#252525]/20 bg-[#252525]/5 backdrop-blur-md font-functional font-medium text-sm hover:bg-[#252525]/10 transition-all flex items-center gap-2 shadow-sm"
                onClick={() => {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                }}
              >
                <span>←</span> Back to Home
              </Link>
            ) : (
              <Link to="/" className="font-condensed text-[clamp(1.5rem,2vw,2rem)] tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity">
                Benzoe
              </Link>
            )}
          </div>

          {/* Nav pills — ONLY on homepage */}
          <AnimatePresence>
            {isHomePage && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-3 lg:flex"
              >
                {mainNav.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="header-glass-pill px-5 py-2 rounded-full text-[13px] font-functional font-semibold text-[#252525] hover:text-[#000] transition-all tracking-wide uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3">
            {/* Action buttons — ONLY on homepage */}
            <AnimatePresence>
              {isHomePage && (
                <>
                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    href="#ai"
                    className="hidden lg:inline-flex rounded border border-white/30 px-4 py-2 text-xs font-condensed tracking-wider text-ink transition-colors hover:bg-white/20"
                  >
                    TRY BENZOE AI
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    href="#contact"
                    className="hidden rounded bg-white px-4 py-2 text-xs font-condensed tracking-wider text-[#252525] transition-colors hover:bg-white/90 sm:inline-flex shadow-sm"
                  >
                    BOOK A CALL
                  </motion.a>
                </>
              )}
            </AnimatePresence>

            {/* Menu button — ALWAYS visible */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`flex h-9 w-12 flex-col items-center justify-center gap-1.5 rounded transition-colors ${
                isAssistantPage
                  ? 'bg-[#252525]/5 border border-[#252525]/20 hover:bg-[#252525]/10'
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
              aria-label="Menu"
            >
              <span className={`block h-[2px] w-6 ${isAssistantPage ? 'bg-[#252525]' : 'bg-ink'}`}></span>
              <span className={`block h-[2px] w-6 ${isAssistantPage ? 'bg-[#252525]' : 'bg-ink'}`}></span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <FullScreenMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
