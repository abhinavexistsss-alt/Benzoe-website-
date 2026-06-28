import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  className?: string;
  cursorChar?: string;
  loop?: boolean;
}

export function Typewriter({
  text,
  speed = 50,
  deleteSpeed = 30,
  waitTime = 2000,
  className = "",
  cursorChar = "|",
  loop = false,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Normalize text to array
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[index];

  useEffect(() => {
    // If the text prop changes entirely (like a new caption from AI), reset everything
    setDisplayText('');
    setIsDeleting(false);
    setIndex(0);
  }, [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      // Finished typing current string
      if (textArray.length > 1 || loop) {
        timeout = setTimeout(() => setIsDeleting(true), waitTime);
      }
    } else if (isDeleting && displayText === '') {
      // Finished deleting current string
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    } else {
      // Typing or Deleting in progress
      timeout = setTimeout(() => {
        const nextStr = isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1);
        setDisplayText(nextStr);
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, index, textArray.length, speed, deleteSpeed, waitTime, loop]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse ml-0.5">{cursorChar}</span>
    </span>
  );
}
