import React from "react";
import ReactMarkdown from "react-markdown";
import { getImageUrl } from "../../utils/url-utils";

export interface DonationData {
  title: string;
  text: string;
  image: { id: string };
  url: string;
}

interface DonationSectionProps {
  donationData: DonationData;
}

const DonationSection = ({ donationData }: DonationSectionProps) => {
  return (
    <div className="donate-container">
      <div className="donate-image-0container">
        <img
          className="donate-image"
          src={getImageUrl(donationData.image)}
          alt="donate image"
        />
      </div>
      <div className="donate-text-container">
        <h1 className="donate-title">{donationData.title}</h1>
        <ReactMarkdown className="donate-text">
          {donationData.text}
        </ReactMarkdown>
        <button className="donate-button">Donate Now</button>
      </div>
    </div>
  );
};

export default DonationSection;
