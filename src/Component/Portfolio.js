import React from "react"

function Portfolio () {
    return (
        <div id="portfolio" className="port_1">
          <h3 className="slideh3">My Recent Work</h3>
          <h1>Portfolio</h1>
            <div className="port_2">
                <div className="port_3">
                    <img src="house.webp"></img>
                    <h2>Real Estate Website</h2>
                    <div className="port_4">
                        <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://modern-city.vercel.app/home"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div className="port_3">
                    <img src="port1.webp"></img>
                    <h2>School Website</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                       <a href="https://gifted-model-college.vercel.app/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div className="port_3">
                    <img src="dog.webp"></img>
                    <h2>TingDog App</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://dareisrael.github.io/Tindog2/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div className="port_3">
                    <img src="todo.webp"></img>
                    <h2>ToDoList App</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://my-todolistapp.onrender.com/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div className="port_3">
                    <img src="love.webp"></img>
                    <h2>Love Calculator</h2>
                    <div className="port_4">
                    <a href="https://github.com/DareIsrael"> <button>Github</button> </a>
                        <a href="https://love-calculator-gikh.onrender.com/?#home/"><button className="livedemo">Live Demo</button></a> 
                    </div>
                </div>
                <div className="port_3">
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