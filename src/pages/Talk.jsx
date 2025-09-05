import React from 'react'
import './Talk.css'
const Talk = () => {
  return (
    <>
      <div className='container-fluid mt-5' id='Talk'>
        <div className='row'>
            <div className=' talk-card col-md-8 col-12 p-5 mt-3'>
                <div className=''>
                    <h2>Let's talk about your project</h2>
                    <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.

                    </p>
                </div>
            </div>
            <div className='talk-card col-md-4 p-5 mt-3'>
                <div className=''>
                    <button className='btn btn-outline-light rounded-pill  my-5'>Start Talking</button>
                </div>
            </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Talk
