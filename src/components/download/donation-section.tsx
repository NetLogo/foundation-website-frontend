import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getImageUrl, handleLinkClick } from "../../utils/url-utils";
import "./styles/donation-section.css";
import { Button } from "../shared/button";
import ContentImageLayout from "../shared/content-image-layout";

export interface DonationData {
  title: string;
  text: string;
  image: { id: string };
  url: string;
}

interface DonationSectionProps {
  donationArray: DonationData[];
}

const DonationSection = ({ donationArray }: DonationSectionProps) => {
  const [donationData, setDonationData] = useState<DonationData | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * donationArray.length);
    setDonationData(donationArray[randomIndex]);
  }, []);

  return (
    <ContentImageLayout
      imageId={donationData?.image.id}>
      <p className="fs-1 text-start fw-bold font-inter">{donationData?.title}</p>
      <ReactMarkdown className="text-start font-start fs-5 font-inter">
        {donationData?.text}
      </ReactMarkdown>
      <div className="d-flex flex-column align-items-center">
        <button 
        type="button" 
        className="btn btn-primary btn-lg font-inter fw-bold my-2"
        onClick={() => donationData ? handleLinkClick(donationData.url) : null}>
          Donate
        </button>
        <p className="text-start font-inter" style={{ maxWidth: "200px" }}>Donations are processed through Northwestern University, but 100% goes 
          to the Center for Connected Learning to support NetLogo</p>
      </div>
      {/* <ContentImageLayout
        imageId={donationData?.image.id}>
        <p className="fs-1 text-start fw-bold font-inter">{donationData?.title}</p>
        <ReactMarkdown className="text-start font-start fs-5">
          {donationData?.text}
        </ReactMarkdown>
        <div className="donate-button-container">
          <Button
            colorClass="blue-button"
            padding="1rem 2.2rem"
            fontSize="1.56rem"
            text="Donate"
            hasIcon={false}
            style={{
              marginTop: "1.75rem",
              width: "203px",
              borderRadius: "17px",
            }}
            onClick={() => donationData ? handleLinkClick(donationData.url) : null}
          />
          <p>
            Donations are processed through Northwestern University, but 100%
            goes to the Center for Connected Learning to support NetLogo
          </p>
        </div>
      </ContentImageLayout> */}
    </ContentImageLayout>

  );
};

export default DonationSection;

