import { useState, useRef } from "react";
import { Announcement } from "../layout/announcement";
import { Intro } from "./introduction";
import { WhyNetLogo } from "./why-netlogo";
import { GetNetLogo } from "./get-netlogo";
import { Community } from "./community";
import { FeaturedPartners } from "./featured-partners";
import { MailingList } from "../shared/mailing-list";
import type { CommunityPost } from "./community";
import type { Event } from "./event-display";
import "./styles/body.css";

import { type AllData } from "../../utils/api";

interface BodyProps {
  upcomingEvents: Event[];
  competitions: Event[];
  upcomingWorkshops: Event[];
  publications: Event[];
  communityContent: CommunityPost[];
  siteData: AllData;
}

function Body({
  upcomingEvents,
  upcomingWorkshops,
  competitions,
  publications,
  communityContent,
  siteData
}: BodyProps) {
  const {
    introduction,
    intro_splash,
    why_netlogo,
    get_netlogo,
    featured_partners,
    community,
    announcement
  } = siteData;

  const [showAnnouncement, setShowAnnouncement] = useState(!!announcement);

  const getNetLogoSection = useRef<HTMLDivElement | null>(null);

  return (
    <div className="body">

      {showAnnouncement && ( 
        
        <Announcement
          announcement={announcement}
          setShowAnnouncement={setShowAnnouncement}
        />
      )}

      <Intro
        intro_data={introduction}
        intro_splash_data={intro_splash}
      />
      <WhyNetLogo page_data={why_netlogo} />
      <GetNetLogo page_data={get_netlogo} />
      <Community communityPosts={communityContent} page_data={community} />
      <FeaturedPartners featured_partners={featured_partners} />

      {/* <News upcomingEvents={upcomingEvents}
            upcomingWorkshops={upcomingWorkshops}
            competitions={competitions}
            publications={publications}/> */}

      <MailingList />
    </div>
  );
}

export { Body };
