import "./styles/featured-partners.css";
import partnersIcon from "../../assets/partner-logo.svg";
import { Section } from "../shared/section";

interface PartnerProps {
    partnerName: string,
    partnerImage: {src: string}
}

/** Partner: defines a component to display a partner. **/
const Partner = ({partnerName, partnerImage}: PartnerProps) => {
    return (
        <div className="partner">
            <div className="partner-image">
                <img className="partner-image-image" src={partnerImage.src} />
            </div>
            <span className="partner-name">
                {partnerName}
            </span>
        </div>
    )
}


/** FeaturedPartners: defines the Featured Partners section **/
const FeaturedPartners = () => {
    return (
        <div className="featured-partners-section">
            <Section 
                sectionTitle="Featured Partners"
                sectionDescript="Trusted by the world’s leading universities and research institutes"
                sectionGap={2.5}
                sectionPaddingBot={6}
                backgroundColor="white"
                moreButton={false}
                body={
                    <div className="partners-cont">
                        <div className="partners-row">
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                            
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                        </div>

                        <div className="partners-row">
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={partnersIcon}
                            />
                        </div>
                    </div>
                }
                />
        </div>
    )
}

export { FeaturedPartners }


