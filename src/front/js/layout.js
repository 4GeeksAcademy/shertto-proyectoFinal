import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import {Home} from './pages/home';

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Register from "./pages/Register.js";

import Login from "./pages/Login";
import Profile from "./pages/Profile.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cart } from "./component/Cart.js";
import {Favorites} from "./component/Favorites.js"
import AboutUs from './pages/aboutUs.js';
import Faqs from './pages/Faqs.js';





import EarphonesPage from "./component/earphonesPage.js";
import PhotographyPage from "./component/photographypage.js";
import GamingPage from "./component/gamingPages.js";
import WearablesPage from "./component/wearablesPage.js";
import ChargerPage from "./component/chargerPage.js";
import SmartPage from "./component/smartPage.js";
import PcPage from "./component/pcPage.js";
import OffCanvasDetails from "./component/offcanvasdetails.js";
import OrderSummary from "./component/OrderSummary.js";
import TermsOfService from "./pages/termsOfService.js";
import PrivacyPolicy from "./pages/privacyPolicy.js";

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
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/single/:theid" element={<Single />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/faq" element={<Faqs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/earphones" element={<EarphonesPage />} />
                    <Route path="/photographypage" element={<PhotographyPage />} />
                    <Route path="/gamingPages" element={<GamingPage />} />
                    <Route path="/wearablesPage" element={<WearablesPage />} />
                    <Route path="/chargerPage" element={<ChargerPage />} />
                    <Route path="/smartPage" element={<SmartPage />} />
                    <Route path="/pcPage" element={<PcPage />} />
                    <Route path="/offcanvasdetails" element={<OffCanvasDetails />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/order-summary" element={<OrderSummary />} />
                    <Route path="/termsOfService" element={<TermsOfService />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default injectContext(Layout);
