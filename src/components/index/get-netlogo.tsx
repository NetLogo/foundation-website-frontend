import React, { useRef, useEffect, useCallback } from "react";
import { Section } from "../shared/section.js";
import { Button } from "../shared/button.js";
import "./styles/get-netlogo.css";
import type { GetNetLogoEntry } from "../../utils/api.js";
import ReactMarkdown from "react-markdown";

interface GetNetLogoProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  page_data: GetNetLogoEntry[];
}

interface ItemCardProps {
  title: string;
  description: string;
  image_key: string;
  link: string;
}

const ItemCard = ({ title, description, image_key, link }: ItemCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="get-item">
      <div className="get-item-header">
        <img
          className="get-item-img"
          src={`${backend_url}/assets/${image_key}`}
        />
        <span className="get-item-title"> {title} </span>
      </div>
      <span>
        <ReactMarkdown className="get-item-descript">
          {description}
        </ReactMarkdown>
      </span>

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

const GetNetLogo = ({ sectionRef, page_data }: GetNetLogoProps) => {

  useEffect(() => {
    // Check if we navigated here with a hash
    if (window.location.hash === '#get-netlogo') {
      const section = document.querySelector('.get-section');
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div
      id="get-netlogo"
      className="get-section"
    >
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
              className="get-netlogo-content"
            >
              {page_data.map((item) => (
                <ItemCard
                  key={item.title}
                  title={item.title}
                  description={item.content}
                  image_key={item.icon.id}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export { GetNetLogo };
