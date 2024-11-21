// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"; // Importamos el componente para mostrar detalles individuales
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const PhotographyPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado

  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, 
        name: "Fotografía y videocamarás",
        description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", 
        price: 37.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/51VAcc934LL._AC_SL1500_-removebg-preview_qw3rop.png", 
        additionalInfo1: "[Cultivar el interés] Esta cámara digital para niños podría cultivar el interés por la fotografía de los niños, ayudándolos a capturar momentos maravillosos, explorar y grabar el maravilloso mundo que tienen ante sus ojos.",
        additionalInfo2: "[Pantalla de visualización conveniente] Con una pantalla TFT colorida de 2 pulgadas, los niños pueden ver fácilmente las fotos y videos que han tomado directamente en la cámara en cualquier momento.",
        additionalInfo3: "[Almacenamiento ampliable] Esta grabadora de vídeo para niños admite una tarjeta de almacenamiento de hasta 8 GB (no incluida), lo que proporciona una amplia capacidad de almacenamiento para almacenar numerosas fotos y vídeos.",
       },
      
      { id: 2, 
        name: "Fotografía y videocamarás",
        description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", 
        price: 37.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/61RShX43PjL._AC_SL1500_-removebg-preview_eg5qfm.png", 
        additionalInfo1: "[Cultivar el interés] Esta cámara digital para niños podría cultivar el interés por la fotografía de los niños, ayudándolos a capturar momentos maravillosos, explorar y grabar el maravilloso mundo que tienen ante sus ojos.",
        additionalInfo2: "[Pantalla de visualización conveniente] Con una pantalla TFT colorida de 2 pulgadas, los niños pueden ver fácilmente las fotos y videos que han tomado directamente en la cámara en cualquier momento.",
        additionalInfo3: "[Almacenamiento ampliable] Esta grabadora de vídeo para niños admite una tarjeta de almacenamiento de hasta 8 GB (no incluida), lo que proporciona una amplia capacidad de almacenamiento para almacenar numerosas fotos y vídeos.",
       },
      
      { id: 3, 
        name: "Fotografía y videocamarás",
        description: "Annadue Videocámara con Cámara de Video, Videocámara con Cámara 1080P HD de 16MP con Pantalla TFT a Color de 2.0 Pulgadas, Cámara de Vlogging con Zoom Digital 16X para Viajes de Fiesta", 
        price: 37.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871466/61XEbGG05gL._AC_SL1500_-removebg-preview_mulwsu.png", 
        additionalInfo1: "[Cultivar el interés] Esta cámara digital para niños podría cultivar el interés por la fotografía de los niños, ayudándolos a capturar momentos maravillosos, explorar y grabar el maravilloso mundo que tienen ante sus ojos.",
        additionalInfo2: "[Pantalla de visualización conveniente] Con una pantalla TFT colorida de 2 pulgadas, los niños pueden ver fácilmente las fotos y videos que han tomado directamente en la cámara en cualquier momento.",
        additionalInfo3: "[Almacenamiento ampliable] Esta grabadora de vídeo para niños admite una tarjeta de almacenamiento de hasta 8 GB (no incluida), lo que proporciona una amplia capacidad de almacenamiento para almacenar numerosas fotos y vídeos.",
       },
      
      { id: 4, 
        name: "Fotografía y videocamarás",
        description: "Cámara Digital de 64 MP, Zoom óptico de 16 Aumentos, Lente Gran Angular de 62 Mm, Estabilización de Imagen óptica, Video 4K Full HD, Pantalla a Color IPS de 3, Cámara Vlogging.", 
        price: 145.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871486/41UjpaXYdZL._AC_-removebg-preview_hflitt.png",
        additionalInfo1: "Interconexión de la computadora: admite la interconexión de la computadora, se puede usar como una cámara de computadora externa para que la cámara tenga más posibilidades.",
        additionalInfo2: "Batería de gran capacidad: batería de litio de alta capacidad optimizada incorporada de 4800 mAh, la pantalla de reposo inteligente puede continuar la operación actual después de la pantalla de reposo, medido más de seis horas de uso continuo.",
        additionalInfo3: "Zoom gran angular de pantalla de 3 pulgadas: pantalla IPS de 3 pulgadas, resolución de 480x852, ángulo amplio de 120 grados graba cada fotograma de los momentos maravillosos, zoom digital de 16X, al mismo tiempo con función de optimización antivibración.",
      },
    
      { id: 5, 
        name: "Fotografía y videocamarás",
        description: "Kodak Pixpro Astro Zoom AZ255 - Cámara Digital Bridge de 16 MP, Zoom óptico de 25x, vídeo HD 1080p, Gran Angular de 24 mm, estabilizador óptico, Pantalla LCD de 3- Negro)", 
        price: 449.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/81C9A0E_8TL._AC_SL1500_-removebg-preview_xjuzvj.png",
        additionalInfo1: "Cámara digital bridge de 16 MP con zoom óptico de 25x; captura imágenes nítidas y detalladas; ideal para fotografiar paisajes y sujetos lejanos.",
        additionalInfo2: "Vídeo HD de 1080p para obtener secuencias nítidas; grabación fluida con alta resolución; perfecto para capturar momentos en movimiento.",
        additionalInfo3: "Objetivo gran angular de 24 mm; fotografía grandes paisajes y grupos de personas; cobertura ampliada para composiciones más grandes.",
      },
      
      { id: 6, 
        name: "Fotografía y videocamarás",
        description: "KODAK Pixpro Astro Zoom AZ405 - Cámara digital bridge, zoom de 40x, gran angular de 24 mm, 20 megapíxeles, LCD de 3, vídeo Full HD 1080p, OIS, pila AA - Negro", 
        price: 229.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/81s6vB6opOL._AC_SL1500_-removebg-preview_hghu0m.png",
        additionalInfo1: "Cámara digital bridge de 16 MP con zoom óptico de 25x; captura imágenes nítidas y detalladas; ideal para fotografiar paisajes y sujetos lejanos.",
        additionalInfo2: "Vídeo HD de 1080p para obtener secuencias nítidas; grabación fluida con alta resolución; perfecto para capturar momentos en movimiento.",
        additionalInfo3: "Objetivo gran angular de 24 mm; fotografía grandes paisajes y grupos de personas; cobertura ampliada para composiciones más grandes.",
     
      },
      
      { id: 7, 
        name: "Fotografía y videocamarás",
        description: "Instax Mini 9, Cámara Instantánea,(Flamingo Rosa)", 
        price: 99.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/71aIMj1B7WL._AC_SL1500_-removebg-preview_nw8ptw.png", 
        additionalInfo1: "Produce fotos instantáneas del tamaño de una tarjeta de crédito, Lente y espejo para Selfis incluídas.",
        additionalInfo2: "Control automático del flash integrado para obtener siempre las mejores fotografías con una velocidad de expulsión de 5 segundos por foto.",
        additionalInfo3: "Utiliza cualquier pelicula instax mini, tamaño foto 54mm(ancho) x 86mm (alto), tamaño imagen 46mm(ancho) x 62mm(alto), La caja contiene cámara, correa de mano, manual de usuario y 2 pilas alcalinas AA.",
      },
      
      { id: 8, 
        name: "Fotografía y videocamarás",
        description: "Instax Mini 9, Cámara Instantánea,(Amarillo)", 
        price: 99.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/61wDS0fGZWL._AC_SL1500_-removebg-preview_mg10tj.png", 
        additionalInfo1: "Produce fotos instantáneas del tamaño de una tarjeta de crédito, Lente y espejo para Selfis incluídas.",
        additionalInfo2: "Control automático del flash integrado para obtener siempre las mejores fotografías con una velocidad de expulsión de 5 segundos por foto.",
        additionalInfo3: "Utiliza cualquier pelicula instax mini, tamaño foto 54mm(ancho) x 86mm (alto), tamaño imagen 46mm(ancho) x 62mm(alto), La caja contiene cámara, correa de mano, manual de usuario y 2 pilas alcalinas AA.",
      },
      
      { id: 9, 
        name: "Fotografía y videocamarás",
        description: "Instax Mini 9, Cámara Instantánea,(Celeste)", 
        price: 99.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/615yHHnpQZL._AC_SL1500_-removebg-preview_shckzr.png", 
        additionalInfo1: "Produce fotos instantáneas del tamaño de una tarjeta de crédito, Lente y espejo para Selfis incluídas.",
        additionalInfo2: "Control automático del flash integrado para obtener siempre las mejores fotografías con una velocidad de expulsión de 5 segundos por foto.",
        additionalInfo3: "Utiliza cualquier pelicula instax mini, tamaño foto 54mm(ancho) x 86mm (alto), tamaño imagen 46mm(ancho) x 62mm(alto), La caja contiene cámara, correa de mano, manual de usuario y 2 pilas alcalinas AA.",
      },
      
      { id: 10, 
        name: "Fotografía y videocamarás",
        description: "Instax Mini 9, Cámara Instantánea,(Verde Lima)", 
        price: 99.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731871485/71rO54Vf2-L._AC_SL1500_-removebg-preview_bbgcie.png", 
        additionalInfo1: "Produce fotos instantáneas del tamaño de una tarjeta de crédito, Lente y espejo para Selfis incluídas.",
        additionalInfo2: "Control automático del flash integrado para obtener siempre las mejores fotografías con una velocidad de expulsión de 5 segundos por foto.",
        additionalInfo3: "Utiliza cualquier pelicula instax mini, tamaño foto 54mm(ancho) x 86mm (alto), tamaño imagen 46mm(ancho) x 62mm(alto), La caja contiene cámara, correa de mano, manual de usuario y 2 pilas alcalinas AA.",
      },
    ])
    ;
  }, []);

  const handleProductImageClick = (product) => {
    setSelectedProduct(product); // Guarda el producto seleccionado en el estado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };

  return (
    <div className="product-page">
      <h1 className="title">Fotografía y videocamarás</h1>
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

export default PhotographyPage;
