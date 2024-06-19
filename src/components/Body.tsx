import { useState } from 'react';
import { Header } from "./Header";
import { Announcement } from "./Announcement";
import type { AnnouncementObj } from "./Announcement";
import { Intro } from "./Intro";
import { News } from "./News";
import type { Event } from "./EventsDisplay";
import "./componentCSS/Body.css";

interface BodyProps {
    announcement?: AnnouncementObj
    upcomingEvents: Event[];
    competitions: Event[];
    upcomingWorkshops: Event[];
    publications: Event[];
}

function Body({announcement, upcomingEvents, upcomingWorkshops, competitions, publications} : BodyProps) {
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
            <News upcomingEvents={upcomingEvents}
            upcomingWorkshops={upcomingWorkshops}
            competitions={competitions}
            publications={publications}/>
        </div>
    )
}

export { Body };
