import React from "react";
import { type PageEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import TableOfContents from "./table-of-contents";
import { generateId } from "../../utils/url-utils";
import "./styles/subsections-page.css";

interface SubsectionsPageProps {
  pageData: PageEntry[];
  pageTitle: string;
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


const SubsectionsPage = ({ pageData, pageTitle}: SubsectionsPageProps) => {
  return (
    <div className="subsections-page">
      <h1 className="page-title">{pageTitle}</h1>
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


export default SubsectionsPage;
