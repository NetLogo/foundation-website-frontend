import { IntroAnimation } from "./IntroAnimation";
import { Button } from "./Button";
import "./componentCSS/Intro.css";

const Intro = ({}) => {
    return (
        <div className="intro">
            <div className="intro-title-text-cont">
            	<div className="intro-title">
                	<pre>
	Understanding Complex Systems with{'\n'}
			Agent-Based Modeling
                	</pre>
            	</div>
            	<div className="intro-text">
                	<p>NetLogo is a multi-agent programmable modeling environment. It is used by many hundreds of thousands of students, teachers, and{'\n'}researchers worldwide. It also powers HubNet participatory simulations. It is authored by Uri Wilensky and developed at the CCL.</p>
            	</div>
            </div>
            <IntroAnimation/>
            <div className="intro-btn-cont">
                <Button
                colorClass="blue-button"
                padding="1rem 3rem"
                fontSize="1.125rem"
                text="GET NETLOGO"/> 
                <Button
                colorClass="light-button"
                padding="1rem 3rem"
                fontSize="1.125rem"
                text="LEARN MORE"/>
            </div>
        </div>
    )
}

export { Intro }
