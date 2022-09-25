import React from "react"
import "./Skills.css"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";


function Skills() {
    return (
        <div>
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
        
    )
}
export default Skills
