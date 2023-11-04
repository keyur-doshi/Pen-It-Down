import React from "react";
import './Reg.css';

function Reg () {
    const googleFormLink = "https://forms.gle/EZzqTLGCSki9iwBg8";
    
    return (
        <div className="rules-container">
            <p className="centered-paragraph">
                <b> <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Submit your work here</a> </b>
            </p>
        </div>
    )
}

export default Reg;