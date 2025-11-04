import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - brand / short info */}
        <div className="footer-about">
          <h2>Kazim Saiyed</h2>
          <p>
            MERN Stack Developer passionate about building clean, scalable, and
            modern web applications. Let's connect and bring ideas to life!
          </p>
        </div>

        {/* Middle - navigation links */}
    
        {/* Right side - social media */}
     
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kazim Saiyed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
