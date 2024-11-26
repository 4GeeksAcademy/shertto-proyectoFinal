// EarphonesPage.js
import React, { useEffect, useState, useContext } from "react";
import EarphoneDetails from "./earphoneDetails"; // Importamos el componente para mostrar detalles individuales
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente
import { Context } from "../store/appContext"; 
import { imagenes } from "../../img/imagenes";

const EarphonesPage = () => {
  const { actions, store } = useContext(Context); // Accedemos al estado y las acciones del contexto
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  
  useEffect(() => {
    actions.getProductsByCategoryFromAPI(2); 
  }, []); //Al utilizar postman veo que la categoria Auriculares y Accesorios corresponde a la categoria con id=2

  if (!store.products.length) {
    return <div>Loading...</div>;
  }

  const featuredProducts = store.products.slice(0, 6); 

  // Función para manejar el clic en la imagen del producto
  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Guarda el producto seleccionado en el estado
  };

  // Función para cerrar el off-canvas
  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Auriculares y Accesorios</h1>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <EarphoneDetails
            key={product.id}
            product={product}
            onImageClick={handleProductImageClick} // Pasa la función para manejar clic en la imagen
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

export default EarphonesPage;
