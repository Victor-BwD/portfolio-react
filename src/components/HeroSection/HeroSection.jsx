import "./style.css";

import React from 'react'

import IntoImage from "../../assets/IntroImage.jpg"
import Photo from "../../assets/Photo.jpg"
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-image" src={IntoImage} alt="Intro img"></img>
        </div>
        <div className="content">
            <img className="intro-photo" src={Photo} alt="Victor"></img>
            <p>Hi, I'M A DEVELOPER</p>
            <h1>Game and Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <a href="https://wa.me/5551986537959" target="_blank" rel="noopener noreferrer" className="btn btn-light">Contact</a>
            </div>
        </div>
    </div>
  )
}
