import { Link } from "react-router-dom";

import "./CTA.css";

function CTA() {

    return (

        <section className="cta">

            <div className="container">

                <div className="cta__content">

                    <span className="cta__eyebrow">
                        TU PRÓXIMO DESAFÍO EMPIEZA ACÁ
                    </span>

                    <h2>
                        Preparado para
                        <span> jugar mejor?</span>
                    </h2>

                    <p>
                        Explorá nuestro catálogo y encontrá el
                        equipamiento que necesitás para llevar
                        tu juego al siguiente nivel.
                    </p>

                    <Link
                        to="/productos"
                        className="cta__button"
                    >
                        Explorar productos
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default CTA;