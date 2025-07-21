import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { Rocket, Download } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center z-10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="cyber-text">Pritam Das</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 h-16">
              <span className="text-gray-300">I'm a </span>
              <TypingAnimation />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              CSE Student passionate about decentralized technologies and AI innovation. Building the future, one smart contract at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="glass px-8 py-4 rounded-lg hover:bg-[hsl(197,100%,50%)] hover:bg-opacity-20 transition-all duration-300 animate-pulse-glow"
                variant="ghost"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
              <Button
                className="cyber-gradient px-8 py-4 rounded-lg text-black font-semibold hover:scale-105 transition-transform duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://i.postimg.cc/Gp2tLdw7/Whats-App-Image-2025-07-16-at-16-56-51.jpg"
                alt="Pritam Das - Professional Portrait"
                className="w-80 h-80 rounded-full object-cover glass p-1 animate-float"
              />
              <div className="absolute inset-0 rounded-full cyber-gradient opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
