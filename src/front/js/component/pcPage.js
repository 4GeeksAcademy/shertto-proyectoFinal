// EarphonesPage.js
import React, { useEffect, useState, useContext } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente
import { Context } from "../store/appContext"; 


const PcPage = () => {
  const { actions, store } = useContext(Context); 
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  useEffect(() => {
    actions.getProductsByCategoryFromAPI(8); 
  }, [actions]); //Al utilizar postman veo que la categoria Auriculares y Accesorios corresponde a la categoria con id=8

  if (!store.products.length) {
    return <div>Loading...</div>;
  }

  const featuredProducts = store.products.slice(0, 6); 
  

  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Guarda el producto seleccionado en el estado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Accesorios para PC</h1>
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

export default PcPage;
