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
    // @ts-expect-error We don't really need to worry
    // about the exposure here.
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  useEffect(() => {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  const mainContainer = document.getElementById('mainContainer');

  if (navbar && mainContainer) {
    const resizeObserver = new ResizeObserver(() => {
      mainContainer.style.paddingTop = `${navbar.offsetHeight}px`;
    });

    resizeObserver.observe(navbar);

    return () => {
      resizeObserver.disconnect();
    };
  }
}, []);


  return (
    <div className="container-fluid">
      <nav className="w-100 navbar navbar-expand-lg navbar-light bg-light border-bottom font-inter fixed-top">
        <div className="container d-flex align-items-center justify-content-around">
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
          <div className="d-none d-lg-block flex-grow-1 text-center">
            <ul className="navbar-nav justify-content-end">
              {navData.map((section, i) => (
                <li key={i} className="nav-item dropdown fw-semibold px-3">
                  <a
                    className="nav-link"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    {section.name}
                  </a>
                  <ul className="dropdown-menu">
                    {section.items.map((item, j) => (
                      <li key={`item-${j}`}>
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
          {/* <div>
            Hi
          </div>
          <div>
            Hi
          </div> */}
          <a className="d-lg-none btn btn-primary" onClick={NavigateToDonate} role="button">
            Donate
          </a>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="d-lg-none navbar-nav mx-auto d-flex justify-content-between text-start pt-2">
              {navData.map((section, i) => (
                <li key={i} className="nav-item mx-5 dropdown fw-semibold">
                  <a
                    className="nav-link d-inline-block px-1"
                    onClick={NavigateHome}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    {section.name}
                  </a>
                  <ul className="list-unstyled ps-3">
                    {section.items.map((item, j) => (
                      <li key={`item-${j}`}>
                        <a className="dropdown-item header-link long-item collapse-item" href={item.url}>
                          {item.display_title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <a className="d-none d-lg-block btn btn-primary mx-5" onClick={NavigateToDonate} role="button">
            Donate
          </a>
        </div>
      </nav>
    </div>
  )
};

export { Header };
