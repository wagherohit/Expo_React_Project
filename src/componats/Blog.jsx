import React from "react";
import CommonLine from "../pages/CommonLine";

import "./Blog.css";

const Blog = () => {
  const blogData = [
  {
    id: 1,
    date: "15",
    month: "Jan",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_1.jpg.webp"
  },
  {
    id: 2,
   date: "15",
    month: "Jan",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_2.jpg.webp"
  },
  {
    id: 3,
    date: "15",
    month: "Jan",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_3.jpg.webp"
  },
    {
    id: 4,
    date: "15",
    month: "Jan",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_4.jpg.webp"
  },
    {
    id: 5,
    date: "15",
    month: "Jan",
    title: "Google inks pact for new 35-storey office",
    desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    img: "single_blog_5.jpg.webp"
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
]

  return (
   <>
   <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="about">
          <h2>Blog</h2>
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
                <p>{val.desc}</p>
              </div>

              <div className="blog-icon">
                <span><i class="bi bi-person-fill p-2"></i>Travel, Lifestyle</span> |
                <span><i class="bi bi-chat-text p-2"></i>03 Comments</span>
              </div>
             
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
  );
};

export default Blog;
