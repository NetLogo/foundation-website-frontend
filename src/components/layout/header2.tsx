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
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom font-inter">
      <div className="container d-flex justify-content-between align-items-center">
      
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler order-1 order-lg-2 me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand fw-bold order-2 order-lg-1" href="/">
            <img src={NetLogoOrgLogo.src} alt="NetLogo Logo" width="175" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto d-flex justify-content-between">
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
        <a className="btn btn-primary ms-2" onClick={NavigateToDonate} role="button">
          Donate
        </a>
      </div>
    </nav>
  )
};

export { Header };
