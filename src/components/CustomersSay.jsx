import React from 'react';
import '../css/CustomersSay.css';

function CustomersSay() {
  const testimonials = [
    {
      name: 'Sophia',
      review: 'The food was absolutely delicious! Highly recommended.',
      rating: 5,
    },
    {
      name: 'Oliver',
      review: 'A cozy place with amazing staff and excellent dishes.',
      rating: 4,
    },
    {
      name: 'Mia',
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
            <div className="customer-name">{t.name}</div>
            <div className="stars">{'★'.repeat(t.rating)}</div>
            <p>"{t.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersSay;
