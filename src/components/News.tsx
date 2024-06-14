import React, { useState, useEffect } from 'react';
import { EventsDisplay } from './EventsDisplay';
import './componentCSS/News.css';

const News = () => {
    return (
        <div className="news">
            <div className="news-title-text-cont">
                <span className="news-title"> News </span>
                <span className="news-text"> Learn about latest news and upcoming events in NetLogo community. </span>
            </div>

            <div className="news-event-cont">
                <div className="news-event-inner-cont">
                    <EventsDisplay title="Upcoming Events"/>
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

