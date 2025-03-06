import React, { useState, useEffect } from "react";
import "./styles/download-page.css";
import { DownloadForm } from "./download-form";
import NetLogoIcon from "../../assets/NetlogoIcon.svg";
import { type NetLogoVersion } from "../../utils/api";

interface DownloadSectionProps {
  versions: NetLogoVersion[];
}


const DownloadSection = ({versions}: DownloadSectionProps ) => {
  const [isDesktop, setDesktop] = useState(false); // Default to false initially

  useEffect(() => {
    // Set initial value once in browser
    setDesktop(window.innerWidth > 1300);
    
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1300);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="download-section">
      {isDesktop && <img className="netlogo-download-icon" src={NetLogoIcon.src} />}
      <DownloadForm versions={versions}/>
    </div>
  );
};

export { DownloadSection };