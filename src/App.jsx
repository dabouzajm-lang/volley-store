import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Catálogo */}
                <Route
                    path="/"
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