import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";
import PayPalButton from "./PayPalButton"; 

export const Cart = () => {
    const { store, actions } = useContext(Context);

    // Calcular el total, asegurándose de que todos los productos tengan un precio válido
    const totalAmount = store.cart.reduce((acc, product) => {
        // Verificamos si el precio del producto es válido
        const price = product.price && !isNaN(product.price) ? product.price : 0;
        return acc + price;
    }, 0).toFixed(2);

    return (
        <div className="cart-container">
            <h2>Mi carrito</h2>
            {store.cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {store.cart.map((product, index) => (
                            <li key={index} className="cart-item">
                                <div className="cart-item-container">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="cart-item-image" 
                                    />
                                    <div className="cart-item-details">
                                        <span>{product.name}</span>
                                        {/* Verificar que el precio esté presente antes de usar toFixed */}
                                        <span>${product.price && !isNaN(product.price) ? product.price.toFixed(2) : 'N/A'}</span>
                                    </div>
                                    <button onClick={() => actions.removeFromCart(product.id)} className="remove-button">
                                        X
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={actions.clearCart} className="clear-cart-button">
                        Limpiar carrito
                    </button>
                </>
            )}
            <div className="total-container">
                <h3>Total: ${totalAmount}</h3>
            </div>

            {store.cart.length > 0 && (
                <div className="paypal-button-container">
                    <PayPalButton amount={totalAmount} />
                </div>
            )}

            {store.cart.length > 0 && (
                <button onClick={actions.checkout} className="checkout-button">
                    Realizar compra
                </button>
            )}
        </div>
    );
};
