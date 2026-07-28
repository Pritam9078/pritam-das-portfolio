import { lazy, PropsWithChildren, Suspense, useEffect, useState, useRef } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Certifications from "./Certifications";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [showTechStack, setShowTechStack] = useState(false);
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    if (!techStackRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTechStack(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" } // Load it a bit early before it comes into view
    );
    observer.observe(techStackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-main">
      {/* <Cursor /> */}
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Certifications />
            <Work />
            {isDesktopView && (
              <div ref={techStackRef} style={{ minHeight: "100vh" }}>
                {showTechStack ? (
                  <Suspense fallback={<div>Loading Tech Stack...</div>}>
                    <TechStack />
                  </Suspense>
                ) : (
                  <div>Loading Tech Stack...</div>
                )}
              </div>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
