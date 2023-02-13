import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Form from "./Form";
import Gallery from "./Gallery";
import Maps from "./Maps";
import CookiePolicy from "./CookiePolicy";

const LandingPage = () => {

    const [lang, setLang] = useState("en");
    const [cookie, setCookie] = useState();
    const changeLanguage = (language) => setLang(language)

    //logic for scroll prevent

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    const preventDefault = (e) => {
      e.preventDefault();
    }

    const preventDefaultForScrollKeys = (e) => {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }
    
    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    const windowRef = window;
    try {
      windowRef.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
      }));
    } catch(e) {}
    
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    
    // call this to Disable
    const disableScroll = () =>  {
      windowRef.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
      windowRef.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      windowRef.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
      windowRef.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
    // call this to Enable
    const enableScroll = () =>  {
      windowRef.removeEventListener('DOMMouseScroll', preventDefault, false);
      windowRef.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
      windowRef.removeEventListener('touchmove', preventDefault, wheelOpt);
      windowRef.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    

    useEffect(() => {
      const hasSignedCookiePolicy = localStorage.getItem("cookie_policy");
      if(!hasSignedCookiePolicy) { 
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      };
      setCookie(hasSignedCookiePolicy)
    }, [])

    const setCookieFromComponent = () => {
      debugger;
      localStorage.setItem("cookie_policy", "true");
      setCookie(true);
      enableScroll();
    }

    return (
            <>
                <div className="App">
                  {!cookie && <CookiePolicy language = {lang} setLocalStorage = { setCookieFromComponent }/>}
                  <HeroSection
                    changeLang = {changeLanguage}
                    language = {lang}
                  />
                    <Products
                    language = {lang}
                    />
                    <Maps 
                      language= {lang}
                    />
                    <Gallery
                       language = { lang }
                    />
                  <Form
                    language= {lang}
                  />
                  <Footer
                    language = { lang }
                  />
                </div>
            </>
            
            )
}

export default LandingPage;