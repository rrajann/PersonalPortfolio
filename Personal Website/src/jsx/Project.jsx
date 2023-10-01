
import React, { useState } from "react";
import "../css/Project.css";

export default function Project({ imgSrc, projectName, projectDescription, documentation, demo }) {

    return (
        <div className="project-individual">
            <div className="image">
                <img src={imgSrc} alt={projectName}></img>
            </div>
            <div className="project-individual body">
                <h2 className="title">{projectName}</h2>
                <div className="description">{projectDescription}</div>
                <div className="links">
                    <a className="link" id="demo">Demo</a>
                    <a className="link" id="documentation">Documentation</a>
                </div>
            </div>
        </div>
    )
}