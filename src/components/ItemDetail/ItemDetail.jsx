import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ product }) {

    const { addItem } = useContext(CartContext);

    const [added, setAdded] = useState(false);

    const [error, setError] = useState("");


    if (!product) {

        return (

            <h2 className="text-center">
                Producto no encontrado
            </h2>

        );

    }


    const handleAdd = (quantity) => {

        const addedSuccessfully = addItem(
            product,
            quantity
        );


        if (addedSuccessfully) {

            setError("");

            setAdded(true);

        } else {

            setError(
                "No hay suficiente stock disponible."
            );

        }

    };


    return (

        <div className="card">

            <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
            />


            <div className="card-body">

                <h2>
                    {product.name}
                </h2>


                <p>
                    Precio: ${product.price}
                </p>


                <p>
                    Stock disponible: {product.stock}
                </p>


                <p>
                    Categoría: {product.category}
                </p>


                {!added ? (

                    <>

                        {error && (

                            <p className="text-danger">
                                {error}
                            </p>

                        )}


                        <ItemCount
                            stock={product.stock}
                            initial={1}
                            onAdd={handleAdd}
                        />

                    </>

                ) : (

                    <div className="mt-4">

                        <p className="text-success">
                            Producto agregado al carrito.
                        </p>


                        <div className="d-flex gap-2">

                            <Link
                                to="/cart"
                                className="btn btn-primary"
                            >
                                Ver carrito
                            </Link>


                            <Link
                                to="/"
                                className="btn btn-secondary"
                            >
                                Seguir comprando
                            </Link>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

}


export default ItemDetail;