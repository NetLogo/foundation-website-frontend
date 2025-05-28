import React from "react";
import { type PageEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import TableOfContents from "./table-of-contents";
import { generateId } from "../../utils/url-utils";
import "./styles/dynamic-page.css";

interface DynamicPageProps {
  pageData: PageEntry[];
}

interface PageSectionProps {
  sectionTitle: string;
  sectionContent: string;
}

const PageSection = ({ sectionTitle, sectionContent }: PageSectionProps) => {
  const sectionId = generateId(sectionTitle);

  return (
    <div className="page-section" id={sectionId}>
      <p className="section-title">{sectionTitle}</p>
      <ReactMarkdown className="section-content">
        {sectionContent}
      </ReactMarkdown>
    </div>
  );
};


const DynamicPage = ({ pageData }: DynamicPageProps) => {
  return (
    <div className="dynamic-page">
      <TableOfContents pageData={pageData} />
      <div>
        {pageData.map((entry) => (
          <PageSection
            key={entry.section_title}
            sectionTitle={entry.section_title}
            sectionContent={entry.section_content}
          />
        ))}
      </div>
    </div>
  );
};


export default DynamicPage;
