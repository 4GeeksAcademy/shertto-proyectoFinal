// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const PcPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Accesorios para PC", description: "Uineer Ratón con Cable, 7200 dpi Ajustable y 6 Botones, diseño ergonómico, ratón óptico USB optimizado para PC portátil para Trabajar y, Negro Mate", price:11.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880453/51WmJULWbHL._AC_SL1500_-removebg-preview_k2oquf.png" },
      { id: 2, name: "Accesorios para PC", description: "Uineer Ratón con Cable, Clic silencioso, 3200 dpi Ajustable y 6 Botones, diseño ergonómico, ratón óptico USB optimizado para PC portátil para Trabajar y Jugar(Gris)", price:11.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/618W2aULm6L._AC_SX425_-removebg-preview_hf5dkp.png" },
      { id: 3, name: "Accesorios para PC", description: "INPHIC Raton inalámbrico, 2.4G Raton inalámbrico Recargable con Receptor USB, 3 Niveles Ajustables De dpi para Computadora PortáTil, Pc, Mac, Computadora, Macbook, Negro", price:14.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/51ikMaS08HL._AC_SL1500_-removebg-preview_ht3qgl.png" },
      { id: 4, name: "Accesorios para PC", description: "INPHIC Ratón Inalámbrico Recargable, [Actualizado], Ratón Inalámbrico 2.4G Silencioso 1600 dpi con Receptor USB para Ordenador Portátil Ordenador Mac Tableta, Nivel de Batería Visible, Blanco", price: 14.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880453/41V_vCPK4IL._AC_SL1500_-removebg-preview_ponj9l.png"},
      { id: 5, name: "Accesorios para PC", description: "ewanxin Webcam 1080P Full HD CMOS Cámara Web de Alta Micrófono Reductor de Ruido y Corrección de Automática,USB Plug and Play,Base Giratoria de 360°,para PC Computadora Portátil, Videollamadas Juegos", price: 22.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71Ms7MN08KL._AC_SL1500_-removebg-preview_mztyjm.png" },
      { id: 6, name: "Accesorios para PC", description: "TECKNET 1080P Full HD CMOS Cámara Web de Alta Micrófono Reductor de Ruido y Corrección de Automática,USB Plug and Play,Base Giratoria de 360°,para PC Computadora Portátil, Videollamadas Juegos", price: 22.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/51zTrJmCDOS._AC_SL1326_-removebg-preview_wrwugp.png" },
      { id: 7, name: "Accesorios para PC", description: "TECKNET Alfombrilla Ratón con Reposamuñecas, Gaming Mouse Pad Ergonómica con Apoyo, Espuma Viscoelástica, Tacto Agradable & Impermeable, Alfombra Raton con Cojín, Base de Goma no Deslizante", price: 9.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71tIA7Z3y0L._AC_SX425_-removebg-preview_a33iqr.png" },
      { id: 8, name: "Accesorios para PC", description: "TECKNET Alfombrilla de Ratón Apoyo de Gel, Cojín Alfombrilla de Ratón (Base de Goma no Deslizante) - Superficie Texturizada Impermeable", price: 9.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71pvrDJvc6L._AC_SL1500_-removebg-preview_ib6yxu.png" },
      { id: 9, name: "Accesorios para PC", description: "Perixx PERIBOARD-213W Teclado de Tijera USB silencioso con Cable - Diseño Compacto con Teclado numérico - Blanco - QWERTY Español con Ñ", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71Ms7MN08KL._AC_SL1500_-removebg-preview_mztyjm.png" },
      { id: 10, name: "Accesorios para PC", description: "Perixx PERIBOARD-213B Teclado de Tijera USB silencioso con Cable - Diseño Compacto con Teclado numérico - Negro - Qwert Español con Ñ", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/611SSEvwD3L._AC_SL1500_-removebg-preview_jfz0ub.png" },
    ]);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Accesorios para PC</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
          key={product.id}
          onClick={() => handleProductClick(product)} // Maneja el clic para abrir el off-canvas
        >
          <EarphoneDetails {...product} />
        </div>
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
