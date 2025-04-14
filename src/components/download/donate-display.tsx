import React from "react";
import ReactMarkdown from "react-markdown";

interface DonateDisplayData {
  image: { id: string };
  donate_title: string;
  donate_text: string;
  donate_url: string;
}

interface DonateProps {
  donateData: DonateDisplayData;
}

const Donate = ({ donateData }: DonateProps) => {
  return (
    <div className="donate-container">
      <div className="donate-image-0container">
        <img className="donate-image" src="" alt="donate" />
      </div>
      <div className="donate-text-container">
        <h1 className="donate-title">{donateData.donate_title}</h1>
        <ReactMarkdown className="donate-text">
          donateData.donate_text
        </ReactMarkdown>
        <button className="donate-button">Donate Now</button>
      </div>
    </div>
  );
};

export default Donate;
