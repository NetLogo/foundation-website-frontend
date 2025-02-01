import "./styles/announcement.css";
import { Button } from "../shared/button";

// Announcement: component to display a component, if it exists 

interface AnnouncementObj {
    id: number,
    title: string,
    content: string,
}

interface AnnouncementProps {
    announcement: AnnouncementObj,
    setShowAnnouncement: Function,
}

const Announcement = ({ announcement, setShowAnnouncement } : AnnouncementProps ) => {
    console.log("announcement", announcement);
    return (
        <div className="aCont">
            <div className="aTextButtonCont"> 
                <div className="aTextCont">
                    <span className="aTitle"> {announcement.title} </span>
                    <span className="aContent"> {announcement.content} </span>
                </div>
                <div className="a-button-cont">
                    <Button 
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="LEARN MORE"/>

                    <Button
                    colorClass="light-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="CLOSE"
                    onClick={() => setShowAnnouncement(false)}/>
                </div>
            </div>
            
        </div>
    );
}

export { Announcement };
export type { AnnouncementObj };
