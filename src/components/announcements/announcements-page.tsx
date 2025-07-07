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
    <div className="container py-5 text-start font-inter">
      <h1 className="mb-4 fw-bold">Announcements</h1>

      {AnnouncementData.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        <div className="row gy-5">
          {AnnouncementData.map((announcement) => (
            <div key={announcement.id} className="col-12">
              <div className="border-bottom pb-4">
                <h2 className="fs-3 fw-semibold">{announcement.title}</h2>
                <p className="fs-5 text-muted mb-2">
                  {new Date(announcement.date + 'T00:00:00Z').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                  })}
                </p>
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
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export { AnnouncementsSection };