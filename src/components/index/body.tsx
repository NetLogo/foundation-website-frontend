import { useState } from 'react';
import { Header } from "../layout/header";
import { Announcement } from "../layout/announcement";
import type { AnnouncementObj } from "../layout/announcement";
import { Intro } from "./intro";
import { News } from "./news";
import { WhyNetLogo } from "./why-netlogo";
import { GetNetLogo } from "./get-netlogo";
import { Community } from "./community";
import { FeaturedPartners } from "./featured-partners";
import { MailingList } from "../shared/mailing-list";
import { Footer } from "../layout/footer";
import type { CommunityPost } from "./community";
import type { Event } from "./event-display";
import "./styles/body.css";

interface BodyProps {
    announcement?: AnnouncementObj
    upcomingEvents: Event[];
    competitions: Event[];
    upcomingWorkshops: Event[];
    publications: Event[];
    communityContent: CommunityPost[];
}

function Body({announcement, upcomingEvents, upcomingWorkshops, competitions, publications, communityContent} : BodyProps) {
    const [showAnnouncement, setShowAnnouncement] = useState(!!announcement);
    return (
        <div className="body">
            <Header/>
            {/* display announcement only if there is one */}
            { showAnnouncement && announcement && ( 
                <Announcement 
                announcement={announcement}
                setShowAnnouncement={setShowAnnouncement}
                />
            )}
            <Intro/>
            <WhyNetLogo/>
            <GetNetLogo/>
            <Community
            communityPosts={communityContent}/>
            <News upcomingEvents={upcomingEvents}
            upcomingWorkshops={upcomingWorkshops}
            competitions={competitions}
            publications={publications}/>
            <FeaturedPartners/>
            <MailingList/>
            <Footer/>
        </div>
    )
}

export { Body };
