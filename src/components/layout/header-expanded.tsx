import headerActionIcon from "../../assets/header-action-icon.svg";
import React, { useState, useMemo } from 'react';
import type { NavigationSection, NavigationSubsection, NavigationItem } from "../../utils/api";

interface HeaderExpandedProps {
    headerIndex: number;
    navigation_section: NavigationSection
}

interface HeaderActionColumnProps {
    columnContent: NavigationItem[];
    columnTitle: string;
}

/** defines one section of a action */
const HeaderActionColumn = ({columnTitle, columnContent}: HeaderActionColumnProps) => {
    return (
        <div className="header-action-column">
            <div className={`header-action-title ${columnTitle ? '' : 'not-visible'}`} >
                <span>{columnTitle}</span>            
                <img 
                    src={headerActionIcon.src} 
                    className={`header-action-icon ${columnTitle ? '' : 'not-viVsible'}`} 
                    alt="Header action icon" 
            />
            </div>
            {columnContent.map((item, index) => (
                <a key = {`link-${item.display_title}`} href={item.url} className="header-link"><span key={index} className="header-action-content">{item.display_title}</span></a>
            ))}
        </div>
    )
}
const HeaderExpanded = React.memo(({ headerIndex, navigation_section }: HeaderExpandedProps) => {
    const subsection = headerIndex >= 0 ? navigation_section.subsections : []
    return (
        <div className={`header-expanded ${headerIndex >= 0 ? "expanded" : ""}`}>
            <div className="header-expanded-line"></div>
            <div className="header-expanded-content">
                {subsection.map((column, index) => (
                    <HeaderActionColumn
                        columnTitle={column.display_title ? column.title : ""}
                        columnContent={column.items}
                        key = {index}
                    />
                ))}
            </div>
        </div>
    );
});

export default HeaderExpanded;