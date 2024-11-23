const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            cart: JSON.parse(localStorage.getItem("cart")) || [], // Carrito almacenado en el estado y en localStorage
            favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Lista de favoritos
            products: [], // Productos obtenidos del backend
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
            // Obtener los productos desde el backend
            // Obtener productos desde la base de datos
getProductsFromAPI: async () => {
    try {
        const response = await fetch('https://ubiquitous-space-garbanzo-4jgq6rw76p4j2qwr6-3001.app.github.dev/api/product', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Error al obtener productos desde la API");

        const data = await response.json();
        setStore({ products: data }); // Asumimos que la respuesta es un array de productos
    } catch (error) {
        console.error("Error al obtener productos desde la API", error);
    }
},

            // Agregar producto al carrito
            addToCart: (product) => {
                const store = getStore();

                // Verificar si el producto ya está en el carrito
                const existingProduct = store.cart.find((item) => item.id === product.id);

                if (existingProduct) {
                    // Si ya existe, actualizar la cantidad
                    const updatedCart = store.cart.map((item) => {
                        if (item.id === product.id) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    });
                    setStore({ cart: updatedCart });
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                } else {
                    // Si no existe, agregar el producto con cantidad 1
                    const updatedCart = [...store.cart, { ...product, quantity: 1 }];
                    setStore({ cart: updatedCart });
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                }
            },

            // Eliminar producto del carrito
            removeFromCart: (productId) => {
                const store = getStore();
                const updatedCart = store.cart.filter((item) => item.id !== productId);
                setStore({ cart: updatedCart });
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            },

            // Limpiar carrito
            clearCart: () => {
                setStore({ cart: [] });
                localStorage.removeItem("cart");
            },

            // Agregar producto a favoritos
            addToFavorites: (product) => {
                const store = getStore();
                const updatedFavorites = [...store.favorites, product];
                setStore({ favorites: updatedFavorites });
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            },

            // Eliminar producto de favoritos
            removeFromFavorites: (productId) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(
                    (product) => product.id !== productId
                );
                setStore({ favorites: updatedFavorites });
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            },

            // Limpiar favoritos
            clearFavorites: () => {
                setStore({ favorites: [] });
                localStorage.removeItem("favorites");
            },

            // Obtener mensaje del backend
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

            // Iniciar sesión
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
                    console.log(data);

                    localStorage.setItem("jwt-token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user_id));
                    return true;
                } catch (error) {
                    console.error("Error during login:", error);
                    return false;
                }
            },

            // Registrar nuevo usuario
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
                    setStore({ user: data });
                    return data;
                } catch (error) {
                    console.error("Error during registration:", error);
                    return false;
                }
            },

            // Obtener el perfil del usuario
            getUserProfile: async () => {
                const token = localStorage.getItem("jwt-token");
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
                    setStore({ user: data });
                } catch (error) {
                    console.error("Error fetching profile:", error);
                }
            }
        }
    };
};

export default getState;

  




