import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Cart from "./components/Cart/Cart";

import Checkout from "./components/Checkout/Checkout";

import NotFound from "./components/NotFound/NotFound";


function App() {

    return (

        <HashRouter>

            <Navbar />

            <ScrollToTop />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />


                <Route
                    path="/productos"
                    element={<ItemListContainer />}
                />


                <Route
                    path="/categoria/:categoryId"
                    element={<ItemListContainer />}
                />


                <Route
                    path="/item/:itemId"
                    element={<ItemDetailContainer />}
                />


                <Route
                    path="/cart"
                    element={<Cart />}
                />


                <Route
                    path="/checkout"
                    element={<Checkout />}
                />


                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </HashRouter>

    );

}


export default App;