import { EventsDisplay } from './EventsDisplay';
import type { Event } from './EventsDisplay';
import './componentCSS/News.css';

interface NewsProps {
    upcomingEvents: Event[];
    competitions: Event[];
    upcomingWorkshops: Event[];
    publications: Event[];
}

const News = ( {upcomingEvents, competitions, upcomingWorkshops, publications} : NewsProps ) => {
    return (
        <div className="news">
            <div className="news-title-text-cont">
                <span className="section-title"> News </span>
                <span className="section-text"> Learn about latest news and upcoming events in NetLogo community. </span>
            </div>

            <div className="news-event-cont">
                <div className="news-event-inner-cont"> 
                    <EventsDisplay title="Upcoming Events" events={upcomingEvents}/>
                    <EventsDisplay title="Competitions" events={competitions}/>
                </div>
                <div className="news-event-inner-cont">
                    <EventsDisplay title="Upcoming Workshops" events={upcomingWorkshops}/>
                    <EventsDisplay title="Publications" events={publications}/>
                </div>
            </div>
        </div>
    );
};

export { News };

