// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const SmartPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Electrodomesticos Inteligentes", description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Antracita", price:51.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878799/71C3lbbeLsL._AC_SL1000_-removebg-preview_jshnfy.png" },
      { id: 2, name: "Electrodomesticos Inteligentes", description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Azul marino", price:51.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878799/61j3SEUjMJL._AC_SX425_-removebg-preview_hew8uv.png" },
      { id: 3, name: "Electrodomesticos Inteligentes", description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Blanco", price:51.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878858/71YVBa7zc5L._AC_SL1000_-removebg-preview_pncmul.png" },
      { id: 4, name: "Electrodomesticos Inteligentes", description: "iRobot Roomba Combo Essential, Robot Aspirador y friegasuelos, Potente aspiración y fregado, 4 Fases de Limpieza, 3 Niveles de aspiración, controlable vía App o Voz", price: 149.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/713AuD2N13L._AC_SL1500_-removebg-preview_r7dizl.png"},
      { id: 5, name: "Electrodomesticos Inteligentes", description: "iRobot Roomba Combo Essential, Robot Aspirador y friegasuelos, Potente aspiración y fregado, 4 Fases de Limpieza, 3 Niveles de aspiración, controlable vía App o Voz", price: 149.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71fIrIXxi3L._AC_SL1500_-removebg-preview_esg7hm.png" },
      { id: 6, name: "Electrodomesticos Inteligentes", description: "TESLA - Smart TV de 50 (127cm), Televisión Resolución UHD, Android TV 11, Hey Google Official Assistant, WiFi & Bluetooth, 2 Altavoces 12W, Chromecast Integrado, HDR10 3.840x2.160 (50E635SUS) - 2024", price: 329.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71PrnuefWzL._AC_SL1500_-removebg-preview_dpur5x.png" },
      { id: 7, name: "Electrodomesticos Inteligentes", description: "Cecotec Televisor LED 50 Smart TV A2 Series ALU20050. 4K UHD, Android 11, Diseño sin Marco, MEMC, Dolby Vision y Dolby Atmos, HDR10, 2 Altavoces de 10W, Modelo 2023 ", price: 339.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/61e42nbKslL._AC_SL1000_-removebg-preview_fhpdru.png" },
      { id: 8, name: "Electrodomesticos Inteligentes", description: "Cecotec Televisor LED 43 Smart TV A2 Series ALU20043S. 4K UHD, Android 11, Diseño sin Marco, MEMC, Dolby Vision y Dolby Atmos, HDR10, 2 Altavoces de 10W, Modelo 2023", price: 289.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/814uJV6licL._AC_SL1500_-removebg-preview_rp1lce.png" },
      { id: 9, name: "Electrodomesticos Inteligentes", description: "Cinnado Camara Vigilancia WiFi Interior - 2K Cámara Bebe con Seguimiento de Movimiento, Camaras Domicilio WiFi IP 360°, Visión Nocturna, 24/7 Grabación en Tarjeta SD, Compatible con Alexa", price: 20.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/61l6xjWxNXL._AC_SL1500_-removebg-preview_dvrw8q.png" },
      { id: 10, name: "Electrodomesticos Inteligentes", description: "GNCC Cámara Vigilancia WiFi Interior, 1080P Vigilabebes con Camara Domicilio WiFi Detección de Movimiento, Visión Nocturna, Audio de 2 Vias, Óptimo para Ver Bebés y Mascotas, C2", price: 20.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71DsOcR9TeL._AC_SL1500_-removebg-preview_r9rz1a.png" },
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
      <h1 className="title">Electrodomesticos Inteligentes</h1>
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

export default SmartPage;
