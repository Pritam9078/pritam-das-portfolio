import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 z-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold cyber-text mb-4">
              "Decentralizing dreams, one commit at a time."
            </h3>
            <p className="text-gray-400">pritamdas.eth | Building the future with Web3 & AI</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-[hsl(197,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-[hsl(197,100%,50%)]" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[hsl(258,84%,69%)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-[hsl(258,84%,69%)]" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[hsl(158,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-[hsl(158,100%,50%)]" />
            </a>
            <a
              href="mailto:pritam@pritamdas.dev"
              className="w-12 h-12 bg-[hsl(197,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-[hsl(197,100%,50%)]" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
            <p>&copy; 2024 Pritam Das. Built with passion for Web3 and AI innovation.</p>
            <p className="mt-2">Open to collaborations • Available for internships • Let's build the future together</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
