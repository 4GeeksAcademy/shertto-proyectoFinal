import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";
import PayPalButton from "./PayPalButton"; 
import "../../styles/favorites.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    // Calcular el total de la lista de deseos, asegurándose de que todos los productos tengan un precio válido
    const totalAmount = store.favorites.reduce((acc, product) => {
        // Verificamos si el precio del producto es válido
        const price = product.price && !isNaN(product.price) ? product.price : 0;
        return acc + price;
    }, 0).toFixed(2); // Aseguramos que el resultado sea un número con dos decimales

    return (
        <div className="cart-container">
            <h2>Lista de deseos</h2>
            {store.favorites.length === 0 ? (
                <p>Tu lista de deseos está vacía.</p>
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
                                        {/* Verificar si el precio es válido antes de intentar formatearlo */}
                                        <span>
                                            ${product.price && !isNaN(product.price) ? product.price.toFixed(2) : 'N/A'}
                                        </span>
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

            {/* Mostrar el botón de PayPal solo si hay productos en la lista de deseos */}
            {store.favorites.length > 0 && (
                <div className="paypal-button-container">
                    <PayPalButton amount={totalAmount} />
                </div>
            )}
        </div>
    );
};

