import { useState } from "react";
import "./styles/download-section.css";
import { DownloadForm } from "./download-form";
import NetLogoIcon from "../../assets/NetlogoIcon.svg";
import { type NetLogoVersion } from "../../utils/api";
import ContentImageLayout from "../shared/content-image-layout";

interface DownloadSectionProps {
  downloadData: NetLogoVersion[];
}

const DownloadSection = ({ downloadData }: DownloadSectionProps) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  return !downloaded ? (
    <ContentImageLayout imageSrc={NetLogoIcon.src}>
      <DownloadForm
        versions={downloadData}
        downloadedSetter={() => {
          setDownloaded(true);
        }}
      />
    </ContentImageLayout>
  ) : (
    <ContentImageLayout>
      <div className="thankyou-container">
        <h1 className="thankyou-heading">Thanks for downloading!</h1>
        <p className="thankyou-text">
          Most computers can run NetLogo (see{" "}
          <a href="https://ccl.northwestern.edu/netlogo/requirements.html" className="thankyou-link">
            system requirements
          </a>
          ). If you would like to run NetLogo on a Chromebook or in a web
          browser, please see if{" "}
          <a href="https://netlogoweb.org" className="thankyou-link">
            NetLogo Web
          </a>{" "}
          will meet your needs.
        </p>
        <p className="thankyou-text">
          Multiple versions of NetLogo can be installed on the same computer;
          installing a new one doesn't remove the old one.
        </p>
      </div>
    </ContentImageLayout>
  );
};

export { DownloadSection };
