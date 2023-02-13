import React from 'react';
import NavBar from './NavBar';
import HamburguerButton from './HamburguerButton';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <HamburguerButton />
      <section className="hero_section">
        <Image className="hero_img" src="../images/hero.jpg" alt="Lake" />
        <div className="hero_logo_wrapper">
          <Image className="logo" src="../images/logo.png" alt="logo" />
        </div>
        <h1 className="hero_text_banner"></h1>
        <div className="hero_scroll_container">
          <h5>SCROLL</h5>
          <Image src="../images/arrow-down.svg" alt="logo" />
        </div>
        <h5 className="hero_copyright">
          <span>{'\u00A9'}</span> 2021 SINTRA WELCOME CENTRE, TRADEMARKS AND
          BRAND ARE THE PROPERTY OF THEIR RESPECTIVE
        </h5>
        <div className="overlay"></div>
      </section>
    </>
  );
};

export default HeroSection;
