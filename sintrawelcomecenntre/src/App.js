import { useState } from "react";
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
function App() {

  const [lang, setLang] = useState("GB")

  const changeLanguage = (language) => setLang(language)

  return (
    <div className="App">
     <HeroSection
        changeLang = {changeLanguage}
     />
     <AboutUs 
        language={lang}
     />
    </div>
  );
}

export default App;
