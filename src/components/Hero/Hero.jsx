import { Link } from "react-router-dom";

import ScrollLink from "../ScrollLink/ScrollLink";

import "./Hero.css";


function Hero() {

    const baseUrl = import.meta.env.BASE_URL;


    return (

        <section className="hero">

            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Contenido */}

                    <div className="col-lg-6 animate-fade-up">

                        <div className="hero__content">

                            <span className="hero__eyebrow">
                                VOLLEY STORE
                            </span>


                            <h1 className="hero__title">

                                Viví el vóley.

                                <span>
                                    Jugá tu mejor versión.
                                </span>

                            </h1>


                            <p className="hero__description">

                                Equipamiento, indumentaria y accesorios
                                seleccionados para quienes viven el vóley
                                dentro y fuera de la cancha.

                            </p>


                            <div className="hero__actions">

                                <Link
                                    to="/productos"
                                    className="hero__button hero__button--primary"
                                >
                                    Explorar productos
                                </Link>


                                <ScrollLink
                                    sectionId="nosotros"
                                    className="hero__button hero__button--secondary"
                                >
                                    Conocé nuestra historia
                                </ScrollLink>

                            </div>

                        </div>

                    </div>


                    {/* Imagen */}

                    <div className="col-lg-6">

                        <div className="hero__visual">

                            <img
                                src={`${baseUrl}images/hero-volley.jpg`}
                                alt="Jugador de vóley en acción"
                                className="hero__image"
                            />


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