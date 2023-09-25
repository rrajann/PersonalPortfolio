
import React, { useState } from "react";

export default function Project({ imgSrc, path , projectName , projectDescription }) {

    return (
        <div className="project-individual">
            <img src={imgSrc} alt={projectName}></img>
            <div className="project-individual body">
                <h2>
                <a href={path}>{projectName}</a>
                </h2>
                {projectDescription}
            </div>
        </div>
    )
}