//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

const basename = process.env.BASENAME || "";

//render your react application con BrowserRouter y createRoot
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
    <BrowserRouter basename={basename}>
        <Layout />
    </BrowserRouter>
);
