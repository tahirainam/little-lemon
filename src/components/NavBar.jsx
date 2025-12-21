import { Link } from "react-router-dom";

// (the top-level navigation of the website, sometimes referred to as the navbar)
import React from 'react';
import '../css/NavBar.css';
import logo from '../assets/littlelemon_logo.png';
function NavBar() {
  return (
    <nav className="w-full py-4 flex items-center justify-between">
      <div className="text-lg font-semibold">
        <img src={logo} alt="Little Lemon Logo" className='nav-logo' />
      </div>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;