import { useState } from "react";


interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
      {/* Invisible spacer to balance the layout and keep the image perfectly centered */}
      {props.link && (
        <div className="view-repo-btn" style={{ opacity: 0, pointerEvents: 'none', visibility: 'hidden' }}>
          View Repo
        </div>
      )}
      <div 
        className="work-image-frame" 
        style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        <img src={props.image} alt={props.alt} className="work-img-element" />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </div>
      {props.link && (
        <a
          className="view-repo-btn"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          View Repo
        </a>
      )}
    </div>
  );
};

export default WorkImage;
