import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";


function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link
                    to="/"
                    className="navbar-brand"
                >
                    Volley Store
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <div className="navbar-nav">

                        <Link
                            to="/"
                            className="nav-link"
                        >
                            Todos
                        </Link>


                        <Link
                            to="/categoria/pelotas"
                            className="nav-link"
                        >
                            Pelotas
                        </Link>


                        <Link
                            to="/categoria/accesorios"
                            className="nav-link"
                        >
                            Accesorios
                        </Link>


                        <Link
                            to="/categoria/indumentaria"
                            className="nav-link"
                        >
                            Indumentaria
                        </Link>


                        <Link
                            to="/categoria/calzado"
                            className="nav-link"
                        >
                            Calzado
                        </Link>

                    </div>


                    <div className="ms-auto">

                        <CartWidget />

                    </div>

                </div>

            </div>

        </nav>

    );

}


export default Navbar;