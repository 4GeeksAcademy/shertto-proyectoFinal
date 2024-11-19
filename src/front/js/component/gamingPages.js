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
      { id: 1, 
        name: "Productos Gaming", 
        description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Rojo）",
        price:149.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71d6N1gOzkL._AC_SL1500_-removebg-preview_e46tc8.png",
        additionalInfo1: "LED Silla Gaming：Más de 366 modos preestablecidos RGB para una experiencia de juego inmersiva. Sumérgete en el mundo del juego con las sillas de juego Devoko RGB. Las luces LED controladas a través de un mando a distancia crean una atmósfera que mejora la experiencia de juego por ordenador, haciéndola realmente inmersiva e inolvidable.",
        additionalInfo2: "Silla Ergonómica con Masaje：El sillón de juego con masaje tiene un modo de masaje para satisfacer diferentes necesidades. Los puntos de masaje en la zona lumbar pueden relajar eficazmente el cuerpo y los músculos lumbares. La silla también está equipada con un reposacabezas extraíble y un acolchado de reposabrazos de espesor, lo que reduce la presión sobre el cuello y la zona lumbar al tiempo que proporciona un apoyo eficaz durante el uso.",
        additionalInfo3: "Construcción Robusta: La Silla de Juego Ergonómica Devoko cuenta con un marco de metal acolchado y una base de metal resistente de cinco estrellas, por lo que si su hijo está jugando en la silla de juego o su mascota está saltando con entusiasmo arriba y abajo en la silla, las robustas patas de metal la mantendrán estable.",
      },
      
      { id: 2, 
        name: "Productos Gaming", 
        description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Azúl）",
        price:149.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71YAEZ-lj0L._AC_SL1500_-removebg-preview_neojgw.png",
        additionalInfo1: "LED Silla Gaming：Más de 366 modos preestablecidos RGB para una experiencia de juego inmersiva. Sumérgete en el mundo del juego con las sillas de juego Devoko RGB. Las luces LED controladas a través de un mando a distancia crean una atmósfera que mejora la experiencia de juego por ordenador, haciéndola realmente inmersiva e inolvidable.",
        additionalInfo2: "Silla Ergonómica con Masaje：El sillón de juego con masaje tiene un modo de masaje para satisfacer diferentes necesidades. Los puntos de masaje en la zona lumbar pueden relajar eficazmente el cuerpo y los músculos lumbares. La silla también está equipada con un reposacabezas extraíble y un acolchado de reposabrazos de espesor, lo que reduce la presión sobre el cuello y la zona lumbar al tiempo que proporciona un apoyo eficaz durante el uso.",
        additionalInfo3: "Construcción Robusta: La Silla de Juego Ergonómica Devoko cuenta con un marco de metal acolchado y una base de metal resistente de cinco estrellas, por lo que si su hijo está jugando en la silla de juego o su mascota está saltando con entusiasmo arriba y abajo en la silla, las robustas patas de metal la mantendrán estable.",
      },
      
      { id: 3, 
        name: "Productos Gaming", 
        description: "Devoko Silla Gaming con Masajeador y LED, Silla de Oficina Ergonómica con Reposapiés, Sillas Gaming para Oficina y Juegos con Iluminación RGB（Negro）",
        price:149.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71h3MKywDCL._AC_SL1500_-removebg-preview_qnzpth.png",
        additionalInfo1: "LED Silla Gaming：Más de 366 modos preestablecidos RGB para una experiencia de juego inmersiva. Sumérgete en el mundo del juego con las sillas de juego Devoko RGB. Las luces LED controladas a través de un mando a distancia crean una atmósfera que mejora la experiencia de juego por ordenador, haciéndola realmente inmersiva e inolvidable.",
        additionalInfo2: "Silla Ergonómica con Masaje：El sillón de juego con masaje tiene un modo de masaje para satisfacer diferentes necesidades. Los puntos de masaje en la zona lumbar pueden relajar eficazmente el cuerpo y los músculos lumbares. La silla también está equipada con un reposacabezas extraíble y un acolchado de reposabrazos de espesor, lo que reduce la presión sobre el cuello y la zona lumbar al tiempo que proporciona un apoyo eficaz durante el uso.",
        additionalInfo3: "Construcción Robusta: La Silla de Juego Ergonómica Devoko cuenta con un marco de metal acolchado y una base de metal resistente de cinco estrellas, por lo que si su hijo está jugando en la silla de juego o su mascota está saltando con entusiasmo arriba y abajo en la silla, las robustas patas de metal la mantendrán estable.",
       },
      
      { id: 4, 
        name: "Productos Gaming", 
        description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Rosa)",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873910/71w8v6OMJKL._AC_SL1500_-removebg-preview_jt8rks.png",
        additionalInfo1: "🤍【Sonido estéreo nítido】Con un controlador de 6 W bien equilibrado y un núcleo estéreo mejorado de 2,0 canales de rango completo, este altavoz para ordenadores NJSJ proporciona un sonido estéreo fantástico y claro. El altavoz monitor evita perfectamente cualquier ruido o distorsión, incluso con el volumen máximo.",
        additionalInfo2: "🤍【Retroiluminación LED cíclica】Las luces RGB del altavoz monitor cambian aleatoriamente de color durante la reproducción, lo que provoca que te sumerjas en una atmósfera de tranquilidad y alegría. (Nota: Las luces no se pueden controlar ni apagar durante su uso).",
        additionalInfo3: "🤍【Multicompatibilidad】Los altavoces de ordenador con cable funcionan con alimentación por USB (5 V) y tienen una interfaz de audio de 3,5 mm. Funcionan con ordenadores de mesa, dispositivos de escritorio, dispositivos móviles, portátiles, tabletas, iMac, PS4/5 y otros dispositivos que tengan un conector de auriculares estándar de 3,5 mm (Nota: Se necesita alimentación por USB).",
      },
      
      { id: 5, 
        name: "Productos Gaming", 
        description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Blanco)",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71gz1a4X3EL._AC_SL1500_-removebg-preview_keqm5e.png",
        additionalInfo1: "🤍【Sonido estéreo nítido】Con un controlador de 6 W bien equilibrado y un núcleo estéreo mejorado de 2,0 canales de rango completo, este altavoz para ordenadores NJSJ proporciona un sonido estéreo fantástico y claro. El altavoz monitor evita perfectamente cualquier ruido o distorsión, incluso con el volumen máximo.",
        additionalInfo2: "🤍【Retroiluminación LED cíclica】Las luces RGB del altavoz monitor cambian aleatoriamente de color durante la reproducción, lo que provoca que te sumerjas en una atmósfera de tranquilidad y alegría. (Nota: Las luces no se pueden controlar ni apagar durante su uso).",
        additionalInfo3: "🤍【Multicompatibilidad】Los altavoces de ordenador con cable funcionan con alimentación por USB (5 V) y tienen una interfaz de audio de 3,5 mm. Funcionan con ordenadores de mesa, dispositivos de escritorio, dispositivos móviles, portátiles, tabletas, iMac, PS4/5 y otros dispositivos que tengan un conector de auriculares estándar de 3,5 mm (Nota: Se necesita alimentación por USB).",
      },
      
      { id: 6, 
        name: "Productos Gaming", 
        description: "NJSJ Altavoces PC, 2.0 Sonido Estéreo, Altavoz PC con Luces de Colores RGB, 3,5mm Jack, Control de Volumen, para PC de Escritorio, Ordenador Portátil, Móvil, Computadora(Negro)",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/61v-QGd22mL._AC_SL1001_-removebg-preview_v9gywu.png",
        additionalInfo1: "🤍【Sonido estéreo nítido】Con un controlador de 6 W bien equilibrado y un núcleo estéreo mejorado de 2,0 canales de rango completo, este altavoz para ordenadores NJSJ proporciona un sonido estéreo fantástico y claro. El altavoz monitor evita perfectamente cualquier ruido o distorsión, incluso con el volumen máximo.",
        additionalInfo2: "🤍【Retroiluminación LED cíclica】Las luces RGB del altavoz monitor cambian aleatoriamente de color durante la reproducción, lo que provoca que te sumerjas en una atmósfera de tranquilidad y alegría. (Nota: Las luces no se pueden controlar ni apagar durante su uso).",
        additionalInfo3: "🤍【Multicompatibilidad】Los altavoces de ordenador con cable funcionan con alimentación por USB (5 V) y tienen una interfaz de audio de 3,5 mm. Funcionan con ordenadores de mesa, dispositivos de escritorio, dispositivos móviles, portátiles, tabletas, iMac, PS4/5 y otros dispositivos que tengan un conector de auriculares estándar de 3,5 mm (Nota: Se necesita alimentación por USB).",
       },
      
      { id: 7, 
        name: "Productos Gaming", 
        description: "Juego de Teclado y ratón para Disposición QWERTY Español USB RGB, GT817 104 Juego de Teclas y ratón Retroiluminados con Cable USB para PC Windows",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71LKZ32h0-L._AC_SL1500_-removebg-preview_qlucza.png",
        additionalInfo1: "7 modos diferentes y efectos de iluminación RGB. Los botones que ofrecen una retroiluminación clara y uniforme del botón WIN se pueden desactivar para los juegos.",
        additionalInfo2: "Teclado de juego tiene 25 teclas sin conflictos12 teclas FN + multimedia adicionales. Las teclas son silenciosas, diseñadas para la longevidad, la durabilidad que proporciona una respuesta táctil precisa.",
        additionalInfo3: "Compatibilidad con Windows 10, Windows 8, Windows 7, Windows Vista o Windows XP, soporte teclado Mac OS limitada.",
      },
      
      { id: 8, 
        name: "Productos Gaming", 
        description: "MARSGAMING MCP124, Combo Gaming 3en1, Teclado Ergonómico H-Mech LED RGB, Ratón RGB 3200DPI Switches HUANO, Alfombrilla Nanotextil 360x260mm, Compatibilidad Multiplataforma, Layout Español, Blanco",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/61HSj3zpDfL._AC_SL1500_-removebg-preview_meom6v.png",
        additionalInfo1: "PACK GAMING 3EN1: El combo MCP124 de Mars Gaming, ha sido diseñado para los gamers más exigentes; Este pack de PC incluye teclado ergonómico H-Mech LED RGB, ratón RGB de alta precisión y alfombrilla nanotextil con diseño rainbow, todo ello compatible con todas tus plataformas de juego.",
        additionalInfo2: "TECLADO ERGONÓMICO H-MECH LED FRGB: El teclado gaming de tamaño completo del combo MCP124 incluye un reposamuñecas ergonómico integrado, tecnología H-Mech e iluminación con una gran variedad de colores RGB fijos; Teclado con Idioma en Español.",
        additionalInfo3: "RATÓN GAMING RGB RAINBOW: El ratón del kit gamer MCP124 cuenta con sensor óptico de 3200 DPI, ajustable en cuatro niveles 800/1200/1600/3200 DPI; Además, está equipado con switches HUANO y cuenta con iluminación RGB rainbow.",
      },
      
      { id: 9, 
        name: "Productos Gaming", 
        description: "MARSGAMING MCP124, Combo Gaming 3en1, Teclado Ergonómico H-Mech LED RGB, Ratón RGB 3200DPI Switches HUANO, Alfombrilla Nanotextil 360x260mm, Compatibilidad Multiplataforma, Layout Español, Negro",
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731873911/71kcrLQTIxL._AC_SL1500_-removebg-preview_bvzdwi.png",
        additionalInfo1: "PACK GAMING 3EN1: El combo MCP124 de Mars Gaming, ha sido diseñado para los gamers más exigentes; Este pack de PC incluye teclado ergonómico H-Mech LED RGB, ratón RGB de alta precisión y alfombrilla nanotextil con diseño rainbow, todo ello compatible con todas tus plataformas de juego.",
        additionalInfo2: "TECLADO ERGONÓMICO H-MECH LED FRGB: El teclado gaming de tamaño completo del combo MCP124 incluye un reposamuñecas ergonómico integrado, tecnología H-Mech e iluminación con una gran variedad de colores RGB fijos; Teclado con Idioma en Español.",
        additionalInfo3: "RATÓN GAMING RGB RAINBOW: El ratón del kit gamer MCP124 cuenta con sensor óptico de 3200 DPI, ajustable en cuatro niveles 800/1200/1600/3200 DPI; Además, está equipado con switches HUANO y cuenta con iluminación RGB rainbow.",
       },
      
      { id: 10,
        name: "Productos Gaming",
        description: "Orzly Teclado y Raton Gaming - Combo Ratón y Teclado USB [RGB LED Retroiluminación], Cascos Gamer, Alfombrilla de Ratón - Para Usuarios PC, Xbox y PS4 [Hornet RX250]",
        price: 65.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731874164/71S-pQNQyIL._AC_SL1500_-removebg-preview_1_bpuyaj.png",
        additionalInfo1: "VALOR FANTÁSTICO PARA PC GAMERS; Incluye un ratón y teclado para juegos, auriculares para juegos y Alfombrilla de Ratón grande - 4 excelentes elementos esenciales para comenzar.",
        additionalInfo2: "El auricular con cable para juegos RX250: presenta sonido estéreo, almohadillas suaves para sesiones prolongadas, micrófono plegable con controles de cable de volumen y un conector de audio versátil de 3.5 mm.",
        additionalInfo3: "PUEDE UTILIZARSE para: juegos de PC, juegos de PS4, juegos de Xbox, juegos Retro Pie, o puede usarse para uso informático normal.",
      },
    ]);

  }, []);

  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Guarda el producto seleccionado en el estado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Productos Gaming</h1>
      <div className="product-list">
        {products.map((product) => (
            <EarphoneDetails
            key={product.id}
            product={product}
            onImageClick = {handleProductImageClick} // Pasa la función para manejar clic en la imagen
          />
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
