// (the top-level navigation of the website, sometimes referred to as the navbar)
function NavBar() {
  return (
    <nav className="w-full py-4 flex items-center justify-between">
      <div className="text-lg font-semibold">Little Lemon</div>
      <ul className="flex space-x-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#specials">Specials</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#chicago">Chicago</a></li>
        <li><a href="#booking">Booking</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;