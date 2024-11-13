import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    //Esto redirige al login en caso de que el usuario no esté autenticado
    useEffect(() => {

        if (!store.userToken) {
            navigate("/login");
        } else {
            actions.getUserProfile();
        }
    }, [store.userToken, actions, navigate]);

    if (!store.user) {
        return <p>Cargando su perfil..</p>
    }

    return (

        <div className="profile-container">
            <h2>Perfil de Usuario</h2>
            <p><strong>Nombre:</strong> {store.user.name}</p>
            <p><strong>Email:</strong> {store.user.email}</p>
            
            <button onClick={() => navigate("/editar-perfil")}>Editar</button>

        </div>

    );
};

export default Profile;