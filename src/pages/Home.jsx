import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState([
    { name: 'Produto 1', price: 100.0, stock: 10, description: 'Descrição do Produto 1', images: [] },
    { name: 'Produto 2', price: 200.0, stock: 5, description: 'Descrição do Produto 2', images: [] },
    { name: 'Produto 3', price: 150.0, stock: 8, description: 'Descrição do Produto 3', images: [] },
    { name: 'Produto 4', price: 250.0, stock: 3, description: 'Descrição do Produto 4', images: [] },
    { name: 'Produto 5', price: 300.0, stock: 7, description: 'Descrição do Produto 5', images: [] },
    { name: 'Produto 6', price: 350.0, stock: 2, description: 'Descrição do Produto 6', images: [] },
    { name: 'Produto 7', price: 400.0, stock: 6, description: 'Descrição do Produto 7', images: [] },
    { name: 'Produto 8', price: 450.0, stock: 4, description: 'Descrição do Produto 8', images: [] },
    { name: 'Produto 9', price: 500.0, stock: 3, description: 'Descrição do Produto 9', images: [] },
    { name: 'Produto 10', price: 550.0, stock: 5, description: 'Descrição do Produto 10', images: [] },
    { name: 'Produto 11', price: 600.0, stock: 2, description: 'Descrição do Produto 11', images: [] },
    { name: 'Produto 12', price: 650.0, stock: 1, description: 'Descrição do Produto 12', images: [] },
    { name: 'Produto 13', price: 700.0, stock: 5, description: 'Descrição do Produto 13', images: [] },
    { name: 'Produto 14', price: 750.0, stock: 4, description: 'Descrição do Produto 14', images: [] },
    { name: 'Produto 15', price: 800.0, stock: 3, description: 'Descrição do Produto 15', images: [] },
    { name: 'Produto 16', price: 850.0, stock: 2, description: 'Descrição do Produto 16', images: [] },
    { name: 'Produto 17', price: 900.0, stock: 1, description: 'Descrição do Produto 17', images: [] },
  ]);

  return (
    <div>
      <h2>Produtos em Destaque</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;