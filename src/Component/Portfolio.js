import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";


function Portfolio () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-down"  id="portfolio" className="port_1">
          <h3 className="slideh3">My Recent Work</h3>
          <h1>Portfolio</h1>
            <div className="port_2">
                <div data-aos="fade-down" className="port_3">
                    <img src="house.webp"></img>
                    <h2>Cargo Website</h2>
                    <div className="port_4">
                        <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://speedyspell-cargo.onrender.com"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div data-aos="fade-left" className="port_3">
                    <img src="port1.webp"></img>
                    <h2>Bus Booking Website</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                       <a href="https://babastar-booking-web.onrender.com/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div data-aos="fade-right" className="port_3">
                    <img src="dog.webp"></img>
                    <h2>TingDog App</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://dareisrael.github.io/Tindog2/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div data-aos="fade-down" className="port_3">
                    <img src="todo.webp"></img>
                    <h2>ToDoList App</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://my-todolistapp.onrender.com/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div data-aos="zoom-up" className="port_3">
                    <img src="love.webp"></img>
                    <h2>Love Calculator</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://love-calculator-gikh.onrender.com/?#home/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div data-aos="fade-up" className="port_3">
                    <img src="deebook.webp"></img>
                    <h2>DeeBook (Facebook mockup)</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://deebook.vercel.app//"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;