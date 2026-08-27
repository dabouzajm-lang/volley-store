import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            
        <ScrollToTop />
        
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

            {/* Checkout */}
            <Route
                path="/checkout"
                element={<Checkout />}
            />

        </Routes>

        <Footer />

        </BrowserRouter>

    );

}

export default App;