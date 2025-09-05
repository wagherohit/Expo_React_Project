import React from 'react'
import './AboutCard.css'

const AboutSection = () => {
  return (
    <>
    
     <div className='container'>
        <div className="row align-items-center mt-5 flex-md-row flex-column-reverse">
        <div className="about-card col-12 col-md-6">
          <div className="p-3 p-md-5">
            <h2 className="fw-bold">We are here to help you for better solutions</h2>
            <p>
              Content marketing is nothing but offering users value. It is not just about traffic 
              minion consectetur adipiscing elitd do eiusmod tempor incididun.
            </p>
            <button className=" border-0 rounded-pill fw-bold px-4 py-2">
              Explore Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center mt-5">
          <img className="img-fluid about-img" src="logo/about2.png.webp" alt="About Solutions" />
        </div>
      </div>

     </div>
    </>
  )
}

export default AboutSection