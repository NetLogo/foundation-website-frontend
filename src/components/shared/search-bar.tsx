import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./styles/search-bar.css";
import searchIcon from "../../assets/search-icon.svg";

interface SearchbarProps {
    headerRef: React.RefObject<HTMLDivElement>;
}

const Searchbar = ({ headerRef }: SearchbarProps) => {
    const [isCompact, setIsCompact] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const checkSize = useCallback(() => {
        if (searchBarRef.current && headerRef.current) {
            const headerWidth = headerRef.current.offsetWidth;
            let searchBarRight = searchBarRef.current.getBoundingClientRect().right;
            
            if (isCompact) {
                searchBarRight += 5 * 16; // puts the search bar in the location with margin-right 5 rem
            }

            const shouldBeCompact = searchBarRight > headerWidth;
            if (shouldBeCompact !== isCompact) {
                setIsCompact(shouldBeCompact);
            }
        }
    }, [headerRef, isCompact, setIsCompact]);

    const handleSearchBarClick = () => {
        if (isCompact) {
            setIsExpanded(true); 
            console.log('Search bar expanded:', isExpanded);
        }
    };

    const closeExpanded = () => {
        if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
        }
        setIsClosing(true);
        setIsExpanded(false); // want the compact header to already "appear" there
        setTimeout(() => {
            setIsClosing(false);
        }, 300); // match with the animation time 
    };

    const handleOverlayClick = useCallback((e: MouseEvent) => {
        if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
            closeExpanded();
        }
    }, []);

    const debouncedCheckSize = useCallback(() => {
        if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
        }
        resizeTimeoutRef.current = setTimeout(checkSize, 100);
    }, [checkSize]);

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', debouncedCheckSize);
        return () => {
            window.removeEventListener('resize', debouncedCheckSize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, [checkSize, debouncedCheckSize]);

    // close expanded searchbar when you click out of it
    useEffect(() => {
        if (isExpanded) {
            document.addEventListener('mousedown', handleOverlayClick);
        } else {
            document.removeEventListener('mousedown', handleOverlayClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOverlayClick);
        };
    }, [isExpanded, handleOverlayClick]);

    // when isCompact becomes false, doesn't make sense to still be expanded
    useEffect(() => {
        if (!isCompact && isExpanded) {
            closeExpanded();
        }
    }, [isCompact]);

    return (
        <div className="searchbar-container" style={{ position: 'relative' }}>

            {isExpanded && (
                <div className="placeholder-search-bar">
                </div>
            )}
            <div 
                ref={searchBarRef} 
                className={`search-bar ${isCompact ? 'compact' : ''} ${isExpanded ? 'hidden' : ''}`} 
                onClick={handleSearchBarClick}
            >
                <img className="search-bar-icon" src={searchIcon.src} alt="search-icon"/>
                {!isCompact && (
                    <input className="search-bar-input" type="text" placeholder="SEARCH"/>
                )}
            </div>
            { (isExpanded || isClosing) && (
                <div 
                    ref={overlayRef} 
                    className={`search-bar-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}
                >
                    <img className="search-bar-icon" src={searchIcon.src} alt="search-icon"/>
                    <input 
                        className="search-bar-input" 
                        type="text" 
                        placeholder="SEARCH" 
                        autoFocus
                        onBlur={closeExpanded}
                    />
                </div>
            )}
        </div>
    );
};

export { Searchbar };
