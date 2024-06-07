import React, { useEffect } from "react";
import "./componentCSS/Announcement.css"

//Announcement: component to display a component, if it exists 

interface AnnouncementObj {
    title: string;
    content: string;
    setShowAnnouncement: Function 
}

const Announcement = ({ title, content, setShowAnnouncement}: AnnouncementObj) => {
    return (
        <div className="aCont">
            <div className="aTextButtonCont"> 
                <div className="aTextCont">
                    <span className="aTitle"> {title} </span>
                    <span className="aContent"> {content} </span>
                </div>
                <div className="a-button-cont">
                    <button className="a-learn-button a-button"> LEARN MORE </button>
                    <button className="a-close-button a-button" onClick={() => setShowAnnouncement(false)}> CLOSE </button>
                </div>
            </div>
            
        </div>
    );
}

export { Announcement };
export type { AnnouncementObj };
