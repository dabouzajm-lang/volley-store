import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { FaShoppingBag } from "react-icons/fa";

import "./CartWidget.css";


function CartWidget() {

    const { cart } = useContext(CartContext);


    const totalQuantity = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );


    return (

        <Link
            to="/cart"
            className="cart-widget"
            aria-label="Ver carrito"
        >

            <span className="cart-widget__icon">
                 <FaShoppingBag />
            </span>


            <span className="cart-widget__label">
                Carrito
            </span>


            {totalQuantity > 0 && (

                <span className="cart-widget__badge">
                    {totalQuantity}
                </span>

            )}

        </Link>

    );

}


export default CartWidget;