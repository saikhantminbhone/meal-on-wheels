/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './assets/style.member.css'

const Footer = () => {
  return (
    <div>
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li> Phone: +95921293123</li>
          <li>Email: info@merrymeals.com</li>
          <li> Yangon, Myanmar</li>
        </ul>
      </div>


      <div className="footer-col">
        <h4>Connect</h4>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <ul>
          <li> © 2020 Copyright: Merrymeals</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer