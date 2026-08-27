import { Link } from "react-router-dom";

import ScrollLink from "../ScrollLink/ScrollLink";

import "./Footer.css";


function Footer() {

    const currentYear = new Date().getFullYear();


    return (

        <footer className="footer">

            <div className="container">

                {/* Main footer */}

                <div className="row g-5 footer__main">

                    {/* Brand */}

                    <div className="col-lg-4">

                        <Link
                            to="/"
                            className="footer__brand"
                        >

                            <span className="footer__brand-mark">
                                V
                            </span>

                            <span className="footer__brand-text">

                                <strong>
                                    VOLLEY
                                </strong>

                                <small>
                                    STORE
                                </small>

                            </span>

                        </Link>


                        <p className="footer__description">

                            Equipamiento, indumentaria y accesorios
                            para quienes viven el vóley dentro y
                            fuera de la cancha.

                        </p>


                        <div className="footer__socials">

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                Facebook
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                YouTube
                            </a>

                        </div>

                    </div>


                    {/* Navigation */}

                    <div className="col-6 col-lg-2">

                        <h3 className="footer__title">
                            Navegación
                        </h3>

                        <ul className="footer__links">

                            <li>
                                <Link to="/">
                                    Inicio
                                </Link>
                            </li>

                            <li>
                                <Link to="/productos">
                                    Productos
                                </Link>
                            </li>

                            <li>
                                <ScrollLink
                                sectionId="nosotros"
                                className="footer__scroll-link"
                                >
                                Nosotros
                                </ScrollLink>
                            </li>

                            <li>
                                <Link to="/cart">
                                    Carrito
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Categories */}

                    <div className="col-6 col-lg-2">

                        <h3 className="footer__title">
                            Categorías
                        </h3>

                        <ul className="footer__links">

                            <li>
                                <Link to="/categoria/pelotas">
                                    Pelotas
                                </Link>
                            </li>

                            <li>
                                <Link to="/categoria/indumentaria">
                                    Indumentaria
                                </Link>
                            </li>

                            <li>
                                <Link to="/categoria/accesorios">
                                    Accesorios
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}

                    <div className="col-lg-4">

                        <h3 className="footer__title">
                            ¿Necesitás ayuda?
                        </h3>

                        <p className="footer__contact-text">

                            Estamos para ayudarte a encontrar
                            el equipamiento adecuado.

                        </p>


                        <div className="footer__contact">

                            <a href="mailto:hola@volleystore.com">
                                hola@volleystore.com
                            </a>

                            <span>
                                Lunes a viernes · 9 a 18 hs.
                            </span>

                        </div>


                        <Link
                            to="/productos"
                            className="footer__button"
                        >
                            Explorar productos
                        </Link>

                    </div>

                </div>


                {/* Bottom */}

                <div className="footer__bottom">

                    <p>
                        © {currentYear} Volley Store.
                        Todos los derechos reservados.
                    </p>

                    <p>
                        Hecho con React + Firebase
                    </p>

                </div>

            </div>

        </footer>

    );

}


export default Footer;