import React from "react";
// import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import {FaHome} from "react-icons/fa";
import {MdOutlineRecommend} from "react-icons/md"
import {GiSkills} from "react-icons/gi"
import {MdContactMail} from "react-icons/md"

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <FaHome /> </a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <GiSkills /></a>
        <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}> <MdOutlineRecommend /> </a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail /></a>
      
    </nav>
  );
}

export default Nav;