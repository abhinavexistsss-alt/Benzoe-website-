import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  className?: string;
}

export function AIVoiceInput({ onStart, onStop, className = "" }: AIVoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const handleStart = () => {
    setIsRecording(true);
    setDuration(0);
    if (onStart) onStart();
  };

  const handleStop = () => {
    setIsRecording(false);
    if (onStop) onStop(duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`relative flex items-center justify-center h-16 ${className}`}>
      <AnimatePresence mode="wait">
        {!isRecording ? (
          <motion.button
            key="mic-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 transition-colors z-10"
          >
            {/* Mic Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </motion.button>
        ) : (
          <motion.div
            key="recording-pill"
            initial={{ opacity: 0, width: 56, borderRadius: 9999 }}
            animate={{ opacity: 1, width: 260, borderRadius: 9999 }}
            exit={{ opacity: 0, width: 56, borderRadius: 9999 }}
            className="flex items-center justify-between h-14 px-4 bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-[0_0_30px_rgba(253,82,0,0.2)] overflow-hidden z-10"
          >
            {/* Timer */}
            <div className="text-sm font-mono tracking-wider text-white/80 w-12 text-center">
              {formatTime(duration)}
            </div>

            {/* Visualizer */}
            <div className="flex items-center justify-center gap-1 flex-1 mx-4 h-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-orange rounded-full"
                  animate={{
                    height: ["20%", "80%", "40%", "100%", "30%"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Stop Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleStop}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
