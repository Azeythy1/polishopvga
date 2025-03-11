import React from 'react';

const Cart = ({ cart, total, checkout }) => {
  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - R$ {item.price.toFixed(2)}</p>
        </div>
      ))}
      <h3>Total: R$ {total.toFixed(2)}</h3>
      <button onClick={checkout}>Finalizar Compra</button>
    </div>
  );
};

export default Cart;