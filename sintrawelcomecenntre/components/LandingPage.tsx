import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";
// import Services from "./services";
import Form from "./Form";
import Gallery from "./Gallery";
import Maps from "./Maps";
import CookiePolicy from "./CookiePolicy";
import { Language } from "../utility/types/types";

const LandingPage = () => {
  const [lang, setLang] = useState<Language>("en");
  const [cookie, setCookie] = useState<string>();
  const changeLanguage = (language: Language) => setLang(language);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const hasSignedCookiePolicy =
      localStorage.getItem("cookie_policy") || "false";
    if (!hasSignedCookiePolicy) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    }
    setCookie(hasSignedCookiePolicy);
  }, []);

  const setCookieFromComponent = () => {
    localStorage.setItem("cookie_policy", "true");
    setCookie("true");
  };

  useEffect(() => {
    const partnerKey = "50612DE8-8213-43F8-8ACC-74C297D56798";
    const partnerSecret = "5D3FB284-6454-482A-B038-EB32FC21095B";

    // Create headers with the Partner Key and Partner Secret
    const headers = new Headers({
      client_id: partnerKey,
      client_secret: partnerSecret,
    });

    // Make the GET request
    fetch("https://ticketsapiqa.parquesdesintra.pt/api/event/getevents", {
      method: "GET",
      mode: "no-cors",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log("here", events);
  return (
    <>
      <div className="App">
        {!cookie && (
          <CookiePolicy
            language={lang}
            setLocalStorage={setCookieFromComponent}
          />
        )}
        <HeroSection changeLang={changeLanguage} language={lang} />
        <Products language={lang} />
        <Maps language={lang} />
        <Gallery language={lang} />
        <Form language={lang} />
        <Footer language={lang} />
      </div>
    </>
  );
};

export default LandingPage;
