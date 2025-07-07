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

  // const buttonStyle = {
  //   fontFamily: "Inter",
  //   fontWeight: 600,
  //   fontSize: "13.5px",
  //   lineHeight: "150%",
  //   letterSpacing: "2%",
  //   verticalAlign: "middle",
  // };

  return (
    <div className="w-100 bg-white pt-2">
      <div className="container py-4">
        <div className="row align-items-center gx-5">
          <div className="col-md-6 d-flex align-items-center gap-2">
              <img
                src={IntroTurtles.src}
                alt="NetLogo Turtles"
                style={{ width: "160px"}}
                className="ms-5"
              />
              <img
                src={LogoText.src}
                alt="NetLogo"
                style={{ width: "350px", marginTop: "-5px" }}
              />
          </div>

          <div className="col-md-6 d-flex flex-column gap-4">
            <ReactMarkdown className="fs-5 fw-medium lh-base text-start font-inter">
              {intro_data.description}
            </ReactMarkdown>
            <div className="d-flex flex-column align-items-center" style={{ width: "fit-content" }}>
              {/* <Button
                variant="primary"
                text="GET NETLOGO"
                style={{ width: "12rem", padding: "0.875rem 2rem", fontSize: "1rem" }}
                onClick={scrollToGetNetLogo}
              /> */}
              <button type="button" className="btn btn-primary btn-lg font-inter fw-bold fs-6" data-bs-toggle="button" onClick={scrollToGetNetLogo}>
                GET NETLOGO
              </button>
              <p className="text-muted mt-1 mb-0 font-inter">100% Free</p>
            </div>
          </div>
        </div>
      </div>
      <IntroSplash page_data={intro_splash_data} />
    </div>
  );
};

export { Intro };
