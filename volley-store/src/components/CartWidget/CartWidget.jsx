import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";


function CartWidget(){

    return (

        <Link 
            to="/cart"
            className="btn btn-warning"
        >

            <FaShoppingCart />

            <span className="ms-2">
                0
            </span>

        </Link>

    )

}


export default CartWidget;