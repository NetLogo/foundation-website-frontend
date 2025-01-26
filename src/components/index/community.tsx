import { useState, useEffect } from "react";
import "./styles/community.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import communityIcon from "../../assets/community-icon.svg";
import { links } from "../../utils/links.js";
import forumIcon from "../../assets/netlogo-forum.png";
import googleGroupIcon from "../../assets/google-group.png";
import modelingCommonsIcon from "../../assets/modeling-commons.png";
import type { CommunityEntry } from "../../utils/api.js";

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
}

interface communityCard {
  title: string;
  description: string;
  link: string;
  icon: string;
  bordered: boolean;
}

interface communityCardProps {
  title: string;
  link: string;
  description: string;
  icon: string;
  bordered: boolean;
}

const CommunityCard = ({
  link,
  title,
  description,
  icon,
  bordered,
}: communityCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const imageClass = "community-item-img" + (bordered ? " bordered" : "");

  return (
    <div className="community-item">
      <div className="community-item-header">
        <img
          className={imageClass}
          src={`https://backend.netlogo.org/assets/${icon}`}
        />
        <span className="community-item-title"> {title} </span>
      </div>
      <span className="community-item-descript"> {description} </span>
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
const Community = ({ communityPosts, page_data }: communityProps) => {
  // Initialize previewImage with the first image if available
  const [previewImage, setPreviewImage] = useState<string | null>(
    communityPosts.length > 0 ? communityPosts[0].image : null
  );
  return (
    <div className="community-section">
      <Section
        sectionTitle="Community"
        sectionDescript="Join NetLogo community and start contributing today."
        sectionGap={1.88}
        sectionPaddingBot={3.75}
        backgroundColor="#F2F2F5"
        moreButton={false}
        body={
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2%",
              }}
              className="community-netlogo-content"
            >
              {page_data.map((card: CommunityEntry, index: number) => (
                <CommunityCard
                  title={card.Title}
                  link={card.Link}
                  description={card.Description}
                  icon={card.Icon}
                  bordered={card.Bordered}
                  key={index}
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
