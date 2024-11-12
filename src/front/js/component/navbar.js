import React, { useState } from "react";
import { Dropdown } from "react-bootstrap"; // Importamos los componentes de Bootstrap para el Dropdown
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"; // Usamos los iconos de react-icons
import "../../styles/navbar.css";

export const Navbar = () => {
  // Estado para controlar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Funciones para manejar el hover
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const iconStyle = { 
    fontSize: "30px",  // Tamaño uniforme de los iconos
    color: "white",    // Color uniforme de los iconos
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

          <a className="navbar-brand text-white" href="#">ruta</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">ruta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">ruta</a>
              </li>
            </ul>

            <form className="container-fluid justify-content-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0=" />
                </svg>
              </button>
            </form>  
          </div>

          {/* Dropdown del icono de usuario */}
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <div
                className="nav-link text-white"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaUser style={iconStyle} />
                <Dropdown show={showDropdown} autoClose="outside">
                  {/* Aplicamos la clase dropdown-menu-dark para que el menú sea oscuro */}
                  <Dropdown.Menu className="dropdown-menu-dark">
                    <Dropdown.Item href="#action1">Perfil</Dropdown.Item>
                    <Dropdown.Item href="#action2">Configuraciones</Dropdown.Item>
                    <Dropdown.Item href="#action3">Cerrar sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>

            {/* Icono de Corazón */}
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaHeart style={iconStyle} />
              </a>
            </li>

            {/* Icono de Carrito */}
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaShoppingCart style={iconStyle} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

