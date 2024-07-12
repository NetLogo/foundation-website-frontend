import "./componentCSS/Footer.css";
import { Button } from "./Button";
import lofiTextLg from "../assets/lofi-text-l.svg";
import lofiTextMed from "../assets/lofi-text-m.svg";
import lofiTextSm from "../assets/lofi-text-s.svg";

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-body">
                <div className="footer-get-cont">
                    <span className="footer-get-text">
                        Get NetLogo and start learning today
                    </span>
                    <Button 
                    colorClass="blue-button"
                    padding="0.875rem 2rem"
                    fontSize="1rem"
                    text="GET NETLOGO"/>

                    <Button colorClass="light-button" 
                    padding="0.875rem 2rem"
                    fontSize="1rem"
                    text="DONATE"/>
                </div>

                <div className="footer-line">
                </div>
                
                <div className="footer-content">
                    <div className="footer-content-row">
                        <div className="footer-row-front">
                            <div className="footer-row-front-title">
                                LOGO
                            </div>
                            <div className="footer-row-front-logo">
                                <img src={lofiTextLg.src}/>
                                <img src={lofiTextMed.src}/>
                                <img src={lofiTextSm.src}/>
                            </div>
                        </div> 

                        <div className="footer-content-row-back">
                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> About </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> Visions </span>
                                    <span> Governance </span>
                                    <span> History </span>
                                    <span> In Press </span>
                                    <span> Annual Report </span>
                                </div>
                            </div>
                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> Products </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> NetLogo Web </span>
                                    <span> NetLogo APP </span>
                                    <span> Turtle Universe </span>
                                    <span> Others </span>
                                </div>
                            </div>

                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> Learning </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> Courses & Tutorials </span>
                                    <span> Beginners’ Dictionary </span>
                                    <span> Learning Websites </span>
                                    <span> FAQ </span>
                                </div>
                            </div>

                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> Docs </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> User Guides </span>
                                    <span> Dictionary </span>
                                    <span> Extensions </span>
                                    <span> Contributor Guides </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content-row">
                        <div className="footer-row-front">
                        </div> 
                        <div className="footer-content-row-back">
                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> Models </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> Models Library </span>
                                    <span> Modeling Commons </span>
                                    <span> Community Models </span>
                                    <span> Websites </span>
                                </div>
                            </div>
                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> Community </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> Discourse </span>
                                    <span> Feedback </span>
                                    <span> Bug Report </span>
                                    <span> GitHub </span>
                                </div>
                            </div>

                            <div className="footer-content-row-vert-cont">
                                <div className="footer-content-row-vert-header">
                                    <span> News </span>
                                </div>

                                <div className="footer-content-row-vert-content">
                                    <span> Competitions </span>
                                    <span> Upcopming Conferences </span>
                                    <span> Workshops </span>
                                    <span> Publications </span>
                                </div>
                            </div>
                            <div className="footer-content-row-vert-cont">
                            </div>
                        </div>
                    </div>

                    <div className="footer-content-end-cont">
                        <img src={lofiTextMed.src}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }
