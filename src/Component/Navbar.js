import React from "react"

function Navbar () {
    return  (
        <div className="navbar_1">
            <nav className="navbar_2">
                {/* <img src="me.jpg"></img> */}
                <div className="navbar_3">
                    <ul className="navbar_4">
                       <a href="#home"><li className="navli">Home</li> </a> 
                       <a href="#about"><li className="navli">About</li> </a> 
                        <a href="#contact"> <li className="navli">Contact</li></a>
                       <a href="#experience"> <li className="navli">Experience</li></a> 
                        <a href="#portfolio"> <li className="navli">Portfolio</li></a>
                        <a href="#testimonial"><li className="navli">Testimonials</li> </a>
                        <a  href="#services"><li className="navli">Services</li> </a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;