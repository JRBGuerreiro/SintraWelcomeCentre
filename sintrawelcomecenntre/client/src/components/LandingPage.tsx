import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Form from "./Form";
import Gallery from "./Gallery";
import Maps from "./Maps";
import CookiePolicy from "./CookiePolicy";

const LandingPage = () => {

    const [lang, setLang] = useState<string>("en");
    const [cookie, setCookie] = useState<string>();
    const changeLanguage = (language: string) => setLang(language)

    useEffect(() => {
      const hasSignedCookiePolicy = localStorage.getItem("cookie_policy") || "false";
      if(!hasSignedCookiePolicy) { 
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      };
      setCookie(hasSignedCookiePolicy)
    }, [])

    const setCookieFromComponent = () => {
      debugger;
      localStorage.setItem("cookie_policy", "true");
      setCookie("true");
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