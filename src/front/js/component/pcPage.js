// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const PcPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, 
        name: "Accesorios para PC", 
        description: "Uineer Ratón con Cable, 7200 dpi Ajustable y 6 Botones, diseño ergonómico, ratón óptico USB optimizado para PC portátil para Trabajar y, Negro Mate",
        price:14.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880453/51WmJULWbHL._AC_SL1500_-removebg-preview_k2oquf.png" ,      
        additionalInfo1: "Compatibilidad Plug and Play: Nuestro raton con cable no requiere complicados pasos de instalación. Simplemente conéctelo al puerto USB de su ordenador o portátil y estará listo para funcionar. Compatible con la mayoría de los sistemas operativos, incluidos Windows XP/7/8/10, Linux, Mac OS X, Chrome OS y más.",
        additionalInfo2: "Diseño ergonómico: Nuestro ratón con cable está diseñado con la ergonomía en mente, reduciendo la presión y la fatiga de los dedos. Se adapta cómodamente a la mano, con una curva natural para un uso prolongado sin molestias. Tanto si trabaja en tareas intensivas como si juega con precisión, este ratón ofrece una experiencia excepcional.",
        additionalInfo3: "Seis botones programables: Este ratón tiene seis botones programables, incluidos los de avance y retroceso. Puedes asignar funciones de uso frecuente a estas teclas mediante un software de definición de macros. Al asignarles funciones específicas, puedes realizar tareas más fácilmente y aumentar así tu productividad." 
      },

      { id: 2, 
        name: "Accesorios para PC", 
        description: "Uineer Ratón con Cable, Clic silencioso, 3200 dpi Ajustable y 6 Botones, diseño ergonómico, ratón óptico USB optimizado para PC portátil para Trabajar y Jugar(Gris)", 
        price:14.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/618W2aULm6L._AC_SX425_-removebg-preview_hf5dkp.png" ,      
        additionalInfo1: "Compatibilidad Plug and Play: Nuestro raton con cable no requiere complicados pasos de instalación. Simplemente conéctelo al puerto USB de su ordenador o portátil y estará listo para funcionar. Compatible con la mayoría de los sistemas operativos, incluidos Windows XP/7/8/10, Linux, Mac OS X, Chrome OS y más.",
        additionalInfo2: "Diseño ergonómico: Nuestro ratón con cable está diseñado con la ergonomía en mente, reduciendo la presión y la fatiga de los dedos. Se adapta cómodamente a la mano, con una curva natural para un uso prolongado sin molestias. Tanto si trabaja en tareas intensivas como si juega con precisión, este ratón ofrece una experiencia excepcional.",
        additionalInfo3:"Seis botones programables: Este ratón tiene seis botones programables, incluidos los de avance y retroceso. Puedes asignar funciones de uso frecuente a estas teclas mediante un software de definición de macros. Al asignarles funciones específicas, puedes realizar tareas más fácilmente y aumentar así tu productividad." 
      },

      { id: 3, 
        name: "Accesorios para PC", 
        description: "INPHIC Raton inalámbrico, 2.4G Raton inalámbrico Recargable con Receptor USB, 3 Niveles Ajustables De dpi para Computadora PortáTil, Pc, Mac, Computadora, Macbook, Negro", 
        price:14.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/51ikMaS08HL._AC_SL1500_-removebg-preview_ht3qgl.png" ,      
        additionalInfo1: "Función actualizada: recargable e indicador de alimentación: batería recargable integrada de gran capacidad, que se puede utilizar hasta un mes después de una sola carga. Este mouse inalámbrico está equipado con tres luces indicadoras de alimentación, y el diseño innovador puede mostrar claramente la fuente de alimentación, diciendo adiós a los fallos de energía.",
        additionalInfo2: "Transferencia inalámbrica de 2.4 GHz y Plug and Play: soporta tecnología inalámbrica de 2.4 GHz para conectar con tu computadora a 10 metros, reproduce y enchufa. 3 interruptores DPI (1000, 1200, 1600) cambian la velocidad del mouse libremente. Puedes utilizar el mouse en cualquier momento y en cualquier lugar para deshacerte del problema de los cables.",
        additionalInfo3: "Clic silencioso y duradero: el mouse silencioso con sensor avanzado puede deshacerse del 90% de ruido mientras haces clic, ensucia tu trabajo sin desembolsar a otros por la noche o en la oficina, crea un ambiente cómodo y silencioso para ti. (Nota: solo las teclas principales izquierda y derecha soportan un clic silencioso)."
      },

      { id: 4, 
        name: "Accesorios para PC", 
        description: "INPHIC Ratón Inalámbrico Recargable, [Actualizado], Ratón Inalámbrico 2.4G Silencioso 1600 dpi con Receptor USB para Ordenador Portátil Ordenador Mac Tableta, Nivel de Batería Visible, Blanco", 
        price:  14.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880453/41V_vCPK4IL._AC_SL1500_-removebg-preview_ponj9l.png",
        additionalInfo1: "Función actualizada: recargable e indicador de alimentación: batería recargable integrada de gran capacidad, que se puede utilizar hasta un mes después de una sola carga. Este mouse inalámbrico está equipado con tres luces indicadoras de alimentación, y el diseño innovador puede mostrar claramente la fuente de alimentación, diciendo adiós a los fallos de energía.",
        additionalInfo2: "Transferencia inalámbrica de 2.4 GHz y Plug and Play: soporta tecnología inalámbrica de 2.4 GHz para conectar con tu computadora a 10 metros, reproduce y enchufa. 3 interruptores DPI (1000, 1200, 1600) cambian la velocidad del mouse libremente. Puedes utilizar el mouse en cualquier momento y en cualquier lugar para deshacerte del problema de los cables.",
        additionalInfo3:"Clic silencioso y duradero: el mouse silencioso con sensor avanzado puede deshacerse del 90% de ruido mientras haces clic, ensucia tu trabajo sin desembolsar a otros por la noche o en la oficina, crea un ambiente cómodo y silencioso para ti. (Nota: solo las teclas principales izquierda y derecha soportan un clic silencioso)."
        },

      { id: 5, 
        name: "Accesorios para PC", 
        description: "ewanxin Webcam 1080P Full HD CMOS Cámara Web de Alta Micrófono Reductor de Ruido y Corrección de Automática,USB Plug and Play,Base Giratoria de 360°,para PC Computadora Portátil, Videollamadas Juegos", 
        price:  22.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/5153IWeArBL._AC_SL1000_-removebg-preview_lrxzui.png" ,
        additionalInfo1: "【Call Llamada de video Full HD】： Esta c【Call Llamada de video Full HD】： Esta cámara web de transmisión funciona con video HD de 1080p a 30 fps, ya sea que esté en Skype o jugando solo, ofreciendo imágenes nítidas. La corrección automática en condiciones de poca luz le permite ver con claridad. La tecnología de mejora facial optimiza automáticamente la imagen para que se vea más bella en el video.",
        additionalInfo2: "【Micrófono incorporado para reducir el ruido】： Ideal para seminarios web y videoconferencias. Los micrófonos duales incorporados con reducción automática de ruido hacen que el sonido sea más puro y claro, un sonido estéreo superior que permite un sonido claro y natural. Es la mejor opción para la videoconferencia para transmitir claramente el audio en un entorno ruidoso.",
        additionalInfo3: "【Plug & Play y soporte giratorio】： Esta cámara web USB para computadora fácil de configurar puede conectar y reproducir videos en 5 minutos sin la necesidad de instalar software o controladores adicionales. Es compatible con USB 3.0. Con la ayuda de un clip giratorio, puede montarlo en cualquier dispositivo como computadora portátil, trípode, computadora de escritorio, computadora, pantalla LCD e incluso simplemente colocarlo en un escritorio."
        },

      { id: 6, 
        name: "Accesorios para PC", 
        description: "TECKNET 1080P Full HD CMOS Cámara Web de Alta Micrófono Reductor de Ruido y Corrección de Automática,USB Plug and Play,Base Giratoria de 360°,para PC Computadora Portátil, Videollamadas Juegos", 
        price:  22.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/51zTrJmCDOS._AC_SL1326_-removebg-preview_wrwugp.png" ,
          additionalInfo1: "【Call Llamada de video Full HD】： Esta c【Call Llamada de video Full HD】： Esta cámara web de transmisión funciona con video HD de 1080p a 30 fps, ya sea que esté en Skype o jugando solo, ofreciendo imágenes nítidas. La corrección automática en condiciones de poca luz le permite ver con claridad. La tecnología de mejora facial optimiza automáticamente la imagen para que se vea más bella en el video.",
        additionalInfo2: "【Micrófono incorporado para reducir el ruido】： Ideal para seminarios web y videoconferencias. Los micrófonos duales incorporados con reducción automática de ruido hacen que el sonido sea más puro y claro, un sonido estéreo superior que permite un sonido claro y natural. Es la mejor opción para la videoconferencia para transmitir claramente el audio en un entorno ruidoso.",
        additionalInfo3: "【Plug & Play y soporte giratorio】： Esta cámara web USB para computadora fácil de configurar puede conectar y reproducir videos en 5 minutos sin la necesidad de instalar software o controladores adicionales. Es compatible con USB 3.0. Con la ayuda de un clip giratorio, puede montarlo en cualquier dispositivo como computadora portátil, trípode, computadora de escritorio, computadora, pantalla LCD e incluso simplemente colocarlo en un escritorio."
        },

      { id: 7, 
        name: "Accesorios para PC", 
        description: "TECKNET Alfombrilla Ratón con Reposamuñecas, Gaming Mouse Pad Ergonómica con Apoyo, Espuma Viscoelástica, Tacto Agradable & Impermeable, Alfombra Raton con Cojín, Base de Goma no Deslizante", 
        price: 11.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71tIA7Z3y0L._AC_SX425_-removebg-preview_a33iqr.png" ,      
        additionalInfo1: "[Alfombrilla de Ratón Ergonómica] la reposamuñecas raton de TECKNET está rellena de espuma viscoelástica suave. La altura ergonómica le permite amortiguar parte de la fuerza de la muñeca cuando usa el mouse, reduciendo la presión en la muñeca, para que su muñeca pueda relajarse, aliviar la incomodidad y el dolor de la muñeca. Mima tu muñeca, dale un soporte.",
        additionalInfo2: "[Superficie Sedosa] la alfombrilla ergonomica raton está tejida con material de microfibra, suave y cómoda al tacto. La superficie microtexturizada permite que el mouse se mueva libremente por la alfombrillas con una sensación sedosa y sin tartamudeos, lo que proporciona al mouse un deslizamiento rápido y suave y un seguimiento preciso.",
        additionalInfo3: "[Diseño Resistente al Agua] se agrega un revestimiento impermeable a la superficie de la alfombrilla mouse TECKNET. Cuando el líquido salpica en la superficie del revestimiento, formará gotas de agua y deslizará hacia abajo, lo que no penetrará en la alfombrilla reposamuñecas, para evitar que la almohadilla raton se dañe y garantizar una vida útil más larga. (Nota: no frote la mouse pad gaming con las manos cuando la limpie, puede dañar el revestimiento impermeable)."
      },

      { id: 8, 
        name: "Accesorios para PC", 
        description: "TECKNET Alfombrilla de Ratón Apoyo de Gel, Cojín Alfombrilla de Ratón (Base de Goma no Deslizante) - Superficie Texturizada Impermeable", 
        price: 11.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71pvrDJvc6L._AC_SL1500_-removebg-preview_ib6yxu.png" ,      
        additionalInfo1: "[Alfombrilla de Ratón Ergonómica] la reposamuñecas raton de TECKNET está rellena de espuma viscoelástica suave. La altura ergonómica le permite amortiguar parte de la fuerza de la muñeca cuando usa el mouse, reduciendo la presión en la muñeca, para que su muñeca pueda relajarse, aliviar la incomodidad y el dolor de la muñeca. Mima tu muñeca, dale un soporte.",
        additionalInfo2: "[Superficie Sedosa] la alfombrilla ergonomica raton está tejida con material de microfibra, suave y cómoda al tacto. La superficie microtexturizada permite que el mouse se mueva libremente por la alfombrillas con una sensación sedosa y sin tartamudeos, lo que proporciona al mouse un deslizamiento rápido y suave y un seguimiento preciso.",
        additionalInfo3: "[Diseño Resistente al Agua] se agrega un revestimiento impermeable a la superficie de la alfombrilla mouse TECKNET. Cuando el líquido salpica en la superficie del revestimiento, formará gotas de agua y deslizará hacia abajo, lo que no penetrará en la alfombrilla reposamuñecas, para evitar que la almohadilla raton se dañe y garantizar una vida útil más larga. (Nota: no frote la mouse pad gaming con las manos cuando la limpie, puede dañar el revestimiento impermeable)."
      },

      { id: 9, 
        name: "Accesorios para PC", 
        description: "Perixx PERIBOARD-213W Teclado de Tijera USB silencioso con Cable - Diseño Compacto con Teclado numérico - Blanco - QWERTY Español con Ñ", 
        price:  25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/71Ms7MN08KL._AC_SL1500_-removebg-preview_mztyjm.png" ,
        additionalInfo1: "DISEÑO ELEGANTE Y DELGADO - Teclado de perfil delgado con teclado numérico integrado. Teclado compacto para ahorrar espacio en su escritorio sin sacrificar ninguna funcionalidad de un teclado Full-Size.",
        additionalInfo2: "TECLAS DE ATAJO Y MULTIMEDIA - 13 teclas de acceso rápido que te permiten acceder cómodamente al correo electrónico, al navegador y a los favoritos pulsando la tecla Fn combinada con las F1-F12.",
        additionalInfo3: "TECLAS TIPO TIJERA - Las teclas tipo sciccor proporcionan una pulsación estable de las teclas para escribir cómoda y silenciosamente. Ideal para evitar distracciones."
        },

      { id: 10, 
        name: "Accesorios para PC", 
        description: "Perixx PERIBOARD-213B Teclado de Tijera USB silencioso con Cable - Diseño Compacto con Teclado numérico - Negro - Qwert Español con Ñ", 
        price:  25.99,
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731880452/611SSEvwD3L._AC_SL1500_-removebg-preview_jfz0ub.png" ,
        additionalInfo1: "DISEÑO ELEGANTE Y DELGADO - Teclado de perfil delgado con teclado numérico integrado. Teclado compacto para ahorrar espacio en su escritorio sin sacrificar ninguna funcionalidad de un teclado Full-Size.",
        additionalInfo2: "TECLAS DE ATAJO Y MULTIMEDIA - 13 teclas de acceso rápido que te permiten acceder cómodamente al correo electrónico, al navegador y a los favoritos pulsando la tecla Fn combinada con las F1-F12.",
        additionalInfo3: "TECLAS TIPO TIJERA - Las teclas tipo sciccor proporcionan una pulsación estable de las teclas para escribir cómoda y silenciosamente. Ideal para evitar distracciones."
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
      <h1 className="title">Accesorios para PC</h1>
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

export default PcPage;
