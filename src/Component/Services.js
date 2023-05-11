import React,{useEffect} from "react";
import { FcCheckmark } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up"  id="services" className="service_1">
             <h3 className="slideh3">What I offer</h3>
             <h2>Services</h2>
            <div className="service_2">
                <div className="service_3">
                 <h1>UI/UX</h1>
                 <p> <FcCheckmark/> Prototyping,Wireframing,Mockups</p>
                 <p> <FcCheckmark/> Software Design</p>
                 <p> <FcCheckmark/> Application Development</p>
                </div>
                <div   className="service_3">
                <h1>Web Development</h1>
                <p> <FcCheckmark/> Knowledge of Hyper Text Markup Language</p>
                <p> <FcCheckmark/> CSS Styling</p>
                <p> <FcCheckmark/> Javascript</p>
                <p> <FcCheckmark/>Frontend frameworks, most notably React.</p>

                </div>
                <div  className="service_3">
                <h1> Content Creation</h1>
                <p> <FcCheckmark/> Technical Skills </p>
                <p>  <FcCheckmark/> Content Strategy Skills</p>
                <p> <FcCheckmark/> Ability to self-teach and learn fast</p>
 
                </div>
              </div>

        </div>
    )
}

export default Services;