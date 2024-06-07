import * as React from "react";
import "./componentCSS/Header.css";
import { Searchbar } from "./Searchbar";
import blueEllipse from "./../assets/blue-ellipse.svg";
import netlogoicon from "../assets/netlogo.svg";
import dropdownIcon from "../assets/dropdown-icon.svg";

const Header = ({}) => {
    return (
        <div className="netlogo-header">
            <div className="header-action-bar">
                <div className="header-action-cont">
                    <div className="netlogo-icon-cont"> 
                        <img className="icon" src={blueEllipse.src}/>
                        <img className="icon" src={netlogoicon.src}/>
                    </div>
                    <div id="netlogo-title" className="header-action"> NetLogo </div>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> Products </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> Learning </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> Docs </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> Models </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> News  </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> Community </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <div className="header-action-cont">
                    <div className="header-action"> About  </div>
                    <img className="dropdown-icon" src={dropdownIcon.src}/>
                </div>
                <Searchbar/>
            </div>
        </div>
    )
}

export { Header } 
