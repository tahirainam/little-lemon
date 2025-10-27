import React from 'react';
import '../css/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-text">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          A brief description of what type of food it offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum porro sint dicta laborum ut molestias
          consequuntur deserunt eligendi maiores cum possimus, earum amet odio accusantium
          esse eaque quaerat nemo eum!
        </p>
        <button>Book a Table</button>
      </div>
      <div>
        <img src="image_url" alt="Delicious food from Little Lemon" />
      </div>
    </div>
  );
}

export default HomePage;
