import React from "react";
import type { Introduction, IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { Button } from "../shared/button";
import {FeaturesSection} from "./featured-section";
import LogoText from "../../assets/logo-text.svg";
import "./styles/introduction.css";

interface IntroProps {
  intro_data: Introduction;
  intro_splash_data: IntroSplashEntry[];
}

const Intro = ({ intro_data, intro_splash_data }: IntroProps) => {
  const scrollToGetNetLogo = () => {
    // If we're on the home page
    if (window.location.pathname === "/foundation-website-frontend/") {
      const getNetLogoSection = document.querySelector(".get-section");
      if (getNetLogoSection) {
        getNetLogoSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and add a hash
      window.location.href = "/foundation-website-frontend/#get-netlogo";
    }
  };

  const buttonStyle = {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "13.5px",
    lineHeight: "150%",
    letterSpacing: "2%",
    verticalAlign: "middle"
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-flex">
          <div className="intro-logo-section">
            <img src={LogoText.src} />
          </div>

          <div className="intro-text-section">
            <p className="intro-description">{intro_data.description}</p>
            <div className="button-data">
              <Button
                colorClass="blue-button"
                padding=".5rem 1.5rem"
                fontSize="1.125rem"
                text="GET NETLOGO"
                style={buttonStyle}
                onClick={scrollToGetNetLogo}
              />
              <p>Free to use</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export { Intro };
