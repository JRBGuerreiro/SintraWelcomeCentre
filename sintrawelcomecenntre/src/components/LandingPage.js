import React, {useState} from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Form from "./Form";
import Gallery from "./Gallery";

const LandingPage = () => {

    const hideIt = true
    const [lang, setLang] = useState("GB")
    const changeLanguage = (language) => setLang(language)

    return (
        hideIt ? (
            <>
                <div className="App">
                  <HeroSection
                    changeLang = {changeLanguage}
                    language = {lang}
                  />
                    <Products
                    language = {lang}
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
            
            ) : (
              <div style={{width:'100vw', height:'100vh', backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                  <img style={{width:'350px'}} className="logo" src="../images/logo.png" alt="logo"></img>
                  <h1 style={{color: 'white', fontFamily:'"Raleway", sans-serif', textAlign:'center'}}>COMING SOON</h1>
                </div>
              </div>
            )
    )
}

export default LandingPage;