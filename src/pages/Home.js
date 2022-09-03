import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import img from '../assets/yusuf.jpeg'

function Home() {
  return (
    <div className="home">
      <div className= "content">  
        <div className="about">
        <h2 className=""> Hi, My Name is Yusuf Anka</h2>
        <p className="prompt">
            As a passionate Javascript Engineer with experience in Software
            Engineering, I enjoy implementing light and scalable solutions using
            the best Agile practices for the satisfaction I get by overcoming
            challenges. I am very ﬂexible with different technologies, so I can
            learn and adapt to new environments quickly and build solutions
            around them.
          </p>
        </div>
        <div className="profile">
          <img className="img" src={img} alt="profile"/>
          <p>Hire Me</p>
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
      
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, TailwindCSS, StyledComponents.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB.</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript Python, C.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
