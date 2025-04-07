import React, { useState, useMemo, useEffect } from "react";
import "./styles/features-section.css";
import type {
  IntroSplashEntry,
  FeaturedItem,
  ColumnWord,
  ColumnImage,
} from "../../utils/api";
import ReactMarkdown from "react-markdown";

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

const backend_url = import.meta.env.PUBLIC_BACKEND_URL;

const handleLinkClick = (url: string) => {
  // Check if the URL starts with http:// or https://
  // If not, prepend https:// to the URL
  const fullUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  // Open the URL in a new tab
  window.open(fullUrl, "_blank");
};

const ImagesColumnComponent = ({ title, image_entries }: ImagesColumnProps) => {
  const images_object = image_entries?.reduce(
    (acc: any, entry: ColumnImage) => {
      const imageId = entry.image.id;
      const imageWord = entry.word;
      acc[imageId] = imageWord;
      return acc;
    },
    {}
  );

  const createImageURL = (imageId: string) => {
    return `${backend_url}/assets/${imageId}`;
  };

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
          {/* Footer text - grayed out */}
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

const FeaturesSection = ({ page_data }: FeaturesSectionProps) => {
  useEffect(() => {
    page_data.map((item: any) => {
      if (item.learn_more_link) {
        const url = item.learn_more_link;
        const fullUrl =
          url.startsWith("http://") || url.startsWith("https://")
            ? url
            : `https://${url}`;

        item.description += ` [Learn more →](${fullUrl})`;
      }
    });
  }, []);

  const [currentTab, setCurrentTab] = useState(page_data[0].title);

  const currentTabData = useMemo(() => {
    return page_data.find((tab) => tab.title === currentTab);
  }, [currentTab]);

  const FeaturedItems: FeaturedItem[] | undefined =
    currentTabData?.featured_items;

  const createImageURL = (imageId: string) => {
    return `${backend_url}/assets/${imageId}`;
  };
  
  // Check if all items are images (type 1)
  const allItemsAreImages = useMemo(() => {
    if (!FeaturedItems || FeaturedItems.length === 0) return false;
    
    return FeaturedItems.every(item => Number(item?.type) === 1);
  }, [FeaturedItems]);

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

        <div className={`simulation-container ${allItemsAreImages ? 'all-images' : ''}`}>
          {FeaturedItems?.map((item, index) => {
            const renderItem = () => {
              // Convert string to number with Number()
              const itemType = Number(item?.type);

              switch (itemType) {
                case 1:
                  return (
                    <img
                      className={`simulation-image ${allItemsAreImages ? 'uniform-height' : ''}`}
                      src={createImageURL(item?.image.id)}
                      alt={currentTabData?.title}
                    />
                  );
                case 2:
                  return (
                    <LinksColumnComponent
                      key={index}
                      title={item?.word_column_title}
                      topics={item?.column_words}
                    />
                  );
                case 3:
                  return (
                    <ImagesColumnComponent
                      key={index}
                      title={item?.image_column_title}
                      image_entries={item?.column_images}
                    />
                  );
              }
            };

            return <React.Fragment key={index}>{renderItem()}</React.Fragment>;
          })}
        </div>

        <div className="netlogo-description">
          <span className="inline-markdown">
            <ReactMarkdown>{currentTabData?.description}</ReactMarkdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };