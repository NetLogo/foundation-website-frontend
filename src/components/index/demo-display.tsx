import { useState, useEffect } from 'react';
import './styles/demo-display.css';

interface DemoDisplayProps {
    demo: React.ReactNode,
    descript: string,
}

const DemoDisplay = ({demo, descript}: DemoDisplayProps ) => {
    const [isChanging, setIsChanging] = useState(false);
    const [currentDemo, setCurrentDemo] = useState(demo);
    const [currentDescript, setCurrentDescript] = useState(descript);

    useEffect(() => {
        if (demo !== currentDemo || descript !== currentDescript) {
            setIsChanging(true);
            const timer = setTimeout(() => {
                setCurrentDemo(demo);
                setCurrentDescript(descript);
                setIsChanging(false);
            }, 150); // Matches the duration of the fade-out animation

            return () => clearTimeout(timer);
        }
    }, [demo, descript]);

    return (
        <div className="demo-display">
            <div className={`demo-content ${isChanging ? 'fade-out' : ''}`}>
                {currentDemo}
                <span className="demo-display-text">{currentDescript}</span>
            </div>
        </div>
    )
}

export { DemoDisplay };
