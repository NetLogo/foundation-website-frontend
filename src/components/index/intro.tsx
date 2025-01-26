import { IntroAnimation } from "./intro-splash";
import { Button } from "../shared/button";
import "./styles/intro.css";
import type { Introduction, IntroSplashEntry } from "../../utils/api";


interface IntroProps {
  intro_data: Introduction;
  intro_splash_data: IntroSplashEntry[];
  getNetLogoSection: React.RefObject<HTMLDivElement>;
}

const Intro= ({
  intro_data,
  intro_splash_data,
  getNetLogoSection,
}:IntroProps) => {
  const scrollToGetNetLogo = () => {
    getNetLogoSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  // React Hooks useEffect, useRef, useState
  //useEffect( () => {}, [])
//rendering any component, useEffect runs before display the component

  const { title, description } = intro_data;

  return (
    <div className="intro">
      <div className="intro-title-text-cont">
        <div className="intro-title">
          <p>{title}</p>
        </div>
        <div className="intro-text">
          <p>{description}</p>
        </div>
      </div>
      <IntroAnimation page_data={intro_splash_data} />
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
