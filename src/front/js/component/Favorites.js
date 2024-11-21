import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";
import PayPalButton from "./PayPalButton"; 
import "../../styles/favorites.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    // Calculamos el total
    const totalAmount = store.favorites.reduce((acc, product) => acc + product.price, 0).toFixed(2); // Calcula el total del carrito

    return (
        <div className="cart-container">
            <h2>Lista de deseos</h2>
            {store.favorites.length === 0 ? (
                <p>Tu lista de deseos está vacia.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {store.favorites.map((product, index) => (
                            <li key={index} className="favorites-item">
                                <div className="favorites-item-container">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="favorites-item-image" 
                                    />
                                    <div className="favorites-item-details">
                                        <span>{product.name}</span> 
                                        <span>${product.price.toFixed(2)}</span>
                                    </div>
                                    <button 
                                        onClick={() => actions.removeFromFavorites(product.id)} 
                                        className="remove-button"
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={actions.clearFavorites} 
                        className="clear-cart-button"
                    >
                        Limpiar lista de deseos
                    </button>
                </>
            )}
            <div className="total-container">
                <h3>Total: ${totalAmount}</h3>
            </div>

            {/* Mostrar el botón de PayPal solo si hay productos en el carrito */}
            {store.favorites.length > 0 && (
                <div className="paypal-button-container">
                    <PayPalButton amount={totalAmount} />
                </div>
            )}
        </div>
    );
};
