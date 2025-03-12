import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.images && product.images.length > 0 ? (
          <img
            src={URL.createObjectURL(product.images[0])}
            alt={product.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        ) : (
          <img
            src="path/to/default-image.jpg"
            alt="Produto sem imagem"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-info">
          <p>Preço: R${product.price.toFixed(2)}</p>
          <p>Estoque: {product.stock}</p>
        </div>
        {addToCart && (
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;