import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/global.css";

import App from "./App.jsx";

import CartProvider from "./context/CartContext";


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <CartProvider>

            <App />

        </CartProvider>

    </React.StrictMode>

);