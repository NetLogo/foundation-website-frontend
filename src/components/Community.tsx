import "./componentCSS/Community.css";
import { Section } from "./Section";
import { Button } from "./Button";
import communityIcon from "../assets/community-icon.svg";

interface CommunityPost {
    title: string,
    username: string,
    date: string,
    link: string
}

interface communityProps {
    communityPosts: CommunityPost[]
}

/** Community: defines the Community section in the landing page **/
const Community = ({communityPosts}: communityProps ) => {
    return(
        <div className="community-section">
            <Section 
                sectionTitle="Community"
                sectionDescript="Join NetLogo community and start contributing today."
                sectionGap={1.88}
                sectionPaddingBot={3.75}
                backgroundColor="#F2F2F5"
                borderRadius={0}
                moreButton={false}
                body={
                  <div className="community-content">
                        <div className="preview-content">
                            <div className="preview-display">
                            </div>
                            <Button
                                colorClass="blue-button"
                                padding="1rem 3rem"
                                fontSize="1.125rem"
                                text="JOIN DISCOURSE"
                                style={{ alignSelf: 'stretch' }} // make it grow to the full size
                            />
                        </div>
                        <div className="community-models">
                            {communityPosts.map((post: CommunityPost, index: number) => (
                                <div className="community-post-cont" key={index}>
                                    <div className="community-post-icon">
                                        <img src={communityIcon.src} className="community-post-icon-image"/>
                                    </div>
                                    <div className="community-post-descript">
                                        <div className="community-post-user-date-cont">
                                            <span> {post.username} </span>
                                            <span> {post.date} </span>
                                        </div>
                                        <span className="community-post-title"> {post.title} </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }/>
        </div> 
    )
}

export { Community };
export type { CommunityPost };
