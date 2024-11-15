// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados

const ChargerPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Auriculares Bluetooth", description: "Auriculares inalámbricos de alta calidad con cancelación de ruido", price: 150, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731620156/159581-800-800_td2spj_mwodnm.png", category: "Auriculares" },
      { id: 2, name: "Cargador Rápido", description: "Cargador rápido compatible con varios dispositivos", price: 50, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731430941/MQTR3_ieiuh2.jpg", category: "Accesorios" },
      { id: 3, name: "Cable USB-C", description: "Cable de carga rápida para dispositivos USB-C", price: 25, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731436861/4ecef4dd222e6588552a0712328486bc_zwyokt.jpg", category: "Accesorios" },
      // Agrega más productos según sea necesario
    ]);
  }, []);

  return (
    <div className="product-page">
      <h1 className="title">Auriculares y Accesorios</h1>
      <div className="product-list">
        {products.map((product) => (
          <EarphoneDetails key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ChargerPage;
