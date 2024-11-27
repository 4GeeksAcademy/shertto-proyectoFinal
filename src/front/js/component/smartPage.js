// EarphonesPage.js
import React, { useEffect, useState, useContext } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente
import { Context } from "../store/appContext"; 
import { imagenes } from "../../img/imagenes";

const SmartPage = () => {
  const { actions, store } = useContext(Context); 
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  useEffect(() => {
    actions.getProductsByCategoryFromAPI(7); 
  }, []); //Al utilizar postman veo que la categoria Auriculares y Accesorios corresponde a la categoria con id=7

  if (!store.products.length) {
    return <div>Loading...</div>;
  }

  const featuredProducts = store.products.slice(0, 6); 
  

  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Electrodomesticos Inteligentes</h1>
      <div className="product-list">
        {store.products.map((product) => (
            <EarphoneDetails
            key={product.id}
            product={product}
            onImageClick = {handleProductImageClick} // Pasa la función para manejar clic en la imagen
          />
        ))}
      </div>
      {selectedProduct && (
        <OffCanvasDetails
          product={selectedProduct}
          onClose={handleCloseOffCanvas} // Pasa la función de cierre
        />
      )}
    </div>
  );
};

export default SmartPage;
