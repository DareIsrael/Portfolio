import React from "react"

function Home () {
    return (
        <div id="home" className="home_1">
            <div className="home_2">
                <h3 className="slideh3">Hello I'm</h3>
                <h1>Dare  <span className="home_name"> Israel Abidemi </span> </h1>
                <p>React web Developer</p>
                <div className="home_3">
                   <a href="CV-Resume.pdf" download><button>Download CV</button></a> 
                  <a href="#contact"><button className="buttontalk">Lets Talk</button> </a> 
                </div>
            </div>
            <div className="home_4">
                <img src="me2.jpg"></img>
            </div>
        </div>
    )
}

export default Home;
