import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking a link
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="logo">Kazim Portfolio</span>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleScroll("home")}>Home</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("projects")}>Projects</button>
          <button onClick={() => handleScroll("skills")}>Skills</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </div>

        {/* Social Icons */}
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribbble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
