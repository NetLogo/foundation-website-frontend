import React from "react";
import "./styles/header.css";
import type { NavigationSection } from "../../utils/api";
import { useEffect } from 'react';
import { NavigateToDonate } from "../../utils/url-utils";
import NetLogoOrgLogo from "../../assets/NetLogoOrgLogo.svg";

interface HeaderProps {
  navData: NavigationSection[];
}

const NavigateHome = () => {
const homePath = "/";
// Check if we're already on the homepage to prevent unnecessary navigation
if (window.location.pathname !== homePath) {
    window.location.href = homePath;
}
};

const Header = ({ navData }: HeaderProps) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const button = document.getElementById("toggleButton");
    const navOptions = document.getElementById("navbarContent");
    const donateButton = document.getElementById("donationButton");

    if (!button || !navOptions || !donateButton) return;

    const handleClick = () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));

      if (isExpanded) {
        navOptions.classList.remove("order-2");
        donateButton.classList.remove("order-3");
        donateButton.classList.add("order-2");
        navOptions.classList.add("order-3");
      } else if (!isExpanded) {
        navOptions.classList.remove("order-3");
        donateButton.classList.remove("order-2");
        donateButton.classList.add("order-3");
        navOptions.classList.add("order-2");
      }
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom font-inter">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* this is combining the burger button first then the netlogo icon */}
        <div className="d-flex align-items-center order-1">
          <button
            className="navbar-toggler me-2"
            type="button"
            id="toggleButton"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand fw-bold" href="/">
            <img src={NetLogoOrgLogo.src} alt="NetLogo Logo" width="175" />
          </a>
        </div>
        
        {/* then directus content should vary based off of aria-expanded */}
        <div className="collapse navbar-collapse justify-content-center order-2" id="navbarContent">
          <ul className="navbar-nav">
            {navData.map((section, i) => (
              <li key={i} className="nav-item mx-5 dropdown">
                <a
                  className="nav-link"
                  onClick={NavigateHome}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {section.name}
                </a>
                <ul className="dropdown-menu">
                  {section.items.map((item, j) => (
                    <li key={`${j}`}>
                      <a className="dropdown-item header-link long-item" href={item.url}>
                        {item.display_title}
                      </a>
                    </li>
                  ))} 
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {/* then donate button should also be varying based also opff of aria-expanded */}
        <div className="d-flex align-items-center order-3" id="donationButton">
          <a className="btn btn-primary ms-auto me-2" onClick={NavigateToDonate} role="button">
            Donate
          </a>
        </div>
      </div>

    </nav>

  )
};

export { Header };
