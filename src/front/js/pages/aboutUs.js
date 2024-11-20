import React, { useEffect } from 'react';
import '../../styles/aboutUs.css'; 

const AboutUs = () => {
    // Efecto para hacer scroll hacia arriba al cargar la página AboutUs
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba
    }, []);

    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <img
                    className="about-us-logo"
                    src="https://res.cloudinary.com/dsgltzpu7/image/upload/v1731426426/logo_sin_fondo_o2pjsc.png" // URL de tu logo
                    alt="Logo Shertto"
                />
                <h1 className="about-us-title">¡Bienvenido a Shertto!</h1>
                <p>Bienvenido a <strong>Shertto</strong>, tu destino de confianza para los productos tecnológicos más innovadores y recientes.</p>
                <p>Nos comprometemos a traerte la tecnología que impulsa el mundo de hoy, con una selección cuidadosamente elegida que abarca desde dispositivos de alta gama hasta accesorios imprescindibles para el día a día.</p>
                <p>Desde nuestra fundación, nuestra misión ha sido ofrecer productos que combinen funcionalidad, diseño y calidad a precios competitivos. Sabemos que la tecnología avanza rápidamente, y queremos ayudarte a mantenerte al día con las tendencias y lanzamientos más importantes de la industria.</p>
                <p>Nos enorgullece proporcionar una experiencia de compra fácil y segura, respaldada por un equipo de atención al cliente dedicado, disponible para responder a tus preguntas y hacer que tu experiencia sea satisfactoria. Además, contamos con envíos rápidos y opciones de pago seguras para que puedas recibir tus productos sin preocupaciones.</p>
                <p>Únete a la comunidad de <strong>Shertto</strong> y descubre cómo la tecnología puede mejorar tu vida. Gracias por elegirnos y permitirnos ser parte de tu vida tecnológica diaria.</p>
            </div>
        </div>
    );
};

export default AboutUs;


