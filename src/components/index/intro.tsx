import { IntroAnimation } from "./intro-splash";
import { Button } from "../shared/button";
import "./styles/intro.css";
import type { Introduction } from "../../utils/api";

interface IntroProps {
  intro_data: Introduction;
  getNetLogoSection: React.RefObject<HTMLDivElement>;

}

const Intro: React.FC<IntroProps> = ({ intro_data, getNetLogoSection }) => {
  const scrollToGetNetLogo = () => {
    getNetLogoSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { title, description } = intro_data;

  return (
    <div className="intro">
      <div className="intro-title-text-cont">
        <div className="intro-title">
          <p>
            {title}
          </p>
        </div>
        <div className="intro-text">
          <p>
            {description}
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
