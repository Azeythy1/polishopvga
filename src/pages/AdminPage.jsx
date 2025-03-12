import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import ProductCard from '../components/ProductCard';

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h2>Painel do Administrador</h2>
      <AdminPanel addProduct={addProduct} />
      <h2>Produtos Adicionados</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;