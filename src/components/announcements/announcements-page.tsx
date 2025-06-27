import React from "react";
import ReactMarkdown from 'react-markdown';
import "./AnnouncementsSection.css";

interface AnnouncementItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface AnnouncementSectionProps {
  AnnouncementData: AnnouncementItem[];
}


const AnnouncementsSection = ({ AnnouncementData }: AnnouncementSectionProps) => {
    console.log("Checking Announcements:", AnnouncementData[0]);
    return (
        <div className="contacts-container">
            <h1>Announcements</h1>
            
            {AnnouncementData.length === 0 ? (
                <p>No announcements available.</p>
            ) : (
                <div className="announcements-list">
                {AnnouncementData.map((announcement, index) => (
                    <div key={index} className="announcement-item">
                        <h2>{announcement.title}</h2>
                        <div className="announcement-date">
                            {new Date(announcement.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                            })}
                        </div>
                        <ReactMarkdown
                            className="announcement-content"
                            components={{
                                a: ({ node, ...props }) => (
                                <a target="_blank" rel="noopener noreferrer" {...props} />
                                ),
                            }}
                            >
                            {announcement.content}
                        </ReactMarkdown>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export { AnnouncementsSection };