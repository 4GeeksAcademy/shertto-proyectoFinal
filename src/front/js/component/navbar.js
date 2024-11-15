import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"; // Usamos los iconos de react-icons
import "../../styles/navbar.css";

export const Navbar = () => {
  // Estado para controlar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Funciones para manejar el hover
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const iconStyle = {
    fontSize: "30px", // Tamaño uniforme de los iconos
    color: "white", // Color uniforme de los iconos
  };

  // Función para recargar la página al hacer clic en el logo
  const handleLogoClick = () => {
    window.location.reload();
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
              style={{ cursor: "pointer" }} // Hace que el logo tenga estilo de cursor clickeable
            />
          </a>

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

          {/* Dropdown del icono de usuario */}
          <ul className="nav justify-content-end">
            <Link className="nav-item" to="/register">
              <div >
                <FaUser style={iconStyle} />
               
              </div>
            </Link>

            {/* Icono de Corazón */}
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaHeart style={iconStyle} />
              </a>
            </li>

            {/* Icono de Carrito */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
                <FaShoppingCart style={iconStyle} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rutas debajo del buscador */}
      <div className="navbar-routes">
        <Link className="navbar-link" to="/">
          Products
        </Link>
        <Link className="navbar-link" to="/earphones">
          Auriculares y accesorios
        </Link>
        <Link className="navbar-link" to="/photographypage">
        Fotografía y Videocámaras
        </Link>
        <Link className="navbar-link" to="/gamingPages">
        Productos Gaming
        </Link>
        <Link className="navbar-link" to="/wearablesPage">
        Wearables
        </Link>
        <Link className="navbar-link" to="/chargerPage">
        Cargadores y Adaptadores
        </Link>
        <Link className="navbar-link" to="/smartPage">
        Electrodomésticos inteligentes
        </Link>
        <Link className="navbar-link" to="/pcPage">
        Accesorios para PC
        </Link>
        {/* Puedes añadir más rutas aquí */}
      </div>
    </div>
  );
};
