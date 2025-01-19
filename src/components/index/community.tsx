import { useState, useEffect } from "react";
import "./styles/community.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import communityIcon from "../../assets/community-icon.svg";
import { links } from "../../utils/links.js";
import forumIcon from "../../assets/netlogo-forum.png";
import googleGroupIcon from "../../assets/google-group.png";
import modelingCommonsIcon from "../../assets/modeling-commons.png";

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

interface communityCard {
  title: string;
  description : string;
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

const communityLinks = links.Footer["Community"] as { [key: string]: string };

const communityCardData: Array<communityCard> = [
  {
    title: "NetLogo Forum",
    description: "The NetLogo Forum provides a place for the NetLogo community to ask and answer questions, share resources and more.",
    link: communityLinks["NetLogo Forum"],
    icon: forumIcon.src,
    bordered: false
  },
  {
    title: "NetLogo Google Group",
    description: "The netlogo-users google group is a mailing list where NetLogo users can ask and answer questions. ",
    link: communityLinks["NetLogo Google Group"],
    icon: googleGroupIcon.src,
    bordered: true
  },
  {
    title: "Modeling Commons",
    description: "NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science.",
    link: communityLinks["Modeling Commons"],
    icon: modelingCommonsIcon.src,
    bordered: false
  },
]

const CommunityCard = ({ link, title, description, icon, bordered }: communityCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const imageClass = "community-item-img" + (bordered ? " bordered" : "");

  return (
    <div className="community-item">
      <div className="community-item-header">
        <img className={imageClass} src={icon} />
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
const Community = ({ communityPosts }: communityProps) => {
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
              className="community-netlogo-content"
            >
              {communityCardData.map((card: communityCard, index: number) => ( <CommunityCard title={card.title} link={card.link} description={card.description} icon={card.icon} bordered={card.bordered} />))}
              {/* <CommunityCard
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
              /> */}
            </div>
          </div>
        }
      />
    </div>
  );
};

export { Community };
export type { CommunityPost };
