import Hello from "./components/Hello";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hello/>
    </BrowserRouter>
  );
}

export default App;
