// flux.js
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            favorites: JSON.parse(localStorage.getItem("favorites")) || [],
            products: [],
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
            // Función para obtener productos por categoría desde la API
            getProductsByCategoryFromAPI: async (categoryId) => {
                try {
                    const response = await fetch(
                        `${process.env.BACKEND_URL}/api/product/category/${categoryId}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    if (!response.ok) throw new Error("Error al obtener productos de la API");

                    const data = await response.json();

                    setStore({ products: data });
                    return data;
                } catch (error) {
                    console.error("Error al obtener productos por categoría desde la API", error);
                    return [];
                }
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

            // Eliminar producto de favoritos
            removeFromCart: (productId) => {
                const store = getStore();
                const updatedCart = store.cart.filter(
                    (product) => product.id !== productId
                );
                setStore({ cart: updatedCart });
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            },

            // Limpiar favoritos
            clearFavorites: () => {
                setStore({ favorites: [] });
                localStorage.removeItem("favorites");
            },

            // Limpiar favoritos
            clearCart: () => {
                setStore({ cart: [] });
                localStorage.removeItem("cart");
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
            },
            
            checkout: async () => {
                const store = getStore();
                const token = localStorage.getItem("jwt-token");
            
                if (!token) {
                    setStore({ message: "Usuario no autenticado" });
                    console.log("Usuario no autenticado");
                    return false;
                }
            
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/order/create`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            cart_items: store.cart.map((product) => ({
                                product_id: product.id,
                                price: product.price,
                                quantity: 1 
                            }))
                        })
                    });
            
                    if (!response.ok) throw new Error("Error al crear la orden");
                    
                    const data = await response.json();
                    console.log("Orden creada con éxito:", data);
                    
                    // Limpiar carrito después de crear la orden
                    actions.clearCart();
                    return true; // Asegurarse de retornar true si la orden fue creada con éxito
                } catch (error) {
                    console.error("Error al realizar el checkout:", error);
                    return false;
                }
            },
            
        // Agregar producto al carrito
        addToCart: async (product) => {
            const store = getStore();
            const existingProduct = store.cart.find((item) => item.id === product.id);
        
            const updatedCart = existingProduct
                ? store.cart.map((item) => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
                : [...store.cart, { ...product, quantity: 1 }];
            
            setStore({ cart: updatedCart });
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        
            try {
                const token = localStorage.getItem("jwt-token");
                const response = await fetch(`${process.env.BACKEND_URL}/api/cart/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        product_id: product.id,
                        quantity: existingProduct ? existingProduct.quantity + 1 : 1,
                    })
                });
        
                if (!response.ok) throw new Error("Error al agregar producto al carrito en el backend");
            } catch (error) {
                console.error("Error al sincronizar el carrito con el backend:", error);
            }
          },
            
          getCartFromAPI: async () => {
            try {
                const token = localStorage.getItem("jwt-token");
                if (!token) return;
        
                const response = await fetch(`${process.env.BACKEND_URL}/api/cart`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
        
                if (!response.ok) throw new Error("Error al obtener el carrito del backend");
        
                const cartItems = await response.json();
                setStore({ cart: cartItems });
                localStorage.setItem("cart", JSON.stringify(cartItems));
            } catch (error) {
                console.error("Error al obtener el carrito del backend:", error);
            }
        },

        },
    };
};

export default getState;



  




