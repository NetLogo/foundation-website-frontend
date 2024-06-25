import "./componentCSS/WhyNetLogo.css";
import student from "./../assets/student.svg";
import researcher from "./../assets/researcher.svg";

/** Inner component for X tab **/
interface ForTabProps {
    title: string;
    content: string;
}

const ForTab = ({ title, content }: ForTabProps) => {
    return (
        <div className="for-tab">
            <div className="for-tab-inner">
                <div className="for-tab-content">
                    <div className="for-tab-title-cont">
                        <div className="for-tab-icon">
                            <img src={student.src}/>
                        </div>
                        <span className="for-tab-title">{title}</span>
                    </div>
                    <span className="for-tab-text">{content}</span>
			        <button className="learn-more-button"> LEARN MORE </button>	
                </div>
            </div>
        </div>
    );
}

const WhyNetLogo = () => {
    return (
        <div className="why-netlogo-cont">
            <div className="why-title-text-cont">
                <span className="section-title"> Why NetLogo? </span>
                <span className="section-text"> NetLogo powers everyone to learn and create. </span>
            </div>
            <div className="why-netlogo-content">
                <ForTab title="For Students" content="NetLogo provides students with many pre-made models of scientific phenomena they can explore. For those who want to learn to program or create models themselves, NetLogo is very easy to get started with." />
                <ForTab title="For Researchers" content="NetLogo is easy to learn but still very powerful. It is has been used in over 20,000 scientific publications in fields including sociology, ecology, cognitive science, business, and more." />
                <ForTab title="For Educators" content="NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science." />
            </div>
        </div>
    );
}

export { WhyNetLogo }
