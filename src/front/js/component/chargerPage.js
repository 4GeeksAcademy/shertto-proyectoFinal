// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const ChargerPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Wereables", description: "JSAUX Cargador mag-Safe de 15W Cargador Inalámbrico Magnético Estación de Carga Inductiva Compatible con Cargador MagSafe iPhone 16/16 Pro/16 Pro MAX 16 Plus/15/15 Pro/Pro Max/14 13 12 Airpods Azul", price:17.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51cpAxAy8kL._AC_SX425_-removebg-preview_pdh0ng.png" },
      { id: 2, name: "Wereables", description: "SAUX Cargador de Inducción MagSafe Cargador 15W, Cargador Magnético Inalámbrico Compatible con iPhone 15/15 Pro/15 Pro MAX/ 15 Plus/14/14 Pro Max/13/12, Cargador Rápido para iPhone con Kickstand, Negro", price: 17.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51E71szSf5L._AC_SL1500_-removebg-preview_hhvlij.png"},
      { id: 3, name: "Wereables", description: "JSAUX, Cargador magnético inalámbrico de 15 W Compatible con Cargador MagSafe para iPhone 14 Plus/iPhone 14 Pro MAX/iPhone 13 Pro Max/13 Mini/13 Pro/13/12 Mini/12 Pro MAX/Airpods Pro, Plateado", price: 17.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51qQM8rUQrL._AC_SL1500_-removebg-preview_i9u4ow.png" },
      { id: 4, name: "Wereables", description: "Belkin cargador MagSafe 3 en 1, certificación MFi, carga inalámbrica rápida portátil para serie de iPhone 15, iPhone 14, 13, 12, Apple Watch Series 9, 8 y posteriores, AirPods 2 y AirPods Pro (Negro)", price:109.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/71J4Z5j9i_L._AC_SL1500_-removebg-preview_icukfj.png" },
      { id: 5, name: "Wereables", description: "Belkin cargador MagSafe 3 en 1, certificación MFi, carga inalámbrica rápida portátil para serie de iPhone 16, 15, 14, 13, 12, Apple Watch Series 9, 8 y posteriores, AirPods 2 y AirPods Pro (Blanco)", price:109.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/71_jLyf0rdL._AC_SL1500_-removebg-preview_ayznbg.png" },
      { id: 6, name: "Wereables", description: "IVSHOWCO Adaptador Lightning a USB [Certificado Apple MFI] para cámara, iPhone, iOS OTG, Compatible con Unidad Flash USB, Lector de Tarjetas, ratón, Teclado (Negro)", price: 13.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/51zpU1FdHiL._AC_SL1200_-removebg-preview_aoiqo1.png" },
      { id: 7, name: "Wereables", description: "IVSHOWCO Adaptador de cámara USB para Phone, Adaptador de Cable USB OTG de Destino para Pad Compatible con Unidad Flash USB, Lector de Tarjetas, ratón, Teclado (Blanco)", price: 13.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/517lZ-cfkGL._AC_SX425_-removebg-preview_l6ts9x.png" },
      { id: 8, name: "Wereables", description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Negro)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/61qNe0BIBrL._AC_SL1500_-removebg-preview_fqncbw.png" },
      { id: 9, name: "Wereables", description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Negro Oscuro)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/61R2FgqY4mL._AC_SL1500_-removebg-preview_wto7ez.png" },
      { id: 10, name: "Wereables", description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Blanco)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51VrO0YmgrL._AC_SL1500_-removebg-preview_zewq3j.png" },
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
      <h1 className="title">Cargadores y Adaptadores</h1>
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

export default ChargerPage;
