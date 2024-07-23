import "./componentCSS/Header.css";
import { Searchbar } from "./Searchbar";
import React, { useState, useCallback, useMemo } from 'react';
import blueEllipse from "./../assets/blue-ellipse.svg";
import netlogoicon from "../assets/netlogo.svg";
import dropdownIcon from "../assets/dropdown-icon.svg";
import headerActionIcon from "../assets/header-action-icon.svg";

const headerSections: string[] = [
    "Products", "Learning", "Docs", "Models", "News", "Community", "About"
];


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


interface HeaderActionProps {
    title: string;
    isHovered: boolean;
    onMouseEnter: () => void;
}

const HeaderAction = React.memo(({ title, isHovered, onMouseEnter }: HeaderActionProps) => (
    <div 
        className="header-action-cont"
        onMouseEnter={onMouseEnter}
    >
        <div className={`header-action ${isHovered ? 'header-action-hovered' : ''}`}>{title}</div>
        <img className="dropdown-icon" src={dropdownIcon.src} alt="dropdown"/>
    </div>
));

interface HeaderExpandedProps {
    headerIndex: number
}

interface HeaderActionColumnProps {
    columnContent: Record<string, string>;
}

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

const HeaderExpanded = ({ headerIndex }: HeaderExpandedProps) => {
    const expandedContent = headerIndex >= 0 ? headerExpandedSections[headerIndex] : ProductExpanded;
    console.log(headerIndex);
    return (
        <div className={`header-expanded ${headerIndex >= 0 ? "expanded" : ""}`}>
            <div className="header-expanded-line"></div>
            <div className="header-expanded-content">
                {Object.entries(expandedContent).map((obj, i) => (
                    <HeaderActionColumn 
                    columnContent={expandedContent[i]}
                    />
                ))}
            </div>
        </div>
    )
}

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const handleMouseEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handleHeaderMouseLeave = useCallback(() => {
        setHoveredIndex(-1);
    }, []);

    const memoizedHeaderActions = useMemo(() => 
        headerSections.map((title, index) => (
            <HeaderAction 
                key={index} 
                title={title} 
                isHovered={hoveredIndex === index}
                onMouseEnter={() => handleMouseEnter(index)}
            />
        ))
    , [hoveredIndex, handleMouseEnter]);

    return (
        <div className="netlogo-header" onMouseLeave={handleHeaderMouseLeave}>
            <div className="header-action-bar">
                <div className="header-action-cont">
                    <div className="netlogo-icon-cont"> 
                        <img className="icon" src={blueEllipse.src} alt="Blue Ellipse"/>
                        <img className="icon" src={netlogoicon.src} alt="NetLogo Icon"/>
                    </div>
                    <div id="netlogo-title" className="header-action">NetLogo</div>
                </div>
                {memoizedHeaderActions}
                <Searchbar/>
            </div>
            <HeaderExpanded headerIndex={hoveredIndex !== null ? hoveredIndex : -1} />
        </div>
    );
}

export { Header };