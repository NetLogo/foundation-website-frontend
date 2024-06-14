import { useEffect, useState } from 'react';
import { Header } from "./Header";
import { Announcement } from "./Announcement";
import type { AnnouncementObj } from "./Announcement";
import { endpoint } from "./endpoint";
import { Intro } from "./Intro";
import { News } from "./News";
import "./componentCSS/Body.css";

interface BodyProps {
    announcement?: AnnouncementObj
}

function Body({announcement} : BodyProps) {
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
            <News/>
        </div>
    )
}

export { Body };
