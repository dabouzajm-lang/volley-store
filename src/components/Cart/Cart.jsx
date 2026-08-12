import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";


function Cart() {

    const {
        cart,
        removeItem,
        clearCart
    } = useContext(CartContext);


    const getTotal = () => {

        return cart.reduce(

            (total, item) =>
                total + item.price * item.quantity,

            0

        );

    };


    // Carrito vacío
    if (cart.length === 0) {

        return (

            <div className="container mt-5 text-center">

                <h2>
                    Tu carrito está vacío
                </h2>


                <p className="mt-3">
                    Agregá productos para comenzar tu compra.
                </p>


                <Link
                    to="/"
                    className="btn btn-primary mt-3"
                >
                    Ver productos
                </Link>

            </div>

        );

    }


    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Tu carrito
            </h2>


            {cart.map((item) => (

                <div
                    key={item.id}
                    className="card mb-3"
                >

                    <div className="row g-0">

                        <div className="col-md-3">

                            <img
                                src={item.image}
                                className="img-fluid rounded-start"
                                alt={item.name}
                            />

                        </div>


                        <div className="col-md-9">

                            <div className="card-body">

                                <h4 className="card-title">
                                    {item.name}
                                </h4>


                                <p>
                                    Precio unitario:
                                    {" "}
                                    ${item.price}
                                </p>


                                <p>
                                    Cantidad:
                                    {" "}
                                    {item.quantity}
                                </p>


                                <p>
                                    Subtotal:
                                    {" "}
                                    <strong>
                                        ${item.price * item.quantity}
                                    </strong>
                                </p>


                                <button
                                    className="btn btn-danger"
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


            <div className="card mt-4">

                <div className="card-body">

                    <h3>
                        Total: ${getTotal()}
                    </h3>


                    <div className="d-flex gap-2 mt-3">

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

            </div>

        </div>

    );

}


export default Cart;