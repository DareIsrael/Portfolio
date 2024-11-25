import React from "react"
import Typed from "typed.js"
import { useEffect, useRef } from "react";

function Home () {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Designer", "Content Creator"],
            startDelay: 300,
            typeSpeed: 200,
            backDelay: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        });
    })
     
    return (
        <div id="home" className="home_1">
            <div className="home_2">
                <h3 className="slideh3">Hello I'm</h3>
                
                 <h1  data-aos="fade-right" >Dare  <span className="home_name"> Israel Abidemi </span> </h1>
                 
                 <h2 className="typed_h1">Freelance <span className="home_typed" ref={el}> </span> </h2>
                 
                 
                
                <p>React web Developer</p>
                <div className="home_3">
                   <a href="WebDev-Dare.pdf" download><button>Download CV</button></a> 
                  <a href="#contact"><button className="buttontalk">Lets Talk</button> </a> 
                </div>
            </div>
            <div className="home_4">
                <img src="me9.png"></img>
            </div>
        </div>
    )
}

export default Home;
