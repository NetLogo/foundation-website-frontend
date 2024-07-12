import { useState } from 'react';
import { Header } from "./Header";
import { Announcement } from "./Announcement";
import type { AnnouncementObj } from "./Announcement";
import { Intro } from "./Intro";
import { News } from "./News";
import { WhyNetLogo } from "./WhyNetLogo";
import { Button } from "./Button";
import { GetNetLogo } from "./GetNetLogo";
import { Community } from "./Community";
import { FeaturedPartners } from "./FeaturedPartners";
import { MailingList } from "./MailingList";
import { Footer } from "./Footer";
import type { CommunityPost } from "./Community";
import type { Event } from "./EventsDisplay";
import "./componentCSS/Body.css";

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
