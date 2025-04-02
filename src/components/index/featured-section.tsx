import React, { useState, useMemo } from "react";
import "./styles/features-section.css";
import type {
  IntroSplashEntry,
  FeaturedItem,
  ColumnWord,
} from "../../utils/api";
import ReactMarkdown from "react-markdown";

interface FeaturesSectionProps {
  page_data: IntroSplashEntry[];
}

interface TopicsComponentProps {
  title?: string;
  topics?: ColumnWord[];
}
const TopicsComponent = ({ title, topics }: TopicsComponentProps) => {
  // Click handler function
  const handleTopicClick = (url: string) => {
    // Check if the URL starts with http:// or https://
    // If not, prepend https:// to the URL
    const fullUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

    // Open the URL in a new tab
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="netlogo-container">
      <div className="netlogo-title">{title}</div>

      <div className="topics-card">
        {topics?.map((topic, index) => (
          <div key={index} className="topic-item">
            <a
              href={topic.url}
              target="_blank"
              className="topic-link"
              onClick={(e) => {
                e.preventDefault();
                handleTopicClick(topic.url);
              }}
            >
              {topic.word}
            </a>
          </div>
        ))}

        {/* Footer text - grayed out */}
        <div className="topics-footer">and many more...</div>
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

  const FeaturedItems: FeaturedItem[] | undefined =
    currentTabData?.featured_items;

  const createImageURL = (imageId: string) => {
    return `${backend_url}/assets/${imageId}`;
  };

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
          {FeaturedItems?.map((item, index) => {
            const renderItem = () => {
              // Convert string to number with Number()
              const itemType = Number(item?.type);

              switch (itemType) {
                case 1:
                  return (
                    <img
                      className="simulation-image"
                      src={createImageURL(item?.image.id)}
                      alt={currentTabData?.title}
                    />
                  );
                case 2:
                  return (
                    <TopicsComponent
                      title={item?.column_title}
                      topics={item?.column_words}
                    />
                  );
                default:
                  return (
                    <div className="default-element">
                      {/* Default content */}
                    </div>
                  );
              }
            };

            return <React.Fragment key={index}>{renderItem()}</React.Fragment>;
          })}
        </div>

        <div className="netlogo-description">
          <ReactMarkdown>{currentTabData?.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };
