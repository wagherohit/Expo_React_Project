import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './componats/Home'
import About from './componats/About'
import Blog from './componats/Blog'
import Contact from './componats/Contact'
import Navbar from './pages/Navbar'
import Service from './componats/Service'
import Footer from './componats/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import BlogDetails from './componats/BlogDetails'
import Element from './componats/Element'


function App() {
  useEffect(() => {
   AOS.init({
      duration: 1000,
      once: true,
    });
    
  }, [])
  
 
  return (
    <>
     
     <Router>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogDetails' element={<BlogDetails/>}/>
           <Route path='/element' element={<Element/>}/>
          
        </Routes>
        <Footer/>
     </Router>
    </>
  )
}

export default App
