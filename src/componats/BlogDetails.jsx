import React from 'react'
import CommonLine from '../pages/CommonLine'
import { data } from 'react-router-dom';

const BlogDetails = () => {

      const blogData = [
  {
    id: 1,
    date: "15",
    month: "Jan",
    title: "Second divided from form fish beast made every of seas all gathered us saying he our",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_1.jpg.webp"
  }

];

const post =[
  {
    id:1,
    img:"post_1.jpg.webp",
    title:'From life was you fish...',
    date:'january 12, 2019'
  },
    {
    id:2,
    img:"post_2.jpg.webp",
    title:'The Amazing Hubble',
    date:'02 Hours ago'
  },
    {
    id:3,
    img:"post_3.jpg.webp",
    title:'Astronomy Or Astrology',
    date:'03 Hours ago'
  },
    {
    id:4,
    img:"post_4.jpg.webp",
    title:'Asteroids Telescope',
    date:'01 Hours ago'
  }
];

const instagram =[
  {
    img:"1.webp"
  },
   {
    img:"2.webp"
  },
   {
    img:"3.webp"
  },
   {
    img:"4.webp"
  },
   {
    img:"5.webp"
  },
   {
    img:"6.webp"
  },
];

const data=[
{
    id:'1',
    img:'https://preview.colorlib.com/theme/expo/assets/img/blog/comment_1.png',
    des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
},
{
    id:'1',
    img:'https://preview.colorlib.com/theme/expo/assets/img/blog/comment_2.png',
    des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
},
{
    id:'1',
    img:'https://preview.colorlib.com/theme/expo/assets/img/blog/comment_3.png',
    des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
},
]


  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="about">
          <h2>Blog Details</h2>
          <CommonLine/>
        </div>
      </div>
    </div>
   </div>

   <div className="container ">
    <div className="row">
     <div className="col-md-8">

       {
        blogData.map((val,idx)=>{
          return(
            <>
            <div className="blog-section mt-4">
              <img className="img-fluid" src={val.img} alt="" />
              <div className="date text-center">
                <h3>{val.date}</h3>
                 <span>{val.month}</span>
              </div>
              <div className="blog">
                <h2>{val.title}</h2>
            
              </div>

              <div className="blog-icon">
                <span><i class="bi bi-person-fill p-2"></i>Travel, Lifestyle</span> |
                <span><i class="bi bi-chat-text p-2"></i>03 Comments</span>
              </div>

              <div className='blog mt-5'>
                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                <br />
                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
              </div>

              <div className='blog mt-5 p-5 ' style={{backgroundColor:'#F2F3F7'}}>
                <div className='bg-white p-3 border-start border-3'>
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                </div>
              </div>

              <div className='blog mt-5'>
                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                <br />
                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
              </div>
              <hr />

              <div>
                <div className='d-flex justify-content-between'>
                    <i className="bi bi-heart"> Lily and 4 people like this</i>
                    <div className='blog-icon'>
                        <i class="bi bi-facebook p-2"></i>
                        <i class="bi bi-twitter p-2"></i>
                        <i class="bi bi-dribbble p-2"></i>
                        <i class="bi bi-behance p-2"></i>
                    </div>
                </div>
              </div>

             <div className="Seems d-flex flex-column flex-md-row justify-content-between mt-5">
  
                <div className="d-flex gap-3 align-items-center mb-3 mb-md-0">
                 <img
                  src="https://preview.colorlib.com/theme/expo/assets/img/post/preview.jpg"
                  alt="Prev"
                  className="img-fluid"
                  style={{ maxWidth: "80px", borderRadius: "5px" }}
                 />
               <div>
                  <p className="mb-1">Prev Post</p>
                  <h4 className="mb-0">Space The Final Frontier</h4>
                </div>
               </div>


                <div className="d-flex gap-3 align-items-center text-end">
               <div>
                <p className="mb-1">Next Post</p>
                <h4 className="mb-0">Telescopes 101</h4>
                </div>
              <img
               src="https://preview.colorlib.com/theme/expo/assets/img/post/next.jpg"
                alt="Next"
                className="img-fluid"
                style={{ maxWidth: "80px", borderRadius: "5px" }}
               />
           </div>
           
          </div>
          <hr />

          <div className='Shadow mt-5'>
            <div className='d-flex gap-3'>
                <div>
                <img className='img-fluid' src="https://preview.colorlib.com/theme/expo/assets/img/blog/author.png" alt="" />
            </div>
            <div>
                <h4>Harvard milan</h4>
                <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
            </div>
            </div>

          </div>
          <hr />
          <div className='mt-5'>
            <h4>05 Comments</h4>
            {
               data.map((val,idx)=>{
                return(
                    <>
                    <div className='s d-flex mt-5 gap-3'>
                <div>
                    <img src={val.img} alt="" />
                </div>
                <div>
                    <p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                    <div className='d-flex justify-content-between gap-3'>
                        <h4>Emilly Blunt</h4>
                        <p>December 4, 2017 at 3:12 pm</p>
                        <div>
                            <span>Reply</span>
                        </div>
                    </div>
                </div>
            </div>
                    
                    
                    </>
                )
               })
            }
          </div>


             
 </div>

 <div className='contact mt-5'>
          <h2>Leave a Reply</h2>
        </div>
      <div className='msg mt-5'>
        <div className=''>
          <input className='form-control p-5' type="text" placeholder='Write Comment' />
        </div>
        <div className='row'>
          <div className=' col-6 mt-3'>
            <input className='form-control' type="text" placeholder=' Name' />
          </div>
           <div className='col-6 mt-3'>
            <input className='form-control' type="email" placeholder='Email' />
          </div>
          <div className='col-12 mt-3'>
            <input className='form-control' type="text" placeholder='Website' />

          </div>
        </div>
        <button className='btn1 mt-3'>Post Comment</button>
 </div>
            
            </>
          )
        })
      }

     </div>
     <div className="col-md-4 mt-4">
      <div className="search-container text-center">
    
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Keyword"
          
        />
        <button className="icon-btn" >
          <i class="bi bi-search"></i>
        </button>
      </div>

      
      <button className="search-btn">
        Search
      </button>
    </div>

    <div className="blog-card mt-5">
      <h4>Category</h4>
      <li><p>Resturant Food(37)</p></li>
       <li><p>Travel News(10)</p></li>
       <li><p>Modern technology(03)</p></li>
       <li><p>Product(37)</p></li>
       <li><p>Inspiration(37)</p></li>
       <li><p>Health Care(21)09</p></li>


    </div>

    <div className="post">
      <h3 >Recent Post</h3>
      
        {
          post.map((val,idx)=>{
            return(
              <>
               <div className="media d-flex mt-5 ">
                <img className="img-fluid" src={val.img} alt="" />
              <div className="px-3">
              <h3>{val.title}</h3>
               <p>{val.date}</p>
             </div>
               </div>
              
              </>
            )
          })
        }
      
    </div>

    <div className="post">
      <h3>Tag Clouds</h3>
      <div className="row">
        <div className="post-tag col-12  mt-5">
        <div >
                <span className="mx-2  "> project</span>
                <span className="mx-2">love</span>
                <span className="mx-2">technology</span> <br />
          <div className="mt-2">
                 <span className="mx-2 " >travel</span>
                <span className="mx-2">resturant</span>
                <span className="mx-2">Life style</span> <br />
      
          </div>
        <div className="mt-2">
              <span className="mx-2">design</span>
             <span className="mx-2">illustration</span>
        </div>
        </div>
        </div>
      </div>
    </div>

    <div className="post">
      <h3>Instagram Feeds</h3>
      <div className="row">
        {
          instagram.map((val,idx)=>{
            return(
              <>
              <div className="col-4 mt-3">
                <img className="img-fluid" src={val.img} alt="" />

              </div>
              
              </>
            )
          })
        }

      </div>
    </div>
    <div className="post">
      <h3>Newsletter</h3>
      <div className="mt-5">
        <div className="search-box">
        <input
          type="email"
          placeholder="Enter Email"
          
        />
      </div>
        <button className="search-btn">Subscribe</button>
      </div>

    </div>


 </div>
</div>
</div>
    
    </>
  )
}

export default BlogDetails