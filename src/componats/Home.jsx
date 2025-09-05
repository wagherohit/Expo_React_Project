import React from 'react'
import './Home.css'
import AboutCard from '../pages/AboutCard'
import Aboutpage from '../pages/Aboutpage'
import ServiceSection from '../pages/ServiceSection'
import AboutSection from '../pages/AboutSection'
import ServicePage from '../pages/ServicePage'
import Talk from '../pages/Talk'
const Home = () => {
  return (
    <>
    <div className='container' id='hero'>
      <div className='row'>
        <div className='hero-section col-12 col-md-6 mt-5'>
          <div data-aos="fade-up">
            <h1 className='fw-bold display-5'>Build Audience and grow your brand</h1>
            <p>Content marketing  is nothing but offering users <br />
              It is not just about traffic minion customers. 
            </p>

            <button className='border-0 rounded-pill fw-bold'>Explore Us</button>
          </div>
        </div>
        <div className='col-md-6 col-12 mt-5'>
          <div>
            <img className='' src="hero-img.png.webp" width={850} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Aboutpage/>
    <AboutCard/>
    <ServiceSection/>
    <AboutSection/>
    <ServicePage/>
    <Talk/>
    
   
    
    </>
  )
}

export default Home