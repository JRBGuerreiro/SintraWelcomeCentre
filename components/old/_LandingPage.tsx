import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Products from './Products';
import Form from './Form';
import Gallery from './Gallery';
import Maps from './Maps';
import CookiePolicy from './CookiePolicy';

const LandingPage = () => {
  const [cookie, setCookie] = useState<boolean>();

  useEffect(() => {
    localStorage.getItem('cookie_policy') ? setCookie(true) : setCookie(false);
    if (!cookie) {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const setCookieFromComponent = () => {
    debugger;
    localStorage.setItem('cookie_policy', 'true');
    setCookie(true);
  };

  return (
    <>
      <div className="App">
        {!cookie && <CookiePolicy setLocalStorage={setCookieFromComponent} />}
        <HeroSection />
        <Products />
        <Maps />
        <Gallery />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
