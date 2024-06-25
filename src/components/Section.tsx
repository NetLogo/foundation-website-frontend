/**Section: Component that defines a section of a page (Why NetLogo, GetNetLogo, etc...
 * A section component takes in JSX as a prop, and can be defined by a parent component to define a "complete" section **/
import "./componentCSS/Section.css";
import React from 'react';

interface SectionProps {
    sectionTitle: string,
    sectionDescript: string,
    sectionGap: number, /* the gap between elements in this section */
    sectionPaddingBot: number, /* the bottom padding of this section */
    body: React.ReactNode,
}

const Section = ({ sectionTitle, sectionDescript, sectionGap, sectionPaddingBot, body }: SectionProps) => {
    return (
        <div className="page-section" style={{ gap: `${sectionGap}rem`, paddingBottom: `${sectionPaddingBot}rem` }} >
            <div className="section-header">
                <span className="section-title"> { sectionTitle } </span>
                <span className="section-descript"> { sectionDescript } </span>
            </div>
            { body } 
        </div>
    )
}

export { Section };
