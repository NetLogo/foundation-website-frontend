import "./componentCSS/FeaturedPartners.css";
import getNetLogo from "../assets/get-netlogo.svg";
import { Section } from "./Section";

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
                sectionPaddingBot={3.75}
                backgroundColor="white"
                borderRadius={0}
                moreButton={false}
                body={
                    <div className="partners-cont">
                        <div className="partners-row">
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                            
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                        </div>

                        <div className="partners-row">
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                            <Partner
                            partnerName="Partner Name"
                            partnerImage={getNetLogo}
                            />
                        </div>
                    </div>
                }
                />
        </div>
    )
}

export { FeaturedPartners }


