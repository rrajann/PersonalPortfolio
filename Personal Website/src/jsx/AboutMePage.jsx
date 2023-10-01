import "../css/AboutMePage.css";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

export default function AboutMePage() {
    const [displayNavButton, setNavButton] = useState(false);
    
    useEffect(() => {
    const checkScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 70) {  // Show NavButton after scrolling 100px
                setNavButton(true);
            } else {
                setNavButton(false);
            }
        };

        window.addEventListener("scroll", checkScroll);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <div className="main">
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/project-page">Projects</Link>
                <a href='resume.pdf'>Resume</a>
            </div>
            <div className={displayNavButton ? "nav-visible" : "nav-invisible"}>
                <NavButton></NavButton>
            </div>
            <h1>About Me</h1>
            <div className="introduction">
                <div className="img">
                </div>
                <div className="description">
                <p>
                    Hi! My name is Rajan Sapkota and I am currently a third year UBC student studying Computer Science and Business. 
                </p>
                <p>
                I love anything fitness related (especially powerlifting, volleyball and basketball), making random music playlists and somethign else. I am originally from Nepal, and lived in the Philippines for 11 years before heading to Vancouver for college. Due to my diverse upbringing, I can get along with pretty much anyone, and am always ready to try new experiences and tackle new challenges.
                </p>
                </div>
            </div>
            <div className="footer">
                Designed, programmed and published by Rajan Sapkota
            </div>
        </div>
    )
}