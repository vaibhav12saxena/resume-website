// App.js (Main component)
import React from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Journey from "./components/journey/journey";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Work />
      <Journey />
      <Contact />
    </div>
  );
};

export default App;
