import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">About Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              As a Computer Science student with a passion for emerging technologies, I'm deeply invested in the transformative potential of Web3 and AI. My journey began with curiosity about decentralized systems and has evolved into building real-world applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in the power of blockchain to democratize finance and create transparent, trustless systems. Combined with AI's ability to process and understand data at scale, these technologies represent the next frontier of human innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge className="glass px-4 py-2 rounded-full text-sm">🎯 Campus Maven @RiseIn</Badge>
              <Badge className="glass px-4 py-2 rounded-full text-sm">🏆 Agoric Hackathon</Badge>
              <Badge className="glass px-4 py-2 rounded-full text-sm">🚀 D3 Fest</Badge>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern tech workspace setup"
              className="rounded-xl mb-6 w-full h-64 object-cover"
            />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[hsl(197,100%,50%)]">Current Focus</span>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Smart Contract Development</span>
                  <span className="text-[hsl(158,100%,50%)]">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>AI/ML Implementation</span>
                  <span className="text-[hsl(197,100%,50%)]">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>DeFi Protocols</span>
                  <span className="text-[hsl(258,84%,69%)]">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
