import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo"></div>

      {/* Hamburger Icon (for mobile) */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      {/* <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
         <li><a href="/stories">Personal Stories</a></li>
        <li><a href="/healing-process">Healing Zone</a></li>
        <li><a href="/chatting">Wanna Talk?</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> */}


      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
  <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
  <li><a href="#healing-process" onClick={() => setIsOpen(false)}>Healing Zone</a></li>
  <li><a href="#stories" onClick={() => setIsOpen(false)}>Personal Stories</a></li>
  <li><a href="#chatting" onClick={() => setIsOpen(false)}>Wanna Talk?</a></li>
  <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
</ul>

    </div>
  );
};

export default Navbar;
