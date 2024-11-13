import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";  // Importa el componente de detalles
import "../../styles/productpage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de obtención de productos (puedes conectar con una API real)
    setProducts([
      { id: 1, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros ", price: 100, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 2, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 200, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 3, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 150, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 4, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 100, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 5, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 200, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 6, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 150, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 7, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 100, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 8, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 200, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 9, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 200, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
      { id: 10, name: "Producto", description: "Belkin BoostCharge cargador de pared de 25 W con PPS, cargador USB C, USB-C Power Delivery, carga rápida para iPhone 16, 15, teléfonos de Samsung Galaxy, Galaxy Tab, Note, iPad y Pixel entre otros", price: 200, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731458754/31T5DwGwEkS._AC_SL1000_-removebg-preview_qu1xof.png", category: "Electrónica" },
    ]);
  }, []);

  return (
    <div className="product-page">
      <h1 className="title">Nuestros Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductDetails key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;