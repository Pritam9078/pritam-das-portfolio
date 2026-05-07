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
                <h4>Intern</h4>
                <h5>Prustaz</h5>
              </div>
              <div className="career-location">
                <h3>Hybrid</h3>
              </div>
            </div>
            <p>
              Working as a Software Developer Intern at Prustaz Technologies Pvt. Ltd., contributing to real-world projects and gaining hands-on experience in modern technologies, including blockchain. Focused on building efficient, scalable solutions.
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
