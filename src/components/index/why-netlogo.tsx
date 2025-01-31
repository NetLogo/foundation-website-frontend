import "./styles/why-netlogo.css";
import { Section } from "../shared/section";
import { Button } from "../shared/button";
import student from "../../assets/students_icon.svg";
import researcher from "../../assets/research_icon.svg";
import educator from "../../assets/educators_icon.svg";

/** Inner component for X tab **/
interface ForTabProps {
  title: string;
  content: string;
  imagePath: { src: string };
}

const ForTab = ({ title, content, imagePath }: ForTabProps) => {
  return (
    <div className="for-tab-inner">
      <div className="for-tab-content">
        <div className="for-tab-title-cont">
          <div className="for-tab-icon">
            <img
              className="for-tab-icon-image"
              src={imagePath.src}
              alt={`${title} icon`}
            />
          </div>
          <span className="for-tab-title">{title}</span>
        </div>
        <span className="for-tab-text">{content}</span>
      </div>
    </div>
  );
};

const WhyNetLogo = () => {
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
            <ForTab
              title="For Students"
              content="NetLogo provides students with many pre-made models of scientific phenomena they can explore. For those who want to learn to program or create models themselves, NetLogo is very easy to get started with."
              imagePath={student}
            />
            <ForTab
              title="For Researchers"
              content="NetLogo is easy to learn but still very powerful. It is has been used in over 20,000 scientific publications in fields including sociology, ecology, cognitive science, business, and more."
              imagePath={researcher}
            />
            <ForTab
              title="For Educators"
              content="NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science."
              imagePath={educator}
            />
          </div>
        }
      />
    </div>
  );
};

export { WhyNetLogo };
