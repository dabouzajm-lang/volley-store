import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";


function NavBar() {


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">


                <Link 
                    className="navbar-brand"
                    to="/"
                >
                    🏐 Volley Store
                </Link>



                <div>


                    <Link 
                        className="btn btn-outline-light me-2"
                        to="/category/pelotas"
                    >
                        Pelotas
                    </Link>


                    <Link 
                        className="btn btn-outline-light me-2"
                        to="/category/indumentaria"
                    >
                        Indumentaria
                    </Link>


                    <Link 
                        className="btn btn-outline-light"
                        to="/category/accesorios"
                    >
                        Accesorios
                    </Link>


                </div>



                <CartWidget />


            </div>

        </nav>

    )

}


export default NavBar;