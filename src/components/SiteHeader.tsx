import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mainNav = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
];

const menuNav = [
  ...mainNav,
  { label: "Doctors", href: "#doctors" },
  { label: "Patients", href: "#patients" },
  { label: "Contact", href: "#contact" },
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
    <span className="font-mono-display text-[14px] tabular-nums tracking-tight text-blue">
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
      className="fixed inset-0 z-[200] bg-menu text-white"
    >
      <div className="section-wrap flex h-full flex-col py-6 md:py-8">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold md:text-base">Benzoe</span>
            <span className="text-sm text-green">Healthtech</span>
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
              <span className="font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none transition-colors group-hover:text-green">
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-white/15 pt-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="pulse-green h-2 w-2 rounded-full bg-green" />
            <span>Founded 2025</span>
          </div>
          <a href="mailto:hello@benzoe.health" className="hover:text-white">
            Email
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
      <div className="fixed top-0 right-0 left-0 z-[90] border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="section-wrap flex items-center justify-between py-3">
          <div className="flex items-center gap-2 md:gap-3">
            <a href="#" className="text-sm font-semibold md:text-[15px]">
              Benzoe
            </a>
            <span className="text-sm text-blue md:text-[15px]">Healthtech</span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LiveClock />
            <span className="text-[14px] text-blue">IST</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="pulse-green h-2 w-2 rounded-full bg-green" />
            <span className="text-xs font-medium md:text-sm">
              Built in India
            </span>
          </div>
        </div>
      </div>

      <div className="fixed top-[49px] right-0 left-0 z-[80] border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="section-wrap flex items-center justify-center py-3">
          <nav className="flex items-center gap-5 md:gap-8">
            {mainNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Menu
            </button>
            <a
              href="#contact"
              className="text-sm font-medium text-ink underline decoration-blue decoration-2 underline-offset-[6px]"
            >
              Book Demo
            </a>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <FullScreenMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
