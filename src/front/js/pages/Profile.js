import React, { useEffect,useContext, useState } from "react";
import { Context } from "../store/appContext";
const Profile = () => {
    const { actions,store } = useContext(Context);
  
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
    useEffect(()=> {
        console.log(store.user);
        

    },[store.user])

    return (

        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#333" }}>Perfil de Usuario</h2>

          <p style={{ color: "#555" }}>
            <strong>Usuario_id:</strong> {store.user?.id || "No disponible"}
          </p>
  
        
          <p style={{ color: "#555" }}>
            <strong>Email:</strong> {store.user?.email || "No disponible"}
          </p>
         
        </div>
      </div>

    );
}

export default Profile
