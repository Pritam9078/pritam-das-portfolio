import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      className="fixed top-4 right-4 z-50 glass p-2 rounded-full hover:bg-[hsl(197,100%,50%)] hover:bg-opacity-20"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-[hsl(197,100%,50%)]" />
      ) : (
        <Moon className="h-4 w-4 text-[hsl(258,84%,69%)]" />
      )}
    </Button>
  );
}