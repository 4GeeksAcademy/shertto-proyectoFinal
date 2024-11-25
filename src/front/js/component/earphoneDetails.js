import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext"; 
import "../../styles/earphonedetails.css";

const EarphoneDetails = ({ product, onImageClick }) => {
  const [quantity, setQuantity] = useState(1);
  const { actions } = useContext(Context)

  // Función para manejar el clic en el ícono de favoritos
  const handleAddToFavorites = () => {
    actions.addToFavorites(product); 
  };

  const handleAddToCart = () => {
    actions.addToCart({ ...product, quantity }); 
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          onClick={() => onImageClick(product)} // Llama a la función con el producto como argumento
        />
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="price-button-container">
          <div className="product-price">${product.price}</div>
          
          {/* Contenedor para los íconos */}
          <div className="quantity-favorite-container">
            {/* Ícono de corazón */}
            <div className="favorite-icon" onClick={handleAddToFavorites}>
              <i className="fas fa-heart"></i>
            </div>
            {/* Ícono de cesta */}
            <div className="cart-icon" onClick={handleAddToCart}>
              <i className="fa-sharp fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphoneDetails;

