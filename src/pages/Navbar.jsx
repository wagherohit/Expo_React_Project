import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className='img-fluid p-3' src="logo.png.webp" alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end p-4" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/service'}>Services</NavLink>
        </li>
        <li class="nav-item dropdown text ">
          <NavLink className="nav-link dropdown-toggle text-decoration-none"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </NavLink>
          <ul className="dropdown-menu p-3 " style={{backgroundColor:'#FF5700'}}>
            <li><NavLink className="dropdown-item text-decoration-none text-white" style={{backgroundColor:'orangered'}} to={'/blog'}>Blog</NavLink></li>
            <li><NavLink className="dropdown-item text-decoration-none text-white" style={{backgroundColor:'orangered'}} to={'/blogDetails'}>Blog Details</NavLink></li>
            <li><NavLink className="dropdown-item text-decoration-none text-white" style={{backgroundColor:'orangered'}} to={'/element'}>Element</NavLink></li>
          </ul>
        </li>



         <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'} >Contact</NavLink>
        </li>
      </ul>
    
        <button className='border-0  rounded-pill'><i class="bi bi-telephone-fill"></i> +10 (78) 678 595</button>

    </div>
    
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar