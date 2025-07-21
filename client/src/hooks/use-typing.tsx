import { useState, useEffect } from "react";

export function useTyping(
  texts: string[],
  typeSpeed: number = 100,
  pauseTime: number = 2000,
  deleteSpeed: number = 50
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setTimeout(() => setCharIndex(0), 500);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typeSpeed, pauseTime, deleteSpeed]);

  return displayText;
}
