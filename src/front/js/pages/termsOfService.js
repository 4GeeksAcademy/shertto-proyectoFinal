import React, { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar hacia arriba al cargar
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
        <h1 style={{ textAlign: "center", color: "#333" }}>Términos de Servicio</h1>
        <p style={{ color: "#555" }}>
          Bienvenido a <strong>Sherto</strong>. Al utilizar este sitio web, aceptas cumplir con los
          siguientes términos y condiciones. Por favor, léelos detenidamente.
        </p>

        <h2 style={{ color: "#333" }}>1. Uso del Sitio</h2>
        <p style={{ color: "#555" }}>
          Este sitio está destinado únicamente para compras personales y no comerciales. Al
          usarlo, garantizas que tienes al menos 18 años o cuentas con el permiso de un tutor
          legal para realizar compras.
        </p>

        <h2 style={{ color: "#333" }}>2. Productos y Precios</h2>
        <p style={{ color: "#555" }}>
          Nos esforzamos por garantizar que los detalles de los productos, precios y
          disponibilidad sean precisos. Sin embargo, nos reservamos el derecho de corregir
          errores y actualizar la información en cualquier momento sin previo aviso.
        </p>

        <h2 style={{ color: "#333" }}>3. Pagos</h2>
        <p style={{ color: "#555" }}>
          Aceptamos los métodos de pago indicados en nuestro sitio. Todas las transacciones
          están sujetas a verificación y aprobación. Nos reservamos el derecho de rechazar un
          pedido por cualquier motivo.
        </p>

        <h2 style={{ color: "#333" }}>4. Envíos y Devoluciones</h2>
        <p style={{ color: "#555" }}>
          Las políticas de envío y devoluciones están disponibles en nuestra sección específica.
          Al realizar una compra, aceptas estas políticas.
        </p>

        <h2 style={{ color: "#333" }}>5. Propiedad Intelectual</h2>
        <p style={{ color: "#555" }}>
          Todo el contenido del sitio, incluyendo imágenes, textos y logotipos, es propiedad de
          nuestra empresa o de nuestros socios y está protegido por leyes de derechos de autor.
          No puedes copiar, reproducir o distribuir este contenido sin autorización previa.
        </p>

        <h2 style={{ color: "#333" }}>6. Modificaciones</h2>
        <p style={{ color: "#555" }}>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Es tu
          responsabilidad revisarlos periódicamente para estar al tanto de los cambios.
        </p>

        <h2 style={{ color: "#333" }}>7. Contacto</h2>
        <p style={{ color: "#555" }}>
          Si tienes preguntas sobre estos términos, puedes contactarnos a través de nuestro
          formulario de contacto o correo electrónico en <strong>soporte@sherto.com.</strong>
        </p>

        <p style={{ color: "#555" }}>
          Al continuar utilizando nuestro sitio, confirmas que has leído y aceptado estos
          términos de servicio.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
