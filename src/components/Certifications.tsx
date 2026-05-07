import "./styles/Certifications.css";
import { FaAward } from "react-icons/fa6";

const certifications = [
  {
    title: "Mastering Web3 (Introductory Track)",
    issuer: "University of Nicosia",
    date: "Apr 2026",
    id: "Credential ID: N/A",
  },
  {
    title: "HacOdisha 5.0",
    issuer: "United Latino Students Association",
    date: "Aug 2025",
    id: "Credential ID: dc31c1d3-9948-470f-84bc-ec26e807bde6",
  },
  {
    title: "HackOdish 5.0",
    issuer: "WEBWIZ.NITR",
    date: "Oct 2025",
    id: "Credential ID: N/A",
  },
  {
    title: "Core Ecosystem",
    issuer: "Geeks of Gurukul",
    date: "Sep 2025",
    id: "Credential ID: N/A",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Oct 2024",
    id: "Credential ID: 82E58A7D475E",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Oct 2024",
    id: "Credential ID: 823BC8C16614",
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
