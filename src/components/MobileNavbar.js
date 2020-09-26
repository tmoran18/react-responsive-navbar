import React, { useState } from "react";
import "../styles.css";

const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavisOpen] = useState("false");

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavisOpen(false) : setMobileNavisOpen(true);
  };

  return (
    <nav className="mobileNav_container">
      <img src="./logo.svg" width="50" alt="logo" />
      <img
        className="menu_icon"
        src="./menu_icon.svg"
        alt="hamburger menu icon"
        onClick={handleMobileNavClick}
      />
      <div className="mobileNav_menu_container">
        <ul
          className={`${
            mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
