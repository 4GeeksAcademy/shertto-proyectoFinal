import React, { useEffect, useState, useContext } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; 
import OffCanvasDetails from "./offcanvasdetails"; 
import { Context } from "../store/appContext"; 
import { imagenes } from "../../img/imagenes";


const WearablesPage = () => {
  const { actions, store } = useContext(Context); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    actions.getProductsByCategoryFromAPI(5); 
  }, []); //Al utilizar postman veo que la categoria Auriculares y Accesorios corresponde a la categoria con id=5

  if (!store.products.length) {
    return <div>Loading...</div>;
  }

  const featuredProducts = store.products.slice(0, 6); 

  

  const handleProductImageClick= (product) => {
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };


  return (
    <div className="product-page">
      <h1 className="title">Wearable</h1>
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

export default WearablesPage;
