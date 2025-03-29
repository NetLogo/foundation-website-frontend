import React, { useState, useMemo } from "react";
import "./styles/features-section.css";
import type { IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";

interface FeaturesSectionProps {
  page_data: IntroSplashEntry[];
}

interface TopicsComponentProps {
  title?: string;
  topics?: string[];
}

const TopicsComponent = ({ 
  title = "NetLogo is used in",
  topics = [
    "Anthropology",
    "Archaeology",
    "Biology",
    "Cognitive Science",
    "Ecology",
    "Educational Research",
    "Economics",
    "Epidemiology",
    "Psychology",
    "Sociology",
    "Urban Planning"
  ]
}: TopicsComponentProps) => {
  // Click handler function
  const handleTopicClick = (topic: any) => {
    console.log(`Clicked on ${topic}`);
    // Add your navigation or other functionality here
  };

  return (
    <div className="netlogo-container">
      {/* Title section */}
      <div className="netlogo-title">
        {title}
      </div>
      
      {/* Topics card */}
      <div className="topics-card">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className="topic-item"
          >
            <a 
              href="#" 
              className="topic-link"
              onClick={(e) => {
                e.preventDefault();
                handleTopicClick(topic);
              }}
            >
              {topic}
            </a>
          </div>
        ))}
        
        {/* Footer text - grayed out */}
        <div className="topics-footer">
          and many more...
        </div>
      </div>
    </div>
  );
};



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
            We are currently looking at {currentTabData?.title}.{" "}
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
