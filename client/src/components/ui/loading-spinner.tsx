export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyber-dark">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-700 border-t-[hsl(197,100%,50%)] rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-[hsl(258,84%,69%)] rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-r-[hsl(158,100%,50%)] rounded-full animate-spin animation-delay-300"></div>
      </div>
      <div className="ml-4">
        <div className="text-[hsl(197,100%,50%)] text-xl font-bold mb-2">Loading Portfolio</div>
        <div className="text-gray-400 text-sm">Initializing blockchain components...</div>
      </div>
    </div>
  );
}