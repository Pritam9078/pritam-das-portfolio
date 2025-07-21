import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import AnimatedBackground from "@/components/ui/animated-background";
import Terminal from "@/components/ui/terminal";
import { useKonami } from "@/hooks/use-konami";
import { useState } from "react";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useKonami(() => setTerminalOpen(true));

  return (
    <div className="relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
