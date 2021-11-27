import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { titles } from "../utility/text/titles";
import HamburguerButton from "./HamburguerButton";

const HeroSection = (props) => {

    return (
        <>
        <NavBar
            changeLang={props.changeLang}
        />
        <HamburguerButton/>
        <section className="hero_section">
            <img className="hero_img" src="../images/hero.jpg" alt="Lake"/>
            <div className="hero_logo_wrapper">
                <img className="logo" src="../images/logo.png" alt="logo"></img>
                <button>OUR PRODUCTS</button>
            </div>
                <h1 className="hero_text_banner">{titles[props.language].banner}</h1>
        <div className="hero_scroll_container">
            <h5>SCROLL</h5>
            <img src="../images/arrow-down.svg"/>
        </div>
        <h5 className="hero_copyright"><span>{'\u00A9'}</span> 2021 SINTRA WELCOME CENTRE, TRADEMARKS AND BRAND ARE THE PROPERTY OF THEIR RESPECTIVE</h5>
        <div className="overlay"></div>
        </section>
        </>
    )
  
}

export default HeroSection;