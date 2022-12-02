import "../WorkCards/style.css";
import { WorkCard } from "../WorkCards/WorkCard";
import WorkCardData from "./WorkCradData"

import React from 'react'

export const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((value, index) => {
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
