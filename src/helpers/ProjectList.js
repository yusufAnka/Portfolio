import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.png";
import Proj5 from "../assets/proj5.png";
import Proj6 from "../assets/proj6.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";

export const ProjectList = [
  {
    name: "Decagon fellowship programme portal",
    image: Proj1,
    skills: "Typescript, React, Express, MongoDB, CSS",
    link: <a href="https://fellowship.decagonhq.dev/engineer/login">Click here</a>,
    github: <a href="" alt="Privacy"><div className="github"><GitHubIcon /></div></a>
  },
  {
    name: "Decagon Accessified Exam portal",
    image: Proj2,
    skills: "Typescript, Express, MongoDB, Ejs,CSS",
    link: <a href="https://fellowship.decagonhq.dev/engineer/login">Click here</a>,
    github: <a href="https://github.com/yusufAnka/Accessified" alt="Privacy"><div className="github"><GitHubIcon /></div></a>
    
  },
  {
    name: "Score Card - Decagon",
    image: Proj3,
    skills: "Typescript, React, Express, Node.js, MongoDB",
    link: <a href="https://astonishing-souffle-b0fb04.netlify.app/login">Click here</a>,
    github: <a href="" alt="Privacy"><div className="github"><GitHubIcon /></div></a>
  },
  {
    name: "T.M.B Ecommerce Website",
    image: Proj4,
    skills: "React, Node.js, MongoDB",
    link: <a href="https://tmb-catalogue.herokuapp.com/">Click here</a>,
    github: <a href="https://github.com/yusufAnka/TMB-catalogue" alt="Privacy"><div className="github"><GitHubIcon /></div></a>
  },
  
  {
    name: "Food Recipe",
    image: Proj5,
    skills: "Ejs,Node.js",
    link: <a href="https://fellowship.decagonhq.dev/engineer/login">Click here</a>,
    github: <a href="" alt="Privacy"><div className="github"><GitHubIcon /></div></a>
  },
  {
    name: "Dashboard Visualizer",
    image: Proj6,
    skills: "JavaScript,HTML,CSS",
  },
  {
    name: "Student Service - USSD",
    image: Proj6,
    skills: "USSD API, Network Service Provider, PHP",
  },
];
