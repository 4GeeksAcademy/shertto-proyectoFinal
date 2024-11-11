import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const ProductCard = ({ product }) => {
    const { actions } = useContext(Context);

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={ () => actions.addToCart(product)}>Añadir al carrito</button>
        </div>
    );
};