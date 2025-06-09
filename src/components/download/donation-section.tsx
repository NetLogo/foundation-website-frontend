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
      <h1 className="donate-title">{donationData?.title}</h1>
        <ReactMarkdown className="donate-text">
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
    </ContentImageLayout>

  );
};

export default DonationSection;

