import { EventsDisplay } from './event-display';
import type { Event } from './event-display';
import { Section } from "../shared/section";
import './styles/news.css';

interface NewsProps {
    upcomingEvents: Event[];
    competitions: Event[];
    upcomingWorkshops: Event[];
    publications: Event[];
}

const News = ( {upcomingEvents, competitions, upcomingWorkshops, publications} : NewsProps ) => {
    return (
        <div className="news-section">
            <Section
                sectionTitle="News"
                sectionDescript="Learn about latest news and upcoming events in NetLogo community."
                sectionGap={2.5}
                sectionPaddingBot={2.5}
                backgroundColor="#F2F2F5"
                moreButton={true}
                body = {
                    <div className="news-event-cont">
                         <div className="news-event-inner-cont"> 
                             <EventsDisplay title="Upcoming Events" events={upcomingEvents}/>
                             <EventsDisplay title="Competitions" events={competitions}/>
                         </div>
                         <div className="news-event-inner-cont">
                             <EventsDisplay title="Upcoming Workshops" events={upcomingWorkshops}/>
                             <EventsDisplay title="Publications" events={publications}/>
                         </div>
                     </div> }/>
        </div>
    );
};

export { News };

