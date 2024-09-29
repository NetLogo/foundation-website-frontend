import { Section } from "../shared/section.js";
import { Button } from "../shared/button.js";
import getNetLogoIcon  from "../../assets/get-netlogo.svg";
import netlogoWebIcon from "../../assets/netlogo-web.svg"
import TU from "../../assets/turtle-universe.svg";
import "./styles/get-netlogo.css";

const GetNetLogo = () => {
    return (
        <div className="get-section">
            <Section 
                sectionTitle="Get NetLogo"
                sectionDescript="There are over xxx products in NetLogo. Find the one that suits your need."
                sectionGap={2.5}
                sectionPaddingBot={3.75}
                backgroundColor="white"
                borderRadius={5}
                moreButton={true}
                body={
                    <div className="get-netlogo-content">
                        <div className="get-item"> 
                            <div className="get-item-header">
                                <img className="get-item-img" src={ getNetLogoIcon.src }/>
                                <Button 
                                colorClass="blue-button"
                                padding="0.75rem 1.5rem"
                                fontSize="0.875rem"
                    text="GET"/>
                            </div>
                            <span className="get-item-title"> NetLogo Desktop </span>
                            <span className="get-item-descript"> A  programmable modeling environment for simulating natural and social phenomena that runs on Mac, Windows, and Linux. This is the most powerful version of NetLogo. </span>
                        </div>
                        <div className="get-item"> 
                            <div className="get-item-header">
                                <img className="get-item-img" src={ netlogoWebIcon.src }/>
                                <Button 
                                colorClass="blue-button"
                                padding="0.75rem 1.5rem"
                                fontSize="0.875rem"
                    text="GET"/>
                            </div>
                            <span className="get-item-title"> NetLogo Web </span>
                            <span className="get-item-descript"> A version of NetLogo that runs in all modern web browsers, without any need for installation. Very useful for embedding in online educational materials.  </span>
                        </div>
                        <div className="get-item"> 
                            <div className="get-item-header">
                                <img className="get-item-img" src={ TU.src }/>
                                <Button 
                                colorClass="blue-button"
                                padding="0.75rem 1.5rem"
                                fontSize="0.875rem"
                    text="GET"/>
                            </div>
                            <span className="get-item-title"> Turtle Universe </span>
                            <span className="get-item-descript"> Powered by the NetLogo engine but with its own unique interface, Turtle Universe brings the limitless power of computational modeling to smartphones and tablets of young students and educators. </span>
                        </div>
                    </div>

                }
            />
        </div>
    );
}

export { GetNetLogo };
