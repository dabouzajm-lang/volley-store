import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";


function Cart() {

    const {
        cart,
        removeItem,
        clearCart
    } = useContext(CartContext);


    // Carrito vacío
    if (cart.length === 0) {

        return (

            <div className="container text-center mt-5">

                <h2>
                    Tu carrito está vacío
                </h2>

                <Link
                    to="/"
                    className="btn btn-primary mt-3"
                >
                    Volver al catálogo
                </Link>

            </div>

        );

    }


    // Total general
    const total = cart.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );


    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                🛒 Carrito de compras
            </h2>


            {cart.map((item) => (

                <div
                    key={item.id}
                    className="card mb-3"
                >

                    <div className="card-body">

                        <div className="row align-items-center">


                            <div className="col-md-3">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid"
                                />

                            </div>


                            <div className="col-md-3">

                                <h5>
                                    {item.name}
                                </h5>

                            </div>


                            <div className="col-md-2">

                                <p>
                                    Cantidad: {item.quantity}
                                </p>

                            </div>


                            <div className="col-md-2">

                                <p>
                                    Precio: ${item.price}
                                </p>

                            </div>


                            <div className="col-md-2">

                                <p>
                                    Subtotal: $
                                    {item.price * item.quantity}
                                </p>


                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                        removeItem(item.id)
                                    }
                                >
                                    Eliminar
                                </button>

                            </div>


                        </div>

                    </div>

                </div>

            ))}


            <div className="text-end mt-4">

                <h3>
                    Total: ${total}
                </h3>

            </div>


            <div className="d-flex justify-content-between mt-4">

                <button
                    className="btn btn-outline-danger"
                    onClick={clearCart}
                >
                    Vaciar carrito
                </button>


                <Link
                    to="/checkout"
                    className="btn btn-success"
                >
                    Finalizar compra
                </Link>

            </div>


        </div>

    );

}


export default Cart;