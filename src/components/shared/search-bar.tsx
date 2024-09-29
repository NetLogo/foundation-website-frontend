import "./styles/search-bar.css";
import searchIcon from "../../assets/search-icon.svg"

const Searchbar = ({}) => {
    return (
        <div className="search-bar">
            <img className="search-bar-icon" src={searchIcon.src} alt="search-icon"/>
            <input className="search-bar-input" type="text" placeholder="SEARCH"/>
        </div>
    )
}

export { Searchbar };
