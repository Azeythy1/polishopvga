import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import Promotions from './pages/Promotions';
import Header from './components/Header';

const App = () => {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState([
    { name: 'Produto 1', price: 100.0, stock: 10, image: 'path/to/image1.jpg' },
    { name: 'Produto 2', price: 200.0, stock: 5, image: 'path/to/image2.jpg' },
    { name: 'Produto 3', price: 150.0, stock: 8, image: 'path/to/image3.jpg' },
  ]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    console.log('Produto adicionado ao carrinho:', product);
  };

  return (
    <Router>
      {/* Componente de cabeçalho */}
      <Header />
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota para a página do administrador */}
        <Route path="/admin" element={<AdminPage />} />
        {/* Rota para a página de promoções */}
        <Route path="/promocoes" element={<Promotions products={products} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;