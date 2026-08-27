import { NavLink, Link } from "react-router-dom";
import ScrollLink from "../ScrollLink/ScrollLink";
import CartWidget from "../CartWidget/CartWidget";

import "./Navbar.css";


function Navbar() {

    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link";


    return (

        <nav className="navbar navbar-expand-lg navbar-dark">

            <div className="container">

                {/* Logo */}

                <Link
                    to="/"
                    className="navbar__brand"
                >

                    <span className="navbar__brand-mark">
                        V
                    </span>

                    <span className="navbar__brand-text">

                        <strong>
                            VOLLEY
                        </strong>

                        <small>
                            STORE
                        </small>

                    </span>

                </Link>


                {/* Mobile button */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Abrir navegación"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                {/* Navigation */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">

                            <NavLink
                                to="/"
                                className={getNavLinkClass}
                            >
                                Inicio
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/productos"
                                className={getNavLinkClass}
                            >
                                Productos
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/categoria/pelotas"
                                className={getNavLinkClass}
                            >
                                Pelotas
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/categoria/indumentaria"
                                className={getNavLinkClass}
                            >
                                Indumentaria
                            </NavLink>

                        </li>


                        <li className="nav-item">

                           <ScrollLink
                            sectionId="nosotros"
                            className="navbar__link navbar__scroll-link"
                            >
                            Nosotros
                            </ScrollLink>

                        </li>

                    </ul>


                    {/* Cart */}

                    <div className="navbar__cart">

                        <CartWidget />

                    </div>

                </div>

            </div>

        </nav>

    );

}


export default Navbar;