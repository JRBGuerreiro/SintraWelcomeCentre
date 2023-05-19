import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TukTukTours from "./components/TukTukTours";
import BycicleTours from "./components/BicycleTours";
import WalkingTours from "./components/WalkingTours";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Maps from "./components/Maps";
import PrivacyPolicy from "./components/PrivacyPolicy";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path='tuktuktours' element={<TukTukTours/>}/>
        <Route path='bycicletours' element={<BycicleTours/>}/>
        <Route path='walkingtours' element={<WalkingTours/>}/>
        <Route path='privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/aboutus' component={AboutUs}/>
        <Route path='/product' component={Products}/>
        <Route path='/places' component={Gallery}/>
        <Route path='/maps' component={Maps} />
        <Route path='/contact' component={Form}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);