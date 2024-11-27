import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";
import { imagenes } from "../../img/imagenes"; 

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    // Función para obtener la imagen correspondiente al producto
    const getProductImage = (productId) => {
        const imagen = imagenes.find(img => img.id === productId);
        return imagen ? imagen.url : ''; 
    };

    // Función para añadir un producto al carrito
    const handleAddToCart = (product) => {
        actions.addToCart({ ...product, quantity: 1 }); // Añade 1 unidad por defecto
    };

    return (
      <div className="contenedor-favorites">   
        <div className="favorites-container">
            <h2>Lista de deseos</h2>
            {store.favorites.length === 0 ? (
                <p>Tu lista de deseos está vacía.</p>
            ) : (
                <>
                    <ul className="favorites-items">
                        {store.favorites.map((product, index) => {
                            const productImage = getProductImage(product.id);
                            return (
                                <li key={index} className="favorites-item">
                                    <div className="favorites-item-container">
                                        <img
                                            src={productImage} // Usar la imagen obtenida
                                            alt={product.name}
                                            className="favorites-item-image"
                                        />
                                        <div className="favorites-item-details">
                                            <span>{product.name}</span>
                                            {/* Mostrar la descripción del producto */}
                                            <p className="product-description">
                                                {product.description || "Descripción no disponible"}
                                            </p>
                                        </div>
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
                            );
                        })}
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
    </div> 
    );
};