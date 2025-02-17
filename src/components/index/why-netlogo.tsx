import "./styles/why-netlogo.css";
import { Section } from "../shared/section";
import { type WhyNetLogoEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";

/** Inner component for X tab **/
interface ForCardProps {
  title: string;
  content: string;
  imageKey: string;
}

const ForCard = ({ title, content, imageKey }: ForCardProps) => {
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="for-tab-inner">
      <div className="for-tab-content">
        <div className="for-tab-title-cont">
          <div className="for-tab-icon">
            <img
              className="for-tab-icon-image"
              src={`${backend_url}/assets/${imageKey}`}
              alt={`${title} icon`}
            />
          </div>
          <span className="for-tab-title">{title}</span>
        </div>
        <ReactMarkdown className="for-tab-text">{content}</ReactMarkdown>
      </div>
    </div>
  );
};

interface WhyNetLogoProps {
  page_data: WhyNetLogoEntry[];
}

const WhyNetLogo = ({ page_data }: WhyNetLogoProps) => {
  return (
    <div className="why-section">
      <Section
        sectionTitle="Why NetLogo?"
        sectionDescript="NetLogo powers everyone to learn and create."
        sectionGap={1.88}
        sectionPaddingBot={7.5}
        backgroundColor="#F2F2F5"
        moreButton={false}
        body={
          <div className="why-netlogo-content">
            {page_data.map((entry, index) => (
              <ForCard
                key={index}
                title={entry.title}
                content={entry.content}
                imageKey={entry.icon.id}
              />
            ))}
          </div>
        }
      />
    </div>
  );
};

export { WhyNetLogo };
