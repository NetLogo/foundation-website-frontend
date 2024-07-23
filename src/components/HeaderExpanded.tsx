import headerActionIcon from "../assets/header-action-icon.svg";
import React, { useState, useMemo } from 'react';

interface HeaderExpandedProps {
    headerIndex: number
}

interface HeaderActionColumnProps {
    columnContent: Record<string, string>;
}

const ProductExpanded: Record<string, string>[] = [
    {
    "FOR EDUCATORS": "",
    "NetLogo APP" : "",
    "Curricula & Classroom Resources" : "",
    "NetLogo in Science, Education, and Policy": "", 
    },

    {
        "FOR RESEARCHERS": "",
        "NetLogo APP": "",
        "Features": "",
        "Extensions": "",
        "FAQ": "",
    },

    { 
        "FOR STUDENTS": "", 
        "Turtle Universe": "",
        "IODA for NetLogo": "",
        "OpenMOLE": "",
        "MEME": "",
    }

]

const LearningExpanded: Record<string, string>[] = [
    {
        "TUTORIALS": "",
        "Models": "",
        "Commands": "",
        "Procedures": "",
    },
    
    {
        "VIDEO TUTORIALS": "",
        "Disease Model from Scratch": "",
        "Forest Fire Model from Scratch": "",
        "Exploring the Model Library": "",
    },

    {
        "ARTICLES & GUIDES": "",
        "Getting Started" : "",
        "Common Error Messages": "",
        "Color Indication": "",
        "Shapes & Colors": "",
        "The Dictionary": "",
    }
]

const DocsExpanded: Record<string, string>[] = [
    {
        "GENERAL": "",
        "NetLogo Source Code": "",
        "Curricula & Classroom Resources": "",
        "NetLogo in Science, Education, and Policy": ""
    },

    {
        "USER MANUAL": "",
        "Features": "",
        "Extensions": "",
        "FAQ": "",
    },
    
    { 
        "TOOLS": "",
        "BehaviorSearch": "",
        "IODA for NetLogo": "",
        "OpenMOLE": "",
        "MEME": "",
        "RNetLogo": "",
        "NetLogo-LaTeX": "",
        "BODNetLogo": "",
        "NetLogo Obfuscator": "",
        "NetLogo Clusters": "",
        "Fruit Fly Simulation":"",
    },

    {
        "EDITOR SUPORT": "",
        "NetLogo VIM Syntax File": "",
        "Atom Editor Package for NetLogo": "",
    }
        
]

const ModelsExpanded: Record<string, string>[] = [
    {
        "LIBRARY": "",
        "Models": "",
    },
    {
        "COMMUNITY": "",
        "Newest Updates": "",
    },
    {
        "MODELING COMMONS": "",
        "Share & View": "",
    }
]


const headerExpandedSections: Record<string, string>[][] = [
    ProductExpanded, LearningExpanded, DocsExpanded, ModelsExpanded, [], [], []
]


/** defines one section of a action */
const HeaderActionColumn = ({columnContent}: HeaderActionColumnProps) => {
    const [title, ...rest] = Object.entries(columnContent); // destructure title from the rest 
    return (
        <div className="header-action-column">
            <div className="header-action-title">
                <span>{title[0]}</span>
                <img src={headerActionIcon.src} className="header-action-icon" alt="Header action icon" />
            </div>
            {rest.map(([key, value]) => (
                <span key={key} className="header-action-content">{key}</span>
            ))}
        </div>
    )
}
const HeaderExpanded = React.memo(({ headerIndex }: HeaderExpandedProps) => {
    const expandedContent = headerIndex >= 0 ? headerExpandedSections[headerIndex] : ProductExpanded;

    return (
        <div className={`header-expanded ${headerIndex >= 0 ? "expanded" : ""}`}>
            <div className="header-expanded-line"></div>
            <div className="header-expanded-content">
                {Object.entries(expandedContent).map(([key, value], i) => (
                    <HeaderActionColumn 
                        key={key}
                        columnContent={value}
                    />
                ))}
            </div>
        </div>
    );
});

export default HeaderExpanded;