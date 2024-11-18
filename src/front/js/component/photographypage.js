// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"; // Importamos el componente para mostrar detalles individuales
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const PhotographyPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Fotografía y videocamarás", description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/51VAcc934LL._AC_SL1500_-removebg-preview_qw3rop.png" },
      { id: 2, name: "Fotografía y videocamarás", description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/61RShX43PjL._AC_SL1500_-removebg-preview_eg5qfm.png" },
      { id: 3, name: "Fotografía y videocamarás", description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/61XEbGG05gL._AC_SL1500_-removebg-preview_mulwsu.png" },
      { id: 4, name: "Fotografía y videocamarás", description: "Cámara Digital de 64 MP, Zoom óptico de 16 Aumentos, Lente Gran Angular de 62 Mm, Estabilización de Imagen óptica, Video 4K Full HD, Pantalla a Color IPS de 3, Cámara Vlogging", price: 125.70, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871486/41UjpaXYdZL._AC_-removebg-preview_hflitt.png"},
      { id: 5, name: "Fotografía y videocamarás", description: "Canon EOS 2000D más EF-S 18-55mm f/3.5-5.6 III Juego de cámara SLR 24,1 MP CMOS 6000 x 4000 Pixeles Negro - Cámara digital (Full HD, Negro)", price: 449.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/81C9A0E_8TL._AC_SL1500_-removebg-preview_xjuzvj.png" },
      { id: 6, name: "Fotografía y videocamarás", description: "KODAK Pixpro Astro Zoom AZ405 - Cámara digital bridge, zoom de 40x, gran angular de 24 mm, 20 megapíxeles, LCD de 3, vídeo Full HD 1080p, OIS, pila AA - Negro", price: 229.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/81s6vB6opOL._AC_SL1500_-removebg-preview_hghu0m.png" },
      { id: 7, name: "Fotografía y videocamarás", description: "Instax Mini 9, Cámara Instantánea, Rosa (Flamingo Rosa)", price: 93.39, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/71aIMj1B7WL._AC_SL1500_-removebg-preview_nw8ptw.png" },
      { id: 8, name: "Fotografía y videocamarás", description: "Instax Mini 9, Cámara Instantánea, Rosa (Amarillo)", price: 93.39, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/61wDS0fGZWL._AC_SL1500_-removebg-preview_mg10tj.png" },
      { id: 9, name: "Fotografía y videocamarás", description: "Instax Mini 9, Cámara Instantánea, Rosa (Celeste)", price: 93.39, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/615yHHnpQZL._AC_SL1500_-removebg-preview_shckzr.png" },
      { id: 10, name: "Fotografía y videocamarás", description: "Instax Mini 9, Cámara Instantánea, Rosa (Verde Lima)", price: 93.39, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/71rO54Vf2-L._AC_SL1500_-removebg-preview_bbgcie.png" },
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
      <h1 className="title">Fotografía y videocamarás</h1>
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

export default PhotographyPage;
