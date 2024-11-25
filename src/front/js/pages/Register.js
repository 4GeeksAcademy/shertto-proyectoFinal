import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";
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

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
                    <input
                        type="name"
                        placeholder="Nombre Completo"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Registrar
                </button>

                <div className="redirect-text">
                    <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;

