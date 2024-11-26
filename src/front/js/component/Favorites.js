import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    // Función para añadir un producto al carrito
    const handleAddToCart = (product) => {
        actions.addToCart({ ...product, quantity: 1 }); // Por defecto, añade 1 unidad
    };  

    return (
        <div className="favorites-container">
            
                <h2>Lista de deseos</h2>
                {store.favorites.length === 0 ? (
                    <p>Tu lista de deseos está vacía.</p>
                ) : (
                    <>
                        <ul className="favorites-items">
                            {store.favorites.map((product, index) => (
                                <li key={index} className="favorites-item">
                                    <div className="favorites-item-container">
                                        <img 
                                            src={product.imageUrl} 
                                            alt={product.name} 
                                            className="favorites-item-image" 
                                        />
                                        <div className="favorites-item-buttons">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="add-to-cart-button"
                                            >
                                                <i className="fa-sharp fa-solid fa-cart-plus"></i>
                                            </button>
                                            <button 
                                                onClick={() => actions.removeFromFavorites(product.id)} 
                                                className="remove-button"
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="clear-cart-container">
                            <button 
                                onClick={actions.clearFavorites} 
                                className="clear-cart-button"
                            >
                                Limpiar lista de deseos
                            </button>
                        </div>
                    </>
                )}
            </div>
       
    );
};