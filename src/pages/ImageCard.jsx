import React from 'react';
import FormElements from './FormElements';



const ImageCard = () => {
  const images=[
    {
      id:1,
      img:"s.jpeg"
    },
    {
      id:2,
      img:"s2.jpeg"
    },
   {
      id:3,
      img:"s3.jpeg"
    },
       {
      id:4,
      img:"s4.jpeg"
    },
       {
      id:5,
      img:"s5.jpeg"
    },
       {
      id:6,
      img:"s6.jpeg"
    },
       {
      id:7,
      img:"s7.jpeg"
    },
       {
      id:8,
      img:"s8.jpeg"
    },
       {
      id:9,
      img:"s5.jpeg"
    }
  ]
  return (

    <>
        <div className='container mt-5 mb-5 mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Gallary</h3>
                </div>
                <div className='col-md-12 mt-5'>
                  <div className='row'>
                    {
                      images.map((item)=>{
                        return(
                          <>
                          <div className='col-md-4 mb-3'>
                            <div>
                              <img className='img-fluid' src={item.img} style={{width:'400px', height:'200px'}} alt="" />
                            </div>

                          </div>
                          
                          
                          </>
                        )
                      })
                    }

                  </div>

                </div>

                <div className='alice col-md-4 mt-5'>
                  <div>
                    <h3>Image Gallary</h3>

                    <div className='mt-5'>
                    <p class="fs-1">This is header 01</p>
                    <p class="fs-2">This is header 02</p>
                    <p class="fs-3">This is header 03</p>
                    <p class="fs-4">This is header 04</p>
                    <p class="fs-5">This is header 05</p>
                    <p class="fs-6">This is header 06</p>
                    </div>
                  </div>
                </div>

                <div className='alice col-md-4 mt-5'>
                  <div>
                    <h3>Unordered List</h3>
                    <div className='mt-5'>
                      <ul>
          <li>Fta Keys</li>
          <li>For Women Only Your Computer Usage</li>
          <li>
            Facts Why Inkjet Printing Is Very Appealing
            <ul>
              <li>Addiction When Gambling Becomes</li>
              <li>Protective Preventative Maintenance</li>
            </ul>
          </li>
          <li>Dealing With Technical Support 10 Useful Tips</li>
          <li>Make Myspace Your Best Designed Space</li>
          <li>Cleaning And Organizing Your Computer</li>
        </ul>

                    </div>
                  </div>

                </div>

                <div className='alice col-md-4 mt-5'>
                  <h3>Ordered List</h3>
                  <div className='mt-5'>
                    <ol>
          <li>Fta Keys</li>
          <li>For Women Only Your Computer Usage</li>
          <li>
            Facts Why Inkjet Printing Is Very Appealing
            <ol type="a">
              <li>
                Addiction When Gambling Becomes
                <ol type="i">
                  <li>Protective Preventative Maintenance</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>Dealing With Technical Support 10 Useful Tips</li>
          <li>Make Myspace Your Best Designed Space</li>
          <li>Cleaning And Organizing Your Computer</li>
        </ol>

                  </div>

                </div>
            </div>
        </div>
        <hr />

        <FormElements/>
 

    </>
  )
}

export default ImageCard;
