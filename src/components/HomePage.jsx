import React from 'react';
import '../css/HomePage.css';
import food from '../assets/food1.jpg';

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-text">
        <h1>Little Lemon</h1>
        <p className='location'>Chicago</p>
        <p>
          A brief description of what type of food it offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum porro sint dicta laborum ut molestias
          consequuntur deserunt eligendi maiores cum possimus, earum amet odio accusantium
          esse eaque quaerat nemo eum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis officia explicabo, nobis facilis natus voluptatem numquam tempora mollitia quidem et ea tenetur quam vitae? Magnam maiores quasi ullam aliquid.
        </p>
        <button>Book a Table</button>
      </div>
      <div>
        <img src={food} alt="Delicious food from Little Lemon" className='hero-img'/>
      </div>
    </div>
  );
}

export default HomePage;
