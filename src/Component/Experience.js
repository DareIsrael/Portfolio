import React, {useEffect} from 'react';
import {FcApproval} from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience () {
  useEffect(() => {
    AOS.init({duration: 1000 });
    AOS.refresh();
  }, []);
    return (
        <div data-aos="fade-right" id='experience' className='Ex_1'>
        <h3 className='slideh3'>My Skills</h3>
        <h1>My Experience</h1>
        <div className='Ex_2'>
        <div className='Ex_3'>
        <h2 className='Ex_0'>Frontend Development</h2>
          <div className='Ex_4'>
            <div>
               
                <h2> <FcApproval /> HTML</h2>
                <p>Experienced</p>
            </div>
            <div>
                <h2> <FcApproval /> CSS</h2>
                <p>Intermediate</p>
            </div>
            <div>
                <h2> <FcApproval /> Javascript</h2>
                <p>Experienced</p>
            </div>
            <div>
                <h2> <FcApproval /> Bootstrap</h2>
                <p>Experienced</p>
            </div>
            <div>
                <h2> <FcApproval /> React Js</h2>
                <p>Experienced</p>
            </div>
          </div>
        </div>
        <div  className='Ex_3'>
        <h2 className='Ex_0'>Backend Development</h2>
            <div className='Ex_4'>
              <div>
              <h2> <FcApproval /> Node.js </h2>
                <p>Experienced </p>
              </div>

              
              <div>
                <h2> <FcApproval /> MongoDB </h2>
                <p>Intermediate </p>
              </div>
              <div>
                <h2> <FcApproval /> MySQL </h2>
                <p>Experienced </p>
              </div>
              <div>
                <h2> <FcApproval /> Firebase</h2>
                <p>Intermediate </p>
              </div>
              <div>
                <h2> <FcApproval /> NoSQL</h2>
                <p>Experienced </p>
              </div>

            </div>
        </div>

        <div>

        </div>

         </div>

        </div>
    )
    }

    export default Experience;