import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { terminalCommands } from "../../lib/terminal-commands";

interface TerminalProps {
  open: boolean;
  onClose: () => void;
}

export default function Terminal({ open, onClose }: TerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Pritam's terminal! Type 'help' for available commands."
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    setHistory(prev => [...prev, `pritam@dev:~$ ${command}`]);
    
    if (terminalCommands[cmd]) {
      const result = terminalCommands[cmd]();
      if (cmd === 'clear') {
        setHistory(["Welcome to Pritam's terminal! Type 'help' for available commands."]);
      } else if (cmd === 'exit') {
        onClose();
      } else if (Array.isArray(result)) {
        setHistory(prev => [...prev, ...result]);
      }
    } else if (cmd) {
      setHistory(prev => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }
    
    if (cmd && cmd !== 'clear') {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(commandHistory.length + 1);
    }
    
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || "");
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || "");
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="terminal-bg w-full max-w-4xl h-96 rounded-lg font-mono text-sm">
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-gray-400">pritam@dev:~$</div>
          <Button 
            onClick={onClose} 
            className="ml-auto text-gray-400 hover:text-white"
            variant="ghost"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div 
          ref={terminalRef}
          className="p-4 h-80 overflow-y-auto space-y-1"
        >
          {history.map((line, index) => (
            <div key={index} className="text-[hsl(158,100%,50%)]">{line}</div>
          ))}
          <div className="flex items-center text-[hsl(158,100%,50%)]">
            <span className="text-[hsl(197,100%,50%)]">pritam@dev:~$ </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-[hsl(158,100%,50%)] flex-1 ml-1"
              placeholder="Enter command..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
