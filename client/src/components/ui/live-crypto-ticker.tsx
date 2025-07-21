import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  price: number;
  change: number;
  isUp: boolean;
}

export default function LiveCryptoTicker() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate crypto price data (in a real app, you'd fetch from CoinGecko API)
    const mockPrices: CryptoPrice[] = [
      { symbol: "BTC", price: 43250, change: 2.5, isUp: true },
      { symbol: "ETH", price: 2580, change: -1.2, isUp: false },
      { symbol: "SOL", price: 98.5, change: 5.8, isUp: true },
      { symbol: "MATIC", price: 0.85, change: 3.2, isUp: true },
      { symbol: "DOT", price: 7.2, change: -0.8, isUp: false }
    ];

    setCryptoPrices(mockPrices);

    // Rotate through different crypto prices every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockPrices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (cryptoPrices.length === 0) return null;

  const currentCrypto = cryptoPrices[currentIndex];

  return (
    <div className="fixed top-20 right-4 z-40 glass p-3 rounded-lg flex items-center gap-2 text-sm min-w-[140px]">
      <div className="flex items-center gap-2">
        <span className="text-[hsl(197,100%,50%)] font-semibold">
          {currentCrypto.symbol}
        </span>
        <span className="text-gray-300">
          ${currentCrypto.price.toLocaleString()}
        </span>
        <div className={`flex items-center gap-1 ${currentCrypto.isUp ? 'text-[hsl(158,100%,50%)]' : 'text-red-400'}`}>
          {currentCrypto.isUp ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span className="text-xs">
            {currentCrypto.change > 0 ? '+' : ''}{currentCrypto.change}%
          </span>
        </div>
      </div>
    </div>
  );
}