import React from "react";
import "./Navbar.css";
import { Link } from 'react-scroll'
const Navbar = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  return (
    <div className="sn">
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link to="intro" spy={true} smooth={true}  duration={500} onClick={closeNav}>Intro</Link>
        <Link to="about" spy={true} smooth={true} offset={20} duration={500} onClick={closeNav}>About Me</Link>
        <Link to="ps" spy={true} smooth={true} offset={-90} duration={500} onClick={closeNav}>Proffesioanl Skills</Link>
        <Link to="is" spy={true} smooth={true} offset={-90} duration={500} onClick={closeNav}>Industrial Experience</Link>
        <Link to="project" spy={true} smooth={true} offset={80} duration={500} onClick={closeNav}>Personal Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={20} duration={500} onClick={closeNav}>Contact</Link>
      </div>
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
};

export default Navbar;
