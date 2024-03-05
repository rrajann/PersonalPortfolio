import "../css/ProjectPage.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import React, { useEffect, useState} from "react";
import data from "../projects.json";
import Project from "./Project";
import ImageSlideShow from "./ImageSlideshow";

export default function ProjectPage() {

    const [displayNavButton, setNavButton] = useState(false);
    
    useEffect(() => {
    const checkScroll = () => {
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
                <Link to="/about-me">About me</Link>
                <a href='resume.pdf'>Resume</a>
            </div>
            <div className={displayNavButton ? "nav-visible" : "nav-invisible"}>
                <NavButton></NavButton>
            </div>
            <h1>Projects</h1>
            <div className="display-box">
                {data.projects.map(project => 
                    {return <Project id={project.name} imgSrc={project.img} 
                    projectName={project.name} projectDescription={project.description} 
                    skills={project.skills} documentation={project.documentation} demo={project.demo}></Project>})}
            </div>
            <div className="footer">
                Designed, programmed and published by Rajan Sapkota
            </div>
        </div>
    )
}