import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Form from "./components/Form";
import Slider from "./components/Swipper";
import Gallery from "./components/Gallery";
function App() {
  const hideIt = true
  const [lang, setLang] = useState("GB")

  const changeLanguage = (language) => setLang(language)

  return (
    !hideIt ? (
      <div className="App">
       <HeroSection
          changeLang = {changeLanguage}
       />
        <Products
         language = {lang}
        />
        {/* <Slider/> */}
        <Gallery/>
       <AboutUs 
          language={lang}
       />
       <Form/>
       <Footer/>
      </div>
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

export default App;
