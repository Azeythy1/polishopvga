import React from 'react';
import ProductCard from '../components/ProductCard';

const Promotions = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Promoções</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Promotions;