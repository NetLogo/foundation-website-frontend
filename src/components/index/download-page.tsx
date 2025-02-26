import React from "react";
import "./styles/download-page.css";
import { DownloadForm } from "./download-form";
import NetLogoIcon from "../../assets/NetlogoIcon.svg";

const DownloadSection = () => {
  return (
    <div className="download-section">
      <img className="netlogo-download-icon" src={NetLogoIcon.src} />
      <DownloadForm />
    </div>
  );
};

export { DownloadSection };
