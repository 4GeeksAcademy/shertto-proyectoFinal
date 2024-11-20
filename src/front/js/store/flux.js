const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            cart: JSON.parse(localStorage.getItem("cart")) || [], //estado para agregar productos al carrito
            favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Lo mismo para agregar a favoritos
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

            //vaciar el carrito
            clearCart: () => {
                setStore({ cart: [] });
                localStorage.removeItem("cart");
            },

            //Funciones para favoritos
            addToFavorites: (product) => {
                const store = getStore();
                const updatedFavorites = [...store.favorites, product]; // Añadir el producto a favoritos
                setStore({ favorites: updatedFavorites });
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Guardar en localStorage
            },

            removeFromFavorites: (productId) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(
                    (product) => product.id !== productId
                ); // Filtrar el producto a eliminar
                setStore({ favorites: updatedFavorites });
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Actualizar en localStorage
            },

            clearFavorites: () => {
                setStore({ favorites: [] }); // Limpiar la lista de deseos
                localStorage.removeItem("favorites"); // Limpiar también en localStorage
            },

            // Otros métodos (login, register, etc.)
            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/message");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
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
                        body: JSON.stringify({ email, password })
                    });

                    if (!response.ok) throw new Error("Login failed");

                    const data = await response.json();
                    setStore({ userToken: data.token });
                    localStorage.setItem("token", data.token);
                    return true;
                } catch (error) {
                    console.error("Error during registration:", error);
                    return false;
                }
            },

            register: async (email, password) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/registre`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });

                    if (!response.ok) throw new Error("Register failed");

                    const data = await response.json();
                    setStore({ userToken: data.token });
                    localStorage.setItem("token", data.token);
                    return true;
                } catch (error) {
                    console.error("Error during registration:", error);
                    return false;
                }
            },

            getUserProfile: async () => {
                try {
                    const store = getStore();
                    const response = await fetch(`${process.env.BACKEND_URL}/api/profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${store.userToken}`
                        }
                    });

                    if (!response.ok) throw new Error("Failed to fetch Profile");

                    const data = await response.json();
                    setStore({ user: data });
                } catch (error) {
                    console.error("Error fetching profile:", error);
                }
            }
        }
    };
};

export default getState;

