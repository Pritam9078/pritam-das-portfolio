import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRITAM
              <br />
              <span>DAS</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-subtitle">Web2 & Web3</h3>
            <div className="landing-h2-container">
              <h2 className="landing-info-h2">
                Full Stack &
                <span className="landing-h2-2">Full Stack &</span>
              </h2>
              <h2 className="landing-info-h2">
                Blockchain Dev.
                <span className="landing-h2-2">Blockchain Dev.</span>
              </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
