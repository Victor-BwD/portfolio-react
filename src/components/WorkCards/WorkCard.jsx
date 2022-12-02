import "./style.css";

import React from 'react'

export const WorkCard = (props) => {
  return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project img"></img>
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
                <p>{props.text}</p>
                <div className="project-btns">
                    <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
                    <a href={props.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
                </div>
            </div>
        </div>
  )
}
