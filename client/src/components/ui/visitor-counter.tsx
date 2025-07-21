import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const savedCount = localStorage.getItem('portfolioVisits');
    let currentCount = savedCount ? parseInt(savedCount) : 0;
    
    // Increment count for this visit
    currentCount += 1;
    setVisitCount(currentCount);
    localStorage.setItem('portfolioVisits', currentCount.toString());
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 glass p-3 rounded-lg flex items-center gap-2 text-sm">
      <Eye className="w-4 h-4 text-[hsl(197,100%,50%)]" />
      <span className="text-gray-300">
        Visits: <span className="text-[hsl(197,100%,50%)] font-semibold">{visitCount}</span>
      </span>
    </div>
  );
}