import { useState, useEffect } from "react";

interface Block {
  id: number;
  hash: string;
  timestamp: string;
  x: number;
  y: number;
}

export default function BlockchainAnimation() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const createBlock = () => {
      const newBlock: Block = {
        id: Date.now(),
        hash: Math.random().toString(36).substring(2, 10),
        timestamp: new Date().toLocaleTimeString(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50
      };
      
      setBlocks(prev => [...prev.slice(-5), newBlock]);
    };

    const interval = setInterval(createBlock, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateBlocks = () => {
      setBlocks(prev => 
        prev.map(block => ({
          ...block,
          y: block.y - 1
        })).filter(block => block.y > -100)
      );
    };

    const animation = setInterval(animateBlocks, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blocks.map(block => (
        <div
          key={block.id}
          className="absolute w-12 h-12 glass rounded-lg border border-[hsl(197,100%,50%)] opacity-20 transition-all duration-1000"
          style={{
            left: block.x,
            top: block.y,
            transform: 'rotate(45deg)'
          }}
        >
          <div className="absolute inset-1 bg-[hsl(197,100%,50%)] bg-opacity-10 rounded"></div>
        </div>
      ))}
    </div>
  );
}