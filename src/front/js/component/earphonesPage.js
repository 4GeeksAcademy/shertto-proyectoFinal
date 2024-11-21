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
      { id: 1, 
        name: "Auriculares y Accesorios",
        description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop (Azul)", 
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640301/61jmLD3hYaL._AC_SL1500_-removebg-preview_gvndf6.png",
        additionalInfo1: "Disfrute Visual, Efecto RGB Único: El cascos gaming efecto de luz deslumbrante RGB estimula la visión, transición de flujo de gradiente multicolor, te sumerge más en la atmósfera del juego y se convierte en MVP del juego. El compañero perfecto para la vida de los videojuegos.",
        additionalInfo2: "Micrófono Suave 360°, Comunicación Sin Barreras: Micrófono se puede girar 120 ° y 360 °, se puede ajustar a la posición más adecuada a voluntad. Micrófono de alta sensibilidad con tecnología de reducción de ruido omnidireccional, reduce el ruido de fondo que distrae, para captar su voz con claridad.",
        additionalInfo3: "Inmersivo, Lucha por Sonido: 50MM motor de sonido envolvente, equilibrio optimizado de tres bandas, sin retrasos en el sonido y la imagen del juego. Cascos ps4 con la alta precisión del posicionamiento acústico captura los detalles del juego, y el sonido de alta fidelidad ofrece una excelente experiencia de juego.",
       },

      { id: 2,
        name: "Auriculares y Accesorios", 
        description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop(Rosa)", 
        price: 25.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640299/71vUQKFBNAL._AC_SL1500_-removebg-preview_equmuh.png",
        additionalInfo1: "Disfrute Visual, Efecto RGB Único: El cascos gaming efecto de luz deslumbrante RGB estimula la visión, transición de flujo de gradiente multicolor, te sumerge más en la atmósfera del juego y se convierte en MVP del juego. El compañero perfecto para la vida de los videojuegos.",
        additionalInfo2: "Micrófono Suave 360°, Comunicación Sin Barreras: Micrófono se puede girar 120 ° y 360 °, se puede ajustar a la posición más adecuada a voluntad. Micrófono de alta sensibilidad con tecnología de reducción de ruido omnidireccional, reduce el ruido de fondo que distrae, para captar su voz con claridad.",
        additionalInfo3: "Inmersivo, Lucha por Sonido: 50MM motor de sonido envolvente, equilibrio optimizado de tres bandas, sin retrasos en el sonido y la imagen del juego. Cascos ps4 con la alta precisión del posicionamiento acústico captura los detalles del juego, y el sonido de alta fidelidad ofrece una excelente experiencia de juego.",
       },

      { id: 3, 
        name: "Auriculares y Accesorios", 
        description: "Cascos Gaming, Auriculares Gaming con Micrófono Rotatorio, Luz RGB, Premium Stereo, Orejeras Ligero Cómodo, para PS4 PS5 Xbox PC Switch Tableta Laptop(Verde)",
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640298/6124U4tvjkL._AC_SL1500_-removebg-preview_dab3pv.png",
        additionalInfo1: "Disfrute Visual, Efecto RGB Único: El cascos gaming efecto de luz deslumbrante RGB estimula la visión, transición de flujo de gradiente multicolor, te sumerge más en la atmósfera del juego y se convierte en MVP del juego. El compañero perfecto para la vida de los videojuegos.",
        additionalInfo2: "Micrófono Suave 360°, Comunicación Sin Barreras: Micrófono se puede girar 120 ° y 360 °, se puede ajustar a la posición más adecuada a voluntad. Micrófono de alta sensibilidad con tecnología de reducción de ruido omnidireccional, reduce el ruido de fondo que distrae, para captar su voz con claridad.",
        additionalInfo3: "Inmersivo, Lucha por Sonido: 50MM motor de sonido envolvente, equilibrio optimizado de tres bandas, sin retrasos en el sonido y la imagen del juego. Cascos ps4 con la alta precisión del posicionamiento acústico captura los detalles del juego, y el sonido de alta fidelidad ofrece una excelente experiencia de juego.",
       
        },

      { id: 4, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7(Azul)",
        price: 19.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641084/61TaefSMD0L._AC_SL1500_-removebg-preview_ffydrk.png",
        additionalInfo1: "【Amplia Compatibilidad】Estos auriculares USB C funcionan con todos los dispositivos tipo C sin conector de audio de 3,5 mm: Apple iPhone 15/15 Plus/15 Pro/15 Pro Max iPad 10 iPad Pro/Mini 6/Air,Samsung Galaxy Z Flip/Fold/Note,S24 FE/S24/S24+/S24 Ultra,S23 FE/S23/S23+/S23 Ultra,A55/A35/A74/A53/A54/A33/A34,S22/S22+/S22 Ultra,S21 FE/S21/S21+/S21 Ultra,S20 FE/S20 Ultra/S20+/S20,Google Pixel 8 Pro 7a 76a 6,OnePlus 10T/10 Pro/9/Nord/8T/8/7T y otros teléfonos y tabletas Android con conexión de audio tipo C.",
        additionalInfo2: "【Sonido Estéreo Perfecto】Los auriculares USB-C de AILZPXX incorporan un chip DAC de alta calidad que reduce la pérdida en la transferencia de sonido. Ofrecen un sonido premium con una acústica afinada que equilibra bajos fuertes, agudos elevados y medios claros. El diseño intrauditivo ayuda a minimizar el ruido ambiental para una experiencia más armoniosa. Sin zumbidos, chasquidos ni problemas de audio, solo enchufa y disfruta de tu música favorita.",
        additionalInfo3: "【Auriculares Magnéticos con Cable】 - El imán robusto en la parte posterior une firmemente los dos auriculares HiFi para llevarlos cómodamente alrededor del cuello cuando no se usan. Permiten enrollarlos y transportarlos sin enredos. Además, los audífonos USB C intrauditivos, ultraligeros y ergonómicos se ajustan perfectamente al oído sin causar molestias, incluso con uso prolongado. Ideales para desplazamientos, viajes en autobús, correr, escalar y otras actividades.",
      },

      { id: 5, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7 (Negro y Rojo",
        price: 19.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641086/61g_2BI-xRL._AC_SL1500_-removebg-preview_tvtcxh.png",
        additionalInfo1: "【Amplia Compatibilidad】Estos auriculares USB C funcionan con todos los dispositivos tipo C sin conector de audio de 3,5 mm: Apple iPhone 15/15 Plus/15 Pro/15 Pro Max iPad 10 iPad Pro/Mini 6/Air,Samsung Galaxy Z Flip/Fold/Note,S24 FE/S24/S24+/S24 Ultra,S23 FE/S23/S23+/S23 Ultra,A55/A35/A74/A53/A54/A33/A34,S22/S22+/S22 Ultra,S21 FE/S21/S21+/S21 Ultra,S20 FE/S20 Ultra/S20+/S20,Google Pixel 8 Pro 7a 76a 6,OnePlus 10T/10 Pro/9/Nord/8T/8/7T y otros teléfonos y tabletas Android con conexión de audio tipo C.",
        additionalInfo2: "【Sonido Estéreo Perfecto】Los auriculares USB-C de AILZPXX incorporan un chip DAC de alta calidad que reduce la pérdida en la transferencia de sonido. Ofrecen un sonido premium con una acústica afinada que equilibra bajos fuertes, agudos elevados y medios claros. El diseño intrauditivo ayuda a minimizar el ruido ambiental para una experiencia más armoniosa. Sin zumbidos, chasquidos ni problemas de audio, solo enchufa y disfruta de tu música favorita.",
        additionalInfo3: "【Auriculares Magnéticos con Cable】 - El imán robusto en la parte posterior une firmemente los dos auriculares HiFi para llevarlos cómodamente alrededor del cuello cuando no se usan. Permiten enrollarlos y transportarlos sin enredos. Además, los audífonos USB C intrauditivos, ultraligeros y ergonómicos se ajustan perfectamente al oído sin causar molestias, incluso con uso prolongado. Ideales para desplazamientos, viajes en autobús, correr, escalar y otras actividades.",

        },

      { id: 6, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares USB C, para Samsung Galaxy S23 S22 Ultra S24 S21 A54 A53 A33 5G, Micrófono para Ilamada de Voz, Música Estéreo, Auriculares con Cable Tipo c para iPhone 15 Pro MAX iPad 10 Pixe 8 7 (Negro)",
        price: 19.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641084/81As5MZHE4L._AC_SL1500_-removebg-preview_gsffea.png",
        additionalInfo1: "【Amplia Compatibilidad】Estos auriculares USB C funcionan con todos los dispositivos tipo C sin conector de audio de 3,5 mm: Apple iPhone 15/15 Plus/15 Pro/15 Pro Max iPad 10 iPad Pro/Mini 6/Air,Samsung Galaxy Z Flip/Fold/Note,S24 FE/S24/S24+/S24 Ultra,S23 FE/S23/S23+/S23 Ultra,A55/A35/A74/A53/A54/A33/A34,S22/S22+/S22 Ultra,S21 FE/S21/S21+/S21 Ultra,S20 FE/S20 Ultra/S20+/S20,Google Pixel 8 Pro 7a 76a 6,OnePlus 10T/10 Pro/9/Nord/8T/8/7T y otros teléfonos y tabletas Android con conexión de audio tipo C.",
        additionalInfo2: "【Sonido Estéreo Perfecto】Los auriculares USB-C de AILZPXX incorporan un chip DAC de alta calidad que reduce la pérdida en la transferencia de sonido. Ofrecen un sonido premium con una acústica afinada que equilibra bajos fuertes, agudos elevados y medios claros. El diseño intrauditivo ayuda a minimizar el ruido ambiental para una experiencia más armoniosa. Sin zumbidos, chasquidos ni problemas de audio, solo enchufa y disfruta de tu música favorita.",
        additionalInfo3: "【Auriculares Magnéticos con Cable】 - El imán robusto en la parte posterior une firmemente los dos auriculares HiFi para llevarlos cómodamente alrededor del cuello cuando no se usan. Permiten enrollarlos y transportarlos sin enredos. Además, los audífonos USB C intrauditivos, ultraligeros y ergonómicos se ajustan perfectamente al oído sin causar molestias, incluso con uso prolongado. Ideales para desplazamientos, viajes en autobús, correr, escalar y otras actividades.",

      },

      { id: 7, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco",
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640291/614dbEosLTL._AC_SL1500_-removebg-preview_tohqzr.png",
        additionalInfo1: "Pantalla LED de carga y 50 horas de reproducción: Auriculares bluetooth cuentan con una pantalla LED doble que muestra con precisión el nivel de batería tanto del compartimento de carga como de los auriculares Bluetooth. Además, Auriculares X08 tienen una duración de batería única de 8 horas, y el compartimento de carga proporciona 50 horas adicionales de uso.",
        additionalInfo2: "85% más de graves y llamadas más nítidas: Auriculares inalámbricos con diafragma de grafeno de 14,2 mm para un 85% más de graves y cascos inalambricos bluetooth con micrófono dual híbrido ENC que cancela pasivamente el 90% del ruido de fondo para llamadas más nítidas.",
        additionalInfo3: "Ajuste cómodo y resistencia al agua IP7: In-ear auriculares son ergonómicos, dispersan el 45% de la presión para un ajuste cómodo que se adapta al 99% del canal auditivo, auriculares inalámbricos deportivos cuentan con la tecnología de nanorrevestimiento IP7 para aislar los componentes de los daños causados por la humedad del aire.",     
       },

      { id: 8, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco",
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640292/61S3uezyxdL._AC_SL1500_-removebg-preview_luaxbf.png",
        additionalInfo1: "Pantalla LED de carga y 50 horas de reproducción: Auriculares bluetooth cuentan con una pantalla LED doble que muestra con precisión el nivel de batería tanto del compartimento de carga como de los auriculares Bluetooth. Además, Auriculares X08 tienen una duración de batería única de 8 horas, y el compartimento de carga proporciona 50 horas adicionales de uso.",
        additionalInfo2: "85% más de graves y llamadas más nítidas: Auriculares inalámbricos con diafragma de grafeno de 14,2 mm para un 85% más de graves y cascos inalambricos bluetooth con micrófono dual híbrido ENC que cancela pasivamente el 90% del ruido de fondo para llamadas más nítidas.",
        additionalInfo3: "Ajuste cómodo y resistencia al agua IP7: In-ear auriculares son ergonómicos, dispersan el 45% de la presión para un ajuste cómodo que se adapta al 99% del canal auditivo, auriculares inalámbricos deportivos cuentan con la tecnología de nanorrevestimiento IP7 para aislar los componentes de los daños causados por la humedad del aire.",    
      },

      { id: 9, 
        name: "Auriculares y Accesorios", 
        description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco",
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731640293/710Lppy-fzL._AC_SL1500_-removebg-preview_xm0qud.png",
        additionalInfo1: "Pantalla LED de carga y 50 horas de reproducción: Auriculares bluetooth cuentan con una pantalla LED doble que muestra con precisión el nivel de batería tanto del compartimento de carga como de los auriculares Bluetooth. Además, Auriculares X08 tienen una duración de batería única de 8 horas, y el compartimento de carga proporciona 50 horas adicionales de uso.",
        additionalInfo2: "85% más de graves y llamadas más nítidas: Auriculares inalámbricos con diafragma de grafeno de 14,2 mm para un 85% más de graves y cascos inalambricos bluetooth con micrófono dual híbrido ENC que cancela pasivamente el 90% del ruido de fondo para llamadas más nítidas.",
        additionalInfo3: "Ajuste cómodo y resistencia al agua IP7: In-ear auriculares son ergonómicos, dispersan el 45% de la presión para un ajuste cómodo que se adapta al 99% del canal auditivo, auriculares inalámbricos deportivos cuentan con la tecnología de nanorrevestimiento IP7 para aislar los componentes de los daños causados por la humedad del aire.",     
       },

      { id: 10,
        name: "Auriculares y Accesorios",
        description: "Auriculares Inalámbricos Bluetooth, Auriculares Bluetooth 5.3 con 4 HD Mic HiFi Estéreo, Reducción de Ruido Auriculares,14.2 mm Controlador dinámico, IP7 Impermeable 50H Cascos Inalambricos Blanco",
        price: 25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731641953/612CWRLMU_L._AC_SL1500_-removebg-preview_ml7cfh.png",
        additionalInfo1: "Pantalla LED de carga y 50 horas de reproducción: Auriculares bluetooth cuentan con una pantalla LED doble que muestra con precisión el nivel de batería tanto del compartimento de carga como de los auriculares Bluetooth. Además, Auriculares X08 tienen una duración de batería única de 8 horas, y el compartimento de carga proporciona 50 horas adicionales de uso.",
        additionalInfo2: "85% más de graves y llamadas más nítidas: Auriculares inalámbricos con diafragma de grafeno de 14,2 mm para un 85% más de graves y cascos inalambricos bluetooth con micrófono dual híbrido ENC que cancela pasivamente el 90% del ruido de fondo para llamadas más nítidas.",
        additionalInfo3: "Ajuste cómodo y resistencia al agua IP7: In-ear auriculares son ergonómicos, dispersan el 45% de la presión para un ajuste cómodo que se adapta al 99% del canal auditivo, auriculares inalámbricos deportivos cuentan con la tecnología de nanorrevestimiento IP7 para aislar los componentes de los daños causados por la humedad del aire.",
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
      <h1 className="title">Auriculares y Accesorios</h1>
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

export default EarphonesPage;
