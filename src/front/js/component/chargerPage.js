import React, { useEffect, useState, useContext } from "react";
import EarphoneDetails from "./earphoneDetails";
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente
import { Context } from "../store/appContext";
import { imagenes } from "../../img/imagenes";

const ChargerPage = () => {
  const { actions, store } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  // Obtener los productos de la categoría
  useEffect(() => {
    actions.getProductsByCategoryFromAPI(6);
  }, []); // La categoría 6 corresponde a Auriculares y Accesorios

  // Mostrar un mensaje de carga mientras se obtienen los productos
  if (!store.products.length) {
    return <div>Loading...</div>;
  }

  // Manejar clic en la imagen del producto
  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  // Manejar cierre del OffCanvas
  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Cargadores y Adaptadores</h1>
      <div className="product-list">
        {store.products.map((product) => {
          // Buscar la imagen correspondiente al producto
          const imagen = imagenes.find((img) => img.id === product.id);

          return (
            <EarphoneDetails
              key={product.id}
              product={product}
              imagen={imagen} // Pasar la imagen al componente
              onImageClick={handleProductImageClick} // Pasar la función para manejar clic en la imagen
            />
          );
        })}
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

export default ChargerPage;