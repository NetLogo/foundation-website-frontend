import React from "react";
import type { Introduction, IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { Button } from "../shared/button";
import { IntroSplash } from "./intro-splash";
import LogoText from "../../assets/logo-text.svg";
import IntroTurtles from "../../assets/intro-turtles.svg";
import "./styles/introduction.css";

interface IntroProps {
  intro_data: Introduction;
  intro_splash_data: IntroSplashEntry[];
}

const Intro = ({ intro_data, intro_splash_data }: IntroProps) => {
  const scrollToGetNetLogo = () => {
    // If we're on the home page
    if (window.location.pathname === "/") {
      const getNetLogoSection = document.querySelector(".get-section");
      if (getNetLogoSection) {
        getNetLogoSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and add a hash
      window.location.href = "/#get-netlogo";
    }
  };

  const buttonStyle = {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "13.5px",
    lineHeight: "150%",
    letterSpacing: "2%",
    verticalAlign: "middle",
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-flex">
          <div className="intro-logo-section">
              <img
                src={IntroTurtles.src}
                alt="NetLogo Turtles"
                className="intro-turtles"
              />
              <img
                src={LogoText.src}
                alt="NetLogo"
                className="intro-logo-text"
              />
          </div>

          <div className="intro-text-section">
            <ReactMarkdown className="intro-description">
              {intro_data.description}
            </ReactMarkdown>
            <div className="button-data">
              <Button
                colorClass="blue-button"
                padding=".5rem 1.5rem"
                fontSize="1.125rem"
                text="GET NETLOGO"
                style={buttonStyle}
                onClick={scrollToGetNetLogo}
              />
              <p>100% Free</p>
            </div>
          </div>
        </div>
      </div>
      <IntroSplash page_data={intro_splash_data} />
    </div>
  );
};

export { Intro };
