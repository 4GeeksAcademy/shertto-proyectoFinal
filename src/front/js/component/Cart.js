import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cart.css";


export const Cart = () => {
    const { store, actions } = useContext(Context);

    // este producto es de prueba para ver la renderización
    store.cart = [{ id: 1, name: "Producto de prueba", price: 10 }];

    console.log(store.cart);
    
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
                                <span>{product.name}</span> 
                                <span>{product.price.toFixed(2)}</span>
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
            <div>
                {/* Calcular el total sumado del precio del producto en el carrito */}
                Total: $
                {store.cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}
            </div>
        </div>
    );
    
};