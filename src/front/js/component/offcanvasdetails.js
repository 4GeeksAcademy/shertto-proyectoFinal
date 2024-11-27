import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext"; 
import "../../styles/offcanvas.css";
import { imagenes } from '../../img/imagenes';


const OffCanvasDetails = ({ product, onClose }) => {
  const imagen = imagenes.find(img => img.id === product.id)
  const { actions } = useContext(Context);
 // Función para manejar el clic en el ícono de carrito
 const handleAddToCart = () => {
 actions.addToCart({ ...product }); 
};
  return (
    <div className="offcanvas-container">
      <div className="offcanvas-overlay" onClick={onClose}></div>
      <div className="offcanvas-content">
        <button className="offcanvas-close" onClick={onClose}>
          ×
        </button>
        <h2>{product.name}</h2>
        <img src= {imagen?.url} alt={product.name} />
        <p>{product.description}</p>
        <div className="product-price">Precio: ${product.price}</div>
        <button  className="btn-buy" onClick={handleAddToCart}>Añadir a la cesta</button>

        <div className="customer-feedback">
          <h6>ACERCA DE ESTE PRODUCTO</h6>
          <p>
            Los clientes dicen: Los clientes están satisfechos con este producto. Destacan su funcionalidad y comodidad, describiéndolos como ergonómicos y de fácil manejo. 
            Además, valoran el precio del producto. En general, los comentarios resaltan la relación calidad-precio y consideran que merece la pena comprarlo.
          </p>
          <ul>
            <li>Funcionalidad</li>
            <li>Comodidad</li>
            <li>Relación calidad-precio</li>
            <li>Calidad</li>
            <li>Diseño</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default OffCanvasDetails;
