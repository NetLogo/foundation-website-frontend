import React from "react";
import "./styles/download-page.css";
import { DownloadForm } from "./download-form";
import NetLogoIcon from "../../assets/NetlogoIcon.svg"

const DownloadSection = () => {
  const options = ["NetLogo 7.0.0"];

  return (
    <div className="download-section">
      <img src={NetLogoIcon.src} />
      <DownloadForm />
    </div>
  );
};

export { DownloadSection };
