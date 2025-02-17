import { IntroAnimation } from "./intro-splash";
import { Button } from "../shared/button";
import "./styles/intro.css";
import type { Introduction, IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from 'react-markdown';

interface IntroProps {
  intro_data: Introduction;
  intro_splash_data: IntroSplashEntry[];
}

const Intro= ({
  intro_data,
  intro_splash_data
}:IntroProps) => {
  const scrollToGetNetLogo = () => {
    // If we're on the home page
    if (window.location.pathname === '/foundation-website-frontend/') {
      const getNetLogoSection = document.querySelector('.get-section');
      if (getNetLogoSection) {
        getNetLogoSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and add a hash
      window.location.href = '/foundation-website-frontend/#get-netlogo';
    }
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
          <ReactMarkdown>{description}</ReactMarkdown>
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
