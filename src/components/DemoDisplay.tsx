import './componentCSS/DemoDisplay.css';
import visualizationDemo from "../assets/visualization-demo.svg";

interface DemoDisplayProps {
    demo: React.ReactNode,
    descript: string,
}

const DemoDisplay = ({demo, descript}: DemoDisplayProps ) => {
    return (
        <div className="demo-display">
            {demo}
            <span className="demo-display-text"> {descript} </span>
        </div>
    )
}

export { DemoDisplay };
