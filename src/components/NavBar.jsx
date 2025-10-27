// (the top-level navigation of the website, sometimes referred to as the navbar)
import React from 'react';
import '../css/NavBar.css';
function NavBar() {
  return (
    <nav className="w-full py-4 flex items-center justify-between">
      <div className="text-lg font-semibold">Little Lemon</div>
      <ul className="flex space-x-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#specials">About</a></li>
        <li><a href="#testimonials">Menu</a></li>
        <li><a href="#chicago">Reservations</a></li>
        <li><a href="#booking">Order Online</a></li>
        <li><a href="#booking">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;