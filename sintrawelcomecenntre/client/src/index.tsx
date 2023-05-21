import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TukTukTours from "./pages/tuktuks/TukTukTours";
import BycicleTours from "./pages/e-bikes/BicycleTours";
import WalkingTours from "./pages/walking-tours/WalkingTours";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Link as ScrollLink } from 'react-scroll'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path='tuktuktours' element={<TukTukTours/>}/>
        <Route path='bycicletours' element={<BycicleTours/>}/>
        <Route path='walkingtours' element={<WalkingTours/>}/>
        <Route path='privacypolicy' element={<PrivacyPolicy/>}/>
    </Routes>
    <ScrollLink to="aboutUs" smooth={true} duration={500}/>
    <ScrollLink to="products" smooth={true} duration={500}/>
    <ScrollLink to="gallery" smooth={true} duration={500}/>
    <ScrollLink to="maps" smooth={true} duration={500}/>
    <ScrollLink to="form" smooth={true} duration={500}/>
  </BrowserRouter>,
  rootElement
);
