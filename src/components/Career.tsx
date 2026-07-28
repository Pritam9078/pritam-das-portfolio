import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer Intern</h4>
                <h5><a href="https://www.opmcorporation.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>OPM Corporation</a></h5>
                <h6 style={{ margin: 0, fontWeight: 400, opacity: 0.6, fontSize: "14px" }}>May 2026 – July 2026</h6>
                <h6 style={{ margin: "5px 0 0 0", fontWeight: 400, opacity: 0.5, fontSize: "12px", fontFamily: "monospace" }}>Credential ID: OPMN00264</h6>
              </div>
              <div className="career-location">
                <h3>In-Office</h3>
              </div>
            </div>
            <p>
              Developed and maintained full-stack web applications, contributing to projects including Ridlin (e-commerce), 3D Genomix Lab (healthcare), and OPM Learnings (edtech) by implementing features, resolving bugs, and improving application performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & Blockchain Intern</h4>
                <h5><a href="https://www.prustaz.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Prustaz Technologies Pvt. Ltd.</a></h5>
                <h6 style={{ margin: 0, fontWeight: 400, opacity: 0.6, fontSize: "14px" }}>May 2025 – May 2026</h6>
              </div>
              <div className="career-location">
                <h3>Hybrid</h3>
              </div>
            </div>
            <p>
              Contributed to real-world software and blockchain development projects, gaining hands-on experience in modern technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ambassador</h4>
                <h5>HeLa Labs</h5>
              </div>
              <div className="career-location">
                <h3>Hybrid</h3>
              </div>
            </div>
            <p>
              Representing HeLa Labs, fostering community engagement, and driving adoption of decentralized solutions. Focused on promoting the HeLa ecosystem and supporting developers in building next-gen dApps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Maven</h4>
                <h5>Rise In</h5>
              </div>
              <div className="career-location">
                <h3>On-Campus</h3>
              </div>
            </div>
            <p>
              Led blockchain education and Web3 adoption initiatives. Organized workshops and fostered a developer community focused on decentralized technologies on campus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <div className="career-location">
                <h3>Remote</h3>
              </div>
            </div>
            <p>
              Worked on various ML projects including predictive modeling and data analysis. Gained experience in neural networks and computer vision using Python and standard ML libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>OctaNet Services</h5>
              </div>
              <div className="career-location">
                <h3>Remote</h3>
              </div>
            </div>
            <p>
              Gained hands-on experience in developing efficient, scalable applications using Python. Worked on real-world projects involving data processing, automation, and scripting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
