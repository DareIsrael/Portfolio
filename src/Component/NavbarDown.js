import React from "react"


 import  {GrContactInfo, GrHome, GrServices} from "react-icons/gr";
import  {BsCalendar4Range, BsPerson, BsHeartPulse } from "react-icons/bs";
import { MdMedicalServices } from  "react-icons/md";




function NavbarDown () {
    return(
        <div className="navIcon">
         <div className="navIcon_1">
           
<a href="#home"  ><GrHome className="navbarIcon" /> </a>
<a href="#about"><BsPerson  className="navbarIcon"/> </a>
<a href="#experience"><BsCalendar4Range className="navbarIcon" /> </a>
<a href="#services"><MdMedicalServices   className="navbarIcon"/> </a>
<a href="#testimonial"><BsHeartPulse  className="navbarIcon" /> </a>
<a href="#contact"><GrContactInfo  className="navbarIcon"/> </a>
         </div>
            

        </div>
    )
}

export default NavbarDown;