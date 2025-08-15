import { useState, useRef } from "react";
import { Announcement } from "../layout/announcement";
import { Intro } from "./introduction";
import { WhyNetLogo } from "./why-netlogo";
import { Newsfeed } from "./newsfeed";
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
  siteData,
}: BodyProps) {
  const {
    introduction,
    intro_splash,
    why_netlogo,
    get_netlogo,
    featured_partners,
    community,
    announcement,
  } = siteData;

  const color_palette = ["#F2F2F2", "white"];

  const [showAnnouncement, setShowAnnouncement] = useState(!!announcement);
  return (
    <div className="body">
      {showAnnouncement && (
        <Announcement
          announcement={announcement}
          setShowAnnouncement={setShowAnnouncement}
        />
      )}

      <Intro intro_data={introduction} intro_splash_data={intro_splash} />
      {/* <WhyNetLogo page_data={why_netlogo} /> */}
      <Newsfeed />
      <GetNetLogo page_data={get_netlogo} section_color={color_palette[0]} />
      <Community
        communityPosts={communityContent}
        page_data={community}
        section_color={color_palette[1]}
      />

      {/* <FeaturedPartners featured_partners={featured_partners} /> */}
      {/* <MailingList /> */}
    </div>
  );
}

export { Body };
