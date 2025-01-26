import { useState, useEffect, type Dispatch } from "react";
import { DemoDisplay } from "./demo-display";
import "./styles/intro-splash.css";
import type { IntroSplashEntry } from "../../utils/api";

interface IntroSplashProps {
  page_data: IntroSplashEntry[];
}

interface IntroTabProps {
  title: string;
  tab_number: number;
  current_tab: number;
  icon_key: string;
  click_handler: (tab: number) => void;
}

const IntroTab = ({
  title,
  tab_number,
  icon_key,
  current_tab,
  click_handler,
}: IntroTabProps) => {
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className={`${current_tab === tab_number ? "current-tab" : ""}`}>
      <div
        className={`intro-anim-option `}
        onClick={() => click_handler(tab_number)}
        style={{
          animationDelay: "1500ms",
          animationTimingFunction: "ease-out",
          animationDuration: "300ms",
        }}
      >
        <div className="intro-anim-text-icon">
          <div
            className={`intro-anim-icon ${current_tab === tab_number ? "current-tab-icon" : ""}`}
          >
            <img
              src={`${backend_url}/assets/${icon_key}`}
              alt="Visual Icon"
            />
          </div>
          <span
            className={`intro-anim-text ${current_tab === tab_number ? "current-tab-text" : ""}`}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

const IntroAnimation = ({ page_data }: IntroSplashProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  // const [variable name, variable changing function] = useState(starting value)
  //

  // Effect to handle tab switching
  //example of useeffect, run once
  //
  useEffect(() => {
    const tabTimer = setTimeout(() => {
      setCurrentTab((prevTab) => (prevTab + 1) % 4);
    }, 4000);

    return () => {
      clearTimeout(tabTimer);
    };
  }, [currentTab]);
  // Dependency array
  // [] - Only runs on mount
  // [currentTab] - Runs every time that the value of currentTab changes
  // useeffect and usestate

  const handleTabClick = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className="intro-anim-cont">
      <div className="intro-anim-options">
        {page_data.map((entry, index) => (
          <IntroTab
            key={entry.id}
            title={entry.title}
            tab_number={index}
            icon_key={entry.icon}
            current_tab={currentTab}
            click_handler={handleTabClick}
          />
        ))}
      </div>
      <DemoDisplay
        demo={page_data[currentTab]}
        currentTab={currentTab}
        isLastTab={currentTab == page_data.length - 1}
      />
    </div>
  );
};

export { IntroAnimation };
