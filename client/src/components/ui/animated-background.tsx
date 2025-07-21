export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-gray-900 to-[hsl(0,0%,4%)] animate-gradient"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[hsl(197,100%,50%)] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-[hsl(258,84%,69%)] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-56 h-56 bg-[hsl(158,100%,50%)] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  );
}
