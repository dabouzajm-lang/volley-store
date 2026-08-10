import { useContext } from "react";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import { CartContext } from "../../context/CartContext";


function CartWidget() {

    const { getTotalQuantity } = useContext(CartContext);


    const totalQuantity = getTotalQuantity();


    return (

        <Link
            to="/cart"
            className="btn btn-warning"
        >

            <FaShoppingCart />

            <span className="ms-2">
                {totalQuantity}
            </span>

        </Link>

    );

}


export default CartWidget;