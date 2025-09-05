import React from 'react'
import './ServicePage.css'
import Card from './Card'

const ServicePage = () => {

    const data = [
        {
            price:'700',
            heading1:"Content marketing is nothing but offering users value.",
            li1:"Increase traffic 50%",
            li2:"Social Media Marketing",
            li3:"10 Free Optimization",
            li4:"24/7 support"

        },
        {
            price:'700',
            heading1:"Content marketing is nothing but offering users value.",
            li1:"Increase traffic 50%",
            li2:"Social Media Marketing",
            li3:"10 Free Optimization",
            li4:"24/7 support"

        },
        {
            price:'700',
            heading1:"Content marketing is nothing but offering users value.",
            li1:"Increase traffic 50%",
            li2:"Social Media Marketing",
            li3:"10 Free Optimization",
            li4:"24/7 support"

        }
    ]
  return (
    <>
    
     <div className='container mt-5'>
      <div className='row'>
        <div className='about-section text-center col-md-12 mt-5'>
          <div className='mt-5'>
            <h2 className='fs-1' >Affordable pricing plan</h2>
            <p className='mt-5'>Content marketing is nothing but offering users value. It is not just about traffic minion <br /> consectetur adipiscing elitd do eiusmod tempor incididun.</p>
          </div>
        </div>
        <div className='row'> 
           {
            data.map((val)=>{
                return(
                    <>
                    <div className='col-md-4'>
                        <Card
                        price={val.price}
                        heading1={val.heading1}
                        li1={val.li1}
                        li2={val.li2}
                        li3={val.li3}
                        li4={val.li4}
                        
                        />

                    </div>
                    
                    
                    </>
                )
            })

           }

        </div>
        
      </div>
    </div>

    
    
    
    </>
  )
}

export default ServicePage