import React from 'react'
import ServiceCard from '../pages/ServiceCard'


const ServiceSection = () => {

      const Data = [
    {
    heading1 : 'Digital marketing',
    des:'The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.',
    img: 'https://preview.colorlib.com/theme/expo/assets/img/icon/check.svg'
  },
  {
    heading1 : 'Web design',
    des:'The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.',
    img: 'https://preview.colorlib.com/theme/expo/assets/img/icon/check.svg'
  },
  {
    heading1 : 'Social media marketing',
    des:'The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.',
    img: 'https://preview.colorlib.com/theme/expo/assets/img/icon/check.svg'
  },
  {
    heading1 : 'Content create',
    des:'The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.',
    img: 'https://preview.colorlib.com/theme/expo/assets/img/icon/check.svg'
  }
]
  return (
    <>
    
    <div className='container'>
      <div className='row'>
        
         {
          Data.map((val,idx)=>{
            return(
              <>
                <div className='col-md-6'>
                  <ServiceCard
                   heading1={val.heading1}
                   des={val.des}
                   img={val.img}
                  />
            

                </div>
              </>
            )
          })

         
         }

        </div>
    

    </div>
    
    </>
  )
}

export default ServiceSection