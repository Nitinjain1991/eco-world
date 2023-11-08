import "./App.css";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import Campus from "./pages/Campus";
import Connectivity from "./pages/Connectivity";
import InspirationalSpaces from "./pages/InspirationalSpaces";
import TechForward from "./pages/TechForward";
import SliderComponent from "./pages/slider";
import SustainabilityWellness from "./pages/SustainabilityWellness";
import TermsCondition from "./pages/Terms&Condition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetInTouch from "./pages/GetInTouch";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import MediaCentre from "./pages/MediaCentre";
import FirstEvents from "./pages/FirstEvents";
import SecondEvents from "./pages/SecondEvents";
import React, { useEffect } from "react";

function App() {
   const location = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Campus />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Campus" element={<Campus />} />
        <Route path="/Connectivity" element={<Connectivity />} />
        <Route path="/InspirationalSpaces" element={<InspirationalSpaces />} />
        <Route path="/TechForward" element={<TechForward />} />
        <Route path="/SliderComponent" element={<SliderComponent />} />
        <Route
          path="/SustainabilityWellness"
          element={<SustainabilityWellness />}
        />
        <Route path="/Terms&Condition" element={<TermsCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
        <Route path="/MediaCentre" element={<MediaCentre />} />
        <Route path="/FirstEvents" element={<FirstEvents />} />
        <Route path="/SecondEvents" element={<SecondEvents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
