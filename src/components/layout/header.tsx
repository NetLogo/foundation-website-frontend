import "./styles/header.css";
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import dropdownIcon from "../../assets/dropdown-icon.svg";
import hoverDropdownIcon from "../../assets/hover-dropdown-icon.svg";
import type { NavigationSection } from "../../utils/api";
import NetLogoOrgLogo from "../../assets/NetLogoOrgLogo.svg";
import { Button } from "../shared/button";
import { NavigateToDonate } from "../../utils/url-utils";

// Lazy-load the expanded header component to improve initial load performance
const LazyHeaderExpanded = React.lazy(() => import("./header-expanded"));

// Props interface for the main Header component
interface HeaderProps {
  navData: NavigationSection[]; // Navigation data structure containing all menu items
}

// Props interface for the HeaderAction component (individual navigation tab)
interface HeaderActionProps {
  title: string;        // Title text displayed in the navigation tab
  isHovered: boolean;   // Whether this tab is currently hovered/active
  onMouseEnter: () => void; // Handler for when mouse enters this tab
  index: number;        // Index of this tab in the navigation array
}

// Memoized HeaderAction component to prevent unnecessary re-renders
// This represents a single tab in the navigation header
const HeaderAction = React.memo(
  ({ title, isHovered, onMouseEnter, index }: HeaderActionProps) => (
    <div 
      className="header-action-cont" 
      onMouseEnter={onMouseEnter} // Trigger hover state when mouse enters
    >
      <div
        // Apply hover styling when this tab is active
        className={`header-action ${isHovered ? "header-action-hovered" : ""}`}
      >
        {title}
      </div>
      <img
        // Rotate the dropdown icon when tab is hovered
        className={`dropdown-icon ${isHovered ? "dropdown-icon-rotated" : ""}`}
        src={isHovered ? hoverDropdownIcon.src : dropdownIcon.src} // Change icon on hover
        alt="dropdown"
      />
    </div>
  )
);

// Main Header component
const Header = ({ navData }: HeaderProps) => {
  // Reference to the header element for detecting clicks outside
  const headerRef = useRef<HTMLDivElement>(null);
  
  // State to track which navigation item is currently hovered
  // -1 means no item is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  
  // Reference to store timeout IDs for delayed actions
  // Using number type instead of NodeJS.Timeout to avoid namespace issues
  const timeoutRef = useRef<number | null>(null);
  
  // Effect to detect clicks outside the header and close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click is outside the header, close all dropdowns
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setHoveredIndex(-1);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Effect to clean up any timeouts when component unmounts
  useEffect(() => {
    return () => {
      // Clear any pending timeouts to prevent memory leaks
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handler for when mouse enters a navigation tab
  // Using useCallback to prevent recreation of this function on each render
  const handleMouseEnter = useCallback((index: number) => {
    // Clear any existing timeout to prevent race conditions
    // This prevents issues when quickly moving between tabs
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Set the hovered tab index
    setHoveredIndex(index);
  }, []);

  // Handler for when mouse leaves the entire header
  const handleHeaderMouseLeave = useCallback(() => {
    // Set a short timeout before closing dropdowns
    // This prevents flickering when moving between elements
    timeoutRef.current = window.setTimeout(() => {
      setHoveredIndex(-1); // Close all dropdowns after delay
    }, 100); // 100ms delay provides smooth experience
  }, []);

  // Generate the header actions (tabs) from navigation data
  // Using useMemo to prevent recreation on every render
  const memoizedHeaderActions = useMemo(
    () =>
      navData.map((section, index) => (
        <div 
          key={index} 
          className="header-nav-item" // Container for both the tab and its dropdown
        >
          {/* Render the tab button */}
          <HeaderAction
            title={section.name}
            isHovered={hoveredIndex === index} // Pass hover state
            onMouseEnter={() => handleMouseEnter(index)} // Set this tab as hovered
            index={index}
          />
          
          {/* Conditionally render dropdown when this tab is hovered */}
          {hoveredIndex === index && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <div 
                className="dropdown-container" // Container for dropdown content
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering it
              >
                {/* Render the dropdown content */}
                <LazyHeaderExpanded
                  navigation_section={navData[hoveredIndex]} // Pass navigation data for this section
                  headerIndex={hoveredIndex} // Pass current hover state
                />
              </div>
            </React.Suspense>
          )}
        </div>
      )),
    [hoveredIndex, handleMouseEnter, navData] // Dependencies for useMemo
  );

  // Function to navigate to home page
  const NavigateHome = () => {
    const homePath = "/";
    // Check if we're already on the homepage to prevent unnecessary navigation
    if (window.location.pathname !== homePath) {
      window.location.href = homePath;
    }
  };

  // Render the complete header
  return (
    <div
      ref={headerRef} // Attach ref for click detection
      className="netlogo-header"
      onMouseLeave={handleHeaderMouseLeave} // Close dropdowns when leaving header
    >
      <div className="header-action-bar">
        {/* Logo/Home button */}
        <div className="header-action-cont" onClick={NavigateHome}>
          <img id="page-logo" src={NetLogoOrgLogo.src} alt="NetLogo Logo" />
        </div>
        
        {/* Navigation tabs with dropdowns */}
        {memoizedHeaderActions}
        
        {/* Donate button */}
        <Button
          colorClass="blue-button"
          padding=".9rem 1rem"
          fontSize=".8rem"
          style={{ height: "2.4rem" }}
          text="DONATE"
          onClick={() => {
            NavigateToDonate();
          }}
        />
      </div>
    </div>
  );
};

export { Header };