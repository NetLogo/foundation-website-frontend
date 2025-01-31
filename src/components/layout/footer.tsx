import "./styles/footer.css";
import { Button } from "../shared/button";
import lofiTextLg from "../../assets/lofi-text-l.svg";
import lofiTextMed from "../../assets/lofi-text-m.svg";
import lofiTextSm from "../../assets/lofi-text-s.svg";
import { links } from "../../utils/links";

interface FooterProps {
  getNetLogoSection: React.RefObject<HTMLDivElement>;
}

const Footer = ({ getNetLogoSection }: FooterProps) => {
  const scrollToGetNetLogo = () => {
    getNetLogoSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const buttonLinks = links.Footer["Buttons"];
  const productsLinks = links.Footer["Products"] as { [key: string]: string };
  const learningLinks = links.Footer["Learning"] as { [key: string]: string };
  const docsLinks = links.Footer["Docs"] as { [key: string]: string };
  const communityLinks = links.Footer["Community"] as { [key: string]: string };

  return (
    <div className="footer-section">
      <div className="footer-body">
        <div className="footer-get-cont">
          <div>
            {/* <span className="footer-get-text">
                        Get NetLogo and start learning today
                    </span> */}
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
              onClick={() => pageRedirect(buttonLinks["Donate"])}
            />
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-content">
          <div className="footer-content-row">
            <div className="footer-row-front">
              <div className="footer-row-front-title">LOGO</div>
              <div className="footer-row-front-logo">
                <img src={lofiTextLg.src} />
                <img src={lofiTextMed.src} />
                <img src={lofiTextSm.src} />
              </div>
            </div>

            <div className="footer-content-row-back">
              {/* <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> About </span>
                </div>

                <div className="footer-content-row-vert-content">
                  <span> Visions </span>
                  <span> Governance </span>
                  <span> History </span>
                  <span> In Press </span>
                  <span> Annual Report </span>
                </div>
              </div> */}
              <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> Products </span>
                </div>

                <div className="footer-content-row-vert-content">
                  {Object.entries(productsLinks).map(([key, value]) => (
                    <a
                      key={`footer-link-${key}`}
                      href={value}
                      className="footer-link"
                    >
                      <span>{key}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> Learning </span>
                </div>

                <div className="footer-content-row-vert-content">
                  {Object.entries(learningLinks).map(([key, value]) => (
                    <a
                      key={`footer-link-${key}`}
                      href={value}
                      className="footer-link"
                    >
                      <span>{key}</span>
                    </a>
                  ))}
                  {/* <span> Courses & Tutorials </span>
                  <span> {"Beginners' Dictionary"} </span>
                  <span> Learning Websites </span>
                  <span> FAQ </span> */}
                </div>
              </div>

              <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> Docs </span>
                </div>

                <div className="footer-content-row-vert-content">
                  {Object.entries(docsLinks).map(([key, value]) => (
                    <a
                      key={`footer-link-${key}`}
                      href={value}
                      className="footer-link"
                    >
                      <span>{key}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> Community </span>
                </div>

                <div className="footer-content-row-vert-content">
                  {Object.entries(communityLinks).map(([key, value]) => (
                    <a
                      key={`footer-link-${key}`}
                      href={value}
                      className="footer-link"
                    >
                      <span>{key}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content-row">
            <div className="footer-row-front"></div>
            <div className="footer-content-row-back">
              {/* <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> Models </span>
                </div>

                <div className="footer-content-row-vert-content">
                  <span> Models Library </span>
                  <span> Modeling Commons </span>
                  <span> Community Models </span>
                  <span> Websites </span>
                </div>
              </div> */}

              {/* <div className="footer-content-row-vert-cont">
                <div className="footer-content-row-vert-header">
                  <span> News </span>
                </div>

                <div className="footer-content-row-vert-content">
                  <span> Competitions </span>
                  <span> Upcopming Conferences </span>
                  <span> Workshops </span>
                  <span> Publications </span>
                </div>
              </div> */}
              {/* <div className="footer-content-row-vert-cont"></div> */}
            </div>
          </div>

          {/* <div className="footer-content-end-cont">
            <img src={lofiTextMed.src} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { Footer };
