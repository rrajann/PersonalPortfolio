
import React, { useState } from "react";
import "../css/Project.css";

export default function Project({ imgSrc, projectName, projectDescription, documentation, demo, skills }) {

    return (
        <div className="project-individual">
            <div className="image">
                <img src={imgSrc} alt={projectName}></img>
            </div>
            <div className="project-individual body" id="pro-body">
                <h2 className="title">{projectName}</h2>
                <h5 className="skills">{skills}</h5>
                <div className="description" id="project-desc">{projectDescription}</div>
                <div className="links">
                    {/* <a className="link" id="demo">Demo</a> */}
                    <a className="link" id="documentation" href={documentation} target="_blank" >Documentation</a>
                </div>
            </div>
        </div>
    )
}