

import React from "react";
import "./ReferenceSection.css";


export interface YearReferences {
  year: number;
  references: {
    text: string;
    is_ccl: boolean; 
  }[];
}

//change api.ts + to account for new field 
// object declared in api.ts

// provide a extra class for is ccl




interface ReferenceSectionProps {
  pageData: YearReferences[];
}

const ReferenceSection = ({ pageData }: ReferenceSectionProps) => {
  //console.log("Page Data:", pageData[0]); // Log the pageData to check its structure
  return (
    <div className="references-container">
      <h1>References</h1>

      <p>This page lists publications that have used or cited NetLogo software and/or models.</p>
      <p>
        This list is by no means complete or exhaustive. If you are using and/or citing NetLogo in your work, or you know
        of work that is not listed, please send the relevant citations to{" "}
        <a href="mailto:netlogo-refs@ccl.northwestern.edu">netlogo-refs@ccl.northwestern.edu</a>.
      </p>
      <p>
        Google Scholar's database lists roughly 38,600 NetLogo citations. You can explore it{" "}
        <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C14&q=netlogo&btnG=">here</a>.
      </p>
      <p><strong>Bold</strong> = Publications authored by the CCL</p>

      {/* Anchor links at the top of the page, clickable */}
      <div className="year-nav">
        {pageData.map((item, index) => (
          <a key={index} href={`#year-${item.year}`} className="year-link">
            {item.year}
          </a>
        ))}
      </div>

      {/* divided year sections */}
      {pageData.map((item, index) => (
        <div key={index} id={`year-${item.year}`} className="year-block">
          <h3>{item.year}</h3>
          <ul>
            //console.log({item} {index})
            {item.references.map((reference, refIndex) => (
              <li key={refIndex}>
                {reference.text}
              </li>
            ))} 
          </ul>
        </div>
      ))}
    </div>
  );
};

export { ReferenceSection };


