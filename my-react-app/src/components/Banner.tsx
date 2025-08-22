import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <section
      style={{
        width: '100vw',
        minHeight: '60vh',
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
      }}
    >
    </section>
  );
}

export default Banner;