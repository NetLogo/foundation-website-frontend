import "./componentCSS/Announcement.css"

//Announcement: component to display a component, if it exists 

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
    return (
        <div className="aCont">
            <div className="aTextButtonCont"> 
                <div className="aTextCont">
                    <span className="aTitle"> {announcement.title} </span>
                    <span className="aContent"> {announcement.content} </span>
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
