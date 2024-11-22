import React from "react";
import "../../styles/offcanvas.css";

const OffCanvasDetails = ({ product, onClose }) => {
  return (
    <div className="offcanvas-container">
      <div className="offcanvas-overlay" onClick={onClose}></div>
      <div className="offcanvas-content">
        <button className="offcanvas-close" onClick={onClose}>
          ×
        </button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <div className="product-price">Precio: ${product.price}</div>
        <button className="btn-buy">Añadir a la cesta</button>

        {/* Información adicional alineada a la izquierda */}
        {product.additionalInfo1 && product.additionalInfo2 && product.additionalInfo3 && (
          <div className="product-additional-info">
            <h6>Acerca de este producto</h6>
            <p>• {product.additionalInfo1}</p>
            <p>• {product.additionalInfo2}</p>
            <p>• {product.additionalInfo3}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OffCanvasDetails;
