import "../WorkCards/style.css";
import { WorkCard } from "../WorkCards/WorkCard";
import TopProjectData from "./TopProjectsData"

import React from 'react'

export const TopProjects = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My top 3 projects</h1>
        <div className="project-container">
            {TopProjectData.map((value, index) => {
                return (
                    <WorkCard
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view} 
                    source={value.source}
                    />
                )
            })}
        </div>
    </div>
  )
}
