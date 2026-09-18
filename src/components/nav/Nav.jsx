import React, { useState } from "react";
import "./nav.css";

import { FaHome } from "react-icons/fa";
import { MdOutlineRecommend, MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
        aria-label="Home"
      >
        <FaHome />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        aria-label="Skills"
      >
        <GiSkills />
      </a>

      <a
        href="#testimonial"
        onClick={() => setActiveNav("#testimonial")}
        className={activeNav === "#testimonial" ? "active" : ""}
        aria-label="Testimonials"
      >
        <MdOutlineRecommend />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
