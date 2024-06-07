import React, { useEffect, useState } from 'react';
import { Header } from "./Header";
import { Announcement } from "./Announcement";
import type { AnnouncementObj } from "./Announcement";
import { endpoint } from "./endpoint";
import { Intro } from "./Intro";
import { News } from "./News";
import "./componentCSS/Body.css";

function Body() {
    const [announcementObj, setAnnouncementObj] = useState<AnnouncementObj | null>(null);
    const [showAnnouncement, setShowAnnouncement] = useState(false);
    useEffect(() => {
        // fetchAnnouncement: fetches the announcement
        const fetchAnnouncement = async () => {
            try {
                const url = endpoint + "/items/announcements";
                const response = await fetch(url);
                const data = await response.json();
                if (!response.ok) {
                    return; 
                }
             
                const responseData = await data;
                if(responseData.data.length != 0) {
                   setAnnouncementObj(responseData.data[0]);
                   setShowAnnouncement(true);
                }
            } catch (error) {
                console.log(error);
            }
        }

            
        fetchAnnouncement();
    }, []);

    return (
        <div className="body">
            <Header/>
            { (announcementObj && showAnnouncement) && <Announcement title={announcementObj.title} content={announcementObj.content} setShowAnnouncement={setShowAnnouncement} />}
            <Intro/>
            <News/>
        </div>
    )
}

export { Body };
