import "./styles/featured-partners.css";
import partnersIcon from "../../assets/partner-logo.svg";
import { Section } from "../shared/section";
import type { PartnerEntry } from "../../utils/api.js";

interface PartnerProps {
  partnerName: string;
  partnerImage: string;
}
interface FeaturePartnerProps {
  featured_partners: PartnerEntry[];
}

/** Partner: defines a component to display a partner. **/
const Partner = ({ partnerName, partnerImage }: PartnerProps) => {
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="partner">
      <div className="partner-image">
        <img
          className="partner-image-image"
          src={`${backend_url}/assets/${partnerImage}`}
        />
      </div>
      <span className="partner-name">{partnerName}</span>
    </div>
  );
};

/** FeaturedPartners: defines the Featured Partners section **/
const FeaturedPartners = ({ featured_partners }: FeaturePartnerProps) => {
  return (
    <div className="featured-partners-section">
      <Section
        sectionTitle="Featured Partners"
        sectionDescript="Trusted by the world's leading universities and research institutes"
        sectionGap={2.5}
        sectionPaddingBot={6}
        backgroundColor="white"
        moreButton={false}
        body={
          <div className="partners-cont">
            <div className="partners-row">
              {featured_partners.map((card: PartnerEntry, index: number) => (
                <Partner
                  partnerName={card.partner_name}
                  partnerImage={card.partner_image.id}
                  key={index}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export { FeaturedPartners };
