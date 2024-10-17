import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./styles/search-bar.css";
import searchIcon from "../../assets/search-icon.svg"

interface SearchbarProps {
    headerRef: React.RefObject<HTMLDivElement>;
    isCompact: boolean,
    setIsCompact: Function
}

const Searchbar: React.FC<SearchbarProps> = ({ headerRef, isCompact, setIsCompact }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const searchBarRef = useRef<HTMLDivElement>(null);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    var headerWidth = 0
    var searchBarRight = 0

    const checkSize = useCallback(() => {
        if (searchBarRef.current && headerRef.current) {
            headerWidth = headerRef.current.offsetWidth;
            searchBarRight = searchBarRef.current.getBoundingClientRect().right;
            
            if (isCompact) {
                searchBarRight += 5 * 16; 
            }
        }

        const shouldBeCompact = searchBarRight > headerWidth;
        if (shouldBeCompact !== isCompact) {
            setIsCompact(shouldBeCompact);
        }
    }, [headerRef, isCompact, setIsCompact]);
    
    // when you press the searchbar, while compact, it shoudl expand it
    const handleSearchBarClick = () => {
        if (isCompact) {
            setIsExpanded(true); 
            console.log(isExpanded)
        }
    };

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

    return (
        <div ref={searchBarRef} className={`search-bar ${isCompact ? 'compact' : ''}`} onClick={handleSearchBarClick}>
            <img className="search-bar-icon" src={searchIcon.src} alt="search-icon"/>
            {!isCompact && (
                <input className="search-bar-input" type="text" placeholder="SEARCH"/>
            )}
        </div>
    );
};

export { Searchbar };
