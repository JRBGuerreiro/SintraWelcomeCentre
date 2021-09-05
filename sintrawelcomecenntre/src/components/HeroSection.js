import React from "react";
import heroImage from "../images/hero.jpg"
import logo from "../images/logo.png"

const HeroSection = () => {
    return (
        <section className="hero_section">
            {/* <img className="hero_img" src={heroImage} alt="Lake"/> */}
                <img src={logo} alt="logo"></img>
                <h1>Coming Soon</h1>
            {/* <nav className = "hero_nav">
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Quem Somos</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div className="hero_overlay"></div> */}
        </section> 
    )
  
}

export default HeroSection;