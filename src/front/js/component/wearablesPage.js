// EarphonesPage.js
import React, { useEffect, useState } from "react";
import EarphoneDetails from "./earphoneDetails"
import "../../styles/productpage.css"; // Asegúrate de tener estilos personalizados
import OffCanvasDetails from "./offcanvasdetails"; // Nuevo componente


const WearablesPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Para manejar el producto seleccionado


  useEffect(() => {
    // Simulación de productos específicos para auriculares y accesorios
    setProducts([
      { id: 1, 
        name: "Wearables", 
        description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Blanco)", 
        price: 39.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875454/61YlfZJ6yiL._AC_SL1500_-removebg-preview_bfp62o.png", 
        additionalInfo1: "Reloj inteligente con llamadas Bluetooth】TOZO S3 está equipado con un micrófono y un altavoz premium integrados, que pueden brindarle una excelente experiencia de llamadas. Después de conectarse a su móvil a través de Bluetooth, podrá responder y realizar llamadas claras directamente desde su reloj, liberando sus manos. No perderá llamadas y mensajes importantes de su amante/amigos, haciendo que los deportes diarios, los deportes al aire libre y la vida sean más concisos e inteligentes.",
        additionalInfo2: "Pantalla táctil a color HD grande de 1,83 pulgadas】Pantalla a color grande de 1,83 pulgadas, pantalla completa táctil y deslizante manual. Le garantiza un funcionamiento fluido y una resolución de 240*284. Nuestra pantalla es mejor en saturación y reproducción de color. Personalice su reloj inteligente para hombres y mujeres con múltiples esferas de reloj personalizadas proporcionadas, cree su propio reloj.",
        additionalInfo3: "Seguimiento de frecuencia cardíaca, sueño y actividad】Con nuestro reloj inteligente, monitorea su frecuencia cardíaca en tiempo real. Además, proporciona un análisis detallado de la calidad de su sueño al registrar continuamente sus patrones de sueño. Durante el ejercicio, el reloj inteligente TOZO registra automáticamente los pasos diarios, el contador de distancia, las calorías quemadas, los minutos de actividad y comprende su estado físico.",
      },

      { id: 2, 
        name: "Wearables", 
        description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Negro)", 
        price: 39.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/71Rh3UQ6PNL._AC_SL1500_-removebg-preview_qxbals.png", 
        additionalInfo1: "Reloj inteligente con llamadas Bluetooth】TOZO S3 está equipado con un micrófono y un altavoz premium integrados, que pueden brindarle una excelente experiencia de llamadas. Después de conectarse a su móvil a través de Bluetooth, podrá responder y realizar llamadas claras directamente desde su reloj, liberando sus manos. No perderá llamadas y mensajes importantes de su amante/amigos, haciendo que los deportes diarios, los deportes al aire libre y la vida sean más concisos e inteligentes.",
        additionalInfo2: "Pantalla táctil a color HD grande de 1,83 pulgadas】Pantalla a color grande de 1,83 pulgadas, pantalla completa táctil y deslizante manual. Le garantiza un funcionamiento fluido y una resolución de 240*284. Nuestra pantalla es mejor en saturación y reproducción de color. Personalice su reloj inteligente para hombres y mujeres con múltiples esferas de reloj personalizadas proporcionadas, cree su propio reloj.",
        additionalInfo3: "Seguimiento de frecuencia cardíaca, sueño y actividad】Con nuestro reloj inteligente, monitorea su frecuencia cardíaca en tiempo real. Además, proporciona un análisis detallado de la calidad de su sueño al registrar continuamente sus patrones de sueño. Durante el ejercicio, el reloj inteligente TOZO registra automáticamente los pasos diarios, el contador de distancia, las calorías quemadas, los minutos de actividad y comprende su estado físico.",
      },
      
      { id: 3, 
        name: "Wearables", 
        description: "TOZO S2 Smartwatch, 1.69 Reloj Inteligente Hombre Mujer, Smartwatch Hombre Mujer con DIY Esfera Reloj Impermeable (Rosa)", 
        price: 39.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875454/61gwWcND2PL._AC_SL1500_-removebg-preview_xrf2cs.png", 
        additionalInfo1: "Reloj inteligente con llamadas Bluetooth】TOZO S3 está equipado con un micrófono y un altavoz premium integrados, que pueden brindarle una excelente experiencia de llamadas. Después de conectarse a su móvil a través de Bluetooth, podrá responder y realizar llamadas claras directamente desde su reloj, liberando sus manos. No perderá llamadas y mensajes importantes de su amante/amigos, haciendo que los deportes diarios, los deportes al aire libre y la vida sean más concisos e inteligentes.",
        additionalInfo2: "Pantalla táctil a color HD grande de 1,83 pulgadas】Pantalla a color grande de 1,83 pulgadas, pantalla completa táctil y deslizante manual. Le garantiza un funcionamiento fluido y una resolución de 240*284. Nuestra pantalla es mejor en saturación y reproducción de color. Personalice su reloj inteligente para hombres y mujeres con múltiples esferas de reloj personalizadas proporcionadas, cree su propio reloj.",
        additionalInfo3: "Seguimiento de frecuencia cardíaca, sueño y actividad】Con nuestro reloj inteligente, monitorea su frecuencia cardíaca en tiempo real. Además, proporciona un análisis detallado de la calidad de su sueño al registrar continuamente sus patrones de sueño. Durante el ejercicio, el reloj inteligente TOZO registra automáticamente los pasos diarios, el contador de distancia, las calorías quemadas, los minutos de actividad y comprende su estado físico.",
     },
      
      { id: 4, 
        name: "Wearables", 
        description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Rojo Brillante)", 
        price: 121.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/412Cil_BOL._AC_-removebg-preview_zyqbey.png",
        additionalInfo1: "⌚⌚SaveFamily es la marca de smartwatches infantiles más vendida de España. Todos los productos están diseñados por y para nuestros hijos, con un estilo y una calidad de fabricación superiores.",
        additionalInfo2: "💥💥La reinvención del SMARTWATCH CON GPS Y LLAMADAS para niños💥💥Reloj inteligente para niños que podrán personalizar a su gusto con correas intercambiables de tela o silicona, fondos de pantalla animados... Porque tu hijo es único y se merece un reloj a su medida.",
        additionalInfo3: "🔝ULTRA SLIM, FULL HD Y RÁPIDO🔝El smartwatch para niños más cómodo, ligero y delgado creado para ellos. Ideal para su uso a diario. Pantalla FullHD con más resolución, más nitidez y más color. Con 8GB de almacenamiento, procesador de 1,2 GHZ y 1GB de memoria.",
      },
      
      { id: 5, 
        name: "Wearables", 
        description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Amarillo Fluor)", 
        price: 121.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61sVLx1MWRL._AC_SL1200_-removebg-preview_l7kmhd.png", 
        additionalInfo1: "⌚⌚SaveFamily es la marca de smartwatches infantiles más vendida de España. Todos los productos están diseñados por y para nuestros hijos, con un estilo y una calidad de fabricación superiores.",
        additionalInfo2: "💥💥La reinvención del SMARTWATCH CON GPS Y LLAMADAS para niños💥💥Reloj inteligente para niños que podrán personalizar a su gusto con correas intercambiables de tela o silicona, fondos de pantalla animados... Porque tu hijo es único y se merece un reloj a su medida.",
        additionalInfo3: "🔝ULTRA SLIM, FULL HD Y RÁPIDO🔝El smartwatch para niños más cómodo, ligero y delgado creado para ellos. Ideal para su uso a diario. Pantalla FullHD con más resolución, más nitidez y más color. Con 8GB de almacenamiento, procesador de 1,2 GHZ y 1GB de memoria.",
      },
      
      { id: 6, 
        name: "Wearables", 
        description: "SaveFamily SaveWatch Plus 4G. Reloj Inteligente niño. Llamada, Vídeo, Face ID, Correas Personalizables, UltraSlim, Fondos de Pantalla, Música, Bluetooth, App Store (Verde Menta)", 
        price: 121.00, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61BKos4t5OL._AC_SL1200_-removebg-preview_fuxwl6.png", 
        additionalInfo1: "⌚⌚SaveFamily es la marca de smartwatches infantiles más vendida de España. Todos los productos están diseñados por y para nuestros hijos, con un estilo y una calidad de fabricación superiores.",
        additionalInfo2: "💥💥La reinvención del SMARTWATCH CON GPS Y LLAMADAS para niños💥💥Reloj inteligente para niños que podrán personalizar a su gusto con correas intercambiables de tela o silicona, fondos de pantalla animados... Porque tu hijo es único y se merece un reloj a su medida.",
        additionalInfo3: "🔝ULTRA SLIM, FULL HD Y RÁPIDO🔝El smartwatch para niños más cómodo, ligero y delgado creado para ellos. Ideal para su uso a diario. Pantalla FullHD con más resolución, más nitidez y más color. Con 8GB de almacenamiento, procesador de 1,2 GHZ y 1GB de memoria.",
      },
      
      { id: 7, 
        name: "Wearables", 
        description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", 
        price: 19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61nAvwgNTLL._AC_SL1500_-removebg-preview_mdauhf.png", 
        additionalInfo1: "[1,47'' HD Pantalla Táctil Completa a Color] | El reloj inteligente Blackview R1 consta de una pantalla táctil en color HD de 1,47 pulgadas y una correa de silicona para ejercicios que no daña la piel, todo es más fácil de ver y operar. Hay más de 150 esferas de reloj en línea en la aplicación de reloj para que elijas. También puede cargar sus fotos favoritas desde su teléfono para personalizar la esfera del reloj, lo que facilita encontrar el aspecto adecuado en el momento adecuado.",
        additionalInfo2: "[24 Modos Deportivos, Impermeable] | ‍Este reloj deportivo admite 24 modos deportivos y ha pasado la prueba de resistencia al agua. Seleccione cualquier modo de deporte (ciclismo, fútbol, correr, yoga, etc.) en el reloj para comenzar su viaje deportivo. Puede ver los datos de actividad física, como la cantidad de pasos de ejercicio, las calorías quemadas y la distancia de ejercicio registrada por el reloj en la aplicación de reloj Honor Fitness para obtener mejores resultados de entrenamiento.",
        additionalInfo3: "[Monitoreo de métricas de salud] | El reloj deportivo tiene un sensor de seguimiento óptico avanzado incorporado, que monitorea automáticamente su frecuencia cardíaca las 24/7 de la semana, detecta el oxígeno en la sangre y monitorea su estado de sueño por la noche. Puede verificar estos indicadores de salud en tiempo real en su muñeca en cualquier momento y en cualquier lugar, y ver los registros de datos de todo el día en la aplicación Gloryfit, vigila tu salud en todo momento.",
      },
      
      { id: 8, 
        name: "Wearables", 
        description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", 
        price: 19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61qiVF5oWDL._AC_SX425_-removebg-preview_gebfyn.png", 
        additionalInfo1: "[1,47'' HD Pantalla Táctil Completa a Color] | El reloj inteligente Blackview R1 consta de una pantalla táctil en color HD de 1,47 pulgadas y una correa de silicona para ejercicios que no daña la piel, todo es más fácil de ver y operar. Hay más de 150 esferas de reloj en línea en la aplicación de reloj para que elijas. También puede cargar sus fotos favoritas desde su teléfono para personalizar la esfera del reloj, lo que facilita encontrar el aspecto adecuado en el momento adecuado.",
        additionalInfo2: "[24 Modos Deportivos, Impermeable] | ‍Este reloj deportivo admite 24 modos deportivos y ha pasado la prueba de resistencia al agua. Seleccione cualquier modo de deporte (ciclismo, fútbol, correr, yoga, etc.) en el reloj para comenzar su viaje deportivo. Puede ver los datos de actividad física, como la cantidad de pasos de ejercicio, las calorías quemadas y la distancia de ejercicio registrada por el reloj en la aplicación de reloj Honor Fitness para obtener mejores resultados de entrenamiento.",
        additionalInfo3: "[Monitoreo de métricas de salud] | El reloj deportivo tiene un sensor de seguimiento óptico avanzado incorporado, que monitorea automáticamente su frecuencia cardíaca las 24/7 de la semana, detecta el oxígeno en la sangre y monitorea su estado de sueño por la noche. Puede verificar estos indicadores de salud en tiempo real en su muñeca en cualquier momento y en cualquier lugar, y ver los registros de datos de todo el día en la aplicación Gloryfit, vigila tu salud en todo momento.",
      },
      
      { id: 9, 
        name: "Wearables", 
        description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", 
        price: 19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61qW5MfqxwL._AC_SL1500_-removebg-preview_m5e4uq.png", 
        additionalInfo1: "[1,47'' HD Pantalla Táctil Completa a Color] | El reloj inteligente Blackview R1 consta de una pantalla táctil en color HD de 1,47 pulgadas y una correa de silicona para ejercicios que no daña la piel, todo es más fácil de ver y operar. Hay más de 150 esferas de reloj en línea en la aplicación de reloj para que elijas. También puede cargar sus fotos favoritas desde su teléfono para personalizar la esfera del reloj, lo que facilita encontrar el aspecto adecuado en el momento adecuado.",
        additionalInfo2: "[24 Modos Deportivos, Impermeable] | ‍Este reloj deportivo admite 24 modos deportivos y ha pasado la prueba de resistencia al agua. Seleccione cualquier modo de deporte (ciclismo, fútbol, correr, yoga, etc.) en el reloj para comenzar su viaje deportivo. Puede ver los datos de actividad física, como la cantidad de pasos de ejercicio, las calorías quemadas y la distancia de ejercicio registrada por el reloj en la aplicación de reloj Honor Fitness para obtener mejores resultados de entrenamiento.",
        additionalInfo3: "[Monitoreo de métricas de salud] | El reloj deportivo tiene un sensor de seguimiento óptico avanzado incorporado, que monitorea automáticamente su frecuencia cardíaca las 24/7 de la semana, detecta el oxígeno en la sangre y monitorea su estado de sueño por la noche. Puede verificar estos indicadores de salud en tiempo real en su muñeca en cualquier momento y en cualquier lugar, y ver los registros de datos de todo el día en la aplicación Gloryfit, vigila tu salud en todo momento.",
      },
      
      { id: 10,
        name: "Wearables", 
        description: "Blackview Smartwatch, Reloj Inteligente Hombre Mujer - Oxímetro(SpO2) Caloría Podómetro Sueño Pulsometro | Pantalla de 1,47 Pulgadas, iP68 Impermeable, Pulsera Actividad Compatible con Android e iOS", 
        price: 19.99, 
        image: "https://res.cloudinary.com/dese5jn5f/image/upload/v1731875453/61ZM_bs2NSL._AC_SX425_-removebg-preview_xr6jgv.png", 
        additionalInfo1: "[1,47'' HD Pantalla Táctil Completa a Color] | El reloj inteligente Blackview R1 consta de una pantalla táctil en color HD de 1,47 pulgadas y una correa de silicona para ejercicios que no daña la piel, todo es más fácil de ver y operar. Hay más de 150 esferas de reloj en línea en la aplicación de reloj para que elijas. También puede cargar sus fotos favoritas desde su teléfono para personalizar la esfera del reloj, lo que facilita encontrar el aspecto adecuado en el momento adecuado.",
        additionalInfo2: "[24 Modos Deportivos, Impermeable] | ‍Este reloj deportivo admite 24 modos deportivos y ha pasado la prueba de resistencia al agua. Seleccione cualquier modo de deporte (ciclismo, fútbol, correr, yoga, etc.) en el reloj para comenzar su viaje deportivo. Puede ver los datos de actividad física, como la cantidad de pasos de ejercicio, las calorías quemadas y la distancia de ejercicio registrada por el reloj en la aplicación de reloj Honor Fitness para obtener mejores resultados de entrenamiento.",
        additionalInfo3: "[Monitoreo de métricas de salud] | El reloj deportivo tiene un sensor de seguimiento óptico avanzado incorporado, que monitorea automáticamente su frecuencia cardíaca las 24/7 de la semana, detecta el oxígeno en la sangre y monitorea su estado de sueño por la noche. Puede verificar estos indicadores de salud en tiempo real en su muñeca en cualquier momento y en cualquier lugar, y ver los registros de datos de todo el día en la aplicación Gloryfit, vigila tu salud en todo momento.",
      },
    ])
    ;
  }, []);

  const handleProductImageClick= (product) => {
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  const handleCloseOffCanvas = () => {
    setSelectedProduct(null); // Cierra el off-canvas
  };


  return (
    <div className="product-page">
      <h1 className="title">Wearable</h1>
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

export default WearablesPage;
