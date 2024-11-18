// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente

const GamingPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, name: "Productos Gaming", description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Rojo）", price:149.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71d6N1gOzkL._AC_SL1500_-removebg-preview_e46tc8.png" },
      { id: 2, name: "Productos Gaming", description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Azúl）", price:149.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71YAEZ-lj0L._AC_SL1500_-removebg-preview_neojgw.png" },
      { id: 3, name: "Productos Gaming", description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Negro）", price:149.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71h3MKywDCL._AC_SL1500_-removebg-preview_qnzpth.png" },
      { id: 4, name: "Productos Gaming", description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Rosa)", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873910/71w8v6OMJKL._AC_SL1500_-removebg-preview_jt8rks.png"},
      { id: 5, name: "Productos Gaming", description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Blanco)", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71gz1a4X3EL._AC_SL1500_-removebg-preview_keqm5e.png" },
      { id: 6, name: "Productos Gaming", description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Negro)", price: 25.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/61v-QGd22mL._AC_SL1001_-removebg-preview_v9gywu.png" },
      { id: 7, name: "Productos Gaming", description: "Juego de Teclado y ratón para Disposición QWERTY Español USB RGB, GT817 104 Juego de Teclas y ratón Retroiluminados con Cable USB para PC Windows", price: 21.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71LKZ32h0-L._AC_SL1500_-removebg-preview_qlucza.png" },
      { id: 8, name: "Productos Gaming", description: "MARSGAMING MCP124, Combo Gaming 3en1, Teclado Ergonómico H-Mech LED RGB, Ratón RGB 3200DPI Switches HUANO, Alfombrilla Nanotextil 360x260mm, Compatibilidad Multiplataforma, Layout Español, Blanco", price: 22.65, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/61HSj3zpDfL._AC_SL1500_-removebg-preview_meom6v.png" },
      { id: 9, name: "Productos Gaming", description: "MARSGAMING MCP124, Combo Gaming 3en1, Teclado Ergonómico H-Mech LED RGB, Ratón RGB 3200DPI Switches HUANO, Alfombrilla Nanotextil 360x260mm, Compatibilidad Multiplataforma, Layout Español, Negro", price: 20.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71kcrLQTIxL._AC_SL1500_-removebg-preview_bvzdwi.png" },
      { id: 10, name: "Productos Gaming", description: "Orzly Teclado y Raton Gaming - Combo Ratón y Teclado USB [RGB LED Retroiluminación], Cascos Gamer, Alfombrilla de Ratón - Para Usuarios PC, Xbox y PS4 [Hornet RX250]", price: 59.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731874164/71S-pQNQyIL._AC_SL1500_-removebg-preview_1_bpuyaj.png" },
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
      <h1 className="title">Productos Gaming</h1>
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

export default GamingPage;
