
import React, { useState } from "react";
import "./Navbar.css";
import { Menu, MenuIcon } from "lucide-react";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { Close } from "@mui/icons-material";


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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? <Close/> :  <MenuIcon/>}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
