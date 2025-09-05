import React from 'react'
import CountryTable from './CountryTable'

const ElementSection = () => {

    const element =[
        {
            id:'1',
            tittle:"Definition 01",
            des:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
        },
          {
            id:'2',
            tittle:"Definition 02",
            des:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
        },

          {
            id:'3',
            tittle:"Definition 03",
            des:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
        }
    ]
  return (
    <>

    <div className='container mt-5'>
        <div className='row'>
            <div className='element-box col-md-12 mt-5'>
                <h3>Left Aligned</h3>
            </div>
            <div className='col-md-3 mt-5'>
                <div>
                    <img src="https://preview.colorlib.com/theme/expo/assets/img/elements/d.jpg" alt="" />
                </div>
            </div>
            <div className='element-box col-md-9 mt-5'>
                <div>
                    <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
                </div>
            </div>
        </div>
    </div>

    <div className='container mt-5'>
        <div className='row'>
            <div className='element-box col-md-12 mt-5'>
                <h3 className='text-end '>Right Aligned</h3>
            </div>
            <div className='element-box col-md-9 mt-5'>
                <p>Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs</p>
                <p>Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms</p>
            </div>
            <div className='col-md-3 mt-5'>
                <div>
                    <img src="https://preview.colorlib.com/theme/expo/assets/img/elements/d.jpg" alt="" />
                </div>
            </div>

            <div className='element-box col-md-12 mt-5'>
                <div className='element-box'>
                    <h3>Definition</h3>
                </div>
                <div className='row'>
                    {
                        element.map((elem)=>{
                            return(
                                <>
                                <div className='col-md-4 mt-5' key={elem.id}>
                                    <h5>{elem.tittle}</h5>
                                    <p className='mt-3'>{elem.des}</p>

                                </div>
                                
                                </>
                            )
                        })

                    }

                </div>

            </div>
            <CountryTable/>
        </div>
    </div>
    
    </>
  )
}

export default ElementSection