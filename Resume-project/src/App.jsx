// App.js (Main component)
import React from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
// import Home from "./components/home/home";
import Journey from "./components/journey/journey";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Space from "./components/space/space"; // Importing the new Home component

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* <Home /> */}
      <Space />
      <Work />
      <Journey />
      <Contact />
    </div>
  );
};

export default App;
