import React, { useState, useMemo, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/intro-splash.css";
import type { IntroSplashEntry, FeaturedItem } from "../../utils/api";

interface WordPair {
  word: string;
  url: string;
}

interface ImagePair {
  word: string;
  image: {
    id: string;
  };
}

// Props interfaces
interface IntroSplashProps {
  page_data: IntroSplashEntry[];
}

interface LinksColumnProps {
  title: string;
  link_entries: WordPair[];
}

interface ImagesColumnProps {
  title: string;
  image_entries: ImagePair[];
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
const ImagesColumn = ({ title, image_entries }: ImagesColumnProps) => {
  const images_object = image_entries?.reduce(
    (acc: any, entry: ImagePair) => {
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
        className="current-column-image"
        src={createImageURL(currentImageId)}
        alt={images_object[currentImageId]}
      />
      <div className="column-container">
        <div className="column-title">{title}</div>

        <div className="column-card">
          {image_entries?.map((pair, index) => (
            <div key={index} className="column-entry">
              <a
                className="entry-text"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageId(pair.image.id);
                }}
              >
                {pair.word}
              </a>
            </div>
          ))}
          <div className="column-footer">and many more...</div>
        </div>
      </div>
    </div>
  );
};

const LinksColumn = ({ title, link_entries }: LinksColumnProps) => {
  return (
    <div className="column-container">
      <div className="column-title">{title}</div>

      <div className="column-card">
        {link_entries?.map((entry, index) => (
          <div key={index} className="column-entry">
            <a
              href={entry.url}
              target="_blank"
              className="entry-text"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(entry.url);
              }}
            >
              {entry.word}
            </a>
          </div>
        ))}
        <div className="column-footer">and many more...</div>
      </div>
    </div>
  );
};

// Main component
const IntroSplash = ({ page_data }: IntroSplashProps) => {
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
            className={`featured-image ${allItemsAreImages ? "uniform-height" : ""}`}
            src={createImageURL(item?.image?.id || "")}
            alt={currentTabData?.title}
          />
        );
      case 2:
        return (
          <LinksColumn
            key={index}
            title={item?.word_column_title || ""}
            link_entries={item?.column_words || []}
          />
        );
      case 3:
        return (
          <ImagesColumn
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
    <div className="splash-section">
      <div className="splash-content">
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
          className={`featured-item-container ${allItemsAreImages ? "all-images" : ""}`}
        >
          {FeaturedItems?.map((item, index) => (
            <React.Fragment key={index}>
              {renderFeaturedItem(item, index)}
            </React.Fragment>
          ))}
        </div>

        <div className="featured-item-description">
          <span className="inline-markdown">
            <ReactMarkdown>{currentTabData?.description || ""}</ReactMarkdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export { IntroSplash };
