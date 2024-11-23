import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";
import PayPalButton from "./PayPalButton"; 

export const Cart = () => {
    const { store, actions } = useContext(Context);

    const totalAmount = store.cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

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
                                        <span>${product.price.toFixed(2)}</span>
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
