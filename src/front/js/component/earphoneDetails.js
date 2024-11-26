import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext"; 
import "../../styles/earphonedetails.css";

const EarphoneDetails = ({ product, onImageClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false); // Estado para favoritos
  const [isInCart, setIsInCart] = useState(false); // Estado para carrito
  const { actions } = useContext(Context);

  // Función para manejar el clic en el ícono de favoritos
  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite); // Alterna el estado
    actions.addToFavorites(product); 
  };

  // Función para manejar el clic en el ícono de carrito
  const handleAddToCart = () => {
    setIsInCart(!isInCart); // Alterna el estado
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
          <div className="d-flex justify-content-center gap-3 mt-auto">
            <div
              className={`cart-icon ${isInCart ? "active" : ""}`} // Clase activa si está en el carrito
              onClick={handleAddToCart}
            >
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div
              className={`favorite-icon ${isFavorite ? "active" : ""}`} // Clase activa si es favorito
              onClick={handleAddToFavorites}
            >
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphoneDetails;
