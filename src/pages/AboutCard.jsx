import React from 'react'
import './AboutCard.css'

const AboutCard = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center"> 
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img className="img-fluid about-img" src="logo/about.png.webp" alt="About Us" />
        </div>

    
        <div className="about-card col-12 col-md-6">
          <div className="p-3 p-md-5">
            <h2 className="fw-bold">We take steps to build a successful business</h2>
            <p>
              Content marketing is nothing but offering users value. It is not just about traffic 
              minion consectetur adipiscing elitd do eiusmod tempor incididun.
            </p>
            <button className=" border-0 rounded-pill fw-bold px-4 py-2">
              Explore Us
            </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default AboutCard
