import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mainNav = [
  { label: "For Patients", href: "#solution" },
  { label: "For Doctors", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
];

const menuNav = [
  ...mainNav,
  { label: "Book Demo", href: "#contact" },
  { label: "Contact", href: "mailto:hello@benzoe.health" },
];

function LiveClock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono-display text-[14px] tabular-nums tracking-tight text-white/80">
      {time}
    </span>
  );
}

function FullScreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#fd5200] text-white"
    >
      <div className="section-wrap flex h-full flex-col py-6 md:py-8">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center">
            <span className="font-condensed text-[clamp(1.5rem,3vw,2.5rem)] tracking-widest uppercase opacity-90 drop-shadow-sm">Benzoe</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-white/50"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-0">
          {menuNav.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 + i * 0.07,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-white/15 py-5 md:py-7"
            >
              <span className="font-condensed text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.90] tracking-tight transition-colors group-hover:text-white/60">
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-white/15 pt-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="pulse-green h-2 w-2 rounded-full bg-green" />
            <span>Founded 2026</span>
          </div>
          <a href="mailto:hello@benzoe.health" className="hover:text-white">
            hello@benzoe.health
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="fixed top-0 right-0 left-0 z-[90] bg-[#fd5200] text-white">
        <div className="section-wrap flex items-center justify-between py-3">
          <div className="flex items-center">
            <a href="#" className="font-condensed text-[clamp(1.5rem,2vw,2rem)] tracking-widest uppercase opacity-90 drop-shadow-sm hover:opacity-100 transition-opacity">
              Benzoe
            </a>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            {mainNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="header-glass-pill px-5 py-2 rounded-full text-[13px] font-functional font-semibold text-white/90 hover:text-white transition-all tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 lg:flex">
              <LiveClock />
              <span className="text-[14px] text-white/80">IST</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="pulse-green h-2 w-2 rounded-full bg-green" />
              <span className="hidden text-xs font-medium sm:inline md:text-sm">
                Built in India
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="header-glass-pill px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white transition-all md:text-sm"
            >
              Menu
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-bg transition-colors hover:bg-blue sm:inline-flex md:text-sm"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <FullScreenMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
