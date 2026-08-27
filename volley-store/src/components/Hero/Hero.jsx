import { Link } from "react-router-dom";

import ScrollLink from "../ScrollLink/ScrollLink";

import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="container">

                <div className="row align-items-center min-vh-75">

                    <div className="col-lg-6">

                        <div className="hero__visual">

                            <img
                                src="/images/hero-volley.jpg"
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