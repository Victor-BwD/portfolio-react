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
            <p>I'm a person who decides to make his love for technology his livelihood. <br /> <br /> I study digital games at college, 
                I'm self-taught and I'm always looking to learn more and more about the world of technology and the world as it is.</p>
                <div className="container">
                    <div className="skills-container">
                        <h2 className="sub-title-skills">Skills</h2>
                        <p className="skill-text">Some of the programming languages, tools and other technologies I've had contact with:</p>
                        <ul className="techs">
                            <li className="techs">
                                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
                                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="ts" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" /><br></br>
                                <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="next" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969346.png" alt="Unity" />
                                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="python" />
                                <img src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png" alt="c#" />
                                <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="java" />
                                <img src="http://rust-lang.org/logos/rust-logo-512x512.png" alt="rust" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="mysql" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma" />
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="github" />
                            </li>
                        </ul>
                    </div>
                    <p>Why don't we chat?</p>
                </div>
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
