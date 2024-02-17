import "../css/AboutMePage.css";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import ImageSlideShow from "./ImageSlideshow";
import images from "../images.json";

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
            <div className="about-me-introduction">
                <div className="container">
                    <img src="about-me-display.jpg"/>
                </div>
                <div className="about-me-description">
                    <p>
                        Hi! My name is Rajan Sapkota and I am currently a third year UBC student studying
                         Computer Science and Business.
                    </p>
                    <p>
                    I love anything fitness related (especially powerlifting, volleyball and basketball), 
                    making random music playlists and implementing polymorphism in assembly (just kidding). I am originally from Nepal, 
                    and lived in the Philippines for 11 years before heading to Vancouver to study Computer Science and Business at UBC.
                     Due to my diverse upbringing, I can get along with pretty much anyone, and I am always open 
                     to new experiences and excited to tackle new challenges.
                    </p>
                    <div className="links" id="about-me-links">
                        <a className="about-me-link" href="https://github.com/rrajann" target="_blank">
                            <img src="github-logo.png" alt="Github" width={50}/>
                        </a>
                        <a className="about-me-link" href="https://www.linkedin.com/in/rajansapkota/" target="_blank">
                            <img src="linkedin-logo.png" alt="Linkedin" width={50}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
                Designed, programmed and published by Rajan Sapkota
            </div>
        </div>
    )
}