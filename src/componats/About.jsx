import React from "react";
import CommonLine from "../pages/CommonLine";
import './About.css'
import Aboutpage from "../pages/Aboutpage";
import AboutCard from "../pages/AboutCard";
import Talk from "../pages/Talk";
import AboutSection from "../pages/AboutSection";



const About = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <div className="about">
            <h2>About Page</h2>
            <CommonLine/>
           </div>

        </div>
      </div>
    </div>

      <Aboutpage/>
      <AboutCard/>
      <AboutSection/>
      <Talk/>

    
    
    </>
  );
};

export default About;
