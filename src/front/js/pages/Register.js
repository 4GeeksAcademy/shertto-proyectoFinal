import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/auth.css";
import { Link } from "react-router-dom";


const Register = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.register(email, password);
        if (success) navigate("/login");
        else alert("Error de registro.");

    };
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     const success = await actions.login(email, password);
    //     if (success) {
    //         navigate("/profile"); 
    //     } else {
    //         alert("Inicio de sesión fallido. Comprueba que los campos email y contraseña sean correctos.");
    //     }
    // };


    return (

        <div className="auth-container">
            <h2>Registrarse</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Registrar</button>
                <Link to="/login" >login</Link>
            </form>
            {/* <h2>Inicie Sesión</h2>
            <form className="auth-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form> */}
        </div>
    );

};

export default Register;
