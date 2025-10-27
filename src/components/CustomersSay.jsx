import React from 'react';
import '../css/CustomersSay.css';

function CustomersSay() {
  const testimonials = [
    {
      name: 'Sophia',
      image: 'customer1_url',
      review: 'The food was absolutely delicious! Highly recommended.',
      rating: 5,
    },
    {
      name: 'Oliver',
      image: 'customer2_url',
      review: 'A cozy place with amazing staff and excellent dishes.',
      rating: 4,
    },
    {
      name: 'Mia',
      image: 'customer3_url',
      review: 'Loved the ambiance and the service was top-notch!',
      rating: 5,
    },
  ];

  return (
    <div className="customers-say">
      <h2>Testimonials</h2>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} />
            <div className="stars">{'★'.repeat(t.rating)}</div>
            <p>"{t.review}"</p>
            <div className="customer-name">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersSay;
