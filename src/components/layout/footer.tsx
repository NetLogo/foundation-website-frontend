import "./styles/footer.css";
import { useMemo } from "react";
import { Button } from "../shared/button";
import { NavigateToDonate } from "../../utils/url-utils";
import type { NavigationSection, NavigationItem } from "../../utils/api";

interface FooterProps {
  navData: NavigationSection[];
  show_buttons?: boolean;
}

interface FooterColumnProps {
  title: string;
  items: NavigationItem[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="footer-content-row-vert-cont">
      <div className="footer-content-row-vert-header">
        <span> {title} </span>
      </div>

      <div className="footer-content-row-vert-content">
        {items.map((item, index) => (
          <a
            key={`footer-link-${item.display_title}`}
            href={item.url}
            className="footer-link"
          >
            <span>{item.display_title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ navData, show_buttons = true }: FooterProps) => {
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

  const footerData = useMemo(() => {
    return navData.map((section) => ({
      name: section.name,
      items: section.subsections.flatMap((subsection) =>
        subsection.items.filter((item) => item.in_footer)
      ),
    }));
  }, [navData]);

  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer-section">
      <div className="footer-body">
        {show_buttons && (
          <div className="footer-get-cont">
            <div>
              <Button
                colorClass="blue-button"
                padding="0.875rem 2rem"
                fontSize="1rem"
                text="GET NETLOGO"
                style={{ width: "12rem" }}
                onClick={scrollToGetNetLogo}
              />

              <Button
                colorClass="light-button"
                padding="0.875rem 2rem"
                fontSize="1rem"
                text="DONATE"
                style={{ width: "12rem" }}
                onClick={() => NavigateToDonate()}
              />
            </div>
          </div>
        )}

        <div className="footer-line"></div>

        <div className="footer-content">
          <div className="footer-content-row">
            <div className="footer-content-row-back">
              {footerData.map((column, index) => (
                <FooterColumn
                  key={`footer-column-${index}`}
                  title={column.name}
                  items={column.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
