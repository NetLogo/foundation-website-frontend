import { useState, useEffect } from 'react';
import './styles/demo-display.css';

interface DemoDisplayProps {
    demo: React.ReactNode,
    descript: string,
    currentTab: number
}

const DemoDisplay = ({demo, descript, currentTab}: DemoDisplayProps ) => {
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

    let additonalStyle:string = '';
    
    if (currentTab === 0) {
        additonalStyle = '0px 10px 10px 10px';
    }
    else if (currentTab === 3) {
        additonalStyle = '10px 10px 10px 0px';
    }




    return (
        <div className="demo-display" style = {{borderRadius:`${additonalStyle}`}}>
            <div className={`demo-content ${isChanging ? 'fade-out' : ''}`}>
                {currentDemo}
                <span className="demo-display-text">{currentDescript}</span>
            </div>
        </div>
    )
}

export { DemoDisplay };
