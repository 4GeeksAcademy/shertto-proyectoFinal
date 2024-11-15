import React, { useState } from 'react';
import "../../styles/earphonedetails.css";

const PhotographyDetails = ({ name, description, price, image, category }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
  };

 

  return (
      <div className="product-card">
          <div className="product-image-container">
              <img src={image} alt={name} className="product-image" />
          </div>
          <div className="product-info">
              <div className="product-name">{name}</div>
              <div className="product-category">{category}</div>
              <div className="product-description">{description}</div>

              <div className="price-button-container">
                  <div className="product-price">${price}</div>

                  {/* Contenedor con flexbox para cantidad y corazón */}
                  <div className="quantity-favorite-container">
                      <div className="quantity-container">
                          <label className="quantity-label">Cantidad: </label>
                          <select 
                              value={quantity} 
                              onChange={handleQuantityChange}
                              className="quantity-selector"
                          >
                              {[1, 2, 3, 4, 5].map((num) => (
                                  <option key={num} value={num}>
                                      {num}
                                  </option>
                              ))}
                          </select>
                      </div>

                      {/* Ícono de corazón separado a la derecha */}
                      <button className="btn btn-outline-danger">
                          {/* Usamos el ícono SVG de Bootstrap */}
                          <i className="fas fa-heart"></i>
                      </button>
                  </div>

                  <button className="btn-buy">Añadir al carrito</button>
              </div>
          </div>
      </div>
  );
};

export default PhotographyDetails;
