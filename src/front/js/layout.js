import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cart } from "./component/Cart.js";

import ProductPage from "./component/ProductPage.js";

//first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    //verificación de BACKEND_URL
    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/single/:theid" element={<Single />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<ProductPage />} />

                    <Route path="/signup" element={<Signup />} />

                    <Route path="*" element={<h1>Not found!</h1>} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default injectContext(Layout);
