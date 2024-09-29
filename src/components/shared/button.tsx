
import { useState } from "react";
import buttonIcon from "../../assets/more-icon.svg";
import "./styles/button.css";

interface ButtonProps {
    colorClass: string, /** one of blue-button or light-button **/
    padding: string, // css padding 
    fontSize: string, // css font size 
    text: string,
    hasIcon?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties; // Add style prop
}

const Button = (props: ButtonProps) => {
    const {
        colorClass,
        padding,
        fontSize,
        text,
        hasIcon = false,
        onClick = () => console.log(`${text} pressed`),
        style = {}, // Set default value here
    } = props;

    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle = {
        padding,
        fontSize,
    };

    return (
        <button
            className={`button ${colorClass}`}
            style={{ ...defaultStyle, ...style }} // Merge styles here
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span> {text} </span>
            {hasIcon && (
                <img
                    src={buttonIcon.src}
                    className="button-icon"
                    style={{ filter: isHovered ? "invert(1)" : "invert(34%) sepia(93%) saturate(3432%) hue-rotate(202deg) brightness(94%) contrast(98%)" }}
                />
            )}
        </button>
    );
};

export { Button };
