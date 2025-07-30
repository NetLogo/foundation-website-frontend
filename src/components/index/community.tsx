import { useState, useEffect } from "react";
import "./styles/community.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import type { CommunityEntry } from "../../utils/api.js";
import ReactMarkdown from "react-markdown";

interface CommunityPost {
  project: string;
  author: string;
  link: string;
  image: string;
  date: string;
}

interface communityProps {
  communityPosts: CommunityPost[];
  page_data: CommunityEntry[];
  section_color: string;
}

interface communityCardProps {
  title: string;
  link: string;
  description: string;
  icon: string;
  bordered: boolean;
  card_color: string;
}

const CommunityCard = ({
  link,
  title,
  description,
  icon,
  bordered,
  card_color,
}: communityCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const imageClass = "community-item-img" + (bordered ? " bordered" : "");
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="community-item" style={{ backgroundColor: card_color }}>
      <div className="community-item-header">
        <img className={imageClass} src={`${backend_url}/assets/${icon}`} />
        <span className="community-item-title"> {title} </span>
      </div>
      <span className="community-item-descript">
        <ReactMarkdown>{description}</ReactMarkdown>{" "}
      </span>
      <div className="button-container">
        <Button
          colorClass="blue-button"
          padding="0.75rem 2.5rem"
          fontSize="0.875rem"
          text="GO"
          onClick={() => pageRedirect(link)}
        />
      </div>
    </div>
  );
};

/** Community: defines the Community section in the landing page **/
const Community = ({
  communityPosts,
  page_data,
  section_color,
}: communityProps) => {
  // Initialize previewImage with the first image if available
  const [previewImage, setPreviewImage] = useState<string | null>(
    communityPosts.length > 0 ? communityPosts[0].image : null
  );

  const color_palette = ["#F2F2F2", "white"];

  return (
    <div className="community-section">
      <Section
        sectionTitle="Community"
        sectionDescript="Join NetLogo community and start contributing today."
        sectionGap={1.88}
        sectionPaddingBot={3.75}
        backgroundColor={section_color}
        moreButton={false}
        body={
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.7rem",
              }}
              className="community-netlogo-content"
            >
              {page_data.map((card: CommunityEntry, index: number) => (
                <CommunityCard
                  title={card.title}
                  link={card.link}
                  description={card.description}
                  icon={card.icon.id}
                  bordered={card.bordered}
                  key={index}
                  card_color={
                    section_color == color_palette[0]
                      ? color_palette[1]
                      : color_palette[0]
                  }
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export { Community };
export type { CommunityPost };
