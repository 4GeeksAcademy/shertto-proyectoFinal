const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			cart: JSON.parse(localStorage.getItem("cart")) || [],
			message: null,
			userToken: null,
			user: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]

		},
		actions: {

			//funciones para el carrito
			addToCart: (product) => {
				const store = getStore();
				const updatedCart = [...store.cart, product];
				setStore({ cart: updatedCart });
				localStorage.setItem("cart", JSON.stringify(updatedCart));
			},

			removeFromCart: (productId) => {
				const store = getStore();
				const updatedCart = store.cart.filter((item) => item.id !== productId);
				setStore({ cart: updatedCart });
				localStorage.setItem("cart", JSON.stringify(updatedCart));
			},
			//vaciar el carrito hay que añadir el boton
			clearCart: () => {
				setStore({ cart: [] });
				localStorage.removeItem("cart");
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/message")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error);
				}
			},

			

			login: async (email, password) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password })
					});
					// if (response.ok) {
					// 	return true;
					// }
					const data = await response.json();
					setStore({ userToken: data.token }); 
					console.log(data);
					
					localStorage.setItem("jwt-token", data.token);
					localStorage.setItem("user", JSON.stringify(data.user_id));
					
					return true; 
				} catch (error) {
					console.log(error)
				}
			},

			register: async (email, password) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/registre`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password })
					});

					if (!response.ok) throw new Error("Register failed");

					const data = await response.json();
        			setStore({ user: data });
					return data
        			// localStorage.setItem("token", data.token);
        			// return true;
					

				} catch (error) {
					console.error("Error during registration:", error);
					return false;
					
				}
			},

			getUserProfile: async () => {
				const token = localStorage.getItem("jwt-token")
				console.log("token obtenido", token);
				
				try {
					const store = getStore();
					const response = await fetch(`${process.env.BACKEND_URL}/api/profile`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
						}
					});

					if (!response.ok) throw new Error("Failed to fetch Profile");

					const data = await response.json();
					console.log("datos del servidor", data);
					
					setStore({ user: data });
				} catch (error) {
					console.error("Error fetching profile:", error);
				}
			}

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			//}
		}
	};
};

export default getState;
