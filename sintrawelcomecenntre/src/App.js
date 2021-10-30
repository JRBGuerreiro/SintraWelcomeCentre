import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Form from "./components/Form";
function App() {

  const [lang, setLang] = useState("GB")

  const changeLanguage = (language) => setLang(language)

  return (
    <div className="App">
     <HeroSection
        changeLang = {changeLanguage}
     />
      <Products
       language = {lang}
      />
     <AboutUs 
        language={lang}
     />
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
