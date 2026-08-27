import {
    FaVolleyballBall,
    FaBolt,
    FaUsers
} from "react-icons/fa";

import "./AboutSection.css";


function AboutSection() {

    const baseUrl = import.meta.env.BASE_URL;


    return (

        <section
            className="about"
            id="nosotros"
        >

            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Imagen */}

                    <div className="col-lg-6">

                        <div className="about__image">

                            <img
                                src={`${baseUrl}images/about-volley.jpg`}
                                alt="Equipo de vóley reunido en cancha"
                            />


                            <div className="about__image-badge">

                                <strong>
                                    Volley
                                </strong>

                                <span>
                                    Store
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Contenido */}

                    <div className="col-lg-6 animate-fade-up">

                        <div className="about__content">

                            <span className="section-eyebrow">
                                ¿QUIÉNES SOMOS?
                            </span>


                            <h2>
                                Nacimos de la pasión por el vóley.
                            </h2>


                            <p className="about__lead">

                                Volley Store nació con una idea simple:
                                crear un espacio pensado especialmente
                                para quienes viven este deporte.

                            </p>


                            <p>

                                Somos una tienda especializada en
                                equipamiento, indumentaria y accesorios
                                de vóley. Seleccionamos cada producto
                                buscando combinar rendimiento, calidad
                                y diseño.

                            </p>


                            <p>

                                Nuestro objetivo es acompañar a jugadores,
                                entrenadores y equipos dentro y fuera
                                de la cancha.

                            </p>


                            <div className="about__values">

                                <div className="about__value">

                                    <div className="about__value-icon">

                                        <FaVolleyballBall />

                                    </div>


                                    <div>

                                        <strong>
                                            Pasión por el deporte
                                        </strong>

                                        <span>

                                            Conocemos el juego porque
                                            también lo vivimos.

                                        </span>

                                    </div>

                                </div>


                                <div className="about__value">

                                    <div className="about__value-icon">

                                        <FaBolt />

                                    </div>


                                    <div>

                                        <strong>
                                            Rendimiento
                                        </strong>

                                        <span>

                                            Productos pensados para
                                            acompañar cada punto.

                                        </span>

                                    </div>

                                </div>


                                <div className="about__value">

                                    <div className="about__value-icon">

                                        <FaUsers />

                                    </div>


                                    <div>

                                        <strong>
                                            Comunidad
                                        </strong>

                                        <span>

                                            Queremos crecer junto a quienes
                                            hacen grande al vóley.

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}


export default AboutSection;