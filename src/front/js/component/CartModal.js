import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";

export const CartModal = ({ show, onClose }) => {
    const { store, actions } = useContext(Context);

    if (!show) return null;

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Tu carrito</h2>
                {store.cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {store.cart.map((product, index) => (
                                <li key={index} className="cart-item">
                                    <span>{product.name}</span>
                                    <span>${product.price.toFixed(2)}</span>
                                    <button onClick={() => actions.removeFromCart(product.id)}>
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={actions.clearCart} className="clear-cart-button">
                            Limpiar carrito
                        </button>
                    </>
                )}
                <div className="total">
                    Total: ${store.cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}
                </div>
            </div>
        </div>
    );
};
