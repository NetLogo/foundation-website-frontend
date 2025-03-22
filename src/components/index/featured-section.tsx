import React, { useState, useMemo } from "react";
import "./styles/features-section.css";
import type { IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";

interface FeaturesSectionProps {
  page_data: IntroSplashEntry[];
}

const FeaturesSection = ({ page_data }: FeaturesSectionProps) => {
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;

  const [currentTab, setCurrentTab] = useState(page_data[0].title);

  const currentTabData = useMemo(() => {
    return page_data.find((tab) => tab.title === currentTab);
  }, [currentTab]);

  console.log("currentTabData", currentTabData);

  const image_url = `${backend_url}/assets/${currentTabData?.demo_image.id}`;

  return (
    <div className="features-section">
      <div className="features-content">
        <div className="category-buttons">
          {page_data.map((tab, index) => (
            <button
              key={index}
              className={`category-button ${currentTab === tab.title ? "active" : ""}`}
              onClick={() => setCurrentTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="simulation-container ">
          <img className="simulation-image" src={image_url} alt="simulation" />
        </div>

        <div className="simple-rule">
          <p>
            <span className="bold">Simple Rule:</span> Each fire ignites
            neighbors →<span className="bold"> Emergent</span> forest fire
            patterns
          </p>
        </div>

        <div className="netlogo-description">
          <ReactMarkdown>{currentTabData?.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };
