import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "./Home.css";
import img from '../../assets/yusuf.jpeg'
import Cv from "../CV/Cv"

function Home() {
  return (
    <div className="home">
      <div className= "content">  
        <div className="profile">
          <img className="img" src={img} alt="profile"/>
          <h2 className="H1"> Hi, My Name is Yusuf Anka</h2>
          <Cv />
          
        </div>
        <div className="about">
        <p className="prompt">
            As a passionate Javascript Engineer with experience in Software
            Engineering, I enjoy implementing light and scalable solutions using
            the best Agile practices for the satisfaction I get by overcoming
            challenges. I am very ﬂexible with different technologies, so I can
            learn and adapt to new environments quickly and build solutions
            around them.
          </p>
        </div>
        <div className="media">
            <a href="https://twitter.com/YusufAnka_">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/yusufanka/">
              <LinkedInIcon />
            </a>
            <a href="https://www.gmail.com/yusufanka54@gmail.com">
              <EmailIcon />
            </a>
            <a href="https://github.com/yusufAnka">
              <GithubIcon />
            </a>
        
        </div>
      </div>
    
    </div>
  );
}

export default Home;
