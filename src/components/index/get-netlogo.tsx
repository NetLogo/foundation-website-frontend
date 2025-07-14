import React, { useEffect } from "react";
import { Section } from "../shared/section.js";
import { Button } from "../shared/button.js";
import "./styles/get-netlogo.css";
import type { GetNetLogoEntry } from "../../utils/api.js";
import ReactMarkdown from "react-markdown";

interface GetNetLogoProps {
  page_data: GetNetLogoEntry[];
  section_color: string;
}

interface ItemCardProps {
  title: string;
  description: string;
  image_key: string;
  link: string;
  card_color: string;
  button_text?: string;
}

const ItemCard = ({
  title,
  description,
  image_key,
  link,
  card_color,
  button_text,
}: ItemCardProps) => {
  const pageRedirect = (url: string) => {
    window.open(url, "_blank");
  };
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="card shadow-sm rounded-4 m-2 p-4" style={{ backgroundColor: card_color, width: "18rem" }}>
      <div className="d-flex align-items-center mb-3 gap-3">
        <img
          src={`${backend_url}/assets/${image_key}`}
          alt=""
          className="rounded"
          style={{ width: "4rem" }}
        />
        <h5 className="fw-bold mb-0 font-inter">{title}</h5>
      </div>
      <div className="mb-4">
        <ReactMarkdown className="text-start small font-inter">
          {description}
        </ReactMarkdown>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary fw-semibold font-inter px-4 py-2"
          onClick={() => pageRedirect(link)}
        >
          {button_text ?? "GET"}
        </button>
      </div>
    </div>
  );
};

const GetNetLogo = ({ page_data, section_color }: GetNetLogoProps) => {
  const color_palette = ["#F2F2F2", "white"];

  useEffect(() => {
    // Check if we navigated here with a hash
    if (window.location.hash === "#get-netlogo") {
      const section = document.querySelector("#get-netlogo");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="container" id="get-netlogo">
      <Section
        sectionTitle="Get NetLogo"
        sectionDescript="There are five different products in NetLogo. Find the one that suits your need."
        sectionGap={1}
        sectionPaddingBot={3.75}
        backgroundColor={section_color}
        moreButton={false}
        body={
          <div className="row justify-content-center">

            {page_data.map((item) => (
              <div key={item.title} className="col-md-4 d-flex justify-content-center">
                <ItemCard
                  title={item.title}
                  description={item.content}
                  image_key={item.icon.id}
                  button_text={item.button_text}
                  link={item.link}
                  card_color={
                    section_color == "#F2F2F2" ? "white" : "#F2F2F2"
                  }
                />
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export { GetNetLogo };
