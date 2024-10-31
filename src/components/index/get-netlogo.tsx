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

const GetNetLogo = ({ sectionRef }: GetNetLogoProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const softwareLinks = links.Body["Get NetLogo"];

  return (
    <div ref={sectionRef} className="get-section">
      <Section
        sectionTitle="Get NetLogo"
        sectionDescript="There are over xxx products in NetLogo. Find the one that suits your need."
        sectionGap={2.5}
        sectionPaddingBot={3.75}
        backgroundColor="white"
        borderRadius={5}
        moreButton={false}
        body={
          <div >
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"2%"}} ref={sectionRef} className="get-netlogo-content">
              <div className="get-item">
                <div className="get-item-header">
                  <img className="get-item-img" src={getNetLogoIcon.src} />
                  <Button
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="GET"
                    onClick={() =>
                      pageRedirect(softwareLinks["NetLogo Desktop"])
                    }
                  />
                </div>
                <span className="get-item-title"> NetLogo Desktop </span>
                <span className="get-item-descript">
                  {" "}
                  A programmable modeling environment for simulating natural and
                  social phenomena that runs on Mac, Windows, and Linux. This is
                  the most powerful version of NetLogo.{" "}
                </span>
              </div>
              <div className="get-item">
                <div className="get-item-header">
                  <img className="get-item-img" src={netlogoWebIcon.src} />
                  <Button
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="GET"
                    onClick={() => pageRedirect(softwareLinks["NetLogo Web"])}
                  />
                </div>
                <span className="get-item-title"> NetLogo Web </span>
                <span className="get-item-descript">
                  {" "}
                  A version of NetLogo that runs in all modern web browsers,
                  without any need for installation. Very useful for embedding
                  in online educational materials.{" "}
                </span>
              </div>
              <div className="get-item">
                <div className="get-item-header">
                  <img className="get-item-img" src={TU.src} />
                  <Button
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="GET"
                    onClick={() =>
                      pageRedirect(softwareLinks["Turtle Universe"])
                    }
                  />
                </div>
                <span className="get-item-title"> Turtle Universe </span>
                <span className="get-item-descript">
                  {" "}
                  Powered by the NetLogo engine but with its own unique
                  interface, Turtle Universe brings the limitless power of
                  computational modeling to smartphones and tablets of young
                  students and educators.{" "}
                </span>
              </div>
              <div className="get-item">
                <div className="get-item-header">
                  <img className="get-item-img" src={TU.src} />
                  <Button
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="GET"
                    onClick={() => pageRedirect(softwareLinks["NetTango"])}
                  />
                </div>
                <span className="get-item-title"> NetTango </span>
                <span className="get-item-descript">
                  {" "}
                  A block-based interface for NetLogo for creating educational
                  models with domain-specific programming blocks..{" "}
                </span>
              </div>
              <div className="get-item">
                <div className="get-item-header">
                  <img
                    className="get-item-img"
                    src="src\assets\HubNetLogo.png"
                  />
                  <Button
                    colorClass="blue-button"
                    padding="0.75rem 1.5rem"
                    fontSize="0.875rem"
                    text="GET"
                    onClick={() => pageRedirect(softwareLinks["HubNet Web"])}
                  />
                </div>
                <span className="get-item-title"> Hubnet Web </span>
                <span className="get-item-descript">
                  {" "}
                  An online platform for creating and running participatory
                  simulations in which people can play the role of agents in a
                  NetLogo model.{" "}
                </span>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export { GetNetLogo };
