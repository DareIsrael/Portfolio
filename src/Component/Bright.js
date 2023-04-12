import React from "react";
import {  BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";

function Bright () {
    return (
        <div className="bright_1">
        <h1>Bright</h1>
        <div className="bright_2">
            <div className="bright_3">
                <a href="#home"><h5>Home</h5></a>
                <a href="#about"><h5>About</h5></a>
                <a href="#contact"><h5>Contact</h5></a>
                <a href="#experience"><h5>Experience</h5></a>
                <a href="#portfolio"><h5>Portfolio</h5></a>
                <a href="#testimonial"><h5>Testimonial</h5></a>
                <a href="#services"><h5>Services</h5></a>
            </div>
            <div className="bright_icons">
            <div className="bright_i">
                <a href="http://facebook.com"><RiFacebookFill className="bright_ic" /></a>
                </div>

                <div className="bright_i">
                <a href="http://twitter.com"> <BsTwitter className="bright_ic" /></a>
                </div>
                <div className="bright_i">
                <a href="http://github.com"><BsGithub className="bright_ic" /></a>
                </div>
                
            </div>
        </div>
            <p> © BrightWeb, All right reserved </p>

        </div>
    )
}

export default Bright;