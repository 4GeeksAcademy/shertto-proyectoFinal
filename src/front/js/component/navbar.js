
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap"; // Importamos los componentes de Bootstrap para el Dropdown
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa"; // Usamos los iconos de react-icons

import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  // Estado para controlar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Funciones para manejar el hover
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);


export const Navbar = () => {
	 const{store} = useContext(Context);
	 
	 	return (
		<div>  
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					
					<div className="d-flex align-items-center">
						<img className="logo me-2" src="https://trello.com/1/cards/672522b2189991a04481785d/attachments/672b4ebad45932b7b79f4510/previews/672b4ebcd45932b7b79f479c/download/Color_logo_-_no_background.webp" alt="Logo" />
						<Link className="navbar-brand text-white" to="/products">Products</Link>
					</div>


					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					
						<form className="d-flex mx-auto" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-light" type="button">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
								</svg>
							</button>
						</form>

						
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active text-white" aria-current="page" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
										<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
									</svg>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
										<path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
									</svg>
								</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to="/cart">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
										<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
									</svg>
									<span className="cart-count">{store.cart.length}</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>						
		</div>
	);
};

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
                    <Dropdown.Item href="#action2">Mis pedidos</Dropdown.Item>
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


