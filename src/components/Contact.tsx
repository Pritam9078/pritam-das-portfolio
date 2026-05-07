import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Let's <span>Connect</span></h3>
          <p>Open for collaborations and interesting projects in the Web3 space.</p>
        </div>
        
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Education</h4>
            <div className="education-item">
              <p className="edu-title">B.Tech in Computer Science Engineering</p>
              <p className="edu-school">Centurion University of Technology and Management (CUTM)</p>
              <p className="edu-date">2023 — 2027</p>
            </div>
            <div className="education-item">
              <p className="edu-title">•Higher Secondary</p>
              <p className="edu-school">Adyant Higher Secondary School</p>
              <p className="edu-date">2020 — 2022</p>
            </div>
          </div>

          <div className="contact-box">
            <h4>Social Channels</h4>
            <div className="social-links-grid">
              <a href="https://github.com/Pritam9078" target="_blank" rel="noreferrer" className="contact-social">
                GitHub <MdArrowOutward />
              </a>
              <a href="https://linkedin.com/in/pritam-das-738aaa237" target="_blank" rel="noreferrer" className="contact-social">
                LinkedIn <MdArrowOutward />
              </a>
              <a href="https://x.com/Priko_rax" target="_blank" rel="noreferrer" className="contact-social">
                X / Twitter <MdArrowOutward />
              </a>
              <a href="https://discordapp.com/users/1310523749522608188" target="_blank" rel="noreferrer" className="contact-social">
                Discord <MdArrowOutward />
              </a>
              <a href="mailto:dpritam2708@gmail.com" target="_blank" rel="noreferrer" className="contact-social">
                Email <MdArrowOutward />
              </a>
              <a href="https://calendly.com/dpritam2708/30min" target="_blank" rel="noreferrer" className="contact-social">
                Book a 1:1 Meeting <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-info">
            <h2>Designed and Developed by <span>Pritam Das</span></h2>
            <h5><MdCopyright /> 2026 | Built with React & Three.js</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
