import React from 'react'

const Card = (props) => {
  return (
  <>
  
    <div className='card text-center  mt-5 p-5'>
                <div className='cash-card'>
                    <button className='card-top btn btn-outline-dark rounded-pill'>Basic Plan</button>
                    <div className='border-bottom'>
                         <h4><span>$</span>{props.price}</h4>
                        <p>{props.heading1}</p>
                    </div>
                    <div className='m-5'>
                        <li>{props.li1}</li>
                     <li>{props.li2}</li>
                     <li>{props.li3}</li>
                     <li>{props.li4}</li>
                    </div>
                    <div>
                       <button className='fw-bold border-0 rounded-pill mt-4'>Get Started Now</button>

                    </div>
                </div>

            </div>
  </>
  )
}

export default Card