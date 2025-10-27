import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Column 1 - Logo */}
      <div className="footer-column">
        <img src="image_url" alt="Little Lemon logo" />
      </div>

      {/* Column 2 - Doormat Navigation */}
      <div className="footer-column">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
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
