import "./styles/Certifications.css";
import { FaAward } from "react-icons/fa6";

const certifications = [
  {
    title: "Fullstack Developer Internship",
    issuer: "OPM Corporation",
    date: "July 2026",
    id: "Credential ID: OPMN00264",
    link: "/images/opm_internship.jpeg",
    image: "/images/opm_internship.jpeg"
  },
  {
    title: "Stellar Journey to Mastery",
    issuer: "Rise In and Stellar",
    date: "N/A",
    id: "Credential ID: N/A",
    link: "/images/stellar_journey.jpeg",
    image: "/images/stellar_journey.jpeg"
  },
  {
    title: "Mastering Web3 (Introductory Track)",
    issuer: "University of Nicosia",
    date: "Apr 2026",
    id: "Credential ID: N/A",
    link: "/images/mastering_web3.jpeg",
    image: "/images/mastering_web3.jpeg"
  },
  {
    title: "HackOdisha 5.0 Participation",
    issuer: "NITR",
    date: "Sep 2025",
    id: "Credential ID: 8d490f11-bb8d-4260-8f6c-6781fbbf07df",
    link: "/images/hackodisha_participation.pdf",
    image: "/images/hackodisha_participation.jpeg"
  },
  {
    title: "HackOdisha 5.0 Winner",
    issuer: "Verbwire",
    date: "Sep 2025",
    id: "Credential ID: dc31c1d3-9948-470f-84bc-ec26e807bde6",
    link: "/images/hackodisha_winner.jpeg",
    image: "/images/hackodisha_winner.jpeg"
  },
  {
    title: "Core Ecosystem",
    issuer: "Geeks of Gurukul",
    date: "Sep 2025",
    id: "Credential ID: N/A",
    link: "/images/core_ecosystem.jpeg",
    image: "/images/core_ecosystem.jpeg"
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Oct 2024",
    id: "Credential ID: 82E58A7D475E",
    link: "/images/problem_solving_basic.png",
    image: "/images/problem_solving_basic.png"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Oct 2024",
    id: "Credential ID: 823BC8C16614",
    link: "/images/python_basics.png",
    image: "/images/python_basics.png"
  },
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certs">
      <div className="cert-container">
        <h2>
          Licenses <span>&</span>
          <br /> Certifications
        </h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              {cert.image && (
                <div className="cert-hover-overlay">
                  <img src={cert.image} alt={cert.title} className="cert-hover-image" />
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                      View Full Screen
                    </a>
                  )}
                </div>
              )}
              <div className="cert-content">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <h5>{cert.issuer}</h5>
                  <p>{cert.date}</p>
                  {cert.id !== "Credential ID: N/A" && <span className="cert-id">{cert.id}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
