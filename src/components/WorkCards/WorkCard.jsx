import "./style.css";

import React from 'react'
import { NavLink } from "react-router-dom";

export const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src="https://img.itch.zone/aW1nLzgxOTQ1NDEucG5n/347x500/8oHrvl.png" alt="image"></img>
                <h2 className="project-title">Project Title</h2>
                <div className="project-details">
                    <p>This is a para</p>
                    <div className="project-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
