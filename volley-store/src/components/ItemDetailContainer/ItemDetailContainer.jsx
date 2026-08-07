import { useParams } from "react-router-dom";

import products from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {

    const { itemId } = useParams();

    const product = products.find(
        (prod) => prod.id === Number(itemId)
    );

    return (
        <div className="container mt-5">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;