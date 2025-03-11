import React from 'react';
import banner from '../assets/banner.jpeg'; // Ajuste o caminho conforme necessário

const Header = () => {
  return (
    <header>
      <img src={banner} alt="Banner Polli Shop VGA" style={{ width: '100%', height: '200px' }} />
      <nav>
        <a href="/">Início</a>
        <a href="/promocoes">Promoções</a>
      </nav>
    </header>
  );
};

export default Header;