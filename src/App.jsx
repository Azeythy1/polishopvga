import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Promotions from './pages/Promotions';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Blusa Masculina',
      description: 'Blusa de algodão confortável',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Tênis Esportivo',
      description: 'Tênis para corrida',
      price: 129.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Smartphone',
      description: 'Smartphone com 128GB de armazenamento',
      price: 999.99,
      image: 'https://via.placeholder.com/150',
    },
    // Adicione mais produtos aqui
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    const message = `Olá, gostaria de comprar os seguintes itens:\n${cart
      .map((item) => `${item.name} - R$ ${item.price.toFixed(2)}`)
      .join('\n')}\nTotal: R$ ${total.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5535998782791?text=${encodedMessage}`, '_blank');
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/promocoes" element={<Promotions products={products} addToCart={addToCart} />} />
        </Routes>
        <Cart cart={cart} total={total} checkout={checkout} />
      </div>
    </Router>
  );
};

export default App;