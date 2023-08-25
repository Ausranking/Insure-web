import Hello from "./components/Hello";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div id="App-wrapper">
        <Navbar/>
      </div>
    </BrowserRouter>
  );
}

export default App;

