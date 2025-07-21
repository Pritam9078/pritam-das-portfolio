import { useTyping } from "@/hooks/use-typing";

const texts = ['Web3 Developer', 'Smart Contract Builder', 'Blockchain Enthusiast', 'AI Innovator'];

export default function TypingAnimation() {
  const displayText = useTyping(texts, 100, 2000, 50);
  
  return (
    <span className="text-[hsl(197,100%,50%)] typing-effect font-semibold">
      {displayText}
    </span>
  );
}
