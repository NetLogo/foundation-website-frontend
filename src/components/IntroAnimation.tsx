import { useState, useEffect } from 'react';
import { DemoDisplay } from "./DemoDisplay";
import "./componentCSS/IntroAnimation.css";
import visualIcon from "../assets/visual.svg";
import easyIcon from "../assets/easy-learn.svg";
import powerIcon from "../assets/power-extensible.svg";
import crossPlatformIcon from "../assets/cross-platform.svg";
import visualizationDemo from "../assets/visualization-demo.svg";
import easyToLearnDemo from "../assets/easy-to-learn-demo.svg";
import powerfulExtensibleDemo from "../assets/powerful-extensible-demo.svg";
import crossPlatformDemo from "../assets/cross-platform-demo.svg";
import visualizationImg1 from "../assets/visualization-img1.svg";
import visualizationImg2 from "../assets/fire.gif";

const IntroAnimation = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [showFirstImage, setShowFirstImage] = useState(true);

    // Effect to handle tab switching
    useEffect(() => {
        const tabTimer = setTimeout(() => {
            setCurrentTab((prevTab) => (prevTab + 1) % 4);
        }, 4000);

        return () => {
            clearTimeout(tabTimer);
        };
    }, [currentTab]);

    // Effect to handle image switching when currentTab is 0
    useEffect(() => {
        let imgTimer: ReturnType<typeof setInterval>;
        if (currentTab === 0) {
            imgTimer = setInterval(() => {
                setShowFirstImage(prev => !prev);
            }, 2500);
        }

        return () => {
            if (imgTimer) clearInterval(imgTimer); // Clear the interval when the tab changes
        };
    }, [currentTab]); // Dependence on currentTab to reset the timer when the tab changes

    const handleTabClick = (tab: number) => {
        setCurrentTab(tab);
    };

    const getDemoAndDescription = (tab: number) => {
        switch(tab) {
            case 0:
                return {
                    demo: (
                        <div className="intro-demo">
                            <img src={visualizationDemo.src} alt="Visualization Demo" />
                            <img 
                                src={visualizationImg1.src} 
                                className={`visualization-inner-img ${showFirstImage ? '' : 'hidden'}`} 
                                alt="Visualization 1" 
                            />
                            <img 
                                src={visualizationImg2.src} 
                                className={`visualization-inner-img ${showFirstImage ? 'hidden' : ''}`} 
                                alt="Visualization 2" 
                            />
                        </div>
                    ),
                    descript: "NetLogo visualizes agent-based models as they run in real time, which is very important both for learning from existing models and for debugging models as you code them. Above is the visualization of a model of __________ in which _____________"
                };

            case 1:
                return {
                    demo: (
                        <div className="intro-demo">
                            <img src={easyToLearnDemo.src} alt="Visualization Demo" />
                        </div>
                    ),
                    descript: "NetLogo code is designed to read similarly to English, making it easy for English speakers to understand even as novices."
                };

            case 2:
                return {
                    demo: (
                        <div className="intro-demo">
                            <img src={powerfulExtensibleDemo.src} alt="Visualization Demo" />
                        </div>
                    ),
                    descript: "NetLogo models can run simulations with tens of thousands of agents and has many extensions to expand its capabilities, including being able to run Python code within a NetLogo model."
                };

            case 3:
                return {
                    demo: (
                        <div className="intro-demo">
                            <img src={crossPlatformDemo.src} alt="Visualization Demo" />
                        </div>
                    ),
                    descript: "NetLogo Web runs in any web browser and traditional NetLogo runs on all major operating systems so anyone with a computer can use it. "
                };

            default:
                return {
                    demo: null,
                    descript: ""
                };
        }
    };

    const { demo, descript } = getDemoAndDescription(currentTab);

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
            <DemoDisplay 
                demo={demo}
                descript={descript}
            />
        </div>
    );
};

export { IntroAnimation };
