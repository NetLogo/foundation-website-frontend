import React from "react";
import { type PageEntry } from "../../utils/api";
import { generateId } from "../../utils/url-utils";
import "./styles/table-of-contents.css";

interface TOCProps {
  pageData: PageEntry[];
}

const TableOfContents = ({ pageData }: TOCProps) => {
  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>
        {pageData.map((entry) => (
          <li key={entry.section_title}>
            <a href={`#${generateId(entry.section_title)}`}>
              {entry.section_title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
