import { useState, useEffect } from "react";
import "./styles/community.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import communityIcon from "../../assets/community-icon.svg";
import { links } from "../../utils/links.js";

interface CommunityPost {
  project: string;
  author: string;
  link: string;
  image: string;
  date: string;
}

interface communityProps {
  communityPosts: CommunityPost[];
}

interface communityCardProps {
  title: string;
  link: string;
}

const CommunityCard = ({ link, title }: communityCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="get-item" style={{ backgroundColor: "white" }}>
      <span className="get-item-title"> {title} </span>
      <div className="get-item-header">
        <Button
          colorClass="blue-button"
          padding="0.75rem 1.5rem"
          fontSize="0.875rem"
          text="GO"
          onClick={() => pageRedirect(link)}
        />
      </div>
    </div>
  );
};

/** Community: defines the Community section in the landing page **/
const Community = ({ communityPosts }: communityProps) => {
  // Initialize previewImage with the first image if available
  const [previewImage, setPreviewImage] = useState<string | null>(
    communityPosts.length > 0 ? communityPosts[0].image : null
  );

  const communityLinks = links.Body["Community"];

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
          //   <div className="community-content">
          //         <div className="preview-content">
          //             <div className="preview-display">
          //                 {previewImage ? <img className="community-preview-image" src={previewImage} alt="Preview" /> : 'No preview available'}
          //             </div>
          //             <Button
          //                 colorClass="blue-button"
          //                 padding="1rem 3rem"
          //                 fontSize="1.125rem"
          //                 text="JOIN DISCOURSE"
          //                 style={{ alignSelf: 'stretch' }} // make it grow to the full size
          //             />
          //         </div>
          //         <div className="community-models">
          //             {communityPosts.map((post: CommunityPost, index: number) => (
          //                 <div
          //                     className="community-post-cont"
          //                     key={index}
          //                     onClick={() => setPreviewImage(post.image)}
          //                 >
          //                     <div className="community-post-icon">
          //                         <img src={communityIcon.src} className="community-post-icon-image"/>
          //                     </div>
          //                     <div className="community-post-descript">
          //                         <div className="community-post-user-date-cont">
          //                             <span> {post.author} </span>
          //                             <span> {post.date} </span>
          //                         </div>
          //                         <span className="community-post-title"> {"New model: "}
          //                             <a href={post.link} className="community-post-link">{post.project}</a>
          //                         </span> </div>
          //                 </div>
          //             ))}
          //         </div>
          //     </div>
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2%",
              }}
              className="get-netlogo-content"
            >
              <CommunityCard
                title="NetLogo Forum"
                link={communityLinks["NetLogo Forum"]}
              />
              <CommunityCard
                title="NetLogo Google Group"
                link={communityLinks["NetLogo Google Group"]}
              />
              <CommunityCard
                title="Modeling Commons"
                link={communityLinks["Modeling Commons"]}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export { Community };
export type { CommunityPost };
