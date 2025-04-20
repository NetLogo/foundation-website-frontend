import React, { useState, useEffect } from "react";
import "./styles/download-section.css";
import { DownloadForm } from "./download-form";
import NetLogoIcon from "../../assets/NetlogoIcon.svg";
import { type NetLogoVersion } from "../../utils/api";

interface DownloadSectionProps {
  downloadData: NetLogoVersion[];
}

const DownloadSection = ({ downloadData }: DownloadSectionProps) => {
  return (
    <div className="download-section">
      <img className="netlogo-download-icon" src={NetLogoIcon.src} />
      <DownloadForm versions={downloadData} />
    </div>
  );
};

export { DownloadSection };
