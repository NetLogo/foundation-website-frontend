import { IntroAnimation } from "./intro-splash";
import { Button } from "../shared/button";
import "./styles/intro.css";

interface IntroProps {
  getNetLogoSection: React.RefObject<HTMLDivElement>;
}

const Intro: React.FC<IntroProps> = ({ getNetLogoSection }) => {
  const scrollToGetNetLogo = () => {
    getNetLogoSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="intro">
      <div className="intro-title-text-cont">
        <div className="intro-title">
          <p>
            Understanding Complex Systems with{"\n"}
            Agent-Based Modeling
          </p>
        </div>
        <div className="intro-text">
          <p>
          Agent-based modeling (ABM) is a powerful tool for understanding complex 
          systems in which large-scale patterns emerge from the interactions of many simple parts.
          NetLogo is an ABM environment with a "low threshold" for learning yet "high ceiling" capabilities. 
          This combination is why NetLogo is used widely both in educational settings and by professional scientists 
          doing cutting edge research.{"\n"}
          </p>
        </div>
      </div>
      <IntroAnimation />
      <div className="intro-btn-cont">
        <Button
          colorClass="blue-button"
          padding="1rem 3rem"
          fontSize="1.125rem"
          text="GET NETLOGO"
          onClick={scrollToGetNetLogo}
        />
        {/* <Button
                colorClass="light-button"
                padding="1rem 3rem"
                fontSize="1.125rem"
                text="LEARN MORE"/> */}
      </div>
    </div>
  );
};

export { Intro };
