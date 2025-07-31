import React from "react";
import type { Introduction, IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { Button } from "../shared/button";
import { IntroSplash } from "./intro-splash";
import LogoText from "../../assets/logo-text.svg";
import IntroTurtles from "../../assets/intro-turtles.svg";
import "./styles/introduction.css";
import { NavigateToDonate } from "../../utils/url-utils";

interface IntroProps {
  intro_data: Introduction;
  intro_splash_data: IntroSplashEntry[];
}

const Intro = ({ intro_data, intro_splash_data }: IntroProps) => {
  const scrollToGetNetLogo = () => {
    // If we're on the home page
    if (window.location.pathname === "/") {
      const getNetLogoSection = document.querySelector("#get-netlogo");
      if (getNetLogoSection) {
        getNetLogoSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and add a hash
      window.location.href = "/#get-netlogo";
    }
  };

  return (
    <div className="w-100 bg-white pt-2">
      <div className="container py-5">
        <div className="row align-items-center gx-5 gap-3 gap-lg-0">
          <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end gap-2">
              <div className="intro-logo-container">
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
          </div>

          <div className="col-md-10 col-lg-6 mx-auto d-flex flex-column mt-1">
            <ReactMarkdown className="fs-5 fw-medium lh-base text-start font-inter text-center text-lg-start">
              {intro_data.description}
            </ReactMarkdown>
            <div className="d-flex flex-row gap-2 mx-auto mx-lg-0">
              <div className="d-flex flex-column align-items-center button-data">
                <button type="button" className="btn btn-primary btn-lg font-inter fw-bold fs-6" data-bs-toggle="button" onClick={scrollToGetNetLogo}>
                  GET NETLOGO
                </button>
                <p className="text-muted mt-1 mb-0 font-inter">100% Free</p>
              </div>
              <div className="d-flex flex-column align-items-center button-data">
                <button type="button" style={{width: "8rem"}} className="btn btn-secondary btn-lg font-inter fw-bold fs-6" data-bs-toggle="button" onClick={NavigateToDonate}>
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IntroSplash page_data={intro_splash_data} />
    </div>
  );
};

export { Intro };
