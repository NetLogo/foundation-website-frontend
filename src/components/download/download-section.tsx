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
    // <ContentImageLayout imageSrc={NetLogoIcon.src}>
    // <DownloadForm
    //   versions={downloadData}
    //   downloadedSetter={() => {
    //     setDownloaded(true);
    //   }}
    // />
    // </ContentImageLayout>

    <div className="container pt-5 font-inter">
      <div className="row align-items-start gx-5">
        <div className="col-lg-6">
          <DownloadForm
            versions={downloadData}
            downloadedSetter={() => {
              setDownloaded(true);
            }}
          />
        </div>
        <div className="col-lg-6 justify-content-center ps-5">
          <div className="text-start">
            <p>
              {"Most computers can run NetLogo (see "}
              <a
                target="_blank"
                className="form-ref"
                href="https://ccl.northwestern.edu/netlogo/requirements.html"
              >
                system requirements
              </a>
              {
                "). If you would like to run NetLogo on a Chromebook or in a web browser, use "
              }
              <a className="form-ref" target="_blank" href="http://netlogoweb.org/">
                NetLogo Web
              </a>
              {"."}
            </p>
            <p>
              {
                "Multiple versions of NetLogo can be installed on the same computer."
              }
            </p>
            <p>
              {"For help using old models with new versions see the "}
              <a
                target="_blank"
                className="form-ref"
                href="https://ccl.northwestern.edu/netlogo/transition.html"
              >
                {"Transition Guide"}
              </a>
              .
            </p>

            <img src={NetLogoIcon.src} className="img-fluid mt-5 mb-0 w-50 d-block mx-auto" alt="Download NetLogo Turtle"></img>
          </div>
        </div>
      </div>
    </div>


  ) : (
    <ContentImageLayout>
      <div className="thankyou-container">
        <h1 className="thankyou-heading">Thanks for downloading!</h1>
      </div>
    </ContentImageLayout>
  );
};

export { DownloadSection };
