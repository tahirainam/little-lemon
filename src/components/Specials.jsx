import React from 'react';
import '../css/Specials.css';

function Specials() {
  const specialsData = [
    { name: 'Greek Salad', price: '$12.99', image: 'image_url', description: 'Fresh salad with feta and olives.' },
    { name: 'Bruschetta', price: '$8.50', image: 'image_url', description: 'Toasted bread with tomatoes and basil.' },
    { name: 'Lemon Dessert', price: '$6.00', image: 'image_url', description: 'Refreshing lemon-flavored dessert.' },
  ];

  return (
    <div className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Menu</button>
      </div>

      <div className="specials-cards">
        {specialsData.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button>Order a delivery</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specials;
