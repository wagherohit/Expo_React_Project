import React from 'react'
import { NavLink } from 'react-router-dom'
import CommonLine from '../pages/CommonLine'
import ServicePage from '../pages/ServicePage'
import Talk from '../pages/Talk'
import ServiceSection from '../pages/ServiceSection'


const Service = () => {

  
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='about col-md-12'>
           <h2>Services</h2>
           <CommonLine/>
        </div>
      </div>
    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='about-section col-md-12 mt-5'>
          <div className='text-center mt-5'>
            <h2 className='fs-1'>How we can help</h2>
            <p className='mt-5'>Content marketing is nothing but offering users value. It is not just about traffic minion <br />   consectetur adipiscing elitd do eiusmod tempor incididun.</p>
          </div>
        </div>
        <ServiceSection/>
      </div>
    </div>
   <ServicePage/>
   <Talk/>
    </>
  )
}

export default Service