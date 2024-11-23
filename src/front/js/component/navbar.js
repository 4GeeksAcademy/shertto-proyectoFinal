import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"; // Iconos de react-icons
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [cartBounce, setCartBounce] = useState(false); // Estado para rebote del carrito
  const [favoritesBounce, setFavoritesBounce] = useState(false); // Estado para rebote de favoritos

  const navigate = useNavigate();

  // Efecto de rebote para carrito
  useEffect(() => {
    if (store.cart.length > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [store.cart.length]);

  // Efecto de rebote para favoritos
  useEffect(() => {
    if (store.favorites.length > 0) {
      setFavoritesBounce(true);
      const timer = setTimeout(() => setFavoritesBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [store.favorites.length]);

  const iconStyle = {
    fontSize: "26px", // Tamaño uniforme de los iconos
    color: "white", // Color de los iconos
  };

  // Función para recargar la página al hacer clic en el logo
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo alineado a la izquierda */}
          <a onClick={handleLogoClick}>
            <img
              className="logo"
              src="https://res.cloudinary.com/dsgltzpu7/image/upload/v1731426426/logo_sin_fondo_o2pjsc.png"
              alt="Logo"
              style={{ cursor: "pointer" }}
            />
          </a>

          {/* Buscador centrado */}
          <div className="search-container">
            <form className="search-form" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0=" />
                </svg>
              </button>
            </form>
          </div>

          {/* Iconos a la derecha */}
          <ul className="nav justify-content-end">
            <Link className="nav-item" to="/register">
              <div>
                <FaUser style={iconStyle} />
              </div>
            </Link>
            <Link to="/favorites">
              <div className={`favorites-icon ${favoritesBounce ? "bounce" : ""}`}>
                <FaHeart style={iconStyle} />
                {store.favorites.length > 0 && (
                  <span className="badge">{store.favorites.length}</span>
                )}
              </div>
            </Link>

            <Link to="/cart">
              <div className={`cart-icon ${cartBounce ? "bounce" : ""}`}>
                <FaShoppingCart style={iconStyle} />
                {store.cart.length > 0 && (
                  <span className="badge">{store.cart.length}</span>
                )}
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Rutas debajo del buscador */}
      <div className="navbar-routes fixed">
        <Link className="navbar-link" to="/">
          Categorías
        </Link>
        <Link className="navbar-link" to="/earphones">
          Auriculares
        </Link>
        <Link className="navbar-link" to="/photographypage">
          Fotografía
        </Link>
        <Link className="navbar-link" to="/gamingPages">
          Gaming
        </Link>
        <Link className="navbar-link" to="/wearablesPage">
          Wearables
        </Link>
        <Link className="navbar-link" to="/chargerPage">
          Cargadores/Adaptadores
        </Link>
        <Link className="navbar-link" to="/smartPage">
          Electrodomésticos
        </Link>
        <Link className="navbar-link" to="/pcPage">
          Accesorios para PC
        </Link>
      </div>
    </div>
  );
};

















