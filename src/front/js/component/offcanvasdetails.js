import React from "react";
import "../../styles/offcanvas.css"; // Asegúrate de agregar estilos para el off-canvas

const OffCanvasDetails = ({ product, onClose }) => {
  return (
    <div className="offcanvas-container">
      <div className="offcanvas-overlay" onClick={onClose}></div> {/* Cierra al hacer clic fuera */}
      <div className="offcanvas-content">
        <button className="offcanvas-close" onClick={onClose}>
          ×
        </button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <div className="product-price">Precio: ${product.price}</div>
         {/* Información adicional, solo visible aquí */}
         {product.additionalInfo && (
          <div className="product-additional-info">
            <h4>Información adicional</h4>
            <p>{product.additionalInfo}</p>
          </div>
        )}
        <button className="btn-buy">Añadir a la cesta</button>
      </div>
    </div>
  );
};

export default OffCanvasDetails;
