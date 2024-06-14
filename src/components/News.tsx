import React, { useState, useEffect } from 'react';
import { EventsDisplay } from './EventsDisplay';
import './componentCSS/News.css';

const News = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            try {
                const response = await fetch('http://localhost:8055/items/upcomingEvents');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error('Failed to fetch upcoming events');
                }

                console.log(data); // Log the fetched data
                setUpcomingEvents(data.data);
            } catch (error) {
                console.error('Error fetching upcoming events:', error);
            }
        };

        fetchUpcomingEvents();
    }, []);

    return (
        <div className="news">
            <div className="news-title-text-cont">
                <span className="news-title"> News </span>
                <span className="news-text"> Learn about latest news and upcoming events in NetLogo community. </span>
            </div>

            <div className="news-event-cont">
                <div className="news-event-inner-cont">
                    <EventsDisplay title="Upcoming Events" events={upcomingEvents} />
                    <EventsDisplay title="Competitions" />
                </div>

                <div className="news-event-inner-cont">
                    <EventsDisplay title="Upcoming Workshops" />
                    <EventsDisplay title="Publications" />
                </div>
            </div>
        </div>
    );
};

export { News };

