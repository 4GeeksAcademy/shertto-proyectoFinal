import React, { useEffect } from 'react';


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba
    }, []);
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          lineHeight: "1.8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Política de Privacidad</h1>
        <p style={{ color: "#555" }}>
          En <strong>Shertto</strong>, nos tomamos muy en serio tu privacidad. Este documento
          describe cómo recopilamos, usamos y protegemos tu información personal.
        </p>

        <h2 style={{ color: "#333" }}>1. Información Recopilada</h2>
        <p style={{ color: "#555" }}>
          Podemos recopilar información personal, como tu nombre, dirección de correo
          electrónico, número de teléfono y detalles de envío, cuando realizas una compra o te
          registras en nuestro sitio.
        </p>

        <h2 style={{ color: "#333" }}>2. Uso de la Información</h2>
        <p style={{ color: "#555" }}>
          Usamos tu información para procesar pedidos, mejorar nuestra experiencia de usuario
          y enviarte notificaciones relacionadas con tus compras. También podríamos enviarte
          promociones si así lo aceptas.
        </p>

        <h2 style={{ color: "#333" }}>3. Protección de Datos</h2>
        <p style={{ color: "#555" }}>
          Implementamos medidas de seguridad para proteger tu información contra accesos no
          autorizados. Sin embargo, no podemos garantizar la seguridad absoluta de la
          información transmitida en línea.
        </p>

        <h2 style={{ color: "#333" }}>4. Terceros</h2>
        <p style={{ color: "#555" }}>
          No compartimos tu información personal con terceros, excepto cuando sea necesario
          para procesar tu pedido, como servicios de envío o procesadores de pago.
        </p>

        <h2 style={{ color: "#333" }}>5. Tus Derechos</h2>
        <p style={{ color: "#555" }}>
          Puedes solicitar acceso, corrección o eliminación de tus datos personales en
          cualquier momento. Contáctanos en <strong>soporte@Shertto.com</strong> para más información.
        </p>

        <h2 style={{ color: "#333" }}>6. Cambios a esta Política</h2>
        <p style={{ color: "#555" }}>
          Nos reservamos el derecho de actualizar esta política de privacidad. Notificaremos
          cualquier cambio significativo a través de nuestro sitio web.
        </p>

        <p style={{ color: "#555" }}>
          Al utilizar nuestro sitio, confirmas que has leído y aceptado esta política de
          privacidad.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
