import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="container">

                <div className="row align-items-center min-vh-75">

                    <div className="col-lg-6">

                        <span className="hero__eyebrow">
                            EQUIPAMIENTO PARA QUIENES VIVEN EL VÓLEY
                        </span>

                        <h1 className="hero__title">

                            Llevá tu juego
                            <span> al siguiente nivel.</span>

                        </h1>

                        <p className="hero__description">

                            Descubrí equipamiento, indumentaria y accesorios
                            seleccionados para jugadores que buscan mejorar
                            dentro y fuera de la cancha.

                        </p>

                        <div className="hero__actions">

                            <Link
                                to="/productos"
                                className="hero__button hero__button--primary"
                                >
                                Ver productos
                            </Link>

                            <Link
                                to="/#nosotros"
                                className="hero__button hero__button--secondary"
                            >
                                Conocé nuestra historia
                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="hero__visual">

                            <div className="hero__circle"></div>

                            <div className="hero__ball">
                                🏐
                            </div>

                            <div className="hero__badge">

                                <strong>
                                    +100
                                </strong>

                                <span>
                                    productos
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;