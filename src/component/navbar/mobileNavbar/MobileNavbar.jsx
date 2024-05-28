// MobileNavbar.js
import React from 'react';
import { Menu } from "lucide-react";
import "./MobileNavbar.css"; // Pastikan path ini sesuai

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container">
        <div className="name">Salman Salim</div>
        <ul>
          <li>
            <a href="#" className="menu-item">Home</a>
          </li>
          <li>
            <a href="#" className="menu-item">Skills</a>
          </li>
          <li>
            <a href="#" className="menu-item">Project</a>
          </li>
          <li>
            <a href="#" className="menu-item">Contact</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>Hire Me</button>
        </ul>
        
        
      </div>
    </div>
  );
};

export default MobileNavbar;
