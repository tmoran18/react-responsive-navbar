import React from "react";
import "../styles.css";

const MobileNavbar = () => {
  return (
    <div className="mobileNav_container">
      <img src="./logo.svg" width="50" alt="logo" />
      <img
        className="menu_icon"
        src="./menu_icon.svg"
        alt="hamburger menu icon"
      />
      <div>
        <ul className="mobileNav_menu_list">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
