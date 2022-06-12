import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Form from "./Form";
import Gallery from "./Gallery";
import Maps from "./Maps";

const LandingPage = () => {

    const [lang, setLang] = useState("en")
    const changeLanguage = (language) => setLang(language)

    return (
            <>
                <div className="App">
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
                {/* <EventModal
                  language = { lang }
                /> */}
            </>
            
            )
}

export default LandingPage;