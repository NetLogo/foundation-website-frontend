import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import { getImageUrl, handleLinkClick } from "../../utils/url-utils";
import "./styles/donation-section.css";
import { Button } from "../shared/button";

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
    <div className="donate-container" >
      <div className="donate-image-container">
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
        <div className="donate-button-container">
          <Button
            colorClass="dark-button"
            padding="1rem 2.2rem"
            fontSize="1.56rem"
            text="Donate"
            hasIcon={false}
            style={{
              marginTop: "1.75rem",
              width: "fit-content",
              borderRadius: "17px",
            }}
            onClick={() => handleLinkClick(donationData.url)}
          />
          <p>
            Donations are processed through Northwestern University, but 100%
            goes to the Center for Connected Learning to support NetLogo
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
