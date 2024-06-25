import { Section } from "./Section.tsx";
import getNetLogo from "../assets/get-netlogo.svg";
import TU from "../assets/TU.svg";
import "./componentCSS/GetNetLogo.css";

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
                                <img className="get-item-img" src={ getNetLogo.src }/>
                                <button className="get-item-button"> GET </button>
                            </div>
                            <span className="get-item-title"> NetLogo Desktop </span>
                            <span className="get-item-descript"> Agent-based modeling environment for simulating natural and social phenomena. </span>
                        </div>
                        <div className="get-item"> 
                            <div className="get-item-header">
                                <img className="get-item-img" src={ getNetLogo.src }/>
                                <button className="get-item-button"> GET </button>
                            </div>
                            <span className="get-item-title"> NetLogo Web </span>
                            <span className="get-item-descript"> Includes the same core features as NetLogo but runs in a web browser, making it easy to incorporate into educational materials. </span>
                        </div>
                        <div className="get-item"> 
                            <div className="get-item-header">
                                <img className="get-item-img" src={ TU.src }/>
                                <button className="get-item-button"> GET </button>
                            </div>
                            <span className="get-item-title"> Turtle Universe </span>
                            <span className="get-item-descript"> Brings the limitless power of computational modeling to smartphones and tablets of young students and educators. </span>
                        </div>
                    </div>

                }
            />
        </div>
    );
}

export { GetNetLogo };
