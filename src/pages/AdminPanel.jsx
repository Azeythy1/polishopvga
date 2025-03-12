import React, { useState } from 'react';

const AdminPanel = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImages, setProductImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + productImages.length > 10) {
      alert('Você pode adicionar no máximo 10 fotos por produto.');
      return;
    }
    setProductImages([...productImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock, 10),
      images: productImages,
    };
    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setProductStock('');
    setProductImages([]);
  };

  return (
    <div className="admin-panel">
      <h2>Painel do Administrador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preço do Produto:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantidade em Estoque:</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fotos do Produto (máximo 10):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="image-preview">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Produto ${index + 1}`}
                style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
              />
            ))}
          </div>
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AdminPanel;