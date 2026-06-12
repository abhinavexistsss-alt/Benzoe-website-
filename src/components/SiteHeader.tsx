import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mainNav = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Doctors", href: "#doctors" },
  { label: "Patients", href: "#patients" },
];

const menuNav = [...mainNav, { label: "Contact", href: "#contact" }];

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
    <span className="font-mono-display text-[13px] tabular-nums tracking-tight text-blue">
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
      className="fixed inset-0 z-[200] overflow-hidden bg-ink text-white"
    >
      <div className="pointer-events-none absolute top-[-12rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-blue/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-green/25 blur-3xl" />

      <div className="section-wrap relative z-10 flex h-full flex-col py-6 md:py-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-blue">
              B
            </span>
            <div>
              <p className="text-sm font-semibold md:text-base">Benzoe</p>
              <p className="text-xs text-white/50">Clinic management app</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:border-white/40"
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
              className="group border-b border-white/10 py-4 md:py-6"
            >
              <span className="font-display text-[clamp(2.6rem,8vw,5.8rem)] leading-none text-white transition-colors group-hover:text-green">
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/55">
          <div className="flex items-center gap-2">
            <span className="pulse-green h-2 w-2 rounded-full bg-green" />
            <span>Founded 2025 · Built in India</span>
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
      <header className="fixed top-4 right-0 left-0 z-[100]">
        <div className="section-wrap">
          <div className="glass-panel flex items-center justify-between rounded-full px-3 py-2 md:px-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-full pr-3 transition-opacity hover:opacity-80"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue text-sm font-black text-white shadow-lg shadow-blue/20">
                B
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-sm font-semibold">Benzoe</span>
                <span className="block text-[11px] text-ink-soft">
                  Healthtech
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-border bg-white/65 p-1 lg:flex">
              {mainNav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-xs font-semibold text-ink-soft transition-colors hover:bg-blue-soft hover:text-blue xl:px-4 xl:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-2 md:flex">
                <LiveClock />
                <span className="text-[12px] text-ink-soft">IST</span>
              </div>
              <a
                href="#contact"
                className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue sm:inline-flex"
              >
                Book demo
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <FullScreenMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
