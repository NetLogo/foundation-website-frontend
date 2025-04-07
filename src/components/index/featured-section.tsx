import React, { useState, useMemo, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/features-section.css";

// Types
interface IntroSplashEntry {
  title: string;
  description: string;
  featured_items: FeaturedItem[];
  learn_more_link?: string;
}

interface FeaturedItem {
  type: string;
  image?: {
    id: string;
  };
  word_column_title?: string;
  column_words?: ColumnWord[];
  image_column_title?: string;
  column_images?: ColumnImage[];
}

interface ColumnWord {
  word: string;
  url: string;
}

interface ColumnImage {
  word: string;
  image: {
    id: string;
  };
}

// Props interfaces
interface FeaturesSectionProps {
  page_data: IntroSplashEntry[];
}

interface TopicsComponentProps {
  title: string;
  topics: ColumnWord[];
}

interface ImagesColumnProps {
  title: string;
  image_entries: ColumnImage[];
}

// Constants
const backend_url = import.meta.env.PUBLIC_BACKEND_URL;

// Helper functions
const handleLinkClick = (url: string) => {
  const fullUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  window.open(fullUrl, "_blank");
};

const createImageURL = (imageId: string) => {
  return `${backend_url}/assets/${imageId}`;
};

// Sub-components
const ImagesColumnComponent = ({ title, image_entries }: ImagesColumnProps) => {
  const images_object = image_entries?.reduce(
    (acc: any, entry: ColumnImage) => {
      acc[entry.image.id] = entry.word;
      return acc;
    },
    {}
  );

  const [currentImageId, setCurrentImageId] = useState<string>(
    image_entries[0]?.image.id
  );

  return (
    <div className="image-column-container">
      <img
        className="column-simulation-image"
        src={createImageURL(currentImageId)}
        alt={images_object[currentImageId]}
      />
      <div className="netlogo-container">
        <div className="netlogo-title">{title}</div>

        <div className="topics-card">
          {image_entries?.map((pair, index) => (
            <div key={index} className="topic-item">
              <a
                className="topic-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageId(pair.image.id);
                }}
              >
                {pair.word}
              </a>
            </div>
          ))}
          <div className="topics-footer">and many more...</div>
        </div>
      </div>
    </div>
  );
};

const LinksColumnComponent = ({ title, topics }: TopicsComponentProps) => {
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
                handleLinkClick(topic.url);
              }}
            >
              {topic.word}
            </a>
          </div>
        ))}
        <div className="topics-footer">and many more...</div>
      </div>
    </div>
  );
};

// Main component
const FeaturesSection = ({ page_data }: FeaturesSectionProps) => {
  // State
  const [introData, setIntroData] = useState<IntroSplashEntry[]>(page_data);
  const [currentTab, setCurrentTab] = useState(introData[0]?.title || "");

  // Process learn more links
  useEffect(() => {
    setIntroData((prev) => {
      prev.forEach((item: IntroSplashEntry) => {
        if (item.learn_more_link) {
          const url = item.learn_more_link;
          const fullUrl =
            url.startsWith("http://") || url.startsWith("https://")
              ? url
              : `https://${url}`;

          item.description += ` [Learn more →](${fullUrl})`;
        }
      });

      return [...prev];
    });
  }, []);

  // Memoized values
  const currentTabData = useMemo(() => {
    return introData.find((tab) => tab.title === currentTab);
  }, [currentTab, introData]);

  const FeaturedItems: FeaturedItem[] | undefined =
    currentTabData?.featured_items;

  // Check if all items are images (type 1)
  const allItemsAreImages = useMemo(() => {
    if (!FeaturedItems || FeaturedItems.length === 0) return false;
    return FeaturedItems.every((item) => Number(item?.type) === 1);
  }, [FeaturedItems]);

  // Render functions
  const renderFeaturedItem = (item: FeaturedItem, index: number) => {
    const itemType = Number(item?.type);

    switch (itemType) {
      case 1:
        return (
          <img
            className={`simulation-image ${allItemsAreImages ? "uniform-height" : ""}`}
            src={createImageURL(item?.image?.id || "")}
            alt={currentTabData?.title}
          />
        );
      case 2:
        return (
          <LinksColumnComponent
            key={index}
            title={item?.word_column_title || ""}
            topics={item?.column_words || []}
          />
        );
      case 3:
        return (
          <ImagesColumnComponent
            key={index}
            title={item?.image_column_title || ""}
            image_entries={item?.column_images || []}
          />
        );
      default:
        return null;
    }
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

        <div
          className={`simulation-container ${allItemsAreImages ? "all-images" : ""}`}
        >
          {FeaturedItems?.map((item, index) => (
            <React.Fragment key={index}>
              {renderFeaturedItem(item, index)}
            </React.Fragment>
          ))}
        </div>

        <div className="netlogo-description">
          <span className="inline-markdown">
            <ReactMarkdown>{currentTabData?.description || ""}</ReactMarkdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };
