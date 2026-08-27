import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

            {/* Home */}
            <Route
                path="/"
                element={<Home />}
            />

            {/* Catálogo */}
            <Route
                path="/productos"
                element={<ItemListContainer />}
            />

            {/* Categorías */}
            <Route
                path="/categoria/:categoryId"
                element={<ItemListContainer />}
            />

            {/* Detalle */}
            <Route
                path="/item/:itemId"
                element={<ItemDetailContainer />}
            />

            {/* Carrito */}
            <Route
                path="/cart"
                element={<Cart />}
            />

        </Routes>

        </BrowserRouter>

    );

}

export default App;