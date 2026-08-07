import ItemList from "../ItemList/ItemList";

import products from "../../data/products";


function ItemListContainer(){

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">
                Productos destacados
            </h2>


            <ItemList products={products}/>


        </div>

    )

}


export default ItemListContainer;