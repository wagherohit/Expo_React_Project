import React from 'react'
import { NavLink } from 'react-router-dom'
import './ServiceCard.css'


const ServiceCard = (props) => {
  return (
    <>
    <div className='card mt-5 border-0'>
              <div className='service-card d-flex justify-content-center p-4 gap-4'>
                <div>
                  <img className='' src={props.img} alt="" />
                </div>
                <div>
                  <h3><NavLink>{props.heading1}</NavLink></h3>
                  <p>{props.des}</p>
                </div>
              </div>

            </div>
    
    
    </>
  )
}

export default ServiceCard