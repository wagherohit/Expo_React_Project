import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-5 pb-3 border-top mt-5">
      <div className="container">
        <div className="row">
          {/* Logo + Description */}
          <div className="footer-section col-md-4 mb-4">
            <h3 className="d-flex align-items-center">
              <img
                src="https://preview.colorlib.com/theme/expo/assets/img/logo/logo2_footer.png.webp"
              />
            </h3>
            <p className="text-muted">
              Land behold it created good saw after she'd Our set living.
              Signs midst dominion creepth morning laboris nisi ufsit aliquip.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-dark">
                <i class="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="navigation col-md-2 mb-4">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Home</a></li>
              <li><a href="#" className=" text-decoration-none">About</a></li>
              <li><a href="#" className=" text-decoration-none">Services</a></li>
              <li><a href="#" className=" text-decoration-none">Blog</a></li>
              <li><a href="#" className=" text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="navigation col-md-3 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Blackforest</a></li>
              <li><a href="#" className=" text-decoration-none">Bodhubon</a></li>
              <li><a href="#" className=" text-decoration-none">Rongdhonu</a></li>
              <li><a href="#" className=" text-decoration-none">Meghrong</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="contact-section col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">76/A, Green Lane, Dhanmondi, NYC</p>
            <p className="text-danger fw-bold"><a href="">+10 (78) 738-9083</a></p>
          </div>
        </div>

        
        <div className="footer-end text-center">
          <p className="mb-0 text-muted">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span className="text-danger">❤</span> by <a href="https://colorlib.com" className="text-decoration-none">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
