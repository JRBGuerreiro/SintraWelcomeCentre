import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TukTukTours from "./components/TukTukTours";
import BycicleTours from "./components/BicycleTours";
import WalkingTours from "./components/WalkingTours";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path='tuktuktours' element={<TukTukTours/>}/>
        <Route path='bycicletours' element={<BycicleTours/>}/>
        <Route path='walkingtours' element={<WalkingTours/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
