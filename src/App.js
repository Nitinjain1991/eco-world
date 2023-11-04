import "./App.css";
import AboutUs from "./pages/AboutUs";
import Campus from "./pages/Campus";
import Connectivity from "./pages/Connectivity";
import Footer from "./pages/Footer";
import TechForward from "./pages/TechForward";
import SliderComponent from "./pages/slider";

function App() {
  return (
    <div className="App">
      {/* <Connectivity /> */}
      <Campus />
      {/* <SliderComponent /> */}
      {/* <TechForward /> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
