import React from 'react';
import '../css/Footer.css';
import logo from '../assets/small_logo.png';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Column 1 - Logo */}
      <div className="footer-column">
        <img src={logo} alt="Little Lemon logo" />
      </div>

      {/* Column 2 - Doormat Navigation */}
      <div className="footer-column">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

      {/* Column 3 - Contact Info */}
      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li>Address: Chicago, IL</li>
          <li>Phone: +1 (312) 555-1234</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>

      {/* Column 4 - Social Media */}
      <div className="footer-column">
        <h4>Social Media</h4>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
