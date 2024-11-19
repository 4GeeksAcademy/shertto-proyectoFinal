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
      { id: 1, 
        name: "Wereables", 
        description: "JSAUX Cargador mag-Safe de 15W Cargador Inalámbrico Magnético Estación de Carga Inductiva Compatible con Cargador MagSafe iPhone 16/16 Pro/16 Pro MAX 16 Plus/15/15 Pro/Pro Max/14 13 12 Airpods Azul", 
        price: 17.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51cpAxAy8kL._AC_SX425_-removebg-preview_pdh0ng.png" ,
        additionalInfo1: "【Compatible con iPhone 16/15/14】El cargador inalámbrico magnético JSAUX proporciona una carga inalámbrica eficiente para tus dispositivos como iPhone 16/16 Pro/16 Pro Max,iPhone 15/15 Pro/15 Pro Max, iPhone 14/14 Plus/14 Pro/Pro Max，AirPods 3, AirPods 2, AirPods Pro.",
        additionalInfo2: "【Inducción automática y atracción magnética】El cargador JSAUX Mag-Safe induce automáticamente tus dispositivos y comienza a cargar después de que se conecta magnéticamente con éxito a la parte posterior de tu teléfono móvil.",
        additionalInfo3: "Was Sie bekommen】Wir bieten dieses Mag-Ladegerät mit einer 18-monatigen sorgenfreien Periode und freundlicher Kundenberatung zu jeder Zeit des Tages, wenn Sie irgendwelche Fragen haben, werden wir Ihr Problem innerhalb von 24 Stunden lösen."
      },

      { id: 2, 
        name: "Wereables", 
        description: "JSAUX Cargador de Inducción MagSafe Cargador 15W, Cargador Magnético Inalámbrico Compatible con iPhone 15/15 Pro/15 Pro MAX/ 15 Plus/14/14 Pro Max/13/12, Cargador Rápido para iPhone con Kickstand, Negro", 
        price:  17.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51E71szSf5L._AC_SL1500_-removebg-preview_hhvlij.png",
        additionalInfo1: "【Compatible con iPhone 16/15/14】El cargador inalámbrico magnético JSAUX proporciona una carga inalámbrica eficiente para tus dispositivos como iPhone 16/16 Pro/16 Pro Max,iPhone 15/15 Pro/15 Pro Max, iPhone 14/14 Plus/14 Pro/Pro Max，AirPods 3, AirPods 2, AirPods Pro.",
        additionalInfo2: "【Inducción automática y atracción magnética】El cargador JSAUX Mag-Safe induce automáticamente tus dispositivos y comienza a cargar después de que se conecta magnéticamente con éxito a la parte posterior de tu teléfono móvil.",
        additionalInfo3: "Was Sie bekommen】Wir bieten dieses Mag-Ladegerät mit einer 18-monatigen sorgenfreien Periode und freundlicher Kundenberatung zu jeder Zeit des Tages, wenn Sie irgendwelche Fragen haben, werden wir Ihr Problem innerhalb von 24 Stunden lösen."
      },

      { id: 3, 
        name: "Wereables", 
        description: "JSAUX, Cargador magnético inalámbrico de 15 W Compatible con Cargador MagSafe para iPhone 14 Plus/iPhone 14 Pro MAX/iPhone 13 Pro Max/13 Mini/13 Pro/13/12 Mini/12 Pro MAX/Airpods Pro, Plateado", 
        price:  17.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51qQM8rUQrL._AC_SL1500_-removebg-preview_i9u4ow.png" ,
        additionalInfo1: "【Compatible con iPhone 16/15/14】El cargador inalámbrico magnético JSAUX proporciona una carga inalámbrica eficiente para tus dispositivos como iPhone 16/16 Pro/16 Pro Max,iPhone 15/15 Pro/15 Pro Max, iPhone 14/14 Plus/14 Pro/Pro Max，AirPods 3, AirPods 2, AirPods Pro.",
        additionalInfo2: "【Inducción automática y atracción magnética】El cargador JSAUX Mag-Safe induce automáticamente tus dispositivos y comienza a cargar después de que se conecta magnéticamente con éxito a la parte posterior de tu teléfono móvil.",
        additionalInfo3: "Was Sie bekommen】Wir bieten dieses Mag-Ladegerät mit einer 18-monatigen sorgenfreien Periode und freundlicher Kundenberatung zu jeder Zeit des Tages, wenn Sie irgendwelche Fragen haben, werden wir Ihr Problem innerhalb von 24 Stunden lösen."
      },

      { id: 4, 
        name: "Wereables", 
        description: "Belkin cargador MagSafe 3 en 1, certificación MFi, carga inalámbrica rápida portátil para serie de iPhone 15, iPhone 14, 13, 12, Apple Watch Series 9, 8 y posteriores, AirPods 2 y AirPods Pro (Negro)", 
        price: 109.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/71J4Z5j9i_L._AC_SL1500_-removebg-preview_icukfj.png" ,
        additionalInfo1: "El diseño compacto y plano es perfecto para viajar, tan sencillo como meterlo en tu bolsa o mochila para disfrutar de una carga muy cómoda allí donde vayas, alineación con iPhone y carga con MagSafe perfectas.",
        additionalInfo2: "Belkin es un fabricante reconocido y líder en el mercado de accesorios, con una trayectoria de más de 40 años creando soluciones de tecnología innovadoras y de alta calidad.",
        additionalInfo3: "Carga hasta un 33 % más rápida para Apple Watch 7, para puedas seguir registrando en un santiamén tus progresos de actividad, la garantía de 2 años del producto te ofrece una mayor tranquilidad."
      },

      { id: 5, 
        name: "Wereables", 
        description: "Belkin cargador MagSafe 3 en 1, certificación MFi, carga inalámbrica rápida portátil para serie de iPhone 16, 15, 14, 13, 12, Apple Watch Series 9, 8 y posteriores, AirPods 2 y AirPods Pro (Blanco)", 
        price: 109.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/71_jLyf0rdL._AC_SL1500_-removebg-preview_ayznbg.png" ,
        additionalInfo1: "El diseño compacto y plano es perfecto para viajar, tan sencillo como meterlo en tu bolsa o mochila para disfrutar de una carga muy cómoda allí donde vayas, alineación con iPhone y carga con MagSafe perfectas.",
        additionalInfo2: "Belkin es un fabricante reconocido y líder en el mercado de accesorios, con una trayectoria de más de 40 años creando soluciones de tecnología innovadoras y de alta calidad.",
        additionalInfo3: "Carga hasta un 33 % más rápida para Apple Watch 7, para puedas seguir registrando en un santiamén tus progresos de actividad, la garantía de 2 años del producto te ofrece una mayor tranquilidad."
      },

      { id: 6, 
        name: "Wereables", 
        description: "IVSHOWCO Adaptador Lightning a USB [Certificado Apple MFI] para cámara, iPhone, iOS OTG, Compatible con Unidad Flash USB, Lector de Tarjetas, ratón, Teclado (Negro)", 
        price:  13.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/51zpU1FdHiL._AC_SL1200_-removebg-preview_aoiqo1.png" ,
        additionalInfo1: "Uso compartido fácil:】 Con el adaptador de cámara Lightning a USB, puede conectar la cámara e importar inmediatamente el hermoso paisaje capturado por la cámara a su iPhone para compartirlo con su familia y amigos, o puede transferir archivos desde una unidad flash USB o una memoria. tarjeta a su iPhone / iPad, amplíe la memoria de su teléfono.",
        additionalInfo2: "【Características increíbles:】 Admite la conexión de una unidad flash USB, un mouse USB, un teclado, un teclado MIDI, un piano eléctrico, una batería, un mezclador y otros dispositivos. Este adaptador USB para iPhone es la mejor opción para extender más funciones a su teléfono o tableta.",
        additionalInfo3: "【Gran compatibilidad:】 El adaptador USB a iPhone es compatible con iPhone 13/ 12/ 11/ 11 Pro/ 11 Pro Max/ Xs/ Xs Max/ X/ 8/ 8 Plus/ 7/ 7Plus/ SE y iPad Air / Mini / Pro. admite formato de foto JPG/RAW, formato de video H.264 y MPEG-4. La unidad flash USB debe ser FAT32 o exFAT. NTFS no es compatible."
      },

      { id: 7, 
        name: "Wereables", 
        description: "IVSHOWCO Adaptador de cámara USB para Phone, Adaptador de Cable USB OTG de Destino para Pad Compatible con Unidad Flash USB, Lector de Tarjetas, ratón, Teclado (Blanco)", 
        price:  13.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876814/517lZ-cfkGL._AC_SX425_-removebg-preview_l6ts9x.png" ,
        additionalInfo1: "Uso compartido fácil:】 Con el adaptador de cámara Lightning a USB, puede conectar la cámara e importar inmediatamente el hermoso paisaje capturado por la cámara a su iPhone para compartirlo con su familia y amigos, o puede transferir archivos desde una unidad flash USB o una memoria. tarjeta a su iPhone / iPad, amplíe la memoria de su teléfono.",
        additionalInfo2: "【Características increíbles:】 Admite la conexión de una unidad flash USB, un mouse USB, un teclado, un teclado MIDI, un piano eléctrico, una batería, un mezclador y otros dispositivos. Este adaptador USB para iPhone es la mejor opción para extender más funciones a su teléfono o tableta.",
        additionalInfo3: "【Gran compatibilidad:】 El adaptador USB a iPhone es compatible con iPhone 13/ 12/ 11/ 11 Pro/ 11 Pro Max/ Xs/ Xs Max/ X/ 8/ 8 Plus/ 7/ 7Plus/ SE y iPad Air / Mini / Pro. admite formato de foto JPG/RAW, formato de video H.264 y MPEG-4. La unidad flash USB debe ser FAT32 o exFAT. NTFS no es compatible."
      },

      { id: 8, 
        name: "Wereables", 
        description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Negro)", 
        price:  19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/61qNe0BIBrL._AC_SL1500_-removebg-preview_fqncbw.png" ,
        additionalInfo1: "22.5W Bateria Externa Carga Rapida - En 30 minutos, puede cargar un iPhone 14 del 0% al 60% de su batería externa, mientras que en 2 horas puede cargar completamente su propia batería (La velocidad de carga es 3 veces más rápida que las otras baterías regulares que otras baterías extrenas de cable estándar de 2A). Está permitido a bordo del avión y es seguro para embarcar con ella, por lo que no se deberá preocupar por caso de corto circuito durante el viaje.",
        additionalInfo2: "Entrada y Salida USB C de Alta Velocidad - A diferencia de otros cargador portatil que solo cargan a través del puerto USB-C, puede cargar todos los dispositivos directamente con un cable USB-C, incluyendo el iPhone 16 y modelos posteriores. El cargador portátil cuenta con tres puertos de carga USB, permite la carga simultánea con tres puertos. Además, obtén tres dispositivos completamente cargados al mismo tiempo. El diseño de triple puerto le permite compartir power bank con familiares y amigos.",
        additionalInfo3: "Pantalla Indicador LED de Batería - El dispositivo muestra con precisión el porcentaje de batería restante, eliminando la ambigüedad de los indicadores de luz. Con solo 240g/8.46oz y unas dimensiones de 70*143*18mm/2.75*5.63*0.7inch, este power bank se puede llevar fácilmente en el bolsillo o la mochila, asegurando que siempre tengas energía disponible donde y cuando quieras."
      },

      { id: 9, 
        name: "Wereables", 
        description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Negro Oscuro)", 
        price:  19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/61R2FgqY4mL._AC_SL1500_-removebg-preview_wto7ez.png" ,
        additionalInfo1: "22.5W Bateria Externa Carga Rapida - En 30 minutos, puede cargar un iPhone 14 del 0% al 60% de su batería externa, mientras que en 2 horas puede cargar completamente su propia batería (La velocidad de carga es 3 veces más rápida que las otras baterías regulares que otras baterías extrenas de cable estándar de 2A). Está permitido a bordo del avión y es seguro para embarcar con ella, por lo que no se deberá preocupar por caso de corto circuito durante el viaje.",
        additionalInfo2: "Entrada y Salida USB C de Alta Velocidad - A diferencia de otros cargador portatil que solo cargan a través del puerto USB-C, puede cargar todos los dispositivos directamente con un cable USB-C, incluyendo el iPhone 16 y modelos posteriores. El cargador portátil cuenta con tres puertos de carga USB, permite la carga simultánea con tres puertos. Además, obtén tres dispositivos completamente cargados al mismo tiempo. El diseño de triple puerto le permite compartir power bank con familiares y amigos.",
        additionalInfo3: "Pantalla Indicador LED de Batería - El dispositivo muestra con precisión el porcentaje de batería restante, eliminando la ambigüedad de los indicadores de luz. Con solo 240g/8.46oz y unas dimensiones de 70*143*18mm/2.75*5.63*0.7inch, este power bank se puede llevar fácilmente en el bolsillo o la mochila, asegurando que siempre tengas energía disponible donde y cuando quieras."
      },

      { id: 10, 
        name: "Wereables", 
        description: "Power Bank, Bateria Externa Carga Rapida 10000mAh 22.5W Bateria Portatil con Entrada y Salida USB C de Alta Velocidad, Patalla LED para iPhone 16 15 14 13 12 11 Pro MAX Samsung Galaxy iPad Tablet (Blanco)", 
        price:  19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731876813/51VrO0YmgrL._AC_SL1500_-removebg-preview_zewq3j.png" ,
        additionalInfo1: "22.5W Bateria Externa Carga Rapida - En 30 minutos, puede cargar un iPhone 14 del 0% al 60% de su batería externa, mientras que en 2 horas puede cargar completamente su propia batería (La velocidad de carga es 3 veces más rápida que las otras baterías regulares que otras baterías extrenas de cable estándar de 2A). Está permitido a bordo del avión y es seguro para embarcar con ella, por lo que no se deberá preocupar por caso de corto circuito durante el viaje.",
        additionalInfo2: "Entrada y Salida USB C de Alta Velocidad - A diferencia de otros cargador portatil que solo cargan a través del puerto USB-C, puede cargar todos los dispositivos directamente con un cable USB-C, incluyendo el iPhone 16 y modelos posteriores. El cargador portátil cuenta con tres puertos de carga USB, permite la carga simultánea con tres puertos. Además, obtén tres dispositivos completamente cargados al mismo tiempo. El diseño de triple puerto le permite compartir power bank con familiares y amigos.",
        additionalInfo3: "Pantalla Indicador LED de Batería - El dispositivo muestra con precisión el porcentaje de batería restante, eliminando la ambigüedad de los indicadores de luz. Con solo 240g/8.46oz y unas dimensiones de 70*143*18mm/2.75*5.63*0.7inch, este power bank se puede llevar fácilmente en el bolsillo o la mochila, asegurando que siempre tengas energía disponible donde y cuando quieras."
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
      <h1 className="title">Cargadores y Adaptadores</h1>
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

export default ChargerPage;
