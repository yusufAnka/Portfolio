import React from "react"
import CV from "../../assets/CV.pdf"
import "./Cv.css"


function  Cv () {
    return (
        <div className="CV">
            <a href = {CV} download className="btn">Download CV</a>
            <span className="VL"></span>
            <a href = "#container" className="btn btn-primary">Hire Me</a>
        </div>
        
    )
}
export default Cv;