import React, {useState, useMemo} from "react";
import "./styles/features-section.css";
import type { IntroSplashEntry } from "../../utils/api";

interface FeaturesSectionProps {
  page_data: IntroSplashEntry[];
}

const FeaturesSection = ({ page_data }: FeaturesSectionProps) => {  
  const [currentTab, setCurrentTab] = useState(page_data[0].title);

  const currentTabData = useMemo(() => {
    return page_data.find((tab) => tab.title === currentTab);
  }
  , [currentTab]);

  console.log(currentTabData);

  console.log(page_data);
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

        <div className="simulation-container">
          {/* The simulation graphic with green/black squares will be an image */}
          <div className="simulation-placeholder"></div>

        </div>

        <div className="simple-rule">
          <p>
            <span className="bold">Simple Rule:</span> Each fire ignites
            neighbors →<span className="bold"> Emergent</span> forest fire
            patterns
          </p>
        </div>

        <div className="netlogo-description">
          <p>
            NetLogo was designed to model{" "}
            <span className="emphasis">emergent</span> phenomena in which
            large-scale patterns arise from the interactions of many individual
            agents.
            <a href="#" className="learn-more-link">
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };
