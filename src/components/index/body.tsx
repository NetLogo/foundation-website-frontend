import { useState, useRef } from "react";
import { Header } from "../layout/header";
import { Announcement } from "../layout/announcement";
import { Intro } from "./intro";
import { News } from "./news";
import { WhyNetLogo } from "./why-netlogo";
import { GetNetLogo } from "./get-netlogo";
import { Community } from "./community";
import { FeaturedPartners } from "./featured-partners";
import { MailingList } from "../shared/mailing-list";
import { Footer } from "../layout/footer";
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
    announcement,
    navigation_sections
  } = siteData;

  console.log("siteData", siteData);

  const [showAnnouncement, setShowAnnouncement] = useState(!!announcement);

  const getNetLogoSection = useRef<HTMLDivElement | null>(null);

  return (
    <div className="body">
      <Header navigation_sections = {navigation_sections}/>

      {showAnnouncement && (
        <Announcement
          announcement={announcement}
          setShowAnnouncement={setShowAnnouncement}
        />
      )}

      <Intro
        intro_data={introduction}
        intro_splash_data={intro_splash}
        getNetLogoSection={getNetLogoSection}
      />
      <WhyNetLogo page_data={why_netlogo} />
      <GetNetLogo page_data={get_netlogo} sectionRef={getNetLogoSection} />
      <Community communityPosts={communityContent} page_data={community} />
      <FeaturedPartners featured_partners={featured_partners} />

      {/* <News upcomingEvents={upcomingEvents}
            upcomingWorkshops={upcomingWorkshops}
            competitions={competitions}
            publications={publications}/> */}

      <MailingList />
      <Footer getNetLogoSection={getNetLogoSection} />
    </div>
  );
}

export { Body };
