import { useState, useEffect } from 'react';
import "./styles/community.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import communityIcon from "../../assets/community-icon.svg";

interface CommunityPost {
    project: string,
    author: string,
    link: string,
    image: string,
    date: string,
}

interface communityProps {
    communityPosts: CommunityPost[]
}

/** Community: defines the Community section in the landing page **/
const Community = ({ communityPosts }: communityProps ) => {
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
                borderRadius={0}
                moreButton={false}
                body={
                  <div className="community-content">
                        <div className="preview-content">
                            <div className="preview-display">
                                {previewImage ? <img className="community-preview-image" src={previewImage} alt="Preview" /> : 'No preview available'}
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
                                <div 
                                    className="community-post-cont" 
                                    key={index} 
                                    onClick={() => setPreviewImage(post.image)}
                                >
                                    <div className="community-post-icon">
                                        <img src={communityIcon.src} className="community-post-icon-image"/>
                                    </div>
                                    <div className="community-post-descript">
                                        <div className="community-post-user-date-cont">
                                            <span> {post.author} </span>
                                            <span> {post.date} </span>
                                        </div>
                                        <span className="community-post-title"> New model:&nbsp;
                                            <a href={post.link} className="community-post-link">{post.project}</a>
                                        </span> </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />
        </div> 
    );
}

export { Community };
export type { CommunityPost };
