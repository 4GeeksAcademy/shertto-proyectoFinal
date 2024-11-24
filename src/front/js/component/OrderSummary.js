import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import "../../styles/orderSummary.css";

const OrderSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderDetails = location.state?.orderDetails;

    if (!orderDetails) {
        // Si no hay detalles del pedido, redirige de vuelta al carrito después de mostrar un mensaje
        return (
            <div>
                <p>No se encontraron detalles de la orden. Redirigiendo al carrito...</p>
                {setTimeout(() => {
                    navigate("/cart");
                }, 2000)}
            </div>
        );
    }

    return (
        <div className="order-summary-container">
            <h2>Resumen de tu Pedido</h2>
            <ul className="order-items">
                {orderDetails.items.map((item, index) => (
                    <li key={index} className="order-item">
                        <div className="order-item-details">
                            <span>{item.product_name}</span>
                            <span>Cantidad: {item.quantity}</span>
                            <span>Precio: ${item.price.toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="total-container">
                <h3>Total: ${orderDetails.totalAmount.toFixed(2)}</h3>
            </div>

            <div className="paypal-button-container">
                <h3>Procede al pago:</h3>
                <PayPalButton
                    amount={orderDetails.totalAmount}
                    onSuccess={() => {
                        alert("Pago realizado con éxito");
                        navigate("/"); // Después del pago, redirigir al usuario a la página principal
                    }}
                />
            </div>
        </div>
    );
};

export default OrderSummary;
