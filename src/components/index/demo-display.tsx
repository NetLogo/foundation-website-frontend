import { useState, useEffect } from "react";
import "./styles/demo-display.css";
import type { IntroSplashEntry } from "../../utils/api";
import visualizationDemo from "../../assets/visualization-demo.svg";
import visualizationImg2 from "../../assets/fire.gif";

interface DemoDisplayProps {
  demo: IntroSplashEntry;
  currentTab: number;
}

const DemoDisplay = ({ demo, currentTab }: DemoDisplayProps) => {
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

  if (currentTab === 0) {
    additonalStyle = "0px 10px 10px 10px";
  } else if (currentTab === 3) {
    additonalStyle = "10px 10px 10px 0px";
  }

  return (
    <div className="demo-display" style={{ borderRadius: `${additonalStyle}` }}>
      <div className={`demo-content ${isChanging ? "fade-out" : ""}`}>
        <div className="intro-demo">
          {background ? (
            <>
              <img src={visualizationDemo.src} alt="Visualization Demo" />
              <img
                src={`https://backend.netlogo.org/assets/${demo_image}`}
                className={`visualization-inner-img`}
                alt="Visualization 1"
              />
            </>
          ) : (
            <img
              className="demo-img"
              src={`https://backend.netlogo.org/assets/${demo_image}`}
              alt="Visualization Demo"
            />
          )}
        </div>
        <span className="demo-display-text">{description}</span>
      </div>
    </div>
  );
};

export { DemoDisplay };
