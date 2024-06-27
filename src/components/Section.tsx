/**Section: Component that defines a section of a page (Why NetLogo, GetNetLogo, etc...
 * A section component takes in JSX as a prop, and can be defined by a parent component to define a "complete" section **/
import "./componentCSS/Section.css";
import { Button } from "./Button";
import React from 'react';
import moreIcon from "../assets/more-icon.svg";

interface SectionProps {
    sectionTitle: string,
    sectionDescript: string,
    sectionGap: number, /* the gap between elements in this section */
    sectionPaddingBot: number, /* the bottom padding of this section */
    backgroundColor: string, /* the background color of the page section */
    borderRadius: number, /* the border radius of the page section */
    moreButton: boolean, /* whether or not this section has a more button at the bottom */
    body: React.ReactNode,
}

const Section = ({ sectionTitle, sectionDescript, sectionGap, sectionPaddingBot, backgroundColor="transparent", borderRadius=0, moreButton=false, body }: SectionProps) => {
    return (
        <div className="page-section-cont" style={{ backgroundColor: `${backgroundColor}`, borderRadius: `${borderRadius}rem` }}>
            <div className="page-section" style={{ gap: `${sectionGap}rem`, paddingBottom: `${sectionPaddingBot}rem` }} >
                <div className="section-header">
                    <span className="section-title"> { sectionTitle } </span>
                    <span className="section-descript"> { sectionDescript } </span>
                 </div>
                { body } 
                {moreButton &&
                <div className="more-btn-cont">
                    <Button
                    colorClass="light-button"
                    padding="1rem 3rem"
                    fontSize="1.125rem"
                    text="MORE"
                    hasIcon={true}/>
                </div>
                }
            </div>
        </div>
    )
}

export { Section };
