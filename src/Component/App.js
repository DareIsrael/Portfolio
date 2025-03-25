import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import NavbarDown from "./NavbarDown";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Bright from "./Bright";
import Flower from "./flower/Flower";


function App () {
  return (
    <div>
       <Navbar />
       {/* <Flower /> */}
       <Home />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Bright />
       <NavbarDown />
       
        
       
    </div>
  )
}

export default App;