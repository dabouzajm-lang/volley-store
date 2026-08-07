import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route
          path="/"
          element={<ItemListContainer />}
        />


        <Route
          path="/category/:categoryId"
          element={
            <h1 className="text-center mt-5">
              Categoría
            </h1>
          }
        />


      <Route
    path="/item/:itemId"
    element={<ItemDetailContainer />}
        />
        


        <Route
          path="/cart"
          element={
            <h1 className="text-center mt-5">
              Carrito
            </h1>
          }
        />


        <Route
          path="/checkout"
          element={
            <h1 className="text-center mt-5">
              Checkout
            </h1>
          }
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;