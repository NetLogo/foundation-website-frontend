import React from "react";
import { Section } from "../shared/section.js";
import { Button } from "../shared/button.js";
import getNetLogoIcon from "../../assets/get-netlogo.svg";
import netlogoWebIcon from "../../assets/netlogo-web.svg";
import TU from "../../assets/turtle-universe.svg";
import "./styles/get-netlogo.css";
import { links } from "../../utils/links.js";

interface GetNetLogoProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

interface ItemCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ItemCard = ({ title, description, icon, link }: ItemCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="get-item">
      <div className="get-item-header">
        <img className="get-item-img" src={icon} />
        <span className="get-item-title"> {title} </span>
      </div>
      <span className="get-item-descript"> {description} </span>
      <div className="button-container">
        <Button
          colorClass="blue-button"
          padding="0.75rem 2.5rem"
          fontSize="0.875rem"
          text="GET"
          onClick={() => pageRedirect(link)}
        />
      </div>
    </div>
  );
};

const GetNetLogo = ({ sectionRef }: GetNetLogoProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const softwareLinks = links.Body["Get NetLogo"];

  return (
    <div ref={sectionRef} className="get-section">
      <Section
        sectionTitle="Get NetLogo"
        sectionDescript="There are five different products in NetLogo. Find the one suits your need."
        sectionGap={2.5}
        sectionPaddingBot={3.75}
        backgroundColor="white"
        moreButton={false}
        body={
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2%",
              }}
              ref={sectionRef}
              className="get-netlogo-content"
            >
              <ItemCard
                title="NetLogo Desktop"
                description="A programmable modeling environment for simulating natural and
                  social phenomena that runs on Mac, Windows, and Linux. This is
                  the most powerful version of NetLogo."
                icon={getNetLogoIcon.src}
                link={softwareLinks["NetLogo Desktop"]}
              />
              <ItemCard
                title="NetLogo Web"
                description="A version of NetLogo that runs in all modern web browsers,
                  without any need for installation. Very useful for embedding
                  in online educational materials."
                icon={netlogoWebIcon.src}
                link={softwareLinks["NetLogo Web"]}
              />
              <ItemCard
                title="Turtle Universe"
                description="Powered by the NetLogo engine but with its own unique
                  interface, Turtle Universe brings the limitless power of
                  computational modeling to smartphones and tablets of young
                  students and educators."
                icon={TU.src}
                link={softwareLinks["Turtle Universe"]}
              />
              <ItemCard
                title="NetTango"
                description="A block-based interface for NetLogo for creating educational
                  models with domain-specific programming blocks."
                icon={TU.src}
                link={softwareLinks["NetTango"]}
              />
              <ItemCard
                title="HubNet Web"
                description="An online platform for creating and running participatory
                  simulations in which people can play the role of agents in a
                  NetLogo model."
                icon="src\assets\HubNetLogo.png"
                link={softwareLinks["HubNet Web"]}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export { GetNetLogo };
