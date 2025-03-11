import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Produtos em Destaque</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;