import React, { useEffect } from 'react';

const PayPalButton = ({ amount }) => {
    useEffect(() => {
        // Verifica que el SDK de PayPal esté cargado
        if (window.paypal) {
            // Limpia el contenedor antes de renderizar el botón
            const container = document.getElementById("paypal-button-container");
            if (container) container.innerHTML = "";

            // Asegúrate de que el token JWT esté disponible
            const token = localStorage.getItem('token'); // O desde donde esté almacenado tu token

            window.paypal.Buttons({
                style: {
                    shape: "rect",
                    layout: "vertical",
                    color: "blue",
                    label: "pay",
                    shape: "pill",
                },

                // Crear la orden en el backend
                createOrder: async (data, actions) => {
                    try {
                        const response = await fetch("/api/paypal/create-order", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}` // Usamos el token JWT en los headers
                            },
                            body: JSON.stringify({ amount }) // Solo enviamos el monto
                        });

                        const orderData = await response.json();
                        if (orderData && orderData.payment_id) {
                            return orderData.payment_id;  // Retorna el ID de la orden de PayPal
                        } else {
                            throw new Error('Error al crear la orden en el backend');
                        }
                    } catch (error) {
                        console.error('Error creando la orden de PayPal:', error);
                        throw new Error('Error al crear la orden');
                    }
                },

                onApprove: async (data, actions) => {
                    try {
                        const response = await fetch(`/api/paypal/execute-payment`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                paymentId: data.orderID,
                                payerId: data.payerID
                            })
                        });

                        const result = await response.json();

                        if (result.message === 'Pago ejecutado exitosamente') {
                            alert('¡Pago completado con éxito!');
                        } else {
                            alert('Error al ejecutar el pago.');
                        }
                    } catch (error) {
                        console.error('Error al ejecutar el pago:', error);
                        alert('Error al ejecutar el pago. Inténtalo de nuevo.');
                    }
                },

                onCancel: (data) => {
                    alert('El pago fue cancelado.');
                },

                onError: (err) => {
                    console.error('Error en el pago:', err);
                    alert('Ocurrió un error al procesar el pago.');
                },
            }).render("#paypal-button-container");
        }
    }, [amount]);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;


