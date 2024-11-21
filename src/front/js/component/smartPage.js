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
      { id: 1, 
        name: "Electrodomesticos Inteligentes", 
        description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Antracita", 
        price: 55.99, image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878799/71C3lbbeLsL._AC_SL1000_-removebg-preview_jshnfy.png" ,
        additionalInfo1: "MÚSICA Y PÓDCAST: Disfruta de música, audiolibros y pódcast de Amazon Music, Audible, Apple Music, Spotify y otros servicios de música en streaming o trasmite música a través de Bluetooth o wifi.",
        additionalInfo2: "PROTECCIÓN DE PRIVACIDAD: Cuenta con múltiples capas de control de la privacidad, incluido un botón para desactivar los micrófonos que los desconecta electrónicamente.",
        additionalInfo3: "SOSTENIBILIDAD INTEGRADA EN EL DISEÑO: El 99 % del embalaje está hecho con materiales reciclados o procedentes de bosques de gestión responsable, el 95 % de la tela es tela reciclada posconsumo y el 55 % de los plásticos son plásticos reciclados posconsumo."
      },

      { id: 2, 
        name: "Electrodomesticos Inteligentes", 
        description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Azul marino", 
        price: 55.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878799/61j3SEUjMJL._AC_SX425_-removebg-preview_hew8uv.png" ,
        additionalInfo1: "MÚSICA Y PÓDCAST: Disfruta de música, audiolibros y pódcast de Amazon Music, Audible, Apple Music, Spotify y otros servicios de música en streaming o trasmite música a través de Bluetooth o wifi.",
        additionalInfo2: "PROTECCIÓN DE PRIVACIDAD: Cuenta con múltiples capas de control de la privacidad, incluido un botón para desactivar los micrófonos que los desconecta electrónicamente.",
        additionalInfo3: "SOSTENIBILIDAD INTEGRADA EN EL DISEÑO: El 99 % del embalaje está hecho con materiales reciclados o procedentes de bosques de gestión responsable, el 95 % de la tela es tela reciclada posconsumo y el 55 % de los plásticos son plásticos reciclados posconsumo."
      },

      { id: 3, 
        name: "Electrodomesticos Inteligentes", 
        description: "Echo Dot (5.ª generación, modelo de 2022) | Altavoz inteligente wifi y Bluetooth con Alexa, con sonido más potente y de mayor amplitud | Blanco", 
        price: 55.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878858/71YVBa7zc5L._AC_SL1000_-removebg-preview_pncmul.png" ,
        additionalInfo1: "MÚSICA Y PÓDCAST: Disfruta de música, audiolibros y pódcast de Amazon Music, Audible, Apple Music, Spotify y otros servicios de música en streaming o trasmite música a través de Bluetooth o wifi.",
        additionalInfo2: "PROTECCIÓN DE PRIVACIDAD: Cuenta con múltiples capas de control de la privacidad, incluido un botón para desactivar los micrófonos que los desconecta electrónicamente.",
        additionalInfo3: "SOSTENIBILIDAD INTEGRADA EN EL DISEÑO: El 99 % del embalaje está hecho con materiales reciclados o procedentes de bosques de gestión responsable, el 95 % de la tela es tela reciclada posconsumo y el 55 % de los plásticos son plásticos reciclados posconsumo."
      },

      { id: 4, 
        name: "Electrodomesticos Inteligentes", 
        description: "iRobot Roomba Combo Essential, Robot Aspirador y friegasuelos, Potente aspiración y fregado, 4 Fases de Limpieza, 3 Niveles de aspiración, controlable vía App o Voz", 
        price: 175.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/713AuD2N13L._AC_SL1500_-removebg-preview_r7dizl.png",
        additionalInfo1: "Limpieza completa con una sistema de limpieza en 4 fases- El potente sistema de limpieza en 4 fases aspira y friega en una pasada con un cepillo especial para bordes que evita la acumulación de polvo",
        additionalInfo2: "Diseñado meticulosamente para simplificar la limpieza- La aplicación iRobot Home te hace la vida más fácil con funciones como Limpiar mientras estoy fuera, programas de limpieza recomendados y un informe de Clean Map para que siempre sepas por dónde ha limpiado tu robot Roomba Combo Essential, incluso si no estabas en casa para verlo",
        additionalInfo3: "Pequeño, inteligente y listo para limpiar- Su elegante diseño de perfil bajo le permite colarse por lugares de difícil acceso para atrapar el polvo y la suciedad bajo camas y sofás, mientras que el cepillo para esquinas y bordes limpia en profundidad cada rincón"
      },

      { id: 5, 
        name: "Electrodomesticos Inteligentes", 
        description: "iRobot Roomba Combo Essential, Robot Aspirador y friegasuelos, Potente aspiración y fregado, 4 Fases de Limpieza, 3 Niveles de aspiración, controlable vía App o Voz", 
        price: 175.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71fIrIXxi3L._AC_SL1500_-removebg-preview_esg7hm.png" ,
        additionalInfo1: "Limpieza completa con una sistema de limpieza en 4 fases- El potente sistema de limpieza en 4 fases aspira y friega en una pasada con un cepillo especial para bordes que evita la acumulación de polvo",
        additionalInfo2: "Diseñado meticulosamente para simplificar la limpieza- La aplicación iRobot Home te hace la vida más fácil con funciones como Limpiar mientras estoy fuera, programas de limpieza recomendados y un informe de Clean Map para que siempre sepas por dónde ha limpiado tu robot Roomba Combo Essential, incluso si no estabas en casa para verlo",
        additionalInfo3: "Pequeño, inteligente y listo para limpiar- Su elegante diseño de perfil bajo le permite colarse por lugares de difícil acceso para atrapar el polvo y la suciedad bajo camas y sofás, mientras que el cepillo para esquinas y bordes limpia en profundidad cada rincón"
      },

      { id: 6, 
        name: "Electrodomesticos Inteligentes", 
        description: "TESLA - Smart TV de 50 (127cm), Televisión Resolución UHD, Android TV 11, Hey Google Official Assistant, WiFi & Bluetooth, 2 Altavoces 12W, Chromecast Integrado, HDR10 3.840x2.160 (50E635SUS) - 2024", 
        price: 329.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71PrnuefWzL._AC_SL1500_-removebg-preview_dpur5x.png" ,
        additionalInfo1: "EXPERIENCIA INMERSIVA CON IMAGEN 4K Y HDR10: Disfruta de una calidad de imagen excepcional en la televisión Tesla de 50 pulgadas con resolución 4K y HDR10. Sumérgete en detalles nítidos y colores vibrantes para una experiencia visual impresionante.",
        additionalInfo2: "ANDROID TV 11 CON GOOGLE PLAY Y CHROMECAST: Accede a un mundo de entretenimiento ilimitado con el sistema operativo Android TV 11. Descarga tus aplicaciones favoritas de Google Play, como Netflix, Prime Video y YouTube. Además, con Chromecast integrado, puedes transmitir contenido desde tus dispositivos móviles directamente a la televisión.",
        additionalInfo3: "CONTROL TOTAL CON GOOGLE ASSISTANT: Simplifica tu vida con el control de voz del televisor Tesla. Con Google Assistant, puedes cambiar de canal, ajustar el volumen y buscar contenido sin levantar un dedo. ¡Una experiencia verdaderamente inteligente y práctica!"
      },

      { id: 7, 
        name: "Electrodomesticos Inteligentes", 
        description: "Cecotec Televisor LED 50 Smart TV A2 Series ALU20050. 4K UHD, Android 11, Diseño sin Marco, MEMC, Dolby Vision y Dolby Atmos, HDR10, 2 Altavoces de 10W, Modelo 2023 ", 
        price: 339.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/61e42nbKslL._AC_SL1000_-removebg-preview_fhpdru.png" ,
        additionalInfo1: "Android TV.V.11: la mejor experiencia de uso con una gran colección de aplicaciones. Chromecast integrado para enviar contenido de forma sencilla y rápida. 4K UHD: imágenes ultra nítidas y con alta definición incluso en detalles.",
        additionalInfo2: "Diseño Frameless: minimiza el margen entre marcos e imagen para mejorar la experiencia de visión. MEMC: añade fotogramas de compensación para generar imágenes más fluidas y nítidas.",
        additionalInfo3: "Dolby Vision: optimiza cada fotograma para mostrar imágenes más puras y reales. Dolby Atmos: sonido envolvente multidimensional de 360º para escuchar el sonido de forma real."
      },

      { id: 8, 
        name: "Electrodomesticos Inteligentes", 
        description: "Cecotec Televisor LED 43 Smart TV A2 Series ALU20043S. 4K UHD, Android 11, Diseño sin Marco, MEMC, Dolby Vision y Dolby Atmos, HDR10, 2 Altavoces de 10W, Modelo 2023", 
        price: 289.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/814uJV6licL._AC_SL1500_-removebg-preview_rp1lce.png" ,
        additionalInfo1: "Android TV.V.11: la mejor experiencia de uso con una gran colección de aplicaciones. Chromecast integrado para enviar contenido de forma sencilla y rápida. 4K UHD: imágenes ultra nítidas y con alta definición incluso en detalles.",
        additionalInfo2: "Diseño Frameless: minimiza el margen entre marcos e imagen para mejorar la experiencia de visión. MEMC: añade fotogramas de compensación para generar imágenes más fluidas y nítidas.",
        additionalInfo3: "Dolby Vision: optimiza cada fotograma para mostrar imágenes más puras y reales. Dolby Atmos: sonido envolvente multidimensional de 360º para escuchar el sonido de forma real."
      },

      { id: 9, 
        name: "Electrodomesticos Inteligentes", 
        description: "Cinnado Camara Vigilancia WiFi Interior - 2K Cámara Bebe con Seguimiento de Movimiento, Camaras Domicilio WiFi IP 360°, Visión Nocturna, 24/7 Grabación en Tarjeta SD, Compatible con Alexa", 
        price: 20.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/61l6xjWxNXL._AC_SL1500_-removebg-preview_dvrw8q.png" ,
        additionalInfo1: "【FHD 2K & Cobertura de 360°】Cinnado camara vigilancia wifi interior proporcionauna resolución 2K FHD ultra nítida que capta cada detalle con claridad. Con funciones de panorámica e inclinación y Cobertura de 360 °, puede controlar la cámara a distancia desde su teléfono móvil para vigilar todos los rincones de su hogar en tiempo real. Equipada con 4 luces infrarrojas de 940 nm, la cámara puede vigilar con claridad a bebés o mascotas incluso de noche. (La cámara wifi solo admite WiFi 2.4G).",
        additionalInfo2: "【Detección de Movimiento & Alerta en Tiempo Real】 Equipada con alarma y sensor de movimiento, esta camara vigilancia domicilio wifi para el hogar enviará inmediatamente un mensaje de alerta a su teléfono móvil cuando se detecte movimiento y ahuyentará a los visitantes no deseados con la alarma. Cuando se detecta movimiento, la cámara ip wifi graba automáticamente un vídeo de 10 segundos y lo guarda en la APP para que no se pierda ningún movimiento importante.",
        additionalInfo3: "【Seguimiento Inteligente & Grabación Continua】La camara vigilancia bebe se ejecutará el seguimiento de movimiento cuando se ha abierto la configuración correspondiente y se detecta movimiento. La camera vigilancia interior también admite grabación continua 24/7 mediante una tarjeta SD (hasta 128 GB), o almacenamiento en la nube (30 días de prueba gratuita, 7 días de grabación recurrente) para reproducir el vídeo cuando quiera."
      },

      { id: 10, 
        name: "Electrodomesticos Inteligentes", 
        description: "GNCC Cámara Vigilancia WiFi Interior, 1080P Vigilabebes con Camara Domicilio WiFi Detección de Movimiento, Visión Nocturna, Audio de 2 Vias, Óptimo para Ver Bebés y Mascotas, C2", 
        price: 20.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731878798/71DsOcR9TeL._AC_SL1500_-removebg-preview_r9rz1a.png" ,
        additionalInfo1: "【FHD 2K & Cobertura de 360°】Cinnado camara vigilancia wifi interior proporcionauna resolución 2K FHD ultra nítida que capta cada detalle con claridad. Con funciones de panorámica e inclinación y Cobertura de 360 °, puede controlar la cámara a distancia desde su teléfono móvil para vigilar todos los rincones de su hogar en tiempo real. Equipada con 4 luces infrarrojas de 940 nm, la cámara puede vigilar con claridad a bebés o mascotas incluso de noche. (La cámara wifi solo admite WiFi 2.4G).",
        additionalInfo2: "【Detección de Movimiento & Alerta en Tiempo Real】 Equipada con alarma y sensor de movimiento, esta camara vigilancia domicilio wifi para el hogar enviará inmediatamente un mensaje de alerta a su teléfono móvil cuando se detecte movimiento y ahuyentará a los visitantes no deseados con la alarma. Cuando se detecta movimiento, la cámara ip wifi graba automáticamente un vídeo de 10 segundos y lo guarda en la APP para que no se pierda ningún movimiento importante.",
        additionalInfo3: "【Seguimiento Inteligente & Grabación Continua】La camara vigilancia bebe se ejecutará el seguimiento de movimiento cuando se ha abierto la configuración correspondiente y se detecta movimiento. La camera vigilancia interior también admite grabación continua 24/7 mediante una tarjeta SD (hasta 128 GB), o almacenamiento en la nube (30 días de prueba gratuita, 7 días de grabación recurrente) para reproducir el vídeo cuando quiera."
      },

    ]);
  }, []);

  const handleProductImageClick = (product) => {
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

export default SmartPage;
