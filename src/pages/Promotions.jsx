import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from '../components/ProductCard';

const Promotions = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Promoções</h2>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <div className="legend">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Promotions;