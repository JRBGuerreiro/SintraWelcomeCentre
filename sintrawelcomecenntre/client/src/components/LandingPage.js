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
    

    useEffect(() => {
      const hasSignedCookiePolicy = localStorage.getItem("cookie_policy");
      setCookie(hasSignedCookiePolicy)
    }, [cookie])

    const setCookieFromComponent = () => {
      localStorage.setItem("cookie_policy", "true");
      setCookie(true)
    }

    return (
            <>
                <div className="App">
                  {!cookie && <CookiePolicy language = {lang} setLocalStorage = {setCookieFromComponent}/>}
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