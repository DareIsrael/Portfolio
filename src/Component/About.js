import React, {useEffect} from "react"
import {BsFillPeopleFill, BsCalendar3RangeFill, BsFillGeoFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";


function About () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up"  id="about" className="about_0">
          <h3 className="slideh3">Get to Know</h3>
          <h1 data-aos="fade-left"  >About Me</h1>
          <div className="about_1">
          
          <div data-aos="fade-right"  className="about_2">
             <img  src="me9.png"></img>
             </div>
             <div className="about_3">
             <div className="about_4">
             <div className="about_5">
             <BsFillGeoFill className="about_icon"/>
             <h3>Experience</h3>
             <p>3+ Years Working</p>
             </div>
             <div data-aos="fade-left" className="about_5">
             <BsFillPeopleFill className="about_icon" />
             <h3>Clients</h3>
             <p>200+ WorldWide</p>
             </div>
             <div data-aos="fade-right" className="about_5">
             <BsCalendar3RangeFill className="about_icon" />
             <h3>Projects</h3>
             <p>50+ Completed</p>
             </div>
             
             </div>
          
          
             <div data-aos="fade-down" className="about_p">
             <p>I specialize in client-side applications (front-end development), server-side applications (back-end development), 
             or both (full-stack development). And also in designing User Interface (UI) and User Experience (UX).  </p>
             </div>
             
             <a href="#contact"><button className="button">Lets Talk</button></a>
 
             </div>
             
         </div>

        </div>
        
    )
}

export default About;