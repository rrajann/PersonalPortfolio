
import React, { useState } from "react";
import "../css/Project.css";
import ImageSlideShow from "./ImageSlideshow";

export default function Project({ imgSrc, projectName, projectDescription, documentation, demo, skills }) {

    return (
        <div className="project-individual">
            <div className="image">
                <ImageSlideShow listOfImages={imgSrc}></ImageSlideShow>
            </div>
            <div className="project-individual body" id="pro-body">
                <h2 className="title">{projectName}</h2>
                <h5 className="skills">{skills}</h5>
                <div className="description" id="project-desc">{projectDescription}</div>
                <div className="links">
                    <div className="parent-link">
                        {demo ? <a className="link" id="demo" href={demo} target="_blank">Demo</a> : <div>Demo Not Available</div>}
                    </div>
                    <div className="parent-link">
                        {documentation ? <a className="link" id="documentation" href={documentation} target="_blank" >Documentation</a> : <div>Not open-source</div>}
                        {/* {!documentation &&
                        <div>Documentation Not Available</div>} */}
                    </div>
                </div>
            </div>
        </div>
    )
}