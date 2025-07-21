import { useEffect } from "react";

const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export function useKonami(callback: () => void) {
  useEffect(() => {
    let konamiCode: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode.push(e.code);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.length === konamiSequence.length && 
          konamiCode.every((code, index) => code === konamiSequence[index])) {
        callback();
        konamiCode = [];
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
}
