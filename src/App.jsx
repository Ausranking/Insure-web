import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Howwework from "./pages/How we work";
import MidSection from "./components/MidSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <HeroSection />
      <MidSection />
    </BrowserRouter>
  );
}

export default App;
