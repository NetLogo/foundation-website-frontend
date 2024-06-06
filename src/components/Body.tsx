import React, { useEffect, useState } from 'react';
import { Header } from "./Header";
import { Announcement, AnnouncementObj } from "./Announcement";
import { endpoint } from "./endpoint";
import { Intro } from "./Intro";
import "./componentCSS/Body.css";

function Body() {
    const [announcementObj, setAnnouncementObj] = useState<AnnouncementObj | null>(null);
    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const [show2, setshow2] = useState(true);
    useEffect(() => {
        // fetchAnnouncement: fetches the announcement
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch(endpoint + "/items/announcements");
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
        </div>
    )
}

export { Body };
