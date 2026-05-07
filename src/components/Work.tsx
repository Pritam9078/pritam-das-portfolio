import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "DNAProof",
    category: "Cross-Chain Oracle & Secure Verification",
    tools: "TypeScript, Solidity, ZK-SNARKs, Hardhat, Next.js",
    image: "/images/dnaproof.png",
    link: "https://github.com/Pritam9078/DNAProof",
  },
  {
    title: "ZYPHERION",
    category: "Zero-Trust Blockchain Orchestration",
    tools: "Next.js, Node.js, Stellar, Soroban, Circom, ZK-SNARKs",
    image: "/images/zypherion.png",
    link: "https://github.com/Pritam9078/ZYPHERION",
  },
  {
    title: "CREDA DAO",
    category: "AI-Powered Credit & Funding Ecosystem",
    tools: "Next.js, Stellar, Soroban, AI (Llama 3.2), Ollama",
    image: "/images/creda.png",
    link: "https://github.com/Pritam9078/CREDA",
  },
  {
    title: "QubitX",
    category: "Quantum Computing Visualization & Education",
    tools: "Three.js, Plotly.js, Math.js, JavaScript, CSS3",
    image: "/images/qubitx.png",
    link: "https://github.com/Pritam9078/QubitX",
  },
  {
    title: "CLORIT",
    category: "Carbon Credit & Blue Carbon Platform",
    tools: "Next.js, Solidity, Web3.js, Tailwind CSS",
    image: "/images/clorit.png",
    link: "https://github.com/Pritam9078/CLORIT",
  },
  {
    title: "DVOTE",
    category: "Decentralized Governance & Voting dApp",
    tools: "React, Solidity, Ethers.js, Wagmi, IPFS",
    image: "/images/dvote.png",
    link: "https://github.com/Pritam9078/DVote",
  },
  {
    title: "OrbitLend",
    category: "Fintech Blockchain Lending Platform",
    tools: "Next.js, Solidity, Hardhat, Ethereum (Sepolia)",
    image: "/images/orbitlend.png",
    link: "https://github.com/Pritam9078/orbitlend",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
