// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"; // Importamos el componente para mostrar detalles individuales
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const EarphonesPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Auriculares y Accesorios", description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop (Azul)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640301/61jmLD3hYaL._AC_SL1500_-removebg-preview_gvndf6.png"},
      { id: 2, name: "Auriculares y Accesorios", description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop(Rosa)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640299/71vUQKFBNAL._AC_SL1500_-removebg-preview_equmuh.png" },
      { id: 3, name: "Auriculares y Accesorios", description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop(Verde)", price: 19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640298/6124U4tvjkL._AC_SL1500_-removebg-preview_dab3pv.png" },
      { id: 4, name: "Auriculares y Accesorios", description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7(Azul)", price: 15.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641084/61TaefSMD0L._AC_SL1500_-removebg-preview_ffydrk.png"},
      { id: 5, name: "Auriculares y Accesorios", description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7 (Negro y Rojo", price: 15.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641086/61g_2BI-xRL._AC_SL1500_-removebg-preview_tvtcxh.png" },
      { id: 6, name: "Auriculares y Accesorios", description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7 (Negro)", price: 15.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641084/81As5MZHE4L._AC_SL1500_-removebg-preview_gsffea.png" },
      { id: 7, name: "Auriculares y Accesorios", description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640291/614dbEosLTL._AC_SL1500_-removebg-preview_tohqzr.png" },
      { id: 8, name: "Auriculares y Accesorios", description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640292/61S3uezyxdL._AC_SL1500_-removebg-preview_luaxbf.png" },
      { id: 9, name: "Auriculares y Accesorios", description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640293/710Lppy-fzL._AC_SL1500_-removebg-preview_xm0qud.png" },
      { id: 10, name: "Auriculares y Accesorios", description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641953/612CWRLMU_L._AC_SL1500_-removebg-preview_ml7cfh.png" },
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
      <h1 className="title">Auriculares y Accesorios</h1>
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

export default EarphonesPage;
