import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/NavButton.css";

export default function NavButton() { 

    const [expand, setExpand] = useState(false);

    function handleButtonClick() {
        setExpand(!expand);
        event.stopPropagation();
        console.log("button clicked");
      }

    return (
        <div className="nav-button">
            <div className="button">
                <img src="nav-button.png" className={expand ? "button-expanded" : "not-expanded"} width="20" height="20" onClick={handleButtonClick}></img>
            </div>
            {expand && 
            <div className="expanded">
                <Link to="/">Home</Link>
                <Link to="/project-page">Projects</Link>
                <Link to="/about-me">About Me</Link>
                <a href='resume.pdf'>Resume</a>
            </div>}
        </div>
    )
}