
import React, { useState } from "react";
import "./Navbar.css";
import { Menu, MenuIcon } from "lucide-react";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { Close } from "@mui/icons-material";
import ContactMe from "../../contactMe/ContactMe";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="name">Salman Salim</div>
          <ul>
            <li>
              <a  onClick={() => {document.getElementById('Hero').scrollIntoView({behavior:"smooth"})}} className="menu-item">Home</a>
            </li>
            <li>
              <a onClick={() => {document.getElementById('Skills').scrollIntoView({behavior:"smooth"})}} className="menu-item">Skills</a>
            </li>
            <li>
              <a onClick={() => {document.getElementById('Project').scrollIntoView({behavior:"smooth"})}} className="menu-item">Project</a>
            </li>
            <li>
              <a onClick={() => {document.getElementById('Contact').scrollIntoView({behavior:"smooth"})}}  className="menu-item">Contact</a>
            </li>
            <button className="contact-btn" onClick={() => {document.getElementById('Contact').scrollIntoView({behavior:"smooth"})}}>Hire Me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? <Close/> :  <MenuIcon/>}
          </button>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
