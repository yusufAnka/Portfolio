import React from "react"
import CV from "../../assets/CV.pdf"


const CTA = () => {
    return (
        <div className="cta">
            <a href = {CV} download className="btn">Download CV</a>
            {/* <span className="VL"></span> */}
        </div>
        
    )
}
export default CTA;