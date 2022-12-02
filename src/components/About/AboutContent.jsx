import "./style.css";

import React from 'react'
import UnityImage from "../../assets/Unity.jpg"
import ReactImage from "../../assets/react-js.png"
import { Link } from "react-router-dom";

export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>A little about me</h1>
            <p>I'm a person who decides to make his love for technology his livelihood.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={UnityImage} alt="Unity" className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={ReactImage} alt="Unity" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}
