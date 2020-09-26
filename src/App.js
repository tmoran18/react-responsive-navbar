import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
};

export default App;
