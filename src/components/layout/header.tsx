import "./styles/header.css";
import { Searchbar } from "../shared/search-bar";
import React, { useState, useCallback, useMemo, Suspense } from "react";
import blueEllipse from "../../assets/blue-ellipse.svg";
import netlogoicon from "../../assets/netlogo.svg";
import dropdownIcon from "../../assets/dropdown-icon.svg";
import hoverDropdownIcon from "../../assets/hover-dropdown-icon.svg";
import { useRef } from "react";
import type { NavigationSection } from "../../utils/api";
import NetLogoOrgLogo from "../../assets/NetLogoOrgLogo.svg";

const LazyHeaderExpanded = React.lazy(() => import("./header-expanded"));

interface HeaderProps {
  navData: NavigationSection[];
}

interface HeaderActionProps {
  title: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  isCompact: boolean;
}

// To prevent re-renders of the header actions
// when not necessary
const HeaderAction = React.memo(
  ({ title, isHovered, onMouseEnter, isCompact }: HeaderActionProps) => (
    <div className="header-action-cont" onMouseEnter={onMouseEnter}>
      <div
        className={`header-action ${isHovered ? "header-action-hovered" : ""}`}
      >
        {title}
      </div>
      <img
        className="dropdown-icon"
        src={isHovered ? hoverDropdownIcon.src : dropdownIcon.src}
        alt="dropdown"
      />
    </div>
  )
);

const Header = ({ navData }: HeaderProps) => {
  const headerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleHeaderMouseLeave = useCallback(() => {
    setHoveredIndex(-1);
  }, []);

  // To prevent re-renders of the header actions
  // when not necessary
  const memoizedHeaderActions = useMemo(
    () =>
      navData.map((section, index) => (
        <HeaderAction
          key={index}
          title={section.name}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          isCompact={isCompact}
        />
      )),
    [hoveredIndex, handleMouseEnter]
  );

  return (
    <div
      ref={headerRef}
      className="netlogo-header"
      onMouseLeave={handleHeaderMouseLeave}
    >
      <div className="header-action-bar">
        <div className="header-action-cont">
          <img id="page-logo" src={NetLogoOrgLogo.src} />
        </div>
        {memoizedHeaderActions}
        <Searchbar
          headerRef={headerRef}
          isCompact={isCompact}
          setIsCompact={setIsCompact}
        />
      </div>
      <LazyHeaderExpanded
        navigation_section={navData[hoveredIndex]}
        headerIndex={hoveredIndex}
      />
    </div>
  );
};

export { Header };
