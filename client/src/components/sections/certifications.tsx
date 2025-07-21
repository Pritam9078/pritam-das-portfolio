import { Trophy, Mountain, Code, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Agoric Hackathon",
    description: "Winner - Smart Contract Track",
    year: "2024",
    icon: Trophy,
    color: "text-[hsl(197,100%,50%)]",
    bgColor: "bg-[hsl(197,100%,50%)]"
  },
  {
    title: "Avalanche Workshop",
    description: "Advanced Developer Track",
    year: "2024",
    icon: Mountain,
    color: "text-[hsl(258,84%,69%)]",
    bgColor: "bg-[hsl(258,84%,69%)]"
  },
  {
    title: "Mamathon",
    description: "Participant - DeFi Track",
    year: "2023",
    icon: Code,
    color: "text-[hsl(158,100%,50%)]",
    bgColor: "bg-[hsl(158,100%,50%)]"
  },
  {
    title: "CampusToCrypto",
    description: "Certified Web3 Developer",
    year: "2023",
    icon: GraduationCap,
    color: "text-[hsl(197,100%,50%)]",
    bgColor: "bg-[hsl(197,100%,50%)]"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">Achievements & Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${cert.bgColor} bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <cert.icon className={`text-2xl ${cert.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.description}</p>
              <p className="text-xs text-gray-500 mt-2">{cert.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-6">Download my complete resume with project details and technical achievements.</p>
            <a
              href="#"
              className="cyber-gradient px-8 py-4 rounded-lg text-black font-semibold hover:scale-105 transition-transform duration-300 inline-block"
            >
              📄 Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
