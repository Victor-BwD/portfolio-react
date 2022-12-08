import "./style.css";

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="info">
                <div className="location">
                    <FaHome className="FaHome" size={20} style={{color: "white", marginLeft: "1rem", marginRight:"1rem"}}/>
                    <div>
                        <p>Rio Grande do Sul, &nbsp;</p>
                        <p>Brazil</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "white",  marginRight:"1rem"}}/>
                        +55 51 986537959
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "white",  marginRight:"1rem"}}/>
                        victor.bogdanowdornelles@gmail.com
                    </h4>
                </div>
            </div>
            <div className="below-info">
                <div className="social">
                    <a href="https://www.facebook.com/victor.bogdanowdornelles" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "2rem", marginBottom:"10px"}} />
                    </a>

                    <a href="https://www.linkedin.com/in/victorbwd/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight: "2rem", marginBottom:"10px"}} />
                    </a>
                    
                    <a href="https://github.com/Victor-BwD" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color:"#fff", marginRight: "2rem", marginBottom:"10px"}} />
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}
