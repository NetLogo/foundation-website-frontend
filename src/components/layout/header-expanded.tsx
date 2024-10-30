import headerActionIcon from "../../assets/header-action-icon.svg";
import React, { useState, useMemo } from 'react';
import {links} from "../../utils/links";

interface HeaderExpandedProps {
    headerIndex: number
    headerSections: string[]
}

interface HeaderActionColumnProps {
    columnContent: { [key: string]: string };
    columnTitle: string;
}

const headerColumns = links.Header;


/** defines one section of a action */
const HeaderActionColumn = ({columnTitle, columnContent}: HeaderActionColumnProps) => {
    const title = columnTitle == "No Title" ? "" : columnTitle;
    return (
        <div className="header-action-column">
            <div className={`header-action-title ${title ? '' : 'not-visible'}`} >
                <span>{title}</span>            
                <img 
                    src={headerActionIcon.src} 
                    className={`header-action-icon ${title ? '' : 'not-viVsible'}`} 
                    alt="Header action icon" 
            />
            </div>
            {Object.entries(columnContent).map(([key, value]) => (
                <a href={value} className="header-link"><span key={key} className="header-action-content">{key}</span></a>
            ))}
        </div>
    )
}
const HeaderExpanded = React.memo(({ headerSections, headerIndex }: HeaderExpandedProps) => {
    const expandedContent:string = headerIndex >= 0 ? headerSections[headerIndex] : "Products";
    const currentColumn = headerColumns[expandedContent] as { [key: string]: { [key: string]: string } };
    return (
        <div className={`header-expanded ${(headerIndex >= 0 && expandedContent.length > 0)? "expanded" : ""}`}>
            <div className="header-expanded-line"></div>
            <div className="header-expanded-content">
                {Object.entries(currentColumn).map(([key, value], i) => (
                    <HeaderActionColumn
                        columnTitle={key}
                        columnContent={value}
                        key = {key}
                    />
                ))}
            </div>
        </div>
    );
});

export default HeaderExpanded;