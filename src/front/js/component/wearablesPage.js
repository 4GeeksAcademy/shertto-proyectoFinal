// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados

const WearablesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Wearables", description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Blanco)", price:19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875454/61YlfZJ6yiL._AC_SL1500_-removebg-preview_bfp62o.png" },
      { id: 2, name: "Wearables", description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Negro)", price:19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/71Rh3UQ6PNL._AC_SL1500_-removebg-preview_qxbals.png" },
      { id: 3, name: "Wearables", description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Rosa)", price:19.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875454/61gwWcND2PL._AC_SL1500_-removebg-preview_xrf2cs.png" },
      { id: 4, name: "Wearables", description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Rojo Brillante)", price: 121.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/412Cil_BOL._AC_-removebg-preview_zyqbey.png"},
      { id: 5, name: "Wearables", description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Amarillo Fluor)", price: 121.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61sVLx1MWRL._AC_SL1200_-removebg-preview_l7kmhd.png" },
      { id: 6, name: "Wearables", description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Verde Menta)", price: 121.00, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61BKos4t5OL._AC_SL1200_-removebg-preview_fuxwl6.png" },
      { id: 7, name: "Wearables", description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", price: 18.50, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61nAvwgNTLL._AC_SL1500_-removebg-preview_mdauhf.png" },
      { id: 8, name: "Wearables", description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", price: 18.50, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61qiVF5oWDL._AC_SX425_-removebg-preview_gebfyn.png" },
      { id: 9, name: "Wearables", description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", price: 18.50, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61qW5MfqxwL._AC_SL1500_-removebg-preview_m5e4uq.png" },
      { id: 10, name: "Wearables", description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", price: 18.50, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61ZM_bs2NSL._AC_SX425_-removebg-preview_xr6jgv.png" },
    ]);
  }, []);

  return (
    <div className="product-page">
      <h1 className="title">Wearable</h1>
      <div className="product-list">
        {products.map((product) => (
          <EarphoneDetails key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default WearablesPage;
