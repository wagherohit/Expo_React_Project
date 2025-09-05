import React from 'react'
import CommonLine from '../pages/CommonLine'
import './Contact.css'

const Contact = () => {

  
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="about">
          <h2>Contact Us</h2>
          <CommonLine/>
        </div>
      </div>
    </div>
   </div>

   <div className='container mt-5'>
    <div className='row'>
      <div className='col-12 mt-5'>
        <div className='mt-5'>
          <div style={{ width: "100%", height: "500px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154413!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1756788311299!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
        </div>

      </div>
    </div>

   </div>

   <div className='container mt-5'>
    <div className='row'>
      <div className='contact col-12'>
        <div>
          <h2>Get In Touch</h2>
        </div>
      </div>
      <div className='msg col-md-8 mt-5'>
        <div className=''>
          <input className='form-control p-5' type="text" placeholder='Enter Message' />
        </div>
        <div className='row'>
          <div className=' col-6 mt-3'>
            <input className='form-control' type="text" placeholder='Enter Your Name' />
          </div>
           <div className='col-6 mt-3'>
            <input className='form-control' type="email" placeholder='Email' />
          </div>
          <div className='col-12 mt-3'>
            <input className='form-control' type="text" placeholder='Enter Subject' />

          </div>


        </div>
        <button className='btn1 mt-3'>Send</button>

      </div>

      <div className='contact-section col-md-4 mt-5'>
        <div className='d-flex px-3 '>
            <i class="bi bi-house-door-fill px-3"></i>
            <div>
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
        </div>
         <div className='d-flex px-3 '>
            <i class="bi bi-phone px-3"></i>
            <div>
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
        </div>
         <div className='d-flex px-3 '>
            <i class="bi bi-envelope px-3"></i>
            <div>
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
        </div>

      </div>

    </div>

   </div>
    </>
  )
}

export default Contact