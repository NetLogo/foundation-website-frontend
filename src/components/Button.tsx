import React from "react";
import buttonIcon from "../assets/more-icon.svg";
import "./componentCSS/Button.css";

interface ButtonProps {
    colorClass: string, /** one of blue-button or light-button **/
    padding: string, // css padding 
    fontSize: string, // css font size 
    text: string,
    hasIcon?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Correct typing for onClick
}

const Button = (props: ButtonProps) => {
    const {
        colorClass,
        padding,
        fontSize,
        text,
        hasIcon = false,
        onClick = () => console.log(`${text} pressed`), // Set default value here
    } = props;

    const style = {
        padding,
        fontSize,
    };

    return (
        <button className={`button ${colorClass}`} style={style} onClick={onClick}>
            <span> {text} </span>
            { hasIcon &&
                <img src={buttonIcon.src} className="button-icon"/>
            }
        </button>
    );
};

export { Button };

