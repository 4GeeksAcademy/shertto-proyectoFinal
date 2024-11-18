import React from 'react';
//import './Faqs.css'; 

const Faqs = () => {
    return (
        <div className="faqs-container">
            <h2 className="faqs-title">Preguntas Frecuentes (FAQs)</h2>

            <div className="faq-section">
                <h3 className="faq-category">1. Sobre pedidos</h3>
                <ul className="faq-list">
                    <li>
                        <strong>¿Cómo puedo realizar un pedido?</strong>
                        <p>
                            Para realizar un pedido, selecciona el producto que deseas, agrégalo al carrito de compras y sigue el proceso de pago. 
                            Si necesitas ayuda, puedes contactarnos.
                        </p>
                    </li>
                    <li>
                        <strong>¿Puedo modificar o cancelar mi pedido después de realizarlo?</strong>
                        <p>
                            Sí, puedes modificar o cancelar tu pedido dentro de las primeras 24 horas. Contáctanos con tu número de pedido para asistencia.
                        </p>
                    </li>
                    <li>
                        <strong>¿Cómo sé si mi pedido fue confirmado?</strong>
                        <p>
                            Recibirás un correo electrónico de confirmación una vez que tu pedido sea procesado. Asegúrate de revisar tu carpeta de correo no deseado.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="faq-section">
                <h3 className="faq-category">2. Envíos y entregas</h3>
                <ul className="faq-list">
                    <li>
                        <strong>¿Realizan envíos a todo el país?</strong>
                        <p>
                        Sí, hacemos envíos a nivel nacional. Los tiempos de entrega pueden variar dependiendo de tu ubicación.
                        </p>
                    </li>
                    <li>
                        <strong>¿Cuánto tiempo tarda en llegar mi pedido?</strong>
                        <p>
                        El tiempo de entrega depende de tu ubicación y el método de envío seleccionado. Por lo general, los envíos estándar tardan entre 3 y 7 días hábiles.
                        </p>
                    </li>
                    <li>
                        <strong>¿Cómo puedo rastrear mi pedido?</strong>
                        <p>
                        Te enviaremos un número de seguimiento por correo una vez que tu pedido haya sido enviado. Puedes rastrearlo en la página del transportista.
                        </p>
                    </li>
                    <li>
                        <strong>¿Qué hago si mi pedido no llega o llega dañado?</strong>
                        <p>
                        Si tienes problemas con tu entrega, contáctanos inmediatamente para que podamos ayudarte a resolverlo.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="faq-section">
                <h3 className="faq-category">3. Pagos</h3>
                <ul className="faq-list">
                    <li>
                        <strong>¿Qué métodos de pago aceptan?</strong>
                        <p>
                        Aceptamos pagos con tarjetas de crédito, débito, transferencias bancarias y algunas billeteras digitales como PayPal.
                        </p>
                    </li>
                    <li>
                        <strong>¿Es seguro pagar en su sitio web?</strong>
                        <p>
                        Sí, nuestra página utiliza tecnología de cifrado para proteger tus datos y garantizar compras seguras.
                        </p>
                    </li>
                    
                </ul>
            </div>     
        </div>
    );
};

export default Faqs;
