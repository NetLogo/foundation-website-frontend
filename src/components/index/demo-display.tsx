import { useState, useEffect } from "react";
import "./styles/demo-display.css";
import type { IntroSplashEntry } from "../../utils/api";
import ReactMarkdown from "react-markdown";

//
interface DemoDisplayProps {
  demo: IntroSplashEntry; // content for each demo in the tab
  currentTab: number; // current tab number (index of the demo we are llooking at)
  isLastTab: boolean; // boolean to check if we are on the last tab
}

const DemoDisplay = ({ demo, currentTab, isLastTab }: DemoDisplayProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(demo);

  const { description, demo_image, background } = demo;

  useEffect(() => {
    if (demo !== currentDemo) {
      setIsChanging(true);
      const timer = setTimeout(() => {
        setCurrentDemo(demo);
        setIsChanging(false);
      }, 150); // Matches the duration of the fade-out animation

      return () => clearTimeout(timer);
    }
  }, [demo]);

  let additonalStyle: string = "";

  // This is to account for the css of the demo when we are sel;ecting the first or last demo tab
  if (currentTab === 0) {
    additonalStyle = "0px 10px 10px 10px";
  } else if (isLastTab) {
    additonalStyle = "10px 10px 10px 0px";
  }
  const backend_url = import.meta.env.PUBLIC_BACKEND_URL;
  return (
    <div className="demo-display" style={{ borderRadius: `${additonalStyle}` }}>
      <div className={`demo-content ${isChanging ? "fade-out" : ""}`}>
        <div className="intro-demo">
          <img
            className="demo-img"
            src={`${backend_url}/assets/${demo_image.id}`}
            alt="Visualization Demo"
          />
        </div>
        <span className="demo-display-text">
          <ReactMarkdown>{description}</ReactMarkdown>
          
          </span>
      </div>
    </div>
  );
};

export { DemoDisplay };
