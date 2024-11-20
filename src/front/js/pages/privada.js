// import React, { useEffect } from "react";
// export const Privada = () => {
//     useEffect(() => {
//         const validate = () => {
//             const token = localStorage.getItem("token")
//             fetch("https://super-adventure-97qj665pp6pphpgpj-3001.app.github.dev/protected", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     'Authorization': 'Bearer ' + token
//                 }
//             })
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log(data)
//             })
//             .catch(error => console.log(error))
            
//         }
//         validate()

//     }, [])
//     return (
//         <div>
//             <h1> USER PROFILE INFORMATION</h1>
//         </div>
//     )
// }