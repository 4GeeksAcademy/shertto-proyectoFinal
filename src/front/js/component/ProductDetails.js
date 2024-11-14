import React from "react";
import "../../styles/productdetails.css"; // Asegúrate de que el archivo de estilos esté importado

const ProductDetails = ({ name, description, price, image, category }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
    <h3 className="product-name">{name}</h3>
    <p className="product-category">Categoría: <span>{category}</span></p>
    <p className="product-description">{description}</p>
    <div className="price-button-container">
        <div className="product-price">
            <span>${price}</span>
        </div>
        <button className="btn-buy">Añadir al carrito</button>
    </div>
</div>
</div>
  );
};

export default ProductDetails;
