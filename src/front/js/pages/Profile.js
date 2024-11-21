import React, { useEffect,useContext, useState } from "react";
import { Context } from "../store/appContext";
const Profile = () => {
    const { actions,store } = useContext(Context);
    // useEffect(() => {
    //     const validate = () => {
    //         const token = localStorage.getItem("token")
    //         fetch("https://super-adventure-97qj665pp6pphpgpj-3001.app.github.dev/protected", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 'Authorization': 'Bearer ' + token
    //             }
    //         })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
            
    //     }
    //     validate()

    // }, [])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() =>{
        const token = localStorage.getItem("jwt-token")
        if (token){
            setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false)
        }
		
         actions.getUserProfile()
    },[])

    return (

        <div className="profile-container">
            <h2>Perfil de Usuario</h2>
            <p><strong>Nombre:</strong> {store.user?.name}</p>
            <p><strong>Email:</strong> {store.user?.email}</p>
            
            <button onClick={() => navigate("/editar-perfil")}>Editar</button>

        </div>

    );
}

export default Profile
