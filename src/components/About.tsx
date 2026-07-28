import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Pritam Das, a Computer Science and Engineering student and Fullstack & Blockchain Developer based in Bhubaneswar, Odisha. My work sits at the intersection of Web3 and full-stack development — I've built decentralized governance platforms, carbon credit trading dApps, and cross-chain automation protocols using tools like Solidity, Ethereum, Solana, and zero-knowledge proofs, alongside modern web stacks like React, Next.js, and Node.js.
        </p>
        <p className="para">
          I've worked as a Fullstack Developer Intern at OPM Corporation, contributing to production platforms across e-commerce, healthcare, and edtech, and as a Software & Blockchain Intern at Prustaz Technologies. I currently serve as a Stellar India Ambassador, building and promoting Web3 adoption within my community.
        </p>
        <p className="para">
          I care about writing code that's not just functional but maintainable, and about applying blockchain technology to solve real, practical problems rather than chasing hype. When I'm not building, I'm usually deep in a hackathon, a new protocol's docs, or figuring out how to make something scale.
        </p>
      </div>
    </div>
  );
};

export default About;
