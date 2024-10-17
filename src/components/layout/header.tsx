import "./styles/header.css";
import { Searchbar } from "../shared/search-bar";
import React, { useState, useCallback, useMemo, Suspense } from 'react';
import blueEllipse from "../../assets/blue-ellipse.svg";
import netlogoicon from "../../assets/netlogo.svg";
import dropdownIcon from "../../assets/dropdown-icon.svg";
import hoverDropdownIcon from "../../assets/hover-dropdown-icon.svg";
import { useRef } from 'react';

const LazyHeaderExpanded = React.lazy(() => import("./header-expanded"));

const headerSections: string[] = [
    "Products", "Learning", "Docs", "Models", "News", "Community", "About"
];


interface HeaderActionProps {
    title: string;
    isHovered: boolean;
    onMouseEnter: () => void;
    isCompact: boolean
}

const HeaderAction = React.memo(({ title, isHovered, onMouseEnter, isCompact }: HeaderActionProps) => (
    <div 
        className="header-action-cont"
        onMouseEnter={onMouseEnter}
    >
        <div className={`header-action ${isHovered ? 'header-action-hovered' : ''}`}>{title}</div>
        <img className="dropdown-icon" src={isHovered ? hoverDropdownIcon.src : dropdownIcon.src} alt="dropdown"/>
    </div>
));

const Header = () => {
    const headerRef = useRef(null);
    const [isCompact, setIsCompact] = useState(false);
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
                isCompact={isCompact}
            />
        ))
    , [hoveredIndex, handleMouseEnter]);

    return (
        <div ref={headerRef} className="netlogo-header" onMouseLeave={handleHeaderMouseLeave}>
            <div className="header-action-bar">
                <div className="header-action-cont">
                    <div className="netlogo-icon-cont"> 
                        <img className="icon" src={blueEllipse.src} alt="Blue Ellipse"/>
                        <img className="icon" src={netlogoicon.src} alt="NetLogo Icon"/>
                    </div>
                    <div id="netlogo-title" className="header-action">NetLogo</div>
                </div>
                {memoizedHeaderActions}
                <Searchbar headerRef={headerRef}
                isCompact={isCompact}
                setIsCompact={setIsCompact}
                />
            </div>
            <LazyHeaderExpanded headerIndex={hoveredIndex !== null ? hoveredIndex : -1} />
        </div>
    );
}

export { Header };