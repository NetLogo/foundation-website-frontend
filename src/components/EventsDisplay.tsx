import { useState } from 'react';
import './componentCSS/EventsDisplay.css';
import dropDownDown from "./../assets/news-dropdown.svg";
import dropDownUp from "./../assets/news-dropdown-up.svg";

interface Event {
    id: number,
    event_title: string,
    date: string
}

interface EventsDisplayProps {
    title: string, 
    events: Event[],
}

const EventsDisplay = ({ title, events }: EventsDisplayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function formatDate(date: string): string {
      const dateComponents = date.split("-");
      // return as MM/DD/YYYY
      return `${dateComponents[1]}/${dateComponents[2]}/${dateComponents[0]}`;
  }

  return (
    <div className="event-display-cont">
      <div
        className={isOpen && events.length > 0 ? "event-display-header event-display-opened" : "event-display-header"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="event-display-title">{title}</span>
        <img src={isOpen ? dropDownUp.src : dropDownDown.src} alt="dropdown icon" />
      </div>
      {isOpen && events.length > 0 && (
        <div>
          {events.map((event: Event, index: number) => (
            <div className="event-cont" key={index}>
              <span className="event-date">{formatDate(event.date)}</span>
              <span className="event-title">{event.event_title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export { EventsDisplay };
export type { Event };
