import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com/YusufAnka_">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/yusufanka/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/yusufAnka">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2022 yumtech.com</p>
    </div>
  );
}

export default Footer;
