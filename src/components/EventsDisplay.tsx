import React, { useState } from 'react';
import './componentCSS/EventsDisplay.css';
import dropDownDown from "./../assets/news-dropdown.svg";
import dropDownUp from "./../assets/news-dropdown-up.svg";

const EventsDisplay = ({ title = "Upcoming Events", events = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="event-display" onClick={() => setIsOpen(!isOpen)}>
            <span className="event-title"> {title} </span>
            <img src={isOpen ? dropDownUp.src : dropDownDown.src} alt="dropdown icon" />
            
            {events.length > 0 && (
                <div className="event-display-event">
                </div>
            )}
        </div>
    );
}

export { EventsDisplay };

