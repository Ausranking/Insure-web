import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MidSection from "./components/MidSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <MidSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
