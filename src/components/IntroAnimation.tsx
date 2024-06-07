import React, { useState, useEffect } from "react";
import { DemoDisplay } from "./DemoDisplay";
import "./componentCSS/IntroAnimation.css";
import visualIcon from "../assets/visual.svg";
import easyIcon from "../assets/easy-learn.svg";
import powerIcon from "../assets/power-extensible.svg";
import crossPlatformIcon from "../assets/cross-platform.svg";

const IntroAnimation = () => {
    const [currentTab, setCurrentTab] = useState(0);

	useEffect(() => {
	  console.log('currentTab:', currentTab);
	  const timer = setTimeout(() => {
	    setCurrentTab((prevTab) => (prevTab + 1) % 4);
	  }, 4000);
	
	  return () => {
	    clearTimeout(timer);
	  };
	}, [currentTab]);

    const handleTabClick = (tab: number) => {
        setCurrentTab(tab);
    };

    return (
        <div className="intro-anim-cont">
            <div className="intro-anim-options">
                <div
                    className={`intro-anim-option ${currentTab === 0 ? "current-tab" : ""}`}
                    onClick={() => handleTabClick(0)}
                    style={{
                        animationDelay: "1500ms",
                        animationTimingFunction: "ease-out",
                        animationDuration: "300ms",
                    }}
                >
                    <div className="intro-anim-text-icon">
                        <div className={`intro-anim-icon ${currentTab === 0 ? "current-tab-icon" : ""}`}>
                            <img src={visualIcon.src} alt="Visual Icon" />
                        </div>
                        <span className={`intro-anim-text ${currentTab === 0 ? "current-tab-text" : ""}`}>Real-time Visualization</span>
                    </div>
                </div>
                <div
                    className={`intro-anim-option ${currentTab === 1 ? "current-tab" : ""}`}
                    onClick={() => handleTabClick(1)}
                    style={{
                        animationDelay: "1500ms",
                        animationTimingFunction: "ease-out",
                        animationDuration: "300ms",
                    }}
                >
                    <div className="intro-anim-text-icon">
                        <div className={`intro-anim-icon ${currentTab === 1 ? "current-tab-icon" : ""}`}>
                            <img src={easyIcon.src} alt="Easy Icon" />
                        </div>
                        <span className={`intro-anim-text ${currentTab === 1 ? "current-tab-text" : ""}`}>Easy to Learn</span>
                    </div>
                </div>
                <div
                    className={`intro-anim-option ${currentTab === 2 ? "current-tab" : ""}`}
                    onClick={() => handleTabClick(2)}
                    style={{
                        animationDelay: "1500ms",
                        animationTimingFunction: "ease-out",
                        animationDuration: "300ms",
                    }}
                >
                    <div className="intro-anim-text-icon">
                        <div className={`intro-anim-icon ${currentTab === 2 ? "current-tab-icon" : ""}`}>
                            <img src={powerIcon.src} alt="Power Icon" />
                        </div>
                        <span className={`intro-anim-text ${currentTab === 2 ? "current-tab-text" : ""}`}>Powerful & Extensible</span>
                    </div>
                </div>
                <div
                    className={`intro-anim-option ${currentTab === 3 ? "current-tab" : ""}`}
                    onClick={() => handleTabClick(3)}
                    style={{
                        animationDelay: "1500ms",
                        animationTimingFunction: "ease-out",
                        animationDuration: "300ms",
                    }}
                >
                    <div className="intro-anim-text-icon">
                        <div className={`intro-anim-icon ${currentTab === 3 ? "current-tab-icon" : ""}`}>
                            <img src={crossPlatformIcon.src} alt="Cross-Platform Icon" />
                        </div>
                        <span className={`intro-anim-text ${currentTab === 3 ? "current-tab-text" : ""}`}>Cross-Platform</span>
                    </div>
                </div>
            </div>
            <DemoDisplay/>
        </div>
    );
};

export { IntroAnimation };

