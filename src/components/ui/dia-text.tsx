import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DiaTextProps {
  text: string | string[];
  repeat?: boolean;
  repeatDelay?: number;
  className?: string;
}

export function DiaText({ text, repeat = false, repeatDelay = 1, className = "" }: DiaTextProps) {
  const [index, setIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (!repeat && prev === texts.length - 1) return prev;
        return (prev + 1) % texts.length;
      });
    }, repeatDelay * 1000);
    return () => clearInterval(interval);
  }, [texts.length, repeatDelay, repeat]);

  const currentText = Array.isArray(text) ? texts[index] : text;

  // Don't render if there's no text
  if (!currentText) return null;

  return (
    <span className={`inline-grid overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 inline-block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
